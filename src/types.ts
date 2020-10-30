import type { MutableRefObject } from 'react';
import * as React from 'react';

export type WithReactElement<T> = T & { element: React.ReactElement };

export type TRef<E> =
  | ((instance: E | null) => void)
  | MutableRefObject<E | null>
  | null;
