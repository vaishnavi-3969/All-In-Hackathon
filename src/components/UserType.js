import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { collection, addDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from './db/Firebase';

const UserType = () => {
  const { user, isAuthenticated } = useAuth0();
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const checkUser = async () => {
        const userRef = collection(db, 'user');
        const q = query(userRef, where('email', '==', user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            setSelectedRole(userData.role);
          });
        }
      };

      checkUser();
    }
  }, [user.email, isAuthenticated]);

  const handleRoleSelection = async () => {
    if (selectedRole) {
      if (isAuthenticated) {
        const userRef = collection(db, 'user');
        const userRecord = {
          email: user.email,
          role: selectedRole,
        };

        const q = query(userRef, where('email', '==', user.email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          await addDoc(userRef, userRecord);
        } else {
          querySnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, userRecord);
          });
        }

        if (selectedRole === 'employee') {
          navigate('/employee_homepage');
        } else if (selectedRole === 'employer') {
          navigate('/employer_homepage');
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4">Choose your role:</h2>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="employee"
              checked={selectedRole === 'employee'}
              onChange={() => setSelectedRole('employee')}
            />
            <span className="text-gray-800">Employee</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="employer"
              checked={selectedRole === 'employer'}
              onChange={() => setSelectedRole('employer')}
            />
            <span className="text-gray-800">Employer</span>
          </label>
        </div>
        <button
          onClick={handleRoleSelection}
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserType;