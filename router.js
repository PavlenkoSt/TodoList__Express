const { Router } = require('express')
const Todos = require('./models/todos')

const router = Router()

router.get('/', async (req, res) => {
   const todos = await Todos.find({})

    res.render('index', {
        title: 'Todo',
        isIndex: true,
        todos
    })
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add new todo',
        isAdd: true
    })
})

module.exports = router