const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Connection Success</h4> <p>Version 1.2</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '01',
      productName: 'iphone 13',
      price: 100000
    },
    {
      productId: '02',
      productName: 'Nokia 1200',
      price: 3000
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
