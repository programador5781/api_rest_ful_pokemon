// Importo el módulo `Router` de la librería `express` y la función `getTypehandler` del archivo `../handlers/typeHandler.js`.

const { Router } = require("express");
const { getTypeHandler } = require("../handlers/typesHandler")


//Creo una instancia de `Router` llamada `typeRouter`.
const typeRouter = Router();



// En este handler se define una sola ruta:
// 1. La ruta es una solicitud `GET` a la ruta raíz `/`. Cuando se hace una solicitud a esta ruta, se invoca la función `getTypeHandler`.
typeRouter.get("/", getTypeHandler );



// Exportamos `typeRouter` como un módulo para que se pueda importar y usar en otras partes de la aplicación.
module.exports = typeRouter;