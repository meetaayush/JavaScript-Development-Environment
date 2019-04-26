import express from 'express';
import open from 'open';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running at port ${PORT}`);
    open(`http://localhost:${PORT}`)
  }
})