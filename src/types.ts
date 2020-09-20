import * as React from 'react';

export type WithReactElement<T> = T & { element: React.ReactElement };
