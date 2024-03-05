import {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Tabs} from './Tabs';
import {Tab} from './Tab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  args: {
    onChange: action('onChange'),
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const OngletParDefaut: Story = {
  args: {
    children: [
      <Tab label="Onglet 1">contenu onglet 1</Tab>,
      <Tab label="Onglet 2">contenu onglet 2</Tab>,
      <Tab label="Onglet 3">contenu onglet 3</Tab>,
    ],
  },
};

export const Onglet2: Story = {
  args: {
    defaultActiveTab: 1,
    children: [
      <Tab label="Onglet 1">contenu onglet 1</Tab>,
      <Tab label="Onglet 2">contenu onglet 2</Tab>,
      <Tab label="Onglet 3">contenu onglet 3</Tab>,
    ],
  },
};

export const AvecIcones: Story = {
  args: {
    defaultActiveTab: 1,
    children: [
      <Tab label="Onglet 1" icon="lock-fill">
        contenu onglet 1
      </Tab>,
      <Tab label="Onglet 2" icon="user-line">
        contenu onglet 2
      </Tab>,
      <Tab label="Onglet 3" icon="chat-1-line">
        contenu onglet 3
      </Tab>,
    ],
  },
};

export const TailleSM: Story = {
  args: {
    defaultActiveTab: 1,
    size: 'sm',
    children: AvecIcones.args.children,
  },
};

export const TailleXS: Story = {
  args: {
    defaultActiveTab: 1,
    size: 'xs',
    children: AvecIcones.args.children,
  },
};

export const AvecStyles: Story = {
  args: {
    defaultActiveTab: 2,
    tabsListClassName: 'bg-secondary-1 mb-0 rounded-none',
    tabPanelClassName: 'border-2 border-secondary-1 p-4',
    children: AvecIcones.args.children,
  },
};
