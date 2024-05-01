const express = require('express');
const app = express();
const port = 80;
app.use(express.static('public'));



app.get('/bebras', (req, res) => {
  const content = '<h1>Labas Bebrai</h1>';
  res.send(content);
});

app.get('/bebras/jonas', (req, res) => {
  const content = '<h1>Labas Bebrai vardu Jonas</h1>';
  res.send(content);
});

app.get('/zveris/:animal', (req, res) => {
  const animal = req.params.animal;
  const content = '<h1>Labas, ' + animal + '</h1>';
  res.send(content);
});

// app.get('/sum/:a1/plus/:a2', (req, res) => {
//   const a = parseInt(req.params.a1);
//   const b = parseInt(req.params.a2);
//   const rez = a + b;
//   const content = '<h1>Suma: ' + rez + '</h1>';
//   res.send(content);

// });
// app.get('/sum/:a1/:a2', (req, res) => {
//   const a = parseInt(req.params.a1);
//   const b = parseInt(req.params.a2);
//   const rez = a + b;
//   const content = '<h1> suma:' + rez + '</h1>';
//   res.send(content)
// })

// app.get('/calc/:a1/:what/:a2', (req, res) => {
//   const a = parseInt(req.params.a1);
//   const b = parseInt(req.params.a2);
//   let rez = '';
//   if (req.params.what == 'plus') {
//    rez = a + b
//   } else if (req.params.what == 'minus') {
//     rez = a - b;
//   }
//   const content = '<h1> suma:' + rez + '</h1>';
//   res.send(content)
// })

app.get('/narve', (req,res) => {
  const veiksmas = req.query.sedi;
  const veiksmas2 =req.query.guli;
  const content = '<h1> sedi:' + veiksmas + '</h1><h1>guli:' + veiksmas2 + '</h1>';
  res.send(content);
})

// Padaryti sumatorių, kuris rodytų rezultatą bet kokių skaičių užrašytų pvz taip: localhost/calc/58/plus/32 rodytų sumą, localhost/calc/58/minus/32 rodytų skirtumą

app.get('/sumatorius', (req, res) => {

  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  const rez = a + b;
  const content = '<h1>SUMA: ' + rez + '</h1>';
  res.send(content);

});
app.listen(port, () => {
  console.log(`Kuku veikia ant ${port}porto`);
})