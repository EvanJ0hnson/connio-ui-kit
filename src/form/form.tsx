import * as React from 'react';

interface IForm {
  className?: string;
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
    <form style={props.style} className={props.className} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
}
