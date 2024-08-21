const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');


router.get('/', (req, res) => {
    const { name } = req.query;
    const countries = data.countries;
    if (countries) {
        if (name) {
            const country = countries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
            if (country) {
                res.status(200).json(country);
            }
        }
        res.status(200).json(countries);
    } else {
        res.status(404).json({ error: 'Element not found' });
    }
});

module.exports = router;