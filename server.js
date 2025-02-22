// Import the necessary modules from the Node.js standard library
const express = require('express'); // Import the Express framework
const path = require('path'); // Import the path module for file path handling

// Initialize an Express application
const app = express();
const port = 3000; 

// Fetch the application name from the environment variable and allows different instances of the app to run with different names
const replicaApp = process.env.APP_NAME; 

// Serve static files (like images) from the 'images' folder
// This means that any request to '/images' will serve files from the 'images' directory in the app's root folder
app.use('/images', express.static(path.join(__dirname, 'images')));


// Define the main route for the application
app.use('/', (req, res) => {
    // Serve the 'index.html' file when the root URL is accessed
    res.sendFile(path.join(__dirname, 'index.html'));

    // Log which replica of the app is serving the request (useful for debugging or multi-instance setup)
    console.log(`Request served by ${replicaApp}`);  
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
    
    // Log a message indicating the app has started and is ready to accept requests
    console.log(`${replicaApp} is listening on port ${port}`);
});