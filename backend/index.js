import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());
const puerto = 3000;
import {listarCategorias, guardarContacto} from './db.js';
app.get('/', (peticion, respuesta) => {
    let agenteDeUsuario = peticion.header("user-agent");
    respuesta.send("Inicio: " + agenteDeUsuario);
});
app.get('/categorias', async (peticion, respuesta) => {
    const resultado = await listarCategorias();
    respuesta.json(resultado);
});
app.post('/contacto', async (peticion, respuesta) => {
    const resultado = await guardarContacto(peticion);
    respuesta.json(resultado);
});

app.listen(puerto, err => {
    if (err) {
        console.error("Error escuchando: ", err);
        return;
    }
    console.log(`Escuchando en el puerto :${puerto}`);
});