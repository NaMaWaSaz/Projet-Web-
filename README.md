# **Plateforme E-Commerce**

Une plateforme e-commerce moderne conçue pour offrir une expérience utilisateur fluide, sécurisée et performante.

---

## **Table des Matières**
1. [À propos du projet](#à-propos-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Structure du projet](#structure-du-projet)
5. [Démarrage rapide](#démarrage-rapide)
6. [Exemples de code](#exemples-de-code)
7. [Contribuer](#contribuer)
8. [Licence](#licence)

---

## **À propos du projet**
Cette plateforme e-commerce offre une expérience d'achat moderne et conviviale. Elle est conçue pour être évolutive et facile à maintenir, avec un rendu frontend efficace, des opérations backend sécurisées et une gestion des paiements fiable.

---

## **Fonctionnalités**
- Authentification utilisateur avec JWT
- Interface responsive avec Tailwind CSS
- Recherche de produits avec FTS5
- Gestion d’état en temps réel avec Zustand
- Traitement des paiements sécurisé via Stripe
- Base de données intégrée SQLite pour un stockage léger et performant

---

## **Technologies utilisées**

### **Frontend**
- **React 18.3.1** : Bibliothèque pour la création d’interfaces utilisateur
- **TypeScript** : JavaScript typé pour plus de sécurité
- **Vite** : Outil de build rapide et serveur de développement
- **Tailwind CSS** : Framework CSS basé sur les utilitaires
- **Lucide React** : Bibliothèque d'icônes
- **clsx** : Utilitaire pour les classes conditionnelles
- **React Router DOM** : Routage côté client

### **Gestion d’État**
- **Zustand** : Gestion légère de l’état global et local

### **Formulaires et Validation**
- **React Hook Form** : Gestion d’état et validation des formulaires
- **Zod** : Bibliothèque de validation basée sur des schémas

### **Backend**
- **Node.js** : Environnement d'exécution JavaScript
- **Express** : Framework minimaliste pour Node.js
- **JWT (jsonwebtoken)** : Authentification basée sur des tokens
- **bcryptjs** : Hashage sécurisé des mots de passe
- **SQLite avec better-sqlite3** : Base de données intégrée avec FTS5 pour la recherche en texte intégral

### **Paiements**
- **Stripe** : Passerelle de paiement sécurisée

### **Outils de Développement**
- **ESLint** : Linter pour un code propre et cohérent
- **TypeScript ESLint** : Linting spécifique à TypeScript
- **dotenv** : Gestion des variables d’environnement

### **Gestion des Fichiers et CORS**
- **Multer** : Gestion des uploads de fichiers
- **CORS** : Middleware pour le partage des ressources entre origines

---

## **Structure du projet**
```
project/
├── src/                  # Code source du frontend
│   ├── components/       # Composants React
│   ├── pages/            # Composants de pages
│   ├── hooks/            # Hooks personnalisés
│   ├── store/            # Stores Zustand
│   ├── utils/            # Fonctions utilitaires
│   └── types/            # Types TypeScript
├── server/               # Code source du backend
│   ├── routes/           # Routes Express
│   ├── models/           # Modèles de données
│   ├── middleware/       # Middleware Express
│   ├── db/               # Configuration de la base de données
│   └── utils/            # Utilitaires backend
└── public/               # Fichiers statiques
```

---

## **Démarrage rapide**

### **Prérequis**
1. Installez [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/).
2. Clonez le dépôt :
   ```bash
   git clone https://github.com/nom-utilisateur/repo.git
   cd repo
   ```

### **Installation**
1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Configurez les variables d’environnement dans un fichier `.env` :
   ```env
   PORT=3000
   JWT_SECRET=your-secret-key
   STRIPE_SECRET_KEY=your-stripe-key
   ```

### **Lancer l’application**
1. Démarrez le serveur backend :
   ```bash
   cd server
   npm run dev
   ```
2. Démarrez le frontend :
   ```bash
   cd src
   npm run dev
   ```

---

## **Exemples de code**

### **Gestion d’État (Zustand)**
```typescript
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
```

### **Validation de Schéma (Zod)**
```typescript
const loginSchema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});
```

### **Configuration de la Base de Données (SQLite)**
```javascript
import Database from 'better-sqlite3';
const db = new Database('database.sqlite');
```

---

## **Contribuer**
Les contributions sont les bienvenues ! Suivez ces étapes :  
1. Forkez le dépôt.  
2. Créez une branche (`git checkout -b nom-de-fonctionnalité`).  
3. Effectuez vos modifications et créez un commit.  
4. Poussez les modifications vers votre dépôt forké.  
5. Ouvrez une pull request.  

---

## **Licence**
Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

---
