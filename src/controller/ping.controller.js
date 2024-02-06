const ping = async (req, res) => {
    return res.json({ timestamp: Date.now() });
}

module.exports = {
    ping
}