const { writeUserSettings, readUserSettings, isBoolean } = require("../utils/fs.utils");

const userSettings = async (req, res) => {
    const userId = req.params.userId;

    try {

        const userSettings = await readUserSettings(userId);

        if (Object.keys(userSettings).length <= 0) {
            return res.json({ message: 'User not found' });
        }

        return res.json({ userId, userSettings });
    } catch (error) {
        return res.json(error)
    }
}

const createUserSettings = async (req, res) => {
    const userId = req.params.userId;
    const { preferredTheme, resultsPerPage, sendEmail } = req.body;

    try {

        if (resultsPerPage > 100) {
            return res.json({ message: 'Results per page must be between 20 and 100' })
        }

        if (!isBoolean(sendEmail)) {
            return res.json({ message: 'sendEmail must be boolean' })
        }

        const userSettings = await readUserSettings(userId);
        userSettings.preferredTheme = preferredTheme || userSettings.preferredTheme;
        userSettings.resultsPerPage = resultsPerPage || userSettings.resultsPerPage;
        userSettings.sendEmail = sendEmail !== undefined ? sendEmail : userSettings.sendEmail;
        await writeUserSettings(userId, userSettings);

        return res.json({ userSettings, message: 'User settings successfully saved' });
    } catch (error) {
        return res.json(error)
    }
}

module.exports = {
    userSettings,
    createUserSettings
}