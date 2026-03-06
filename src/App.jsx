import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Spinner } from './components/ui/Spinner';
import { WhatsAppButton } from './components/shared/WhatsAppButton';
import { routes } from './routes';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
};

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTop />
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Suspense fallback={<div className="grid place-items-center py-24"><Spinner /></div>}>
          <Routes>
            {routes.map(({ path, component: Component }) => <Route key={path} path={path} element={<Component />} />)}
          </Routes>
        </Suspense>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
