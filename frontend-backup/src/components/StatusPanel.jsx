export default function StatusPanel({ agents }) {
  return (
    <div className="status">

      <h2>🤖 AI Manager</h2>

      <table width="100%">
        <thead>
          <tr>
            <th align="left">Agent</th>
            <th>Status</th>
            <th>Tasks</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.status}</td>
              <td>{agent.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}