import {Meta, StoryObj} from '@storybook/react';

import {FormSection} from './FormSection';
import {Field} from '@design-system/Field';
import {Input} from '@design-system/Input';

const meta: Meta<typeof FormSection> = {
  component: FormSection,
  render: args => {
    return (
      <div className="w-full max-w-lg p-8">
        <FormSection title="Titre de la section" {...args}>
          {args.children}
        </FormSection>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FormSection>;

export const Default: Story = {};

export const AvecDescription: Story = {
  args: {
    description: 'Description de la section',
  },
};

export const AvecIcone: Story = {
  args: {
    description: 'Description de la section',
    icon: 'leaf-fill',
  },
};

export const AvecFields: Story = {
  args: {
    description: 'Description de la section',
    icon: 'leaf-fill',
    children: (
      <>
        <Field title="Titre du plan" className="md:col-span-2">
          <Input type="text" />
        </Field>
        <Field title="Statut">
          <Input type="date" />
        </Field>
        <Field title="Niveaude priorité">
          <Input type="date" />
        </Field>
      </>
    ),
  },
};

export const PlusieursSections: Story = {
  render: () => {
    return (
      <div className="w-full max-w-lg p-8 flex flex-col gap-10">
        <FormSection
          icon="leaf-fill"
          title="Titre de la section"
          description="Description de la section"
        >
          <Field title="Titre du plan" className="md:col-span-2">
            <Input type="text" />
          </Field>
          <Field title="Statut">
            <Input type="date" />
          </Field>
          <Field title="Niveaude priorité">
            <Input type="date" />
          </Field>
        </FormSection>
        <FormSection title="Le titre d'une autre section">
          <Field title="Titre du plan" className="md:col-span-2">
            <Input type="text" />
          </Field>
        </FormSection>
      </div>
    );
  },
};
