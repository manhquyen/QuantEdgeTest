const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

let id = 0;
function createData(code, name, change, percentChange) {
  id += 1;
  let price = Math.floor((Math.random() * 100) + 1);
  let value = Math.floor((Math.random() * 100) + 1);
  return { id, code, name, price, value, change, percentChange };
}

const dataInit = [
  createData('CBA.AX','BANK OF AUSTRALIA', 24, 4.0),
  createData('SRX.AX','MEDICAL LIMITED', 37, 4.3),
  createData('ANZ.AX', 'ZEALAND BANKING', 24, 6.0),
  createData('BHP.AX', 'BHP BILLION', 67, 4.3),
  createData('WBC.AX', 'WESTPAC BANKING', 49, 3.9),
];

function calculator(data1,data2){
  for (let i=0 ; i<data1.length(); i++)
  {
    data2[i].value=data2[i].value - data1[i].value;
  }
  return data2;
}

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.get('/api/getDatas',(req,res) => {
  let data = [
    createData('CBA.AX','BANK OF AUSTRALIA', 24, 4.0),
    createData('SRX.AX','MEDICAL LIMITED', 37, 4.3),
    createData('ANZ.AX', 'ZEALAND BANKING', 24, 6.0),
    createData('BHP.AX', 'BHP BILLION', 67, 4.3),
    createData('WBC.AX', 'WESTPAC BANKING', 49, 3.9),
  ];
  res.send(data);
} )
app.listen(port, () => console.log(`Listening on port ${port}`));
