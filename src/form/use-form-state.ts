// import { logGroup } from '@root/utils/log-group';
import * as React from 'react';

interface IUseFormStateOptions<T> {
  log?: boolean | Array<keyof T>;
}

type ChangeEvent<T> = (event: React.ChangeEvent<T>) => void;

export function useFormState<T>(
  defaultState: T,
  options: IUseFormStateOptions<T> = {},
): [
  T,
  ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  React.Dispatch<React.SetStateAction<T>>,
] {
  let [formState, setFormState] = React.useState<T>(defaultState);

  let handleChange = React.useCallback(({ target }) => {
    if (options.log) {
      let params: [string, ...any[]] = [
        'useFormState :: handleChange :: name | value',
        target.name,
        target.value,
      ];

      if (Array.isArray(options.log)) {
        if (options.log.includes(target.name)) {
          // logGroup(...params);
        }
      } else {
        // logGroup(...params);
      }
    }

    if (target.name.includes('[') && target.name.includes(']')) {
      /** Array field */
      let [_, fieldName, fieldId]: [string, string, string] = target.name.match(
        /^(.+)\[(.+)\]$/i,
      );

      setFormState(prevState => {
        // @ts-ignore
        prevState[fieldName][fieldId] = target.value;

        return {
          ...prevState,
        };
      });
    } else {
      /** Default case (1st level field) */
      setFormState(prevState => {
        return {
          ...prevState,
          [target.name]: target.value,
        };
      });
    }
  }, []);

  return [formState, handleChange, setFormState];
}
