// Listening for messages from the parent
process.on('message', (msg) => {
    console.log('Received from parent:', msg);
    // Sending a response back to the parent
    process.send({ message: 'Hello from child' });
  });
  
  // Simulate some processing in the child process
  setTimeout(() => {
    console.log('Child process doing some work...');
  }, 1000);
  