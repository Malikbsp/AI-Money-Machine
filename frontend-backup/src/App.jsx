import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import MedicalBilling from "./pages/MedicalBilling";
import Developer from "./pages/Developer";
import Trading from "./pages/Trading";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/medical" element={<MedicalBilling />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;