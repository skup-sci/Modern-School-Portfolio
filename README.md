# School React App

## Overview
A modern, bilingual (Hindi/English) school website built with React, Tailwind CSS, and React Router. Features include:
- Internationalization (i18n) with context and content files
- Responsive design with Tailwind CSS
- Modular, reusable components
- Notice board, gallery, and more

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation
```powershell
cd react-app
npm install
```

### Running the App
```powershell
npm start
```

The app will be available at http://localhost:3000

## Project Structure
- `src/components/` — Reusable UI components
- `src/pages/` — Page components for routing
- `src/hooks/` — Custom React hooks
- `src/langContent.js` — Language strings for i18n
- `src/LanguageContext.jsx` — Context provider for language switching

## Contributing
- Use ESLint and Prettier for code consistency
- Write unit tests for new components
- Keep all user-facing text in language files for i18n

## License
MIT
