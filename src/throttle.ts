type FuncType = (...args: any[]) => void;

export function throttle(func: FuncType, delay: number) {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last < delay) return
    last = now;
    return func(...args);
  };
}




