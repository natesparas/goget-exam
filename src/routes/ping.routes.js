const express = require('express')
const router = express.Router()
const { ping } = require('../controller/ping.controller')

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Ping the server
 *     tags: [Ping]
 *     responses:
 *       '200':
 *         description: Contains timestamp
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: number
 *                   example: 1707181032185
*/
router.get('/ping', ping)

module.exports = router