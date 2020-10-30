import classnames from 'classnames';
import * as React from 'react';
import { forwardRef } from 'react';
import { InputType } from '../input-type';
import type { TRef } from '../types';
import styles from './text-input.module.css';

/**
 * @todo
 * - "type" should not be optional
 */
export interface IInput<T> {
  id?: string;
  name?: string;
  type?: InputType;
  value?: string | number | undefined;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<T>) => void;
  autoFocus?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  readonly?: boolean;
  autoComplete?: string;
  isSmall?: boolean;
  error?: boolean;
  placeholder?: string;
}

export interface ITextInput extends IInput<HTMLInputElement> {
  type?: InputType.Text | InputType.Password;
  style?: React.CSSProperties;
}

function _TextInput(props: ITextInput, ref: TRef<HTMLInputElement>) {
  return (
    <input
      id={props.id}
      name={props.name}
      ref={ref}
      type={props.type || InputType.Text}
      style={props.style}
      className={classnames(styles.inputText, {
        [styles.isSmall]: props.isSmall,
        [styles.hasError]: props.error,
      })}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
      required={props.required}
      disabled={props.isDisabled}
      readOnly={props.readonly}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
    />
  );
}

_TextInput.displayName = 'TextInput';

export const TextInput = forwardRef<HTMLInputElement, ITextInput>(_TextInput);
