const Employee= require('../Models/Employee')

const index = (req, res, next)=>{
    Employee.find()
    .then(response=>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:'an error message occured'
        })
    })
}
    const show =(req,res,next) =>
    {
        let employeeID = req.body.EmployeeID
        Employee.findById(employeeID)
        .then(response=>{
            res,json({response})
        })
        .catch(error=>{
          res.json({ message:'an error occured '})
        })
    }
    const store =(req,res,next)=>
    {
        let employee= new Employee({
        name : req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response=>{
        res.json({message:'employee succesfully'})
    })
    .catch(error =>{
        res.json({message:'an error Occured'})
    })
    }

    const update= (req, res, next)=>{
        let employeeID= req.body.employeeID 

        let updatedData={
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
             phone: req.body.phone,
            age: req.body.age
        }

        Employee.findByIdAndUpdate(employeeID,{ $set: updatedData})
        .then(()=>{
            res.json({ message:'employee data updated succedfully'})
        })
        .catch(error=>{
            res.json({
                message:'error occured'
            })
        })
    }

    const destroy = (req,res,next)=>{
        let employeeID = req.body.employeeID
        Employee.findOneAndRemove(employeeID)
        .then(()=>{
            res.json({message: 'employee data deleted succesfully'})
        })
        .catch(error=>{
            res.json({message:'error occured'})
        })
    }

module.exports ={
    index, show, store, update, destroy
}