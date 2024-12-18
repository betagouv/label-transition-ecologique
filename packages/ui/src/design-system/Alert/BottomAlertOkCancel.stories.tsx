import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import BottomAlertOkCancel from './BottomAlertOkCancel';

const meta: Meta<typeof BottomAlertOkCancel> = {
  component: BottomAlertOkCancel,
};

export default meta;

type Story = StoryObj<typeof BottomAlertOkCancel>;

export const Valider: Story = {
  args: {
    title: 'Confirmer la suppression ?',
    btnOKProps: {
      onClick: action('onOK'),
    },
  },
};

export const AnnulerValider: Story = {
  args: {
    title: 'Confirmer la suppression ?',
    btnOKProps: {
      onClick: action('onOK'),
    },
    btnCancelProps: {
      onClick: action('onCancel'),
    },
  },
};

export const CustomLabels: Story = {
  args: {
    title: 'Confirmer la suppression ?',
    btnOKProps: {
      children: 'OK',
      onClick: action('onOK'),
    },
    btnCancelProps: {
      children: 'Dismiss',
      onClick: action('onCancel'),
    },
  },
};
