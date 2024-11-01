const express = require("express");
const path = require("path");
const { getAllTasks, addTask } = require("./controller"); 
const { console } = require("inspector");


const PORT = process.env.PORT || 3035;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/health', (req, res) => res.send({status: 'all good'}))
app.get('/api/task', async (req, res) =>  {
    const tasks =  await getAllTasks()
    res.send(tasks)
} )


app.get('/', (req, res) => {
    res.render('esileht')
})

app.post('/api/task', (req, res) =>  {
    console.log(req.body)
    addTask(req.body.desc, req.body.prio)
    res.status(201).end()
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`))