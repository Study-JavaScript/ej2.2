import { throttle } from './throttle';

describe('throttle', () => {
  let callback: jest.Mock;

  beforeEach(() => {
    callback = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call the callback immediately', () => {
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback again within the throttle period', () => {
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    throttledCallback();
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should call the callback again after the throttle period', () => {
    const throttledCallback = throttle(callback, 1000);
    throttledCallback();
    jest.advanceTimersByTime(1000);
    throttledCallback();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should pass the arguments to the callback', () => {
    const throttledCallback = throttle(callback, 1000);
    throttledCallback(1, 2, 3);
    expect(callback).toHaveBeenCalledWith(1, 2, 3);
  });

});