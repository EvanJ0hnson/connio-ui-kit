import classnames from 'classnames';
import * as React from 'react';
import { WithReactElement } from '../types';
import styles from './link.module.css';

const TARGET = '_blank';
const REL = 'nofollow noopener noreferrer';

export interface IStyledLink {
  style?: React.CSSProperties;
  className?: string;
  isSmall?: boolean;
  isInline?: boolean;
}

export interface ILink extends IStyledLink {
  href?: string;
  target?: string;
  rel?: string;
  title: string;
  isExternal?: boolean;
}

export function StyledLink({
  element,
  ...props
}: WithReactElement<IStyledLink>) {
  let additionalProps = React.useMemo(() => {
    return {
      style: props.style,
      className: classnames(styles.link, props.className, {
        [styles.isSmall]: props.isSmall,
        [styles.isInline]: props.isInline,
      }),
    };
  }, [props.style, props.className, props.isSmall]);

  return React.cloneElement(element, additionalProps);
}

export function Link(props: React.PropsWithChildren<ILink>) {
  let rel;
  let target;

  if (props.isExternal) {
    rel = props.rel || REL;
    target = props.target || TARGET;
  }

  return (
    <a
      style={props.style}
      className={classnames(styles.link, props.className, {
        [styles.isSmall]: props.isSmall,
        [styles.isInline]: props.isInline,
      })}
      href={props.href}
      target={target}
      rel={rel}
      title={props.title}
    >
      {props.children}
    </a>
  );
}
