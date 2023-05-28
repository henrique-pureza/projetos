// Importar os pacotes
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Importar o User
const User = require("./models/User");

// Chamar o pacote express
const app = express();

// Configurar o tipo de envio e recebimento
app.use(express.json());

// Configurar a porta
app.listen(3000);

// Conectar ao servidor
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Conexão com o MongoDB Atlas feita com sucesso!");
}).catch((erro) => {
    console.log("Ocorreu um erro...");
});

// Criar uma rota pública de boas-vindas
app.get("/", (req,res) => {
    res.status(200).json({mensagem: "Bem vindo ao nosso sistema de login com JWT!"});
});

// Criar a rota de cadastro do usuário
app.post('/auth/register', async(req,res) => {
    // Resgatar as informações do corpo da requisição
    const {name, email, password} = req.body

    // Verificar se o usuário já existe
    const userExists = await User.findOne({email: email})
    if (userExists) {
        return res.status(422).json({message: "Usuário já existe. Escolha outro email."})
    }

    // Criar a password criptografada
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Criar o usuário
    const user = new User({
        name, 
        email,
        password: passwordHash
    })

    // Registrar no banco
    try {
        await user.save()
        res.status(201).json({message: "Usuário cadastrado no Banco com sucesso."})
    } catch (erro) {
        res.status(500).json({message: "Erro ao cadastrar."})
    }

})

// Rota do login
app.post('/auth/login', async(req,res) => {
    // Pegar as informações do corpo da req
    const {email, password} = req.body
    // Verificar se existe o usuário no banco de dados
    const user = await User.findOne({email: email})
    if (!user) {
        return res.status(404).json({message: "Usuário não encontrado."})
    }
    // Verificar a senha
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return res.status(422).json({message: "Senha incorreta."})
    }
    // Fazer a autenticação do usuário através do token
    try {
        const secret = process.env.SECRET
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
        )
        res.status(200).json({message: "Authenticação realizada com sucesso.", token})
    } catch (erro) {
        res.status(500).json({message: "Ocorreu um erro na authenticação"})
    }
})

// Verificar a existência do token
function checkToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        return res.status(401).json({msg: "Acesso Negado !!!"})
    }
 
    try{
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch(erro){
        res.status(400).json({msg: "Token inválido"})
    }
}

// Rota privada que só é possível acessar quem tem o token
app.get("/user/:id", checkToken, async(req,res) => {
    const id = req.params.id
 
    //Verificar se o usuário existe
    const user = await User.findById(id, '-password')
    if(!user){
        return res.status(404).json({msg: "Usuário não encontrado"})
    }
    res.status(200).json({user})
})