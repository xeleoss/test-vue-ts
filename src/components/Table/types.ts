export type IData = { [key: string]: string | number };

export interface IHeading {
  label: string;
  name: string;
}

export interface ISort {
  name?: keyof IData;
  direction?: "ask" | "desk";
}
