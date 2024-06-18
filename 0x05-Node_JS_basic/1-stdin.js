// Import the readline module
const readline = require('readline');

// Create an interface for reading data from the standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the initial greeting message
console.log("Welcome to Holberton School, what is your name?");

// Read the user's input
rl.question('', (name) => {
    // Display the user's input
    console.log(`Your name is: ${name}`);

    // Close the readline interface
    rl.close();
});

// Listen for the 'close' event and display the closing message
rl.on('close', () => {
    console.log("This important software is now closing");
});

