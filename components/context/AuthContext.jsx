'use client';
import { auth, provider } from '@/firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from 'firebase/auth';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uuid: null,
  });

  const registerUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logOut, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
