const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Secret pour la génération des tokens JWT (vous pouvez utiliser votre propre secret)
const secretKey = 'your-secret-key';

app.use(bodyParser.json());
app.use(cors()); // Ajouter le middleware cors

// Configurer les options CORS
const corsOptions = {
  origin: 'http://localhost:4200', // Remplacez par l'URL de votre application Angular
  methods: ['GET', 'POST'], // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'] // En-têtes autorisés
};

// Activer les options CORS pour toutes les routes
app.options('*', cors(corsOptions));

// Route GET pour la page de connexion
app.get('/login', (req, res) => {
  // Retourner le code HTML de la page de connexion
  res.sendFile('C:\\Users\\dhise\\Documents\\Code\\OneItemThing2\\src\\app\\pages\\login\\login.component.html');
});

// Route POST pour l'authentification
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Afficher les données reçues
  console.log('Données reçues :', req.body);

  // Vérification des informations d'identification
  if (email === 'user@example.com' && password === 'password') {
    // Authentification réussie, génération du token JWT
    const token = jwt.sign({ email }, secretKey);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.json({ success: true, token });
  } else {
    // Authentification échouée
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
