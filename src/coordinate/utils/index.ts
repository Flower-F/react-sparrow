// export function curry(fn: Function) {
//   return function inner(...args: unknown[]) {
//     if (fn.length <= args.length) {
//       return fn(...args);
//     }

//     return function (...args2: unknown[]) {
//       return inner(...args, ...args2);
//     }
//   }
// }

// export function compose(funcs: Function[]) {
//   return function (initialValue: unknown) {
//     return funcs.reduce((prev, cur) => {
//       return cur(prev);
//     }, initialValue);
//   }
// }

export function identity(x: any) {
  return x;
}

export function compose(...fns: any[]) {
  return fns.reduce((total, cur) => (x: any) => cur(total(x)), identity);
}

export function curry(fn: Function) {
  const arity = fn.length;
  return function curried(...args: any): any {
    const newArgs = args.length === 0 ? [undefined] : args;
    if (newArgs.length >= arity) return fn(...newArgs);
    return curried.bind(null, ...newArgs);
  };
}
