const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


let k=0;
// create data Init 
const createData = (id,code, name, change, percentChange)  => {
  let value;
  let price = (Math.random() * (99.99 - 0.01) + 0.01).toFixed(2);
  let volume = Math.floor((Math.random()*1000000)+1000);
  value = Math.round(price * volume);
  return { id, code, name, price, volume, value, change, percentChange };
}
const createDataTable = (numberCompany) => {
  k+=1;
  let arrayData=[];
  for (let i=0 ; i<numberCompany; i++)
  {
    arrayData.push(createData(i,'CBA.AX','BANK OF AUSTRALIA',0,0));
  }
  return arrayData;
  
}


// create DataInit
const dataInit =   createDataTable(30);
const dataInitCopy = JSON.parse(JSON.stringify(dataInit ));
let data;



// change price +/- 5% and volume +/- [10-30]
const changeData = (data) => {
  data.forEach((element,index,newArray)=>{
    newArray[index].price = (parseFloat(element.price) + (Math.random()*(0.1-0) - 0.05)*parseFloat(element.price)).toFixed(2);
    newArray[index].volume = parseInt(element.volume) + Math.floor(Math.random()*(30-10) + 10);
    newArray[index].value = Math.round(newArray[index].price * newArray[index].volume);
    newArray[index].change = (parseFloat(newArray[index].price) - parseFloat(dataInitCopy[index].price)).toFixed(2);
    newArray[index].percentChange= ((parseFloat(newArray[index].price) - parseFloat(dataInitCopy[index].price))/parseFloat(dataInitCopy[index].price)*100).toFixed(2);
  })
  return data;
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
  if ( k == 1 )
  { 
    res.send(dataInit);
    k+=1;
    data= changeData(dataInit);
  }
  else
  {
  res.send(data);
  data = changeData(data); 
  }
} )
app.listen(port, () => console.log(`Listening on port ${port}`));
