// Throttle function CLI

import readline from "readline"
import { throttle } from "./throttle";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '\nEnter a message: \n'
})
let inputCount = 0;
let callCount = 0;

console.log(`Throttle function CLI:
    
Send a message to call the throttled 10 sec example function: 
(Type 'exit' to quit)`);

const exampleFn = (text:string)=>{
    callCount++;
    console.log(`\nExample function executed->\n- At ${new Date().toISOString()} with text: ${text}`);
    console.log(`- Throttle called: ${callCount} times`);
    console.log(`- Total inputs: ${inputCount}`);
    rl.prompt();   
}

const throttledFn = throttle((input:string)=>{
    exampleFn(input)
}, 10000)

const startCLI = ()=>{
    rl.prompt()
    rl.on('line', (input) => {
        inputCount++;
        if(input.trim().toLowerCase() === 'exit') {
            rl.close();
        } else {
            throttledFn(input);
        }
    }).on("close", ()=>{
        console.log("Exiting...");
        process.exit(0);
    })
}

startCLI();
