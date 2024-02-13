import {Meta, StoryObj} from '@storybook/react';
import {Card} from './Card';
import {Button} from '@design-system/Button';
import {Badge} from '@design-system/Badge';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis varius metus sed aliquet. Cras pharetra lectus et est malesuada, sed viverra lectus interdum.';

/** Carte par défaut, sans aucune props renseignée. */
export const Default: Story = {
  args: {
    children: content,
  },
};

/** Carte sélectionnée, avec hovering effect. */
export const WithSelect: Story = {
  args: {
    children: content,
    isSelected: true,
  },
};

/** Carte clickable. */
export const WithOnClick: Story = {
  args: {
    children: content,
    onClick: () => alert('onClick'),
  },
};

/** Carte avec en-tête au format composant. */
export const WithHeader: Story = {
  args: {
    children: content,
    header: (
      <div className="flex justify-between">
        <div>Ceci est un titre</div>
        <div className="text-new-1">Info</div>
      </div>
    ),
  },
};

/** Carte avec footer au format composant. */
export const WithFooter: Story = {
  args: {
    children: content,
    footer: (
      <div className="flex justify-between items-center gap-4">
        <Badge title="Un badge" size="sm" state="success" />
        <div className="flex gap-4">
          <Button variant="outlined" size="xs">
            Annuler
          </Button>
          <Button variant="primary" size="xs">
            Valider
          </Button>
        </div>
      </div>
    ),
  },
};

/** Carte avec titre, footer, et méthode onClick. */
export const CompleteCard: Story = {
  args: {
    children: content,
    header: (
      <div className="flex justify-between">
        <div>Ceci est un titre</div>
        <div className="text-new-1">Info</div>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center gap-4">
        <Badge title="Un badge" size="sm" state="success" />
        <div className="flex gap-4">
          <Button variant="outlined" size="xs" onClick={() => {}}>
            Annuler
          </Button>
          <Button variant="primary" size="xs" onClick={() => {}}>
            Valider
          </Button>
        </div>
      </div>
    ),
    onClick: () => alert('onClick'),
  },
};
