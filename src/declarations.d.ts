declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;

  export = classNames;
}

declare const module: {
  hot: {
    accept: Function;
  };
};

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  const svg: FunctionComponent<SVGProps<HTMLOrSVGElement>>;

  export = svg;
}
