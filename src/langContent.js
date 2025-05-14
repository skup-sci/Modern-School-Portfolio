const langContent = {
  en: {    // Navigation
    home: 'Home',
    about: 'About',
    admission: 'Admission',
    gallery: 'Gallery',
    academics: 'Academics',
    facilities: 'Facilities',
    faculty: 'Faculty',
    notices: 'Notices',
    contact: 'Contact',
    login: 'Login',
    logout: 'Logout',

    // Auth
    signIn: 'Sign in to your account',
    email: 'Email address',
    password: 'Password',
    selectRole: 'Select Role',
    student: 'Student',
    teacher: 'Teacher',
    admin: 'Admin',
    loginFailed: 'Login failed',
    errorOccurred: 'An error occurred',    // Admin Dashboard
    manageNotices: 'Manage Notices',
    manageFaculty: 'Manage Faculty',
    manageGallery: 'Manage Gallery',
    manageAcademics: 'Manage Academic Content',
    manageBackups: 'Manage Backups',
    
    // Backup Manager
    backupManager: 'Backup Manager',
    fullBackup: 'Full Backup',
    fullBackupDescription: 'Create a complete backup of all school data including notices, faculty, and gallery images.',
    createFullBackup: 'Create Full Backup',
    customBackup: 'Custom Backup',
    customBackupDescription: 'Specify collections to backup (comma-separated).',
    createCustomBackup: 'Create Custom Backup',
    collections: 'Collections',
    scheduledBackups: 'Scheduled Backups',
    scheduledBackupDescription: 'Set up automated backups on a schedule (coming soon).',
    setupScheduledBackups: 'Setup Scheduled Backups',
    creating: 'Creating...',
    addNotice: 'Add Notice',
    addFaculty: 'Add Faculty Member',
    title: 'Title',
    content: 'Content',
    name: 'Name',
    position: 'Position',
    qualification: 'Qualification',
    experience: 'Experience',
    actions: 'Actions',
    date: 'Date',

    // Footer
    locationMapTitle: 'Location Map',
    contactAddress: 'Pachma, Jamui Pandit, Maharajganj',
    contactPhone: 'Phone: +91 12345 67890',
    quickLinks: 'Quick Links',
    learnMore: 'Learn More',
    allRightsReserved: 'All rights reserved.',
    recognized: 'Recognized by Department of Education, Government of India',
    
    // School Info
    schoolName: "S.P.R.B. Smarak Balika Inter College",
    aboutTitle: "About Us",
    aboutContent: "Welcome to S.P.R.B. Smarak Balika Inter College, a premier institution dedicated to providing quality education to girls. Our vision is to empower young women through education, instilling in them the values of knowledge, character, and service.",

    // Announcements
    announcementAdmission: "Important: Applications for Admission 2024-25 are now open!",
    announcementExam: "Results for Final Examination 2023-24 have been declared!",
    announcementEvent: "Annual Cultural Program scheduled for June 15, 2024",

    // Common
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    errorBoundary: {
      title: 'Something went wrong',
      message: 'Please reload the page or try again later.',
      reloadButton: 'Reload Page'
    },
    unauthorized: {
      title: 'Unauthorized Access',
      message: 'You do not have permission to access this page.'
    }
  },
  hi: {    // Navigation
    home: 'होम',
    about: 'हमारे बारे में',
    admission: 'प्रवेश',
    gallery: 'गैलरी',
    academics: 'शैक्षणिक',
    facilities: 'सुविधाएँ',
    faculty: 'शिक्षक',
    notices: 'सूचनाएं',
    contact: 'संपर्क करें',
    login: 'लॉगिन',
    logout: 'लॉगआउट',

    // Auth
    signIn: 'अपने खाते में साइन इन करें',
    email: 'ईमेल पता',
    password: 'पासवर्ड',
    selectRole: 'भूमिका चुनें',
    student: 'छात्र',
    teacher: 'शिक्षक',
    admin: 'प्रशासक',
    loginFailed: 'लॉगिन विफल रहा',
    errorOccurred: 'एक त्रुटि हुई',    // Admin Dashboard
    manageNotices: 'सूचनाएं प्रबंधित करें',
    manageFaculty: 'शिक्षक प्रबंधित करें',
    manageGallery: 'गैलरी प्रबंधित करें',
    manageAcademics: 'शैक्षणिक सामग्री प्रबंधित करें',
    manageBackups: 'बैकअप प्रबंधित करें',
    
    // Backup Manager
    backupManager: 'बैकअप प्रबंधक',
    fullBackup: 'पूर्ण बैकअप',
    fullBackupDescription: 'सूचनाएं, शिक्षक और गैलरी छवियों सहित सभी स्कूल डेटा का एक पूर्ण बैकअप बनाएं।',
    createFullBackup: 'पूर्ण बैकअप बनाएं',
    customBackup: 'कस्टम बैकअप',
    customBackupDescription: 'बैकअप करने के लिए कलेक्शन निर्दिष्ट करें (अल्पविराम से अलग)।',
    createCustomBackup: 'कस्टम बैकअप बनाएं',
    collections: 'कलेक्शन',
    scheduledBackups: 'निर्धारित बैकअप',
    scheduledBackupDescription: 'एक शेड्यूल पर स्वचालित बैकअप सेट करें (जल्द आ रहा है)।',
    setupScheduledBackups: 'निर्धारित बैकअप सेटअप',
    creating: 'बना रहा है...',
    addNotice: 'सूचना जोड़ें',
    addFaculty: 'शिक्षक जोड़ें',
    title: 'शीर्षक',
    content: 'विवरण',
    name: 'नाम',
    position: 'पद',
    qualification: 'योग्यता',
    experience: 'अनुभव',
    actions: 'कार्यवाही',
    date: 'दिनांक',

    // Footer
    locationMapTitle: 'स्थान मानचित्र',
    contactAddress: 'पचमा, जमुई पंडित, महाराजगंज',
    contactPhone: 'फोन: +91 12345 67890',
    quickLinks: 'त्वरित लिंक',
    learnMore: 'अधिक जानें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    recognized: 'शिक्षा विभाग, भारत सरकार द्वारा मान्यता प्राप्त',
    
    // School Info
    schoolName: "शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज",
    aboutTitle: "हमारे बारे में",
    aboutContent: "शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज में आपका स्वागत है, जो लड़कियों को गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए समर्पित एक प्रमुख संस्थान है। हमारा दृष्टिकोण शिक्षा के माध्यम से युवा महिलाओं को सशक्त बनाना है, उनमें ज्ञान, चरित्र और सेवा के मूल्यों को विकसित करना है।",

    // Announcements
    announcementAdmission: "महत्वपूर्ण: प्रवेश 2024-25 के लिए आवेदन अब खुले हैं!",
    announcementExam: "वर्ष 2023-24 की अंतिम परीक्षा के परिणाम घोषित किए गए हैं!",
    announcementEvent: "वार्षिक सांस्कृतिक कार्यक्रम 15 जून, 2024 को निर्धारित",

    // Common
    submit: 'जमा करें',
    cancel: 'रद्द करें',
    save: 'सहेजें',
    delete: 'हटाएं',
    edit: 'संपादित करें',
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफल',
    errorBoundary: {
      title: 'कुछ गलत हो गया',
      message: 'कृपया पृष्ठ को पुनः लोड करें या बाद में पुनः प्रयास करें।',
      reloadButton: 'पृष्ठ पुनः लोड करें'
    },
    unauthorized: {
      title: 'अनधिकृत पहुंच',
      message: 'आपके पास इस पृष्ठ तक पहुंचने का अधिकार नहीं है।'
    }
  },
};

export default langContent;
