const express = require("express"); // MODULO EXTERNO
const route = express.Router(); //MANEJAR LAS RUTAS
const path = require("path"); // MODULO INTERNO
const fs  = require("fs");

const bodyParser = require("body-parser");
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({extended:true}));

var vistas = {root:path.join(__dirname, "../vistas/")};

route.get("/", (req,res) => {
res.sendFile("index.html", vistas);
});

route.get("/Sobremi/", (req,res) => {
res.sendFile("Sobremi.html",vistas);
});

route.get("/Criminalistica/", (req,res) => {
res.sendFile("Criminalistica.html",vistas);
});

route.get("/Criminologia/", (req,res) => {
res.sendFile("Criminologia.html",vistas);
});

route.get("/Diferencia/", (req,res) => {
res.sendFile("Diferencia.html",vistas);
});

route.get("/Portafolio/", (req,res) => {
res.sendFile("Portafolio.html",vistas);
});

route.post("/DATOS", (req,res) => {
    const {cumpleanos, edad, telefono, facebook, ocupacion, turno, correo, cuatrimestre} = req.body;
    console.log(cumpleanos);
    console.log(edad);
    console.log(telefono);
    console.log(facebook);
    console.log(ocupacion);
    console.log(turno);
    console.log(correo);
    console.log(cuatrimestre);
    fs.readFile('vistas/Sobremi.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error interno del servidor');
        }

        let html = data.replace('<!--Cumpleaños-->', cumpleanos);
        html = html.replace('<!--Edad-->', edad);
        html = html.replace('<!--Telefono-->', telefono);
        html = html.replace('<!--Facebook-->' , facebook);
        html = html.replace('<!--Ocupacion-->', ocupacion);
        html = html.replace('<!--Turno-->', turno);
        html = html.replace('<!--Correo-->', correo);
        html = html.replace('<!--Cuatrimestre-->', cuatrimestre);
        res.send(html);
    });
});

module.exports = route;