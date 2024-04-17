// Import the Express.js framework module
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port number to run the server on
const port = 3000;

// Middleware to parse form data from incoming requests
app.use(express.urlencoded({ extended: true }));

// Route handler to serve the index.html file when a GET request is made to the root URL '/'
app.get('/', (req, res) => {
    // Send the index.html file as the response
    res.sendFile(__dirname + '/index.html');
});

// Route handler to handle form submission when a POST request is made to the '/submit-form' endpoint
app.post('/submit-form', (req, res) => {
    // Retrieve the value of the 'username' field from the submitted form data
    const username = req.body.username;
    
    // Perform validation logic on the submitted data (you can add your own validation logic here)
    // For example, check if the 'username' field is not empty
    if (username) {
        // Send a success response with the submitted username
        res.send(`Hello, ${username}! Your form has been submitted successfully.`);
    } else {
        // Send an error response if the 'username' field is empty
        res.status(400).send('Error: Username is required.');
    }
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    // Log a message to the console indicating that the server is running
    console.log(`Server running on http://localhost:${port}`);
});
