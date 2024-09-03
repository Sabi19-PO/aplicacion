const express = require ("express");
require("dotenv").config();
const app = express();

const ruta1 = require('./routes/ruta1');
const ruta2 = require('./routes/ruta2');

app.use(ruta1);
app.use(ruta2);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("servidor en http://localhost:" +port);
});

