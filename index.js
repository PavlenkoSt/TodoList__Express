const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const router = require('./router')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(router)

const PORT = process.env.PORT || 8888

const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.uoaiy.mongodb.net/todoList', {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}/`)
        })
    }catch(e){
        console.error(e)
    }
}

start()