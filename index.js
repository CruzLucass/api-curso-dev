const res = require("express/lib/response");

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    return res.json({ mensagem: 'Agora atualizando automaticamente...' })
});

server.listen(3000, () => {
    console.log('Servidor está funcionando.')
});