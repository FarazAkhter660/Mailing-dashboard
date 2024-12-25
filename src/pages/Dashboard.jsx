import React from "react";
import { useAuth } from "../contexts/AuthContext";
import MailList from "../components/MailList";
import MailDetail from "../components/MailDetail";

const mockEmails = [
  {
    subject: "Welcome to the Mailing Dashboard",
    sender: "admin@example.com",
    timestamp: "2024-12-25 10:30 AM",
  },
  {
    subject: "New Updates Available",
    sender: "updates@example.com",
    timestamp: "2024-12-24 9:00 AM",
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Mail Folders</h2>
        <ul className="mt-4 space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">Inbox</li>
          <li className="hover:bg-gray-700 p-2 rounded">Sent</li>
          <li className="hover:bg-gray-700 p-2 rounded">Drafts</li>
          <li className="hover:bg-gray-700 p-2 rounded">Trash</li>
        </ul>
      </div>

      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <MailList emails={mockEmails} />
          </div>
          <div className="col-span-2">
            <MailDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
