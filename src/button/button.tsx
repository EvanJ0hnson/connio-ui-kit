import classnames from 'classnames';
import * as React from 'react';
import type { ReactInteractionEvent } from '../react-interaction-event';
import styles from './button.module.css';

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export interface IButton {
  id?: string;
  name?: string;
  type?: ButtonType;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  title?: string;
  onMouseDown?: ReactInteractionEvent;
  onClick?: ReactInteractionEvent;
  isAccent?: boolean;
  isBig?: boolean;
  isBusy?: boolean;
  isSmall?: boolean;
  autoFocus?: boolean;
  ariaRole?: 'link';
}

function getDataset(props: IButton): Record<string, string> {
  let dataset: Record<string, string> = {};

  for (let [key, value] of Object.entries(props)) {
    if (!key.includes('data-')) {
      continue;
    }

    dataset[key] = value;
  }

  return dataset;
}

export function Button({
  children,
  ...props
}: React.PropsWithChildren<IButton>) {
  let dataset = getDataset(props);

  return (
    <button
      type={props.type || ButtonType.Button}
      id={props.id}
      name={props.name}
      style={props.style}
      className={classnames(styles.button, props.className, {
        [styles.small]: props.isSmall,
        [styles.big]: props.isBig,
        [styles.busy]: props.isBusy,
        [styles.accent]: props.isAccent,
      })}
      title={props.title}
      disabled={props.disabled || props.isBusy}
      autoFocus={props.autoFocus}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      role={props.ariaRole}
      {...dataset}
    >
      {children}
    </button>
  );
}
