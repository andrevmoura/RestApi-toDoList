var Tasks = require('./tasks-model')

exports.create_Task = function(req,res){
    let task = new Tasks({
        id: req.body.id,
        description: req.body.description,
        deadline:req.body.deadline,
        complete: req.body.complete
    })

    task.save(function(err){
        if(err){
            return next(err)
        }
    })
    res.send('Task created.')
}

exports.list_Tasks = function(req,res){
    Tasks.find({},function(err,tasks){
        if(err) return next(err)
        return res.json(tasks);
    })
}

exports.read_Task = function(req,res){
    Tasks.findById(req.params.id,function(err,tasks){
        if(err) return next(err)
        return res.json(tasks);
    })
}

exports.delete_Task = function(req,res){
    Tasks.findOneAndDelete(req.params.id,function(err,tasks){
        if(err) return next(err)
        return res.json(tasks);
    })
}

exports.update_Task = function(req,res){
    Tasks.findOneAndUpdate(req.params.id,req.body,function(err,tasks){
        if(err) return next(err)
        return res.json(tasks);
    })
}
