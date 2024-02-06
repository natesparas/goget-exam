const swagger = require('./src/middleware/swagger')
const app = require('./app')

swagger(app)

const PORT = 8085
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
