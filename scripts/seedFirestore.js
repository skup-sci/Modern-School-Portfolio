// scripts/seedFirestore.js
const { initializeApp } = require('firebase/app');
const { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  serverTimestamp 
} = require('firebase/firestore');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Sample data
const noticesData = [
  {
    title: 'Applications for Admission 2024-25 are open',
    titleHi: '2024-25 के लिए प्रवेश आवेदन खुले हैं',
    content: 'Applications for the new academic year 2024-25 are now open. Last date to apply is June 30, 2024.',
    contentHi: 'नए शैक्षणिक वर्ष 2024-25 के लिए आवेदन अब खुले हैं। आवेदन करने की अंतिम तिथि 30 जून, 2024 है।',
    publishDate: new Date('2024-05-10'),
    isActive: true
  },
  {
    title: 'Results for Final Examination 2023-24 have been declared',
    titleHi: '2023-24 की अंतिम परीक्षा के परिणाम घोषित किए गए हैं',
    content: 'Results for the final examination for the academic year 2023-24 have been declared. Students can check their results online or collect them from the school office.',
    contentHi: 'शैक्षणिक वर्ष 2023-24 के लिए अंतिम परीक्षा के परिणाम घोषित कर दिए गए हैं। छात्र अपने परिणाम ऑनलाइन देख सकते हैं या स्कूल कार्यालय से प्राप्त कर सकते हैं।',
    publishDate: new Date('2024-04-28'),
    isActive: true
  },
  {
    title: 'Annual Cultural Program scheduled for June 15, 2024',
    titleHi: 'वार्षिक सांस्कृतिक कार्यक्रम 15 जून, 2024 के लिए निर्धारित',
    content: 'The Annual Cultural Program is scheduled for June 15, 2024. All parents are cordially invited to attend the event.',
    contentHi: 'वार्षिक सांस्कृतिक कार्यक्रम 15 जून, 2024 के लिए निर्धारित है। सभी अभिभावकों को कार्यक्रम में शामिल होने के लिए सादर आमंत्रित किया जाता है।',
    publishDate: new Date('2024-04-15'),
    isActive: true
  }
];

const facultyData = [
  {
    name: 'Dr. Rajesh Kumar',
    nameHi: 'डॉ. राजेश कुमार',
    position: 'Principal',
    positionHi: 'प्रिंसिपल',
    department: 'Administration',
    qualification: 'Ph.D in Education',
    experience: '20 years',
    order: 1
  },
  {
    name: 'Mrs. Sunita Sharma',
    nameHi: 'श्रीमती सुनीता शर्मा',
    position: 'Vice Principal',
    positionHi: 'उप प्रिंसिपल',
    department: 'Administration',
    qualification: 'M.A. in English',
    experience: '15 years',
    order: 2
  }
];

const adminUser = {
  email: 'admin@example.com',
  password: 'adminpassword123',
  role: 'admin',
  name: 'Admin User'
};

// Seed function
async function seedData() {
  try {
    // Check if notices collection is empty
    const noticesSnapshot = await getDocs(collection(db, 'notices'));
    if (noticesSnapshot.empty) {
      console.log('Seeding notices...');
      for (const notice of noticesData) {
        await addDoc(collection(db, 'notices'), {
          ...notice,
          publishDate: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });
      }
      console.log('Notices seeded successfully!');
    } else {
      console.log('Notices collection is not empty. Skipping seed.');
    }

    // Check if faculty collection is empty
    const facultySnapshot = await getDocs(collection(db, 'faculty'));
    if (facultySnapshot.empty) {
      console.log('Seeding faculty...');
      for (const faculty of facultyData) {
        await addDoc(collection(db, 'faculty'), {
          ...faculty,
          createdAt: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });
      }
      console.log('Faculty seeded successfully!');
    } else {
      console.log('Faculty collection is not empty. Skipping seed.');
    }

    // Create admin user if needed
    try {
      console.log('Creating admin user...');
      const userCredential = await createUserWithEmailAndPassword(auth, adminUser.email, adminUser.password);
      
      // Add admin role in Firestore
      await addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        role: adminUser.role,
        name: adminUser.name,
        email: adminUser.email,
        createdAt: serverTimestamp()
      });
      
      console.log('Admin user created successfully!');
    } catch (error) {
      // If user already exists, this will fail, which is fine
      console.log('Admin user may already exist:', error.message);
    }

    console.log('Data seeding completed!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

// Run the seed function
seedData()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Error in seed script:', error);
    process.exit(1);
  });
