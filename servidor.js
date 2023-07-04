const express = require("express");
const servidor = express();

servidor.use(express.json())
servidor.use(express.static("vistas"));

servidor.use("/",require("./rutas/solicitud.js"));

servidor.listen(3000, "127.0.0.1",() =>
{
    console.log("SERVIDOR CORRIENDO EN EL PUERTO 3000")
});
