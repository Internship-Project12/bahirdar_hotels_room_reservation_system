import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from the server | Hotel Booking App',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
