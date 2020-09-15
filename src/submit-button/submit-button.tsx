import * as React from 'react';
import { Button, ButtonType, IButton } from '../button';

interface ISubmitButton extends Omit<IButton, 'type'> {}

export function SubmitButton(props: React.PropsWithChildren<ISubmitButton>) {
  return <Button type={ButtonType.Submit} {...props} />;
}
