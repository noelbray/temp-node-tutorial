const loginPeople = (req, res) => {
    const { name } = req.body;

    if (name) {
        // return res.status(200).send(`Welcome ${name})
        return res.status(200).send(`You're logged in ${name}.`);
    }
    res.status(401).send('Please Provide A Correct User Name. Please Provide Correct Credentials.');
};

module.exports = loginPeople;