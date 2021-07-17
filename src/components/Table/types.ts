export interface IData {
  id: number;
  fio: string;
  post: string;
  department: string;
}

export interface IHeading {
  title: string;
  propKey: keyof IData;
}

export interface ISort {
  propKey?: keyof IData;
  direction?: "ask" | "desk";
}
