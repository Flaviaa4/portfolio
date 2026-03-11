# Flavienne's Portfolio 

A modern, responsive portfolio website showcasing my work as an aspiring Front-End Developer. Built with Angular 18+ and featuring a clean design with dark mode support.

[Portfolio Preview](/lightmode.png)
[Dark Mode](/darkmode.png)

## Features
 
- **Dark Mode Toggle** - Switch between light and dark themes with persistent storage
- **Modern UI** - Clean, professional design with smooth animations
- **Performance Optimized** - Fast loading with Angular's latest optimizations
- **Standalone Components** - Built using Angular's modern standalone architecture
- **Tests** - Unit testing implementation across all components with form validation
- **Responsive Design** - Not yet implemented by now

## Tech Stack

- **Framework:** Angular 18
- **Language:** TypeScript
- **Styling:** Pure CSS (no frameworks)
- **Architecture:** Standalone Components
- **Build Tool:** Angular CLI

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher) - comes with Node.js
- **Angular CLI** (v18.x or higher)

Check your versions:
```bash
node --version
npm --version
ng --version
```

## Installation & Setup

1. **Clone the repository**
```bash
   git clone https://github.com/Flaviaa4/portfolio.git
   cd portfolio
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run the development server**
```bash
   ng serve
```

4. **Open your browser**
   
   Navigate to `http://localhost:4200/`
   
   The application will automatically reload if you change any source files.

## Project Structure
```
portfolio/
├── public/                 # Static assets
│   ├──darkmode.png
│   └──lightmode.png
│   └──portfolio-background.png
│   └──portfolio-background-dark.png
├── src/
│   ├── app/
│   │   ├──about/          # About Me component
│   │   ├── header/        # Header component with navigation
│   │   ├── hero/          # Hero/landing section
│   │   ├── app.html       # Main app template
│   │   └── app.ts         # Main app component
│   ├── styles.css         # Global styles
│   └── main.ts            # Application entry point
└── README.md
```

## Sections

- **Header** - Navigation with responsive burger menu and dark mode toggle
- **Hero** - Introduction section with profile image and key highlights
- **About** - Detailed background and journey
- **Skills** - Technical skills showcase (coming soon)
- **Experience** - Work experience timeline (coming soon)
- **Contact** - Get in touch form (coming soon)

## Dark Mode

The portfolio includes a fully functional dark mode that:
- Switches background themes (purple waves → cosmic space)
- Updates all UI elements and colors
- Persists user preference in localStorage
- Provides smooth transitions between modes

## Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

Mobile features include:
- Burger menu navigation
- Optimized layouts
- Touch-friendly interactions

## Available Scripts
```bash
# Development server
ng serve

# Build for production
ng build

# Run unit tests
ng test

# Run linting
ng lint

# Clear Angular cache
ng cache clean
```

## 📸 Screenshots

### Light Mode
![Light Mode Homepage](/lightmode.png)

### Dark Mode
![Dark Mode Homepage](/darkmode.png)

### Mobile View
![Mobile Responsive](./screenshots/mobile-view.png)

## Deployment

To build the project for production:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**Flavienne**

- GitHub: [@Flaviaa4](https://github.com/Flaviaa4)

## Acknowledgments

- Background images: Custom design
- Icons: SVG custom icons
