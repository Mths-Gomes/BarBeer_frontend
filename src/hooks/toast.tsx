import React, { useCallback, createContext, useContext, useMemo } from 'react';

import ToastContainer from '../components/Toast';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const Toast = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  const toastContext = useMemo(
    () => ({ addToast, removeToast }),
    [addToast, removeToast],
  );

  return (
    <Toast.Provider value={toastContext}>
      {children}
      <ToastContainer />
    </Toast.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
