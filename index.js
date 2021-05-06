console.log('Hello!');

require('dotenv').config();

const express = require('express');

const server = express();

// this line works from the start
const PORT = process.env.PORT || 5000;

// using 'dotenv' we can process local environment variables on our local machine only (because of gitignore)
// process.env.API_KEY

server.use(express.json());

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'web 41'
    });
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
