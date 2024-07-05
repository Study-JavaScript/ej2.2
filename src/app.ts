import { IncomingMessage, ServerResponse } from 'http';
import { debounce } from './utils/debounce';
import { throttle } from './utils/throttle';

let debounceFullCount = 0;
let throttleFullCount = 0;

let debounceMixedCount = 0;
let throttleMixedCount = 0;

const incrementDebounceFullCount = (req: IncomingMessage, res: ServerResponse) => {
  debounceFullCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Debounce count incremented', count: debounceFullCount }));
};

const incrementThrottleFullCount = (req: IncomingMessage, res: ServerResponse) => {
  throttleFullCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Throttle count incremented', count: throttleFullCount }));
};

const incrementDebounceMixedCount = (req: IncomingMessage, res: ServerResponse) => {
  debounceMixedCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Debounce count incremented', count: debounceMixedCount }));
};
const incrementThrottleMixedCount = (req: IncomingMessage, res: ServerResponse) => {
  throttleMixedCount++;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Throttle count incremented', count: throttleMixedCount }));
};


export const debouncedFullIncrement = debounce(incrementDebounceFullCount, 2000);
export const throttledFullIncrement = throttle(incrementThrottleFullCount, 2000);

export const debouncedMixedIncrement = debounce(incrementDebounceMixedCount, 2000);
export const throttledMixedIncrement = throttle(incrementThrottleMixedCount, 2000);
