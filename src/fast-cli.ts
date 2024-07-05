import { throttle } from "./throttle";

// Example function to be throttled
function logMessage(message:string) {
    console.log(`${new Date().toISOString()}: ${message}`);
  }
  // Create a throttled version of logMessage with a delay of 10s
  const throttledLogMessage = throttle(logMessage, 10000);
  // Simulate rapid calls to the throttled function
  console.log("Starting...");
  setInterval(() => {
    throttledLogMessage("Hello, World!");
  }, 1000); // This interval calls the function every sec, but it will only log once per 10seconds
  
