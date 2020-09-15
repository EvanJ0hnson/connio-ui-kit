import classnames from 'classnames';
import * as React from 'react';
import styles from './form-footer.module.css';

interface IFormFooter {
  className?: string;
  style?: React.CSSProperties;
}

export function FormFooter(props: React.PropsWithChildren<IFormFooter>) {
  return (
    <div
      style={props.style}
      className={classnames(styles.formFooter, props.className)}
    >
      {props.children}
    </div>
  );
}
