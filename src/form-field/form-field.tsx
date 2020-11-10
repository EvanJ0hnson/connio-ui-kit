import classnames from 'classnames';
import * as React from 'react';
import styles from './form-field.module.css';
import { Optional } from './optional';

interface IFormField {
  style?: React.CSSProperties;
  name?: string;
  label?: string;
  isOptional?: boolean;
  disabled?: boolean;
  children: React.ReactElement;
  for?: string;
  className?: string;
  help?: React.ReactElement;
  error?: string;
}

export function FormField(props: IFormField) {
  return (
    <label
      htmlFor={props.name || props.for}
      style={props.style}
      className={classnames(styles.inputWrapper, props.className, {
        [styles.hasError]: !!props.error,
      })}
    >
      {(props.label || props.help) && (
        <div className={styles.inputLabel}>
          <div>
            {props.label} {props.isOptional ? <Optional /> : undefined}
          </div>

          <div className={styles.helpContainer}>{props.help}</div>
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
              // isDisabled: props.disabled,
              error: !!props.error || undefined,
            })
          : props.children}
      </div>

      {props.error && <div className={styles.errorMessage}>{props.error}</div>}
    </label>
  );
}
