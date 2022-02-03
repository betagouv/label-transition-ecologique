export function InvitationGenerateButton(props: {onClick: () => void}) {
  return (
    <button
      className="fr-btn fr-btn--secondary h-6 ml-4"
      onClick={props.onClick}
    >
      Générer un nouveau lien
    </button>
  );
}
