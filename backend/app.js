import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from the server | Hotel Booking App',
  });
});

export default app;
