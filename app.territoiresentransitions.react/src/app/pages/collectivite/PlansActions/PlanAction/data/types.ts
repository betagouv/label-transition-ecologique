import {TAxeRow, TFlatAxe, TPlanActionProfondeur} from 'types/alias';
import {FicheAction} from '../../FicheAction/data/types';

/** Pour typer la RPC plan_action utilisée pour afficher la page plan action */
export type PlanAction = {
  axe: TAxeRow;
  fiches: FicheAction[] | null;
  enfants?: PlanAction[];
};

export type FlatAxe = Omit<TFlatAxe, 'fiches' | 'ancestors'> & {
  fiches: number[] | null;
  ancestors: number[];
};

export type PlanNode = Omit<FlatAxe, 'ancestors' | 'sort_path'> & {
  parent: number | null;
};

export type TProfondeurPlan = TPlanActionProfondeur & {
  plan: TProfondeurAxe;
};

export type TProfondeurAxe = {
  axe: TAxeRow;
  profondeur: number;
  enfants: TProfondeurAxe[];
};
