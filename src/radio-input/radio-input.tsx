import classnames from 'classnames';
import * as React from 'react';
import { InputType } from '../input-type';
import styles from './radio-input.module.css';

interface IRadioInput {
  name: string;
  value: string | number;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: any;
  disabled?: boolean;
  required?: boolean;
  isSmall?: boolean;
}

export function RadioInput(props: IRadioInput) {
  let id = `${props.value}`;

  return (
    <label
      htmlFor={id}
      className={classnames(styles.container, {
        [styles.isDisabled]: props.disabled,
        [styles.isSmall]: props.isSmall,
      })}
    >
      <div className={styles.label}>{props.label}</div>

      <input
        id={id}
        name={props.name}
        type={InputType.Radio}
        className={styles.input}
        value={props.value}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      />
    </label>
  );
}
