import { throttle } from './throttle';

const mockFunc = jest.fn();
jest.useFakeTimers(); 

describe('throttle function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the function once', () => {
    const throttledFunc = throttle(mockFunc, 1000);

    throttledFunc();

    jest.advanceTimersByTime(1000);

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should not call the function multiple times within delay', () => {
    const throttledFunc = throttle(mockFunc, 1000);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    jest.advanceTimersByTime(1000);

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should not call the function multiple times within delay', () => {
    const throttledFunc = throttle(mockFunc, 1000);
  
    throttledFunc();
    throttledFunc();
    throttledFunc();
  
    jest.advanceTimersByTime(500);
  
    expect(mockFunc).toHaveBeenCalledTimes(1);
  
    jest.advanceTimersByTime(500);
  
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
  
  

  it('should call the function twice if delay has passed', () => {
    const throttledFunc = throttle(mockFunc, 1000);

    throttledFunc();
    
    jest.advanceTimersByTime(500);

    throttledFunc();

    jest.advanceTimersByTime(500);

    throttledFunc();

    expect(mockFunc).toHaveBeenCalledTimes(2);
  });
});
