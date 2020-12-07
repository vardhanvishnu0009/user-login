const express= require('express')
const router = express.Router()

const EmployeeController = require('../Controllers/EmployeeController')
const authenticate = require('../middleware/authenticate')

router.get('/',authenticate,EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.destroy)

module.exports = router

