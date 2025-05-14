# School React App - Shahid Pandit Ram Prasad Bismil Smarak Balika Inter College

## Overview
A modern, bilingual (Hindi/English) school website built with React, Tailwind CSS, Firebase, and React Router. Features include:
- Internationalization (i18n) with context and content files
- Responsive design with Tailwind CSS
- Firebase backend (Authentication, Firestore, Storage)
- Admin dashboard for content management
- Notice board, gallery, faculty management, and more
- Zero/low cost deployment solution

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)
- Firebase account (free tier)

### Installation
```powershell
cd react-app
npm install
```

### Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage
3. Create a web app in your project
4. Copy the Firebase configuration to the `.env` file:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Install Firebase CLI:
```
npm install -g firebase-tools
```

6. Login and initialize Firebase:
```
firebase login
firebase init
```

7. Choose Firestore, Hosting, and Storage options

### Deployment

```
npm run build
firebase deploy
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
