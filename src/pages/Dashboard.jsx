import React, { useState } from "react";
import MailList from "../components/MailList";

const mockEmails = [
  {
    subject: "Welcome to the Mailing Dashboard",
    sender: "admin@example.com",
    timestamp: "2024-12-25 10:30 AM",
    isUnread: true,
  },
  {
    subject: "New Updates Available",
    sender: "updates@example.com",
    timestamp: "2024-12-24 9:00 AM",
    isUnread: false,
  },
  {
    subject: "Meeting Reminder",
    sender: "team@example.com",
    timestamp: "2024-12-23 5:00 PM",
    isUnread: true,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All Mails");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter emails based on the active tab and search term
  const filteredEmails = mockEmails.filter((email) => {
    const matchesSearch =
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === "Unread") {
      return email.isUnread && matchesSearch;
    }
    return matchesSearch;
  });

  return (
    <div className="flex-1 p-4 bg-gray-100">
      {/* Tabs for All Mails and Unread */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "All Mails"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveTab("All Mails")}
        >
          All Mails
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "Unread"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveTab("Unread")}
        >
          Unread
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search emails..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Mail List */}
      <MailList emails={filteredEmails} />
    </div>
  );
};

export default Dashboard;
