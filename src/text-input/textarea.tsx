import * as React from 'react';
import styles from './text-input.module.css';
import { IInput } from './text-input';

interface ITextarea extends IInput<HTMLTextAreaElement> {
  rows: number;
}

export function TextArea(props: ITextarea) {
  return (
    <textarea
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
