import { app } from './app';

const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => console.log(`listening on port ${port}`));