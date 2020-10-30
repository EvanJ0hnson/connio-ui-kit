import classnames from 'classnames';
import * as React from 'react';
import styles from './right-drawer.module.css';

type ReactOnClickHandler = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => void;

interface IRightDrawer {
  onBackdropClick?: ReactOnClickHandler;
  isBig?: boolean;
  isHuge?: boolean;
  isFull?: boolean;
}

export function RightDrawer(props: React.PropsWithChildren<IRightDrawer>) {
  React.useEffect(() => {
    window.document.body.classList.add(styles.overflowHidden);

    return () => {
      window.document.body.classList.remove(styles.overflowHidden);
    };
  }, []);

  return (
    <>
      <div
        className={classnames(styles.wrapper, {
          [styles.isBig]: props.isBig,
          [styles.isHuge]: props.isHuge,
          [styles.isFull]: props.isFull,
        })}
      >
        {props.children}
      </div>
      <div className={styles.backdrop} onClick={props.onBackdropClick} />
    </>
  );
}
