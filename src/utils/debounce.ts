import * as http from 'http';
import {RequestHandler} from "../../types"

export function debounce<DebounceFunction extends (...args: any[])=>void>(func:DebounceFunction, wait: number): (...args: Parameters<DebounceFunction>)=>void{
  let timeout: ReturnType<typeof setTimeout>;
  return function( ...args: Parameters<DebounceFunction>){
      
      clearTimeout(timeout);
      timeout = setTimeout(() =>{
          func(...args)
      
      }, wait);
  };

}

export function debounceHandler(handler: RequestHandler, wait: number): RequestHandler {
  const debouncedFunction = debounce(handler, wait);
  return (req: http.IncomingMessage, res: http.ServerResponse) => {
    debouncedFunction(req, res);
  };
}