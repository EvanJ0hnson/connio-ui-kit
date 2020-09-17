import classnames from 'classnames';
import * as React from 'react';

const TARGET = '_blank';
const REL = 'nofollow noopener noreferrer';

interface ILink {
  href: string;
  rel?: string;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  label?: string;
  isExternal: boolean;
}

export function Link(props: React.PropsWithChildren<ILink>) {
  let rel = props.isExternal ? REL : undefined;
  let target = props.isExternal ? TARGET : undefined;

  if (props.isExternal) {
    rel = props.rel || REL;
    target = props.target || TARGET;
  }

  return (
    <a
      style={props.style}
      className={classnames(props.className)}
      href={props.href}
      rel={rel}
      target={target}
      title={props.title}
    >
      {props.children}
    </a>
  );
}
