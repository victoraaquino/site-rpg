const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.listen(4000, () => {
    console.log('escutando na porta 4000');
});

//cadastrar um novo player
server.post('/player', (req, res) => {
    const player = req.body;

    //resposta da api
    res.status(200).json({
        "status": "success",
        "message": "Player cadastrado com sucesso"
    });
});