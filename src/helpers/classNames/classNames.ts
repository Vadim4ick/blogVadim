type Mods = Record<string, boolean | string>;

const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map((clsName) => clsName),
  ].join(" ");
};

export { classNames };
