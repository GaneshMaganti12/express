const express = require('express')
const {findAllCourses, insertCourses} = require('./connect')
const app = express()


const employees = [
    {id: 1, name: 'Ganesh', salary: 25000},
    {id: 2, name: 'Vijay', salary: 35000},
    {id: 3, name: 'Lucky', salary: 45000}
]

const logMiddleWare1 = (req, res, next) =>{
    console.log(new Date())
    next()
}

const logMiddleWare2 = (req, res, next) =>{
    console.log(req.method)
    next()
}


app.use(express.json())
app.use(logMiddleWare1)
app.use(logMiddleWare2)


app.get('/courses', [logMiddleWare1, logMiddleWare2], async(req, res) =>{
    const course = await findAllCourses()
    res.json(course)
})

app.post('/courses', async(req,res) =>{
    await insertCourses(req.body)
    res.status(201).json("success")
})

app.delete('/employees/:id', (req, res) =>{
    const { id } = req.params
    employees.splice(id, 1)
    res.status(201).json(employees)
})

app.patch('/employees/:id', (req, res) =>{
    const {id} = req.params
    console.log(req.body.salary)
    employees.map((each) =>{
        if(each.id === id){
            each.salary = req.body.salary
        }
    })
    res.json(employees)

})

app.listen(3001, ()=> console.log("server is running in 3001 port"))