import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LibraryProvider } from './LibraryContext';
import AppLayout from './AppLayout';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import StudentDashboardPage from './StudentDashboardPage';
import SeatManagementPage from './SeatManagementPage';
import FeeDashboardPage from './FeeDashboardPage';
import PendingFeesPage from './PendingFeesPage';
import PaymentHistoryPage from './PaymentHistoryPage';
import ReportsPage from './ReportsPage';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <LibraryProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/students" element={<StudentDashboardPage />} />
            <Route path="/seats" element={<SeatManagementPage />} />
            <Route path="/fees" element={<FeeDashboardPage />} />
            <Route path="/pending-fees" element={<PendingFeesPage />} />
            <Route path="/payment-history" element={<PaymentHistoryPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </LibraryProvider>
  );
}

export default App;
