const express = require('express');
const mongoose = require('mongoose');


const app = express();


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gestionCours', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connecté'))
.catch((err) => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
