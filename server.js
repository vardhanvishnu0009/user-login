var express=require('express');
var mongoose=require('mongoose');
var morgan= require('morgan');
var bodyParser=require('body-parser');

const EmployeeRoute = require('./Routes/employee');
const AuthRoute = require('./Routes/auth')

mongoose.connect('mongodb+srv://dbUser:21VIas5XzbIURbLo@cluster0.cgtti.mongodb.net/Test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

const port = 1245;
const hostname = 'localhost';


db.on('error',(err) => {
    console.log(err)
})

db.once('open',()=>{
    console.log('databade connection eastablished');
}
)

const aoo = express();
aoo.use(morgan('dev'))
aoo.use(bodyParser.urlencoded({extended:true}))
aoo.use(bodyParser.json())
aoo.use('/uploads',express.static('uploads'))
aoo.listen(port, hostname,()=>{
    console.log('server is  running on '+hostname+":"+port);
})

aoo.use('/api/employee',EmployeeRoute)
aoo.use('/api',AuthRoute)
