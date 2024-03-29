const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`AWS AUTO SCALING NODEJS APP UP and listening to port ${port}`);
})
