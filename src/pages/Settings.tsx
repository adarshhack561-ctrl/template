import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Form from "../components/ui/Form";

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    appName: "My Application",
    email: "admin@example.com",
    theme: "light",
    notifications: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAppNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, appName: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, email: e.target.value });
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }} className="p-6 rounded-lg border">
        <Form onSubmit={handleSave}>
          {/* General Settings Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
            <Input
              label="Application Name"
              value={settings.appName}
              onChange={handleAppNameChange}
              placeholder="App name"
            />
            <Input
              label="Admin Email"
              type="email"
              value={settings.email}
              onChange={handleEmailChange}
              placeholder="admin@example.com"
            />
          </div>

          {/* Preferences Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="mb-4">
              <label 
                className="block mb-1 font-medium"
                style={{ color: 'var(--text)' }}
              >
                Theme
              </label>
              <select
                value={settings.theme}
                onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text)",
                  borderColor: "var(--border)",
                }}
                className="w-full p-2 border rounded"
              >
                <option>light</option>
                <option>dark</option>
                <option>auto</option>
              </select>
            </div>
            <div className="mb-4">
              <label 
                className="flex items-center gap-2"
                style={{ color: 'var(--text)' }}
              >
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="font-medium">Enable Notifications</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button label="Save Settings" type="submit" variant="primary" color={{ background: '#FF9800', text: '#FFFFFF' }} />
            <Button 
              label="Reset" 
              variant="secondary" 
              onClick={() => {
                setSettings({
                  appName: "My Application",
                  email: "admin@example.com",
                  theme: "light",
                  notifications: true,
                });
              }}
            />
          </div>

          {/* Success Message */}
          {saved && (
            <div style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }} className="mt-4 p-3 rounded">
              ✓ Settings saved successfully!
            </div>
          )}
        </Form>
      </div>

      {/* Info Section */}
      <div style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }} className="p-6 rounded-lg border mt-6">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p style={{ color: "var(--muted)" }}>
          Version 1.0.0 • Last updated: December 4, 2025
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;
