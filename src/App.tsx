
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider';
import HomePage from './pages/HomePage';
import IdentificationPage from './pages/IdentificationPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="plant-id-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="identify" element={<IdentificationPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
          </Routes>
        </Router>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;