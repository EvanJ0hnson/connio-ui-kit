import * as React from 'react';
import { forwardRef } from 'react';
import type { TRef } from '../types';
import { IInput } from './text-input';
import styles from './text-input.module.css';

interface ITextarea extends IInput<HTMLTextAreaElement> {
  rows: number;
}

export function _TextArea(props: ITextarea, ref: TRef<HTMLTextAreaElement>) {
  return (
    <textarea
      ref={ref}
      id={props.id}
      name={props.name}
      rows={props.rows}
      className={styles.inputText}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
    ></textarea>
  );
}

_TextArea.displayName = 'TextArea';

export const TextArea = forwardRef<HTMLTextAreaElement, ITextarea>(_TextArea);
