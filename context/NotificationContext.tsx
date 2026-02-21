'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definisi tipe data untuk State (Praktik pengembangan yang baik)
interface Notification {
  message: string;
  type: 'success' | 'error';
}

interface NotificationContextType {
  notification: Notification | null;
  showNotification: (message: string, type?: 'success' | 'error') => void;
  hideNotification: () => void;
}

// Inisialisasi Context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    // Otomatis hilang setelah 3 detik (UI/UX enhancement)
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const hideNotification = () => setNotification(null);

  return (
    <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
      {children}
      {/* UI untuk Notifikasi */}
      {notification && (
        <div className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white z-50 transition-all ${
          notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}

// Custom Hook agar penggunaan context di komponen lain lebih simpel
export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}