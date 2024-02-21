import {useState} from 'react';
import classNames from 'classnames';

import {
  Checkbox,
  Field,
  Input,
  Modal,
  ModalFooterOKCancel,
  Select,
} from '@tet/ui';

import BadgeStatut from '../../components/BadgeStatut';
import {FicheResume} from '../data/types';
import {
  ficheActionNiveauPrioriteOptions,
  ficheActionStatutOptions,
} from '../data/options/listesStatiques';
import {TFicheActionNiveauxPriorite, TFicheActionStatuts} from 'types/alias';
import BadgePriorite from '../../components/BadgePriorite';
import {useUpdateFicheResume} from 'app/pages/collectivite/PlansActions/FicheAction/data/useUpdateFicheResume';
// import PersonnesPilotes from 'app/pages/collectivite/PlansActions/FicheAction/dropdowns/PersonnesPilotes';
// import PlansDropdown from 'app/pages/collectivite/PlansActions/FicheAction/dropdowns/PlansDropdown';

type Props = {
  initialFiche: FicheResume;
  children: JSX.Element;
  axeId?: number;
};

/**
 * Modale pour modifier une fiche action.
 */
const ModifierFicheModale = ({initialFiche, axeId, children}: Props) => {
  const {mutate: updateFiche} = useUpdateFicheResume(axeId);

  const [fiche, setFiche] = useState(initialFiche);

  return (
    <Modal
      dataTest="ModifierFicheModale"
      size="md"
      onClose={() => setFiche(initialFiche)}
      title="Modifier la fiche action"
      render={({close}) => {
        return (
          <div className="flex flex-col gap-6">
            <Field title="Nom de la fiche action">
              <Input
                data-test="FicheNomInput"
                type="text"
                value={fiche.titre ?? undefined}
                onChange={e => setFiche({...fiche, titre: e.target.value})}
                placeholder="Sans titre"
                autoFocus
              />
            </Field>
            {/* <Field
              title="Plan associé"
              state="info"
              message="Cette fiche peut être associée à plusieurs plans."
            >
              <PlansDropdown
                plans={fiche.plans as any}
                onChange={plans => setFiche({...fiche, plans})}
              />
            </Field> */}
            <div className="grid grid-cols-1 gap-6">
              <Field title="Statut">
                <Select
                  data-test="Statut"
                  values={fiche.statut ?? undefined}
                  options={ficheActionStatutOptions}
                  onChange={statut =>
                    setFiche({...fiche, statut: statut as TFicheActionStatuts})
                  }
                  customItem={item => (
                    <BadgeStatut statut={item.value as TFicheActionStatuts} />
                  )}
                />
              </Field>
              <Field title="Niveau de priorité">
                <Select
                  values={fiche.niveau_priorite ?? undefined}
                  options={ficheActionNiveauPrioriteOptions}
                  onChange={priorite =>
                    setFiche({
                      ...fiche,
                      niveau_priorite: priorite as TFicheActionNiveauxPriorite,
                    })
                  }
                  customItem={item => (
                    <BadgePriorite
                      priorite={item.value as TFicheActionNiveauxPriorite}
                    />
                  )}
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* <Field title="Personne pilote">
                <PersonnesPilotes
                  personnes={fiche.pilotes}
                  onChange={pilotes => {
                    setFiche({...fiche, pilotes});
                  }}
                />
              </Field> */}
              <Field title="Date de fin prévisionnelle">
                <Input
                  type="date"
                  value={fiche.date_fin_provisoire ?? ''}
                  onChange={e =>
                    setFiche({
                      ...fiche,
                      date_fin_provisoire:
                        e.target.value.length !== 0 ? e.target.value : null,
                    })
                  }
                  disabled={fiche.amelioration_continue ?? false}
                />
                <div className="mt-2">
                  <Checkbox
                    label="Action en amélioration continue"
                    message="Sans date de fin"
                    onChange={() => {
                      setFiche({
                        ...fiche,
                        amelioration_continue: !fiche.amelioration_continue,
                        date_fin_provisoire: null,
                      });
                    }}
                    checked={fiche.amelioration_continue ?? false}
                  />
                </div>
              </Field>
            </div>
            <ModalFooterOKCancel
              btnOKProps={{
                onClick: () => {
                  updateFiche(fiche);
                  close();
                },
              }}
              btnCancelProps={{onClick: close}}
            />
          </div>
        );
      }}
    >
      {children}
    </Modal>
  );
};

export default ModifierFicheModale;
