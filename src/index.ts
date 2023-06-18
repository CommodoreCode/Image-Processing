import express from 'express';
import route from './Routers/indexRoute';
import path from 'path';
import imageMod from './sharp';

const app = express();
const port = 3000;

app.use('/api', route);

app.use('./images/Original', express.static(path.join(__dirname, 'Original')));
app.use('./images/Modified', express.static(path.join(__dirname, 'Modified')));

app.get('/resize', async (req, res) => {
  const imageUrl = './images/Original/encenadaport.jpg';
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  try {
    const buffer = await imageMod(imageUrl, width, height);

    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
  } catch (err) {
    console.error(err);
    res.status(200).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
