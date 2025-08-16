## Live Demo  
[View Cocktail Explorer on Vercel](https://cocktail-explorer-react.vercel.app/)

# Cocktail Explorer (React)  

React JavaScript REST-API Bootstrap License

A modern and interactive Cocktail Explorer frontend built with React.  
It allows users to browse a wide variety of cocktails, search by name or category, and view detailed recipes with ingredients and instructions.  
Perfect for learning React fundamentals, API integration, component-based design, and responsive UI development.

---

## Features
- **Browse Cocktails** – Explore a wide range of cocktails fetched from an external API.  
- **Search Functionality** – Find cocktails by name, ingredient, or category.  
- **Detailed View** – Get ingredients, measurements, and preparation steps for each cocktail.  
- **Responsive Design** – Built with Bootstrap for a mobile-friendly experience.  
- **Reusable Components** – Modular React components for scalability.  
- **Extensible** – Can be expanded with favorites, user ratings, or custom mocktails.  

---

## Project Structure
```
Cocktail-Explorer-React/
│
├── public/                 # Static files (index.html, favicon, etc.)
├── src/
│   ├── components/         # Reusable UI Components
│   │   ├── Navbar.js       # Top navigation bar
│   │   ├── SearchBar.js    # Search input
│   │   ├── CocktailCard.js # Card layout for cocktails
│   │   └── CocktailList.js # List rendering of cocktails
│   ├── pages/              # Page-level components
│   │   ├── Home.js         # Homepage with featured cocktails
│   │   └── Details.js      # Cocktail details page
│   ├── App.js              # Main app entry
│   ├── index.js            # ReactDOM render
│   └── styles/             # CSS / Bootstrap overrides
│
├── package.json            # Dependencies & scripts
├── README.md
└── .gitignore
```

---

## Setup Instructions

### 1 Clone the Repository
```bash
git clone https://github.com/ananthakrishnan234/Cocktail-Explorer-React.git
cd Cocktail-Explorer-React
```

### 2 Install Dependencies
```bash
npm install
```

### 3 Start the Development Server
```bash
npm start
```

The app will run on **http://localhost:3000/**  

---

## Example User Flow
1. Open the app → See featured cocktails.  
2. Use the **search bar** → Find “Margarita”.  
3. Click on a cocktail → View **ingredients** and **instructions**.  
4. Explore more → Navigate through categories.  

---

## Technologies Used
- React 18  
- JavaScript (ES6+)  
- Bootstrap 5  
- Axios (for API calls)  
- React Router DOM  

---

## License
This project is licensed under the MIT License – see the LICENSE file for details.

---

## Contact
**Ananthakrishnan Sudhakaran**  
📧 Email: [ananthakrishnans234@gmail.com](mailto:ananthakrishnans234@gmail.com)  
💼 GitHub: [ananthakrishnan234](https://github.com/ananthakrishnan234)  
💼 LinkedIn: [Ananthakrishnan Sudhakaran](https://www.linkedin.com/in/ananthakrishnan-sudhakaran)  
