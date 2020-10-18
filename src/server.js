//importar plugin
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
//iniciando o express 
const server = express()
server
//utilizar body do request
.use(express.urlencoded({extended:true}))
//utilizando os arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//rotas da aplicação  
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-oprhanage', pages.createOprhanage)
.post('/save-orphanage', pages.saveOrphanage) 

// ligar servidor 
server.listen(5500)