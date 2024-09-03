module.exports = (req, res, next) => {
    const currentDateTime = new Date().toLocaleString();
    console.log(`Fecha y hora: ${currentDateTime}`);
    console.log('Mensaje: Hola, sí pude');
    next();
  }; 