import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { collection, addDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {db} from './db/Firebase';

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
          navigate('/employeer_homepage');
        }
      }
    }
  };

  return (
    <div>
      <h2>Choose your role:</h2>
      <label>
        <input
          type="radio"
          value="employee"
          checked={selectedRole === 'employee'}
          onChange={() => setSelectedRole('employee')}
        />
        Employee
      </label>
      <label>
        <input
          type="radio"
          value="employer"
          checked={selectedRole === 'employer'}
          onChange={() => setSelectedRole('employer')}
        />
        Employer
      </label>
      <button onClick={handleRoleSelection}>Submit</button>
    </div>
  );
};

export default UserType;