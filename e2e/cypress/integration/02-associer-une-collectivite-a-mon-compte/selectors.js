export const LocalSelectors = {
  'Associer une collectivité à mon compte': {
    selector: '[data-test=btn-select-collectivite]'
  },
  'dialogue Associer une collectivité à mon compte': {
    selector: '[data-test=collectivite-picker]',
    children: {
      'Nom de la collectivité': '[role=combobox] input',
      'vous ne trouvez pas la collectivité que vous cherchez':
        '[data-test=no-selection-msg]',
      'vous souhaitez rejoindre': '[data-test=confirm-selection-msg]',
    },
  },
};
