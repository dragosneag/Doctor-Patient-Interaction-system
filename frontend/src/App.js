import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import PatientPage from "./components/PatientPage";
import SpecialitiesPage from "./components/SpecialitiesPage";
import SignUpPage from "./components/SignUpPage";
import SelectDoctorPage from "./components/SelectDoctorPage";
import SelectDateTimePage from "./components/SelectDateTimePage";
import ShowAppointmentsPage from "./components/ShowAppointmentsPage";
import PrescriptionsPage from "./components/PrescriptionsPage";
import ShowPrescription from "./components/ShowPrescription";
import MedicalHistoryPage from "./components/MedicalHistoryPage";
import DoctorPage from "./components/DoctorPage";
import ViewPatients from "./components/ViewPatients";
import DoctorAppointmentsPage from "./components/DoctorAppointmentsPage";
import PrescriptionDiagnostic from "./components/PrescriptionDiagnostic";
import ViewPatientDetails from "./components/ViewPatientDetails";
import PrescriptionPageDoctor from "./components/PrescriptionPageDoctor";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route exact path="/patient-page" element={<PatientPage />}/>
        <Route exact path="/sign-up-page" element={<SignUpPage />}/>
        <Route exact path="/patient-page/specialities-page" element={<SpecialitiesPage />}/>
        <Route exact path="/patient-page/specialities-page/doctor-page" element={<SelectDoctorPage />}/>
        <Route exact path="/patient-page/specialities-page/doctor-page/date-time-page" element={<SelectDateTimePage />}/>
        <Route exact path="/patient-page/appointments-page" element={<ShowAppointmentsPage />}/>
        <Route exact path="/patient-page/prescriptions-page" element={<PrescriptionsPage />}/>
        <Route exact path="/patient-page/prescriptions-page/prescription-page" element={<ShowPrescription />}/>
        <Route exact path="/patient-page/medical-history-page" element={<MedicalHistoryPage />}/>
        <Route exact path="/doctor-page" element={<DoctorPage />}/>
        <Route exact path="/view-patients" element={<ViewPatients/>}/>
        <Route exact path="/doctor-app-page" element={<DoctorAppointmentsPage />}/>
        <Route exact path="/prescription-diagnostic" element={<PrescriptionDiagnostic />}/>
        <Route exact path="/view-patient-details" element={<ViewPatientDetails/>}/>
        <Route exact path="/prescription-page-doctor" element={<PrescriptionPageDoctor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
