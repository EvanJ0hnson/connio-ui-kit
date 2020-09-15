import * as React from 'react';
import { InputType } from '../input-type';
import { ITextInput, TextInput } from '../text-input';

interface IPasswordInput extends ITextInput {}

export function PasswordInput(props: IPasswordInput) {
  return <TextInput type={InputType.Password} {...props} />;
}
