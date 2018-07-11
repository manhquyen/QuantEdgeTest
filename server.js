const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


// create data Init 
const createData = (id,change, percentChange)  => {
  let value;
  let price = Math.round((Math.random() * (99.99 - 0.01) + 0.01)*100)/100;
  let volume = Math.floor((Math.random()*1000000)+1000);
  let code = (Math.random().toString(36).substring(2, 5)) + ".AX";
  let name =  "Company " +(Math.random().toString(36).substring(2, 10))
  value = Math.round(price * volume);
  return { id, code, name, price, volume, value, change, percentChange };
}
const createDataTable = (numberCompany) => {
  let arrayData=[];
  for (let i=0 ; i<numberCompany; i++)
  {
    arrayData.push(createData(i,0,0));
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
    newArray[index].price = Math.round((parseFloat(element.price) + (Math.random()*(0.1-0) - 0.05)*parseFloat(element.price))*100)/100;
    newArray[index].volume = parseInt(element.volume) + Math.floor(Math.random()*(30-10) + 10);
    newArray[index].value = Math.round(newArray[index].price * newArray[index].volume);
    newArray[index].change = Math.round((parseFloat(newArray[index].price) - parseFloat(dataInitCopy[index].price))*100)/100;
    newArray[index].percentChange= Math.round(((parseFloat(newArray[index].price) - parseFloat(dataInitCopy[index].price))/parseFloat(dataInitCopy[index].price)*100)*100)/100;
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

    res.send(dataInit);
    changeData(dataInit);

} )
app.listen(port, () => console.log(`Listening on port ${port}`));
