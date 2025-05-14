# Deployment Guide for School Website

This document provides a step-by-step guide on how to deploy the bilingual school website using Firebase's free tier, ensuring minimal costs.

## Prerequisites

1. Firebase account (create one at [https://firebase.google.com/](https://firebase.google.com/))
2. Node.js and npm installed on your machine
3. Firebase CLI installed (`npm install -g firebase-tools`)
4. Domain name (optional, for custom domain setup)

## Step 1: Set Up Firebase Project

1. Go to the Firebase console: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Click "Add project" and follow the wizard to create a new project
3. Name your project (e.g., "school-website-prod")
4. Disable Google Analytics if you want to minimize potential future costs
5. Click "Create project"

## Step 2: Enable Firebase Services

1. **Firebase Authentication**
   - In the Firebase console, go to "Authentication" 
   - Click "Get started"
   - Enable "Email/Password" sign-in method

2. **Firestore Database**
   - Go to "Firestore Database"
   - Click "Create database"
   - Start in production mode
   - Choose the location closest to your target audience (e.g., "asia-south1" for India)

3. **Firebase Storage**
   - Go to "Storage"
   - Click "Get started"
   - Follow the setup process
   - Choose the same location as your Firestore Database

4. **Firebase Hosting**
   - Go to "Hosting"
   - Click "Get started"
   - Follow the setup process

## Step 3: Enable Firebase Services

1. **Firebase Authentication**
   - In your Firebase console, go to "Authentication" section
   - Click "Get started"
   - Enable "Email/Password" authentication method
   - Create an admin user through the Firebase console or using the Admin SDK

2. **Firestore Database**
   - Go to "Firestore Database" section
   - Click "Create database"
   - Start in production mode
   - Choose a location closest to your target audience

3. **Storage**
   - Go to "Storage" section
   - Click "Get started"
   - Accept the default security rules for now (we'll update them later)
   
4. **Google Analytics (Optional)**
   - Go to "Analytics" section
   - Click "Get started"
   - Follow the setup process
   - This will provide the measurementId needed in your firebase.js config
   - Note: While analytics is free for most use cases, set data retention to the minimum needed to reduce any potential future costs

## Step 3: Configure Environment Variables

1. Open the `.env` file in the project root
2. Fill in the Firebase configuration values:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

You can find these values in the Firebase console:
- Go to Project Settings (gear icon)
- Scroll down to "Your apps" section
- Click on the web app
- Copy the values from the "Firebase SDK snippet" (choose "Config")

## Step 4: Initialize Firebase in the Project

1. Open a terminal in the project root directory
2. Login to Firebase:
   ```
   firebase login
   ```
3. Initialize Firebase:
   ```
   firebase init
   ```
4. Select the following features:
   - Firestore
   - Storage
   - Hosting
5. Select the Firebase project you created
6. Accept the default Firestore rules file
7. Accept the default Firestore indexes file
8. For Hosting, use "build" as the public directory
9. Configure as a single-page app: Yes
10. Set up automatic builds and deploys with GitHub: No

## Step 5: Deploy the Application

1. Build and deploy the application:
   ```
   npm run deploy
   ```

2. Alternatively, you can run the build and deployment steps separately:
   ```
   npm run build
   firebase deploy
   ```

3. Once deployment is complete, you'll receive a URL where your site is hosted (e.g., `https://your-project-id.web.app`)

## Step 6: Set Up Data Backups

The school website includes a built-in backup system for Firestore data. This system allows:

1. **Manual Backups**
   - Log in as an admin
   - Go to the admin dashboard
   - Select the "Manage Backups" tab
   - Choose either "Full Backup" or "Custom Backup"
   - The backup will download as a JSON file

2. **Automated Backups (Advanced Setup)**
   For more robust backup solutions, you can set up automated backups using Firebase Functions:
   
   1. Enable Firebase Functions in your project
   2. Create a scheduled function that exports Firestore data
   3. Store the exports in Firebase Storage or export to a dedicated backup service

   Example Firebase Function for scheduled backups:
   ```javascript
   const functions = require('firebase-functions');
   const firestore = require('@google-cloud/firestore');
   const client = new firestore.v1.FirestoreAdminClient();
   
   exports.scheduledFirestoreExport = functions.pubsub
     .schedule('0 0 * * 0')  // Run once a week at midnight on Sunday
     .onRun(async () => {
       const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT;
       const bucket = 'gs://YOUR_STORAGE_BUCKET_NAME';
       const collectionIds = ['notices', 'faculty', 'gallery'];
       
       const databaseName = client.databasePath(projectId, '(default)');
       
       try {
         const responses = await client.exportDocuments({
           name: databaseName,
           outputUriPrefix: bucket,
           collectionIds
         });
         
         console.log(`Operation Name: ${responses[0].name}`);
         return responses;
       } catch (err) {
         console.error(err);
         throw new Error('Export operation failed');
       }
     });
   ```

## Step 7: Seed Initial Data (Optional)

To populate the database with initial data:

```
npm run seed
```

## Step 8: Set Up Custom Domain (Optional)

If you have a custom domain:

1. Go to Firebase Hosting in the console
2. Click "Add custom domain"
3. Follow the steps to verify domain ownership and configure DNS

## SEO Optimization

The website includes an SEO component to improve search engine visibility. To leverage this feature:

1. **Page Metadata**
   - Each important page in your application should use the SEO component
   - Example:
   ```jsx
   import SEO from '../components/SEO';
   
   const HomePage = () => (
     <>
       <SEO 
         title="Welcome to Our School" 
         description="A premier educational institution offering quality education in both Hindi and English"
       />
       {/* Page content */}
     </>
   );
   ```

2. **Structured Data**
   - Use the SEO component's schema property to add structured data
   - Example for school information:
   ```jsx
   <SEO 
     title="About Our School"
     description="Learn about our history, mission and achievements"
     schema={{
       "@context": "https://schema.org",
       "@type": "School",
       "name": "शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज",
       "alternateName": "Shahid Pandit Ram Prasad Bismil Smarak Balika Inter College",
       "url": "https://yourschoolwebsite.com",
       "description": "A premier educational institution for girls",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Your School Address",
         "addressLocality": "City",
         "addressRegion": "State",
         "postalCode": "PIN",
         "addressCountry": "IN"
       }
     }}
   />
   ```

3. **Canonical URLs**
   - Set canonical URLs to prevent duplicate content issues
   - Example:
   ```jsx
   <SEO 
     title="Facilities"
     canonical="https://yourschoolwebsite.com/facilities" 
   />
   ```

4. **Sitemap**
   - Create a sitemap.xml file and place it in the public directory
   - Update robots.txt to reference the sitemap
   - After deployment, verify your site with Google Search Console

5. **Performance Optimization**
   - Use the lazy loading feature for images
   - Implement code splitting for faster initial load times
   - Follow Google's Core Web Vitals recommendations

## Cost Management

To keep costs at zero:
1. Stay within Firebase free tier limits:
   - Authentication: 10K/month
   - Firestore: 1GB storage, 50K reads, 20K writes, 20K deletes per day
   - Storage: 5GB storage, 1GB downloads per day, 20K uploads per day
   - Hosting: 10GB storage, 360MB/day downloads

2. Implement efficient data loading with pagination and limits
3. Optimize image sizes for storage
4. Use lazy loading for images and components

5. Monitor usage in the Firebase console regularly

## Maintenance

For ongoing maintenance:
1. To update the website, make changes to the code and run `npm run deploy` again
2. Monitor Firebase usage and quotas from the Firebase console
3. Keep backups of important data
4. Update dependencies regularly with `npm update`
