import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@alfabit-alura/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Input',
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    disabled: false,
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
