const express = require('express')
const router = express.Router()
const { userSettings, createUserSettings } = require('../controller/user.controller')

/**
 * @swagger
 * /user/{userId}/settings:
 *   get:
 *     summary: Get a user settings by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to get
 *     responses:
 *       '200':
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 userSettings:
 *                   type: object
 *                   properties:
 *                      preferredTheme:
 *                        type: string
 *                        enum: [system, light, dark]
 *                      resultsPerPage:
 *                        type: integer
 *                        example: 20
 *                      sendEmail:
 *                        type: boolean
 *                        example: true
 *            
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 */
router.get('/:userId/settings', userSettings)




/**
 * @swagger
 * /user/{userId}/settings:
 *   post:
 *     summary: Modify user settings by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               preferredTheme:
 *                 type: string
 *                 enum: [system, light, dark]
 *               resultsPerPage:
 *                  type: integer
 *                  example: 20
 *               sendEmail:
 *                  type: boolean
 *                  example: true
 *     responses:
 *       '200':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userSettings:
 *                   type: object
 *                   properties:
 *                      preferredTheme:
 *                        type: string
 *                        enum: [system, light, dark]
 *                      resultsPerPage:
 *                        type: integer
 *                        example: 20
 *                      sendEmail:
 *                        type: boolean
 *                        example: true
 *                 message:
 *                   type: string
 *                   example: User settings successfully saved
 *            
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Results per page must be between 20 and 100
 */
router.post('/:userId/settings', createUserSettings)

module.exports = router