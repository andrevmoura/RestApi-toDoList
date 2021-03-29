const express = require("express");
const mongoose = require("mongoose");

const task_controller = require('./tasks-controller')

mongoose.connect('mongodb+srv://novo-usuario:dglJE7qFXnoWLerB@cluster0.hadey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true})
mongoose.Promise = global.Promise
try{
    let db = mongoose.connection
    db.on('errr', console.error.bind(console,'error connecting db'))
} catch (e){
    console.log(e)
}

const router = express.Router()

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req,res) => {
    res.send('test');
})

app.use('/',router)

router.post('/tasks',task_controller.create_Task)
router.get('/tasks',task_controller.list_Tasks)
router.get('/tasks/:id',task_controller.read_Task)
router.delete('/tasks/:id',task_controller.delete_Task)
router.put('/tasks/:id',task_controller.update_Task)



let port = process.env.PORT ||4000

app.listen(port,() => {
    console.log("server running on port: " + port);
})






