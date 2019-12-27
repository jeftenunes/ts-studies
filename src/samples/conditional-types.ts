type ArrayFilter<T> = T extends any[] ? T : never;
type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;