import { supabase } from "../supabase.ts";
import { Database } from "../database.types.ts";

export async function labellisationSubmitDemande(
  collectivite_id: number,
  referentiel: Database["public"]["Enums"]["referentiel"],
  sujet: Database["labellisation"]["Enums"]["sujet_demande"],
  etoiles?: Database["labellisation"]["Enums"]["etoile"]
): Promise<Database["labellisation"]["Tables"]["demande"]["Row"]> {
  const { data } = await supabase
    // @ts-ignore
    .rpc("labellisation_submit_demande", { collectivite_id, referentiel, sujet, etoiles })
    .single();
  if (!data) {
    throw `La RPC 'labellisation_submit_demande' devrait renvoyer une demande d'audit.`;
  }

  // @ts-ignore
  return data;
}
