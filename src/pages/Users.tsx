import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Table from "../components/ui/Table";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
    { id: 3, name: "Carol White", email: "carol@example.com", role: "User" },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
  });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          ...newUser,
        },
      ]);
      setNewUser({ name: "", email: "", role: "User" });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, email: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New User:", newUser);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Add New User Form */}
        <div style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }} className="p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Add New User</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              value={newUser.name}
              onChange={handleNameChange}
              placeholder="John Doe"
            />
            <Input
              label="Email"
              type="email"
              value={newUser.email}
              onChange={handleEmailChange}
              placeholder="john@example.com"
            />
            <div className="mb-4">
              <label 
                className="block mb-1 font-medium"
                style={{ color: 'var(--text)' }}
              >
                Role
              </label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
                className="w-full p-2 border rounded"
              >
                <option>User</option>
                <option>Admin</option>
                <option>Moderator</option>
              </select>
            </div>
            <Button label="Add User" type="submit" variant="primary" color={{ background: '#2196F3', text: '#FFFFFF' }} />
          </Form>
        </div>

        {/* Stats Section */}
        <div style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }} className="p-6 rounded-lg border flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <div className="space-y-3">
            <div>
              <p style={{ color: "var(--muted)" }} className="text-sm">Total Users</p>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-sm">Admins</p>
              <p className="text-2xl font-bold">{users.filter(u => u.role === "Admin").length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }} className="p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        <Table
          columns={["id", "name", "email", "role"]}
          data={users}
        />
      </div>
    </div>
  );
};

export default UsersPage;
