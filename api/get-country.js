module.exports = (req, res) => {
    const data = require('../data/countries.json'); // Ensure data.json is in the same directory

    const name = req.query.name;
    const element = data.find(item => item.name === name);

    if (element) {
        res.status(200).json(element);
    } else {
        res.status(404).json({ error: 'Element not found' });
    }
};
