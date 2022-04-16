type ClassValue = number | string | boolean | ClassArray | ClassObject | null | undefined;
type ClassArray = Array<ClassValue>
type ClassObject = {
  [key: string]: boolean;
}

const clsx = (...args: ClassValue[]): string => {
  const classes: Set<string> = new Set();

  args.forEach(arg => {
    if (!arg || typeof arg === 'boolean') {
      return;
    }

    if (Array.isArray(arg)) {
      classes.add(clsx(...arg))
    } else if (typeof arg === 'object') {
      for (let key in arg) {
        if (arg[key]) {
          classes.add(key);
        }
      }
    } else {
      classes.add(`${arg}`)
    }
  })

  return Array.from(classes).join(' ');
};

export { clsx };
