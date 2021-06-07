const { Router } = require('express')
const Todos = require('./models/todos')

const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todos.find({}).lean()
    res.render('index', {
        title: 'Todo',
        isIndex: true,
        todos
    })
})

router.post('/', async (req, res) => {
    const targetTodo = await Todos.findById(req.body.id)
    targetTodo.done = !!req.body.completed
    await targetTodo.save()
    res.redirect('/')
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add new todo',
        isAdd: true
    })
})

router.post('/add', async (req, res) => {
    const todo = Todos({
        title: req.body.title
    })
    await todo.save()
    res.redirect('/')
})

module.exports = router