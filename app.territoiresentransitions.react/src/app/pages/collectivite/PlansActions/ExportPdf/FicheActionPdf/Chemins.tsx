import { TAxeRow } from '@/app/types/alias';
import { ArrowRightIcon } from '@/app/ui/export-pdf/assets/icons';
import { Paragraph, Stack } from '@/app/ui/export-pdf/components';
import { preset } from '@/ui';
import { generateTitle } from '../../FicheAction/data/utils';

const { colors } = preset.theme.extend;

type CheminsProps = {
  chemins: TAxeRow[][];
};

const Chemins = ({ chemins }: CheminsProps) => {
  return (
    <Stack gap={3}>
      {chemins.length > 0 ? (
        chemins.map((emplacement, index) => (
          <Stack key={index} gap={1} direction="row" className="flex-wrap">
            {emplacement.map((elt, i) => (
              <Stack
                key={i}
                gap="px"
                direction="row"
                className="flex-wrap items-end"
              >
                <Paragraph className="text-grey-6 text-[0.7rem] leading-5">
                  {generateTitle(elt.nom)}
                </Paragraph>
                {i !== emplacement.length - 1 && (
                  <ArrowRightIcon fill={colors.grey[6]} />
                )}
              </Stack>
            ))}
          </Stack>
        ))
      ) : (
        <Paragraph className="text-grey-6 text-[0.7rem] leading-5">
          Fiche non classée
        </Paragraph>
      )}
    </Stack>
  );
};

export default Chemins;
