const express = require('express');

// Create a simple static express server
const app = express();
app.use(express.static('client/dist'));
app.listen(3000, () => console.log('Server started on port http://localhost:3000/'));
