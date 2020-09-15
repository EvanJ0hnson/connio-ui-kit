import * as React from 'react';
import styles from './drawer-header.module.css';

interface IDrawerHeader {
  style?: React.CSSProperties;
}

export function DrawerHeader(props: React.PropsWithChildren<IDrawerHeader>) {
  return (
    <div style={props.style} className={styles.header}>
      {props.children}
    </div>
  );
}
