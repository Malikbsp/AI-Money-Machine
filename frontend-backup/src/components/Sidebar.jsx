import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🤖 AI Money Machine</h2>

      <nav>
        <NavLink to="/">📊 Dashboard</NavLink>
        <NavLink to="/sales">💰 Sales Agent</NavLink>
        <NavLink to="/medical">🏥 Medical Billing</NavLink>
        <NavLink to="/developer">👨‍💻 Developer Agent</NavLink>
        <NavLink to="/trading">📈 Trading Agent</NavLink>
        <NavLink to="/settings">⚙️ Settings</NavLink>
      </nav>
    </aside>
  );
}