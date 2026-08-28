import { BrowserRouter, Routes, Route } from "react-router-dom";

import Survey from "./pages/Survey";
import ThankYou from "./pages/ThankYou";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/AdminDashboard";
import AdminResponses from "./pages/AdminResponses";
export default function App() {
  return (
    <BrowserRouter>
            <ToastContainer/>

      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/responses" element={<AdminResponses />}/>
      </Routes>
    </BrowserRouter>
  );
}