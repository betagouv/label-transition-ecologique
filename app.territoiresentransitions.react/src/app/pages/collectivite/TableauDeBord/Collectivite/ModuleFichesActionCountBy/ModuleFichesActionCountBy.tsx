import { ModuleFicheActionCountBySelect } from '@/api/plan-actions/dashboards/collectivite-dashboard/domain/module.schema';
import BadgeStatut from '@/app/app/pages/collectivite/PlansActions/components/BadgeStatut';
import { statutToColor } from '@/app/app/pages/collectivite/PlansActions/FicheAction/utils';
import ModalFichesActionCountByEdition, {
  countByPropertyOptions,
} from '@/app/app/pages/collectivite/TableauDeBord/Collectivite/ModuleFichesActionCountBy/ModalFichesActionCountByEdition';
import { useFichesActionCountBy } from '@/app/app/pages/collectivite/TableauDeBord/Collectivite/ModuleFichesActionCountBy/useFichesActionCountBy';
import { makeFichesActionUrlWithParams } from '@/app/app/pages/collectivite/TableauDeBord/Collectivite/ModuleFichesActionCountBy/utils';
import Module, {
  ModuleDisplay,
} from '@/app/app/pages/collectivite/TableauDeBord/components/Module';
import { TDBViewParam } from '@/app/app/paths';
import { useCurrentCollectivite } from '@/app/core-logic/hooks/useCurrentCollectivite';
import PictoDocument from '@/app/ui/pictogrammes/PictoDocument';
import { Statut } from '@/domain/plans/fiches';
import { preset, useEventTracker } from '@/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { moduleDelete } from '../../../../../../../../packages/api/src/plan-actions/dashboards/collectivite-dashboard';
import { supabaseClient } from '../../../../../../../../packages/api/src/utils/supabase-client';
import { ReactECharts } from '../../../../../../ui/charts/echarts';
import { getCollectiviteModulesQueryKey } from '../useCollectiviteModulesFetch';

type Props = {
  view: TDBViewParam;
  module: ModuleFicheActionCountBySelect;
};

/** Module pour afficher l'avancement des fiches action */
const ModuleFichesActionCountBy = ({ module }: Props) => {
  const { colors, fontSize, fontWeight } = preset.theme.extend;
  const collectivite = useCurrentCollectivite();

  const router = useRouter();
  const queryClient = useQueryClient();

  const collectiviteId = collectivite?.collectivite_id;

  const trackEvent = useEventTracker('app/tdb/collectivite');

  const [display, setDisplay] = useState<ModuleDisplay>('row');

  const filtres = module.options.filtre;
  const countByProperty = module.options.countByProperty;

  const { data: countByResponse, isLoading } = useFichesActionCountBy(
    countByProperty,
    Object.fromEntries(
      // Map les champs entre le type API et celui Backend
      Object.entries({
        cibles: filtres.cibles?.join(','),
        partenaire_tag_ids: filtres.partenaireIds?.join(','),
        pilote_tag_ids: filtres.personnePiloteIds?.join(','),
        pilote_user_ids: filtres.utilisateurPiloteIds?.join(','),
        service_tag_ids: filtres.servicePiloteIds?.join(','),
        plan_ids: filtres.planActionIds?.join(','),
        // Enlève les entrées avec valeur undefined
      }).filter(([_, value]) => value !== undefined && value.length > 0)
    )
  );

  const fichesCount = countByResponse?.total || 0;

  if (!collectiviteId) {
    return null;
  }

  return (
    <Module
      title={module.titre}
      filtre={module.options.filtre}
      symbole={<PictoDocument className="w-16 h-16" />}
      onSettingsClick={() =>
        trackEvent('tdb_modifier_filtres_avancement_actions', {
          collectivite_id: module.collectiviteId,
        })
      }
      onDeleteConfirmed={
        !module.defaultKey
          ? async () => {
              await moduleDelete({
                dbClient: supabaseClient,
                moduleId: module.id,
              });

              queryClient.invalidateQueries([
                getCollectiviteModulesQueryKey(collectiviteId),
              ]);
            }
          : undefined
      }
      editModal={
        collectivite?.niveau_acces === 'admin'
          ? (openState) => (
              <ModalFichesActionCountByEdition
                module={module}
                openState={openState}
                keysToInvalidate={[
                  getCollectiviteModulesQueryKey(collectiviteId),
                ]}
              />
            )
          : undefined
      }
      isLoading={isLoading}
      isEmpty={fichesCount === 0}
      className="!col-span-full xl:!col-span-4"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <ReactECharts
          heightRatio={0.75}
          onEvents={{
            click: ({ event }) => {
              // Event type is not typed in the library
              const dataValue = (event as any).data.name;
              if (dataValue !== 'Sans statut') {
                router.push(
                  makeFichesActionUrlWithParams(
                    collectiviteId,
                    filtres,
                    dataValue as Statut
                  )
                );
              }
            },
          }}
          option={{
            tooltip: {
              trigger: 'item',
              valueFormatter: (value) => {
                if (typeof value === 'number') {
                  return `${value} (${((value / fichesCount) * 100).toFixed(
                    0
                  )}%)`;
                }
                return '';
              },
            },
            legend: {
              show: false,
            },
            title: {
              left: 'center',
              top: 'center',
              text: `${fichesCount}`,
              subtext: 'actions',
              itemGap: 0,
              textStyle: {
                color: colors.primary['9'],
                fontWeight: parseInt(fontWeight['bold']),
                fontSize: fontSize['2xl'],
              },
              subtextStyle: {
                color: colors.grey['6'],
                fontWeight: parseInt(fontWeight['normal']),
                fontSize: fontSize['lg'],
              },
            },
            series: [
              {
                name:
                  countByPropertyOptions.find(
                    (option) => option.value === module.options.countByProperty
                  )?.label || module.options.countByProperty,
                type: 'pie',
                radius: ['40%', '80%'],
                avoidLabelOverlap: false,
                labelLine: {
                  show: false,
                },
                label: {
                  show: true,
                  position: 'inside',
                  formatter: function (d) {
                    // @ts-expect-error data is typed generically in the library
                    const value = d?.data?.value as number;
                    if (value) {
                      return `${value}`;
                    }
                    return '';
                  },
                },
                data: countByResponse?.countByResult
                  ? Object.entries(countByResponse.countByResult).map(
                      ([statut, { count, valeur }]) => ({
                        name: statut,
                        value: count,
                        itemStyle:
                          countByProperty === 'statut'
                            ? {
                                color: statutToColor[valeur as Statut],
                              }
                            : undefined,
                      })
                    )
                  : [],
              },
            ],
          }}
        />
      </div>
    </Module>
  );
};

export default ModuleFichesActionCountBy;

type CardProps = {
  statut: Statut | 'Sans statut';
  count: number;
};

const Card = ({ statut, count }: CardProps) => (
  <div className="flex flex-col items-center shrink-0 gap-2 p-2 border border-primary-2 rounded-xl">
    <span className="text-3xl text-primary-9 font-bold">{count}</span>
    <BadgeStatut statut={statut} size="sm" />
  </div>
);
