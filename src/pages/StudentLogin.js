import React from 'react';
import Container from '../components/Container';

const StudentLogin = () => {
  return (
    <Container>
      <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Student Login</h2>
        <form>
          <label className="block mb-2">
            Username:
            <input type="text" name="username" className="w-full border rounded px-3 py-2 mt-1" />
          </label>
          <label className="block mb-4">
            Password:
            <input type="password" name="password" className="w-full border rounded px-3 py-2 mt-1" />
          </label>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default StudentLogin;
