console.log('Hello!');
const express = require('express');

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.get('/api/*', (req, res) => {
    res.json({
        cohort: 'web 41'
    });
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
