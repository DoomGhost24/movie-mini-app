const express = require('express');
const app = express();
const port = 8080;
import movies from './moviesComponent';

// const movies = [
//     {title: 'Mean Girls'},
//     {title: 'Hackers'},
//     {title: 'The Grey'},
//     {title: 'Sunshine'},
//     {title: 'Ex Machina'},
//   ];
  

app.get('/movies', (req, res) => {
    res.send(movies)
})

app.listen(port, () => console.log(`Movie app listening on port ${port}!`))