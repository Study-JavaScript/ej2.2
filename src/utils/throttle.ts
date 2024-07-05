import { RequestHandler } from "../../types";
import http from "http";

type FuncType = (...args: any[]) => void;

export function throttleHandler(handler: RequestHandler, wait: number): RequestHandler {
  const throttledFunction = throttle(handler, wait);
  return (req: http.IncomingMessage, res: http.ServerResponse) => {
    throttledFunction(req, res);
  };
}


export function throttle(func: FuncType, delay: number) {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last < delay) return
    last = now;
    return func(...args);
  };
}



