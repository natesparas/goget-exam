const { expect } = require('chai');
const UserSettingController = require("../src/controller/user.controller")

describe('Testing the User Setting Controller', () => {
    it('1. Should return user settings', async () => {
        const req = {
            params: {
                userId: 1
            }
        }
        const res = {
            json: data => {
                expect(data).to.have.property('userSettings').that.is.a('object');
            }
        }
        await UserSettingController.userSettings(req, res);
    });

    it('2. Should return user not found', async () => {
        const req = {
            params: {
                userId: 999
            }
        }
        const res = {
            json: data => {
                expect(data).to.have.property('message').that.is.a('string');
            }
        }
        await UserSettingController.userSettings(req, res);
    });

    it('3. Should modify/create user settings', async () => {
        const req = {
            params: {
                userId: 6
            },
            body: {
                preferredTheme: "system",
                resultsPerPage: 20,
                sendEmail: true
            }
        }
        const res = {
            json: data => {
                expect(data).to.have.property('userSettings').that.is.a('object');
                expect(data).to.have.property('message').that.is.a('string');
            }
        }
        await UserSettingController.createUserSettings(req, res);
    });
});