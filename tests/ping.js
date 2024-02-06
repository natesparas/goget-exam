const { expect } = require('chai');
const PingController = require("../src/controller/ping.controller");

describe('Testing the Ping Controller', () => {
    it('Should return timestamp', async () => {
        const req = {}
        const res = {
            json: data => {
                expect(data).to.be.property('timestamp').that.is.a('number');
            }
        }
        await PingController.ping(req, res);
    });
}); 