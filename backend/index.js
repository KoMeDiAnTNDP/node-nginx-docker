const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

const server = app.listen(3000, () => console.log('Server is ready. PORT: 3000'));

const shutdown = () => {
  server.close(err => {
    if (!!err) {
      console.error(err);
      process.exit(1);
    }

    process.exit();
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
