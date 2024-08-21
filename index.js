const express = require('express');
const app = express();
const countriesRoutes = require('./api/countries');

app.use('/api/countries', countriesRoutes);

app.get('/', (req, res) => {
    res.json({
        endpoints: [
            { method: 'GET', path: '/api/countries' },
            { method: 'GET', path: '/api/countries?name=<name>' }
        ]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;