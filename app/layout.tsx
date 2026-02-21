import './globals.css';
import Navbar from '@/components/Navbar';
import { NotificationProvider } from '@/context/NotificationContext';

export const metadata = {
  title: 'Fake Store Admin Dashboard',
  description: 'Tugas Pengembangan Aplikasi Berbasis Platform Web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <NotificationProvider>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </NotificationProvider>
      </body>
    </html>
  );
}