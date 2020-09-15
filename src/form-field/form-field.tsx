import * as React from 'react';
import styles from './form-field.module.css';
import { Optional } from './optional';
import classnames from 'classnames';

interface IFormField {
  name?: string;
  label?: string;
  isOptional?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
  for?: string;
}

export function FormField(props: IFormField) {
  return (
    <label htmlFor={props.name || props.for} className={styles.inputWrapper}>
      {props.label && (
        <div className={styles.inputLabel}>
          {props.label} {props.isOptional ? <Optional /> : undefined}
        </div>
      )}

      <div
        className={classnames(styles.inputFieldWrapper, {
          [styles.isDisabled]: props.disabled,
        })}
      >
        {props.name
          ? React.cloneElement(props.children, {
              id: props.name,
              name: props.name,
              /**
               * @todo
               * - Unify "disabled" and "isDisabled"
               */
              disabled: props.disabled,
              isDisabled: props.disabled,
            })
          : props.children}
      </div>
    </label>
  );
}
