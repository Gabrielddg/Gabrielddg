const mongoose = require('mongoose')
const PORT = 3000;
const express = require('express')
const app = express();
const path = require('path');
const controleProdu = require('./controleProdu')
const multer = require('multer');
const upload = require('./config/configMulter')


// consexão com o banco de dados
function connectToDataBase() {
    mongoose.connect("mongodb://localhost/newlinks", {
useNewUrlParser: true,
useUnifiedTopology: true,})

const db = mongoose.connection;
db.on('error', (error) =>{
    console.log(error)
})
db.once('open', ()=>console.log("connected to the dataBase!"))



// para baixo temos as rotas, pelo menos até eu trocar de lugar, para deixar mais ajeitado
app.get('/produtos', controleProdu.allProdutos)

app.post('/', upload.single("txtFoto"), express.urlencoded({extended: true}), controleProdu.addProduto );

app.set('view engine', 'ejs')
app.get("/", function (req, res){
    res.render('../views/home.ejs')
} )
app.get('/adicionar', function (req, res){
    res.render('../views/adicionar', {error: false, body: {}})
})
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));


app.listen(PORT, ()=>{
    console.log(`Server Running on Port:${PORT}`)
})

}
module.exports = connectToDataBase;






// backoup

// const mongoose = require('mongoose')
// const PORT = 3000;
// const express = require('express')
// const app = express();
// const path = require('path');
// const controleProdu = require('./controleProdu')
// const multer = require('multer');
// const upload = require('./config/configMulter')


// // consexão com o banco de dados
// function connectToDataBase() {
//     mongoose.connect("mongodb://localhost/newlinks", {
// useNewUrlParser: true,
// useUnifiedTopology: true,})

// const db = mongoose.connection;
// db.on('error', (error) =>{
//     console.log(error)
// })
// db.once('open', ()=>console.log("connected to the dataBase!"))



// // para baixo temos as rotas, pelo menos até eu trocar de lugar, para deixar mais ajeitado
// app.get('/produtos', controleProdu.allProdutos)

// app.post('/', upload.single("txtFoto"), express.urlencoded({extended: true}), controleProdu.addProduto );

// app.set('view engine', 'ejs')
// app.get("/", function (req, res){
//     res.render('../views/home.ejs')
// } )
// app.get('/adicionar', function (req, res){
//     res.render('../views/adicionar', {error: false, body: {}})
// })
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'));


// app.listen(PORT, ()=>{
//     console.log(`Server Running on Port:${PORT}`)
// })

// }
// module.exports = connectToDataBase;