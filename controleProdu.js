
const mongoose = require('mongoose');


const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
     valor: {type: Number, required: true},
  
 })

const Produto =  mongoose.model('Produto', produtoSchema);



 const addProduto = async (req, res)=>{

    let produto = new Produto(req.body);
  
    try{
        
        let doc = await produto.save()
        res.redirect('/produtos')
    }
    catch(error){
        res.render('adicionar', {error, body: req.body})
    }
 }


const multer = require('multer');

var storage =   multer.diskStorage({
    filename: function(req, file, cb){
        let nome = req.body.nome + ".jpg";
        cb(null, nome)
    }, 
    destination: function(req, file, cb){
        let path = './public/fotos'
        cb(null, path)
    },
    
})
 upload = multer({storage})


 const allProdutos = async(req, res )=>{
    try{
        let produtos = await Produto.find({})
        res.render('allprodutos', {produtos})
    }
    catch(error){
        res.send(error)
    }
 }
 

    
     module.exports = { allProdutos, addProduto, upload} ;
     









