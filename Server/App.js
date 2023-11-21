const express = require('express')

const app = express()
const port = 3000
const cors=require("cors")


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())








const Route=require("./Routers/router")
app.use(Route)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})