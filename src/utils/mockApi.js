// Mock user data
const mockUsers = [
  {
    id: 1,
    email: 'admin@school.edu',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: 2,
    email: 'teacher@school.edu',
    password: 'teacher123',
    role: 'teacher',
    name: 'Teacher User'
  },
  {
    id: 3,
    email: 'student@school.edu',
    password: 'student123',
    role: 'student',
    name: 'Student User'
  }
];

// Mock API responses with delay to simulate network request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockLogin = async (email, password, role) => {
  // Simulate network delay
  await delay(800);
  
  // Find the user with matching credentials
  const user = mockUsers.find(u => 
    u.email === email && 
    u.password === password && 
    u.role === role
  );
  
  if (user) {
    // Return user without password
    const { password, ...userWithoutPassword } = user;
    return {
      success: true,
      data: userWithoutPassword
    };
  }
  
  return {
    success: false,
    error: 'Invalid credentials'
  };
};

// Mock notice data
export const mockNotices = [
  {
    id: 1,
    title: 'School Reopening After Summer Break',
    content: 'The school will reopen on July 1st after the summer break. All students are expected to be present.',
    date: '2023-06-15'
  },
  {
    id: 2,
    title: 'Annual Function',
    content: 'The annual function will be held on August 15th. All parents are invited.',
    date: '2023-07-20'
  }
];

// Mock faculty data
export const mockFaculty = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    position: 'Principal',
    qualification: 'Ph.D in Education',
    experience: '20 years'
  },
  {
    id: 2,
    name: 'Mrs. Sunita Sharma',
    position: 'Vice Principal',
    qualification: 'M.A. in English',
    experience: '15 years'
  }
];

// Additional mock endpoints can be added as needed 