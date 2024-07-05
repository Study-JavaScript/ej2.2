import { throttle } from './throttle';

// Mock function to use in tests
const mockFunc = jest.fn();

// // Define a time function to mock setTimeout
// const mockSetTimeout = (callback: () => void, delay: number) => {
//   callback();
// };

jest.useFakeTimers(); // Use Jest's fake timers to control setTimeout

describe('throttle function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the function once', () => {
    const throttledFunc = throttle(mockFunc, 1000);

    // Call the throttled function immediately
    throttledFunc();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Expect the mock function to have been called exactly once
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should not call the function multiple times within delay', () => {
    const throttledFunc = throttle(mockFunc, 1000);

    // Call the throttled function multiple times
    throttledFunc();
    throttledFunc();
    throttledFunc();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Expect the mock function to have been called only once
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should not call the function multiple times within delay', () => {
    const throttledFunc = throttle(mockFunc, 1000);
  
    // Call the throttled function multiple times
    throttledFunc();
    throttledFunc();
    throttledFunc();
  
    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);
  
    // Expect the mock function to have been called only once
    expect(mockFunc).toHaveBeenCalledTimes(1);
  
    // Fast-forward time by another 500ms
    jest.advanceTimersByTime(500);
  
    // Expect the mock function to have been called only once
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
  
  

  it('should call the function twice if delay has passed', () => {
    const throttledFunc = throttle(mockFunc, 1000);

    // Call the throttled function twice with delay between calls
    throttledFunc();
    
    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);

    throttledFunc();

    // Fast-forward time by another 500ms
    jest.advanceTimersByTime(500);

    throttledFunc();

    // Expect the mock function to have been called twice
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });
});