import { throttle } from "./throttle";

function logMessage(message:string) {
    console.log(`${new Date().toISOString()}: ${message}`);
  }
  
  const throttledLogMessage = throttle(logMessage, 10000);
  console.log("Starting...");
  setInterval(() => {
    throttledLogMessage("Hello, World!");
  }, 1000);   
