import { useState } from "react";
import Button from "../components/ui/Button";
import Table from "../components/ui/Table";

const Dashboard = () => {
  const [stats] = useState([
    { metric: "Total Users", value: 1250, change: "+12%" },
    { metric: "Revenue", value: "$45,230", change: "+8.5%" },
    { metric: "Active Sessions", value: 342, change: "+5%" },
    { metric: "Conversion Rate", value: "3.24%", change: "+0.5%" },
  ]);

  const [activities] = useState([
    { id: 1, user: "Alice Johnson", action: "Logged in", time: "2 mins ago" },
    { id: 2, user: "Bob Smith", action: "Updated profile", time: "15 mins ago" },
    { id: 3, user: "Carol White", action: "Purchased plan", time: "1 hour ago" },
    { id: 4, user: "David Brown", action: "Commented", time: "2 hours ago" },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
            className="p-4 rounded-lg border"
          >
            <p style={{ color: "var(--muted)" }} className="text-sm font-medium">
              {stat.metric}
            </p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <p style={{ color: "var(--accent)" }} className="text-sm mt-1">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activities Section */}
        <div
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
          className="lg:col-span-2 p-6 rounded-lg border"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <Table
            columns={["id", "user", "action", "time"]}
            data={activities}
          />
        </div>

        {/* Quick Actions Section */}
        <div
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
          className="p-6 rounded-lg border"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button label="View All Users" variant="primary" color={{ background: '#4CAF50', text: '#FFFFFF' }} onClick={() => alert("Navigate to Users page")} />
            <Button label="Generate Report" variant="secondary" color={{ background: '#2196F3', text: '#FFFFFF' }} onClick={() => alert("Report generated")} />
            <Button label="System Status" variant="secondary" color={{ background: '#FF9800', text: '#FFFFFF' }} onClick={() => alert("System is healthy")} />
            <Button label="Settings" variant="secondary" color={{ background: '#F44336', text: '#FFFFFF' }} onClick={() => alert("Navigate to Settings")} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
        className="mt-6 p-6 rounded-lg border"
      >
        <h2 className="text-xl font-semibold mb-2">Welcome Back!</h2>
        <p style={{ color: "var(--muted)" }} className="mb-4">
          Everything looks great. Here's a summary of your application's performance for this month.
        </p>
        <Button label="View Detailed Analytics" variant="primary" color={{ background: '#3F51B5', text: '#FFFFFF' }} onClick={() => alert("Analytics page")} />
      </div>
    </div>
  );
};

export default Dashboard;
