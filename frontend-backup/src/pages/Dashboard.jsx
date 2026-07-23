import { useEffect, useState } from "react";
import api from "../services/api";
import StatusPanel from "../components/StatusPanel";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [manager, setManager] = useState(null);

  useEffect(() => {
    // Dashboard Data
    api
      .get("/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));

    // Manager Data
    api
      .get("/manager")
      .then((res) => setManager(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data || !manager) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Welcome, Malik 👋</h1>

      <div className="cards">
        <div className="card">
          <h3>Revenue</h3>
          <h2>${data.revenue}</h2>
        </div>

        <div className="card">
          <h3>Leads</h3>
          <h2>{data.leads}</h2>
        </div>

        <div className="card">
          <h3>Emails Sent</h3>
          <h2>{data.emails_sent}</h2>
        </div>

        <div className="card">
          <h3>AI Agents</h3>
          <h2>{data.agents}</h2>
        </div>
      </div>

      <StatusPanel agents={manager.agents} />
    </>
  );
}