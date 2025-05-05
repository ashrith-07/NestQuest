// app/layout.jsx
import './globals.css'; // This is required to load Tailwind

export const metadata = {
    title: 'Your App Name',
    description: 'Your app description',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  
