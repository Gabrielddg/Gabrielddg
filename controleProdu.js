
const mongoose = require('mongoose');


const produtoSchema = new mongoose.Schema({
    
    nome: {type: String, required: true},
     valor: {type: Number, required: true},
     tipo: {type: String, required: true},
 })



const Produto =  mongoose.model('Produto', produtoSchema);


 const addProduto = async (req, res)=>{

    let produto = new Produto(req.body);

    try{
        let doc = await produto.save()
        res.send("Produto adicionado com sucesso")
    }
    catch(error){
        res.render('adicionar', {error, body: req.body})
    }
 }

 const allProdutos = async(req, res )=>{
    try{
        let produtos = await Produto.find({})
        res.render('allprodutos', {produtos})
    }
    catch(error){
        res.send(error)
    }
 }
 module.exports = { allProdutos, addProduto} ;





// tent colocar um identificador na foto, sendo que éla ira para uma pasta
//, sem contato com o banco de dados, mas quando for feita a requisição o id fosse 
//chamado também, logo a foto viria.



// bac



// const mongoose = require('mongoose')



// const produtoSchem = new mongoose.Schema({
    
//     nome: {type: String, required: true},
//      valor: {type: Number, required: true},
//      tipo: {type: String, required: true},
//      foto: {type: String, required}
//  })


// // function produtoSchema(req, res){

// //     var  produtoTeste = new produtoTeste({
// //         nome: req.body.nome,
// //         valor: req.body.valor,
// //         tipo: req.body.tipo,
// //         valor: req.file.filename       
// //     })
// // }

// // const Produto =  mongoose.model('Produto', produtoSchema);
// const Produto = produtoSchema();

//  const addProduto = async (req, res)=>{

//     let produto = new Produto(req.body);

//     try{
//         let doc = await produto.save()
//         res.send("Produto adicionado com sucesso")
//     }
//     catch(error){
//         res.render('adicionar', {error, body: req.body})
//     }
//  }

//  const allProdutos = async(req, res )=>{
//     try{
//         let produtos = await Produto.find({})
//         res.render('allprodutos', {produtos})
//     }
//     catch(error){
//         res.send(error)
//     }
//  }
//  module.exports = {addProduto, allProdutos} ;









