let express = require('express')

let app = express()

app.use(express.static('public'))

app.listen(3000,() => {
    console.log("App is listening on port 3000")
})