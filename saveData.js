import mysql from 'mysql2/promise';
import  axios from 'axios';

const saveData = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost', // tested locally
        user: 'root',      // Tested with MySQL root account
        password: 'Password',      // Replace with your DB password
        database: 'sakila' // Default sample database created with mysql
    });
    const url = "https://jsonplaceholder.typicode.com/users"; 
    try {
        // Fetch data from the API
        const response = await axios.get(url);
        const userData = response.data;

        if (Array.isArray(userData)) {
            // Prepare the query and values for bulk insert
            const query = `INSERT INTO user (userInfo) VALUES ?`;
            const values = userData.map(user => [JSON.stringify(user)]); // Serialize the object to a JSON string

            // Execute the bulk insert
            await connection.query(query, [values]);
            console.log('Inserted all user data successfully!');
        } else {
            console.error('Response data is not an array!');
        }
        console.log("Data inserted successfully!");
    }   
    catch (error) {
        console.error("Error inserting data:", error.message);
    } finally {
        await connection.end();
    }
}

export default saveData;