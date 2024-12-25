import express from 'express';
import axios from 'axios';
import formatObject from './formatObject.js';
import saveData from './saveData.js';

// Create an Express app
const app = express();
const PORT = 3000; // Port to listen on

// Endpoint to fetch and display user data
app.get('/', async (req, res) => {
    const url = "https://jsonplaceholder.typicode.com/users"; // Replace with your actual API URL

    try {
        // Fetch data from the API
        const response = await axios.get(url);
        const userData = response.data;
        // Render an HTML page with the user data
        const formattedData = formatObject(userData);
        res.send(`<pre>${formattedData}</pre>`); // Display the formatted data
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        res.status(500).send("Failed to fetch user data.");
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Call the function 
// saveData();



