import * as React from 'react';
import { InputType } from '../input-type';
import styles from './text-input.module.css';

/**
 * @todo
 * - "type" should not be optional
 */
export interface IInput<T> {
  id?: string;
  name?: string;
  type?: InputType;
  value: string | number | undefined;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<T>) => void;
  autoFocus?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  readonly?: boolean;
  autoComplete?: string;
}

export interface ITextInput extends IInput<HTMLInputElement> {
  type?: InputType.Text | InputType.Password;
  style?: React.CSSProperties;
}

export function TextInput(props: ITextInput) {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type || InputType.Text}
      style={props.style}
      className={styles.inputText}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
      required={props.required}
      disabled={props.isDisabled}
      readOnly={props.readonly}
      autoComplete={props.autoComplete}
    />
  );
}
