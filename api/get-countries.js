module.exports = (req, res) => {
    const data = require('../data/countries.json'); // Ensure data.json is in the same directory

    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ error: 'Element not found' });
    }
};
