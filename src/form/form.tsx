import * as React from 'react';

interface IForm {
  style?: React.CSSProperties;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form(props: React.PropsWithChildren<IForm>) {
  let handleSubmit = React.useCallback(
    event => {
      event.preventDefault();

      props.onSubmit(event);
    },
    [props.onSubmit],
  );

  return (
    <form style={props.style} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
}
