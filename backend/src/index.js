require('dotenv/config');
const app = require('./app');

const port = process.env.PORT || 3333

const server = app.listen(port, function () {
    console.log(`Servidor ativo na porta ${port}`);
});

process.on('SIGINT', () => {
    process.kill(process.pid)
    server.close(() => {
        console.log('Process terminated')
    });
});
