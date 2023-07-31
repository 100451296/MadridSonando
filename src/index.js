import httpsServer from "./app.js";
import syncDatabase from "./libs/syncDatabase.js";

// Llama a la función de sincronización cuando la aplicación inicia
syncDatabase().then(() => {
  // Inicia el servidor una vez que los modelos están sincronizados
  const port = 4001; // Puerto en el que se ejecutará el servidor
  const server = httpsServer.listen(port, () => {
    // Obtener la dirección del servidor
    const address = server.address();
    console.log("Servidor HTTPS escuchando en", address.address + ":" + address.port);
  });

});
