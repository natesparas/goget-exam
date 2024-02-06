const fs = require('fs/promises');
const USER_SETTINGS_FILE = 'user-settings.json';

const readUserSettings = async (userId) => {
    try {
        const data = await fs.readFile(USER_SETTINGS_FILE, 'utf-8');
        const settings = JSON.parse(data);
        return settings[userId] || {};
    } catch (error) {
        throw new Error('Failed to read user settings');
    }
}

const writeUserSettings = async (userId, settings) => {
    try {
        const data = await fs.readFile(USER_SETTINGS_FILE, 'utf-8');
        const existingSettings = JSON.parse(data);
        existingSettings[userId] = settings;
        await fs.writeFile(USER_SETTINGS_FILE, JSON.stringify(existingSettings, null, 2));
    } catch (error) {
        throw new Error('Failed to write user settings');
    }
}

const isBoolean = async (value) => {
    return typeof value === 'boolean';
}

module.exports = { readUserSettings, writeUserSettings, isBoolean }