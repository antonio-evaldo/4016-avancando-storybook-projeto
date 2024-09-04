import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@alfabit-alura-teste/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    disabled: false,
    label: '',
    id: '',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true,
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    disabled: true,
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    ...Primary.args,
    label: 'Label',
    id: '1',
  },
};

export const PrimaryDisabledWithLabel: Story = {
  args: {
    ...Primary.args,
    label: 'Label 2',
    id: '2',
    disabled: true,
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label 3',
    id: '3',
  },
};

export const MultilineDisabledWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label 4',
    id: '4',
    disabled: true,
  },
};
