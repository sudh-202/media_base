// app/providers.tsx
'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default Toast;
