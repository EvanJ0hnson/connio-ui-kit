import * as React from 'react';
import styles from './drawer-header.module.css';

interface IDrawerHeader {
  title?: string | React.ReactElement;
  style?: React.CSSProperties;
}

export function DrawerHeader(props: React.PropsWithChildren<IDrawerHeader>) {
  return (
    <div style={props.style} className={styles.header}>
      {props.title && <h1 className={styles.title}>{props.title}</h1>}

      {props.children}
    </div>
  );
}
