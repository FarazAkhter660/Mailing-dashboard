import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
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
  {
    subject: "Invoice for December",
    sender: "billing@example.com",
    timestamp: "2024-12-22 3:15 PM",
    isUnread: false,
  },
  {
    subject: "Your Subscription is Expiring Soon",
    sender: "support@example.com",
    timestamp: "2024-12-21 11:00 AM",
    isUnread: true,
  },
  {
    subject: "Happy Holidays!",
    sender: "friends@example.com",
    timestamp: "2024-12-20 6:30 PM",
    isUnread: false,
  },
  {
    subject: "Weekly Newsletter",
    sender: "newsletter@example.com",
    timestamp: "2024-12-19 9:45 AM",
    isUnread: true,
  },
  {
    subject: "Security Alert: Unusual Login Attempt",
    sender: "security@example.com",
    timestamp: "2024-12-18 8:00 PM",
    isUnread: true,
  },
  {
    subject: "Job Application Status",
    sender: "hr@example.com",
    timestamp: "2024-12-17 4:20 PM",
    isUnread: false,
  },
  {
    subject: "Special Offer: 50% Off Your Next Purchase",
    sender: "sales@example.com",
    timestamp: "2024-12-16 2:00 PM",
    isUnread: true,
  },
  {
    subject: "Project Deadline Approaching",
    sender: "manager@example.com",
    timestamp: "2024-12-15 10:30 AM",
    isUnread: false,
  },
  {
    subject: "Monthly Performance Report",
    sender: "analytics@example.com",
    timestamp: "2024-12-14 1:00 PM",
    isUnread: true,
  },
  {
    subject: "Account Password Changed",
    sender: "no-reply@example.com",
    timestamp: "2024-12-13 7:30 PM",
    isUnread: true,
  },
  {
    subject: "Upcoming Webinar Invitation",
    sender: "events@example.com",
    timestamp: "2024-12-12 11:45 AM",
    isUnread: false,
  },
  {
    subject: "Your Package is Out for Delivery",
    sender: "delivery@example.com",
    timestamp: "2024-12-11 3:50 PM",
    isUnread: false,
  },
  {
    subject: "Survey: Share Your Feedback",
    sender: "survey@example.com",
    timestamp: "2024-12-10 5:10 PM",
    isUnread: true,
  },
  {
    subject: "Invitation to Join Our Beta Program",
    sender: "product-team@example.com",
    timestamp: "2024-12-09 9:00 AM",
    isUnread: true,
  },
  {
    subject: "Thank You for Your Purchase",
    sender: "shop@example.com",
    timestamp: "2024-12-08 12:30 PM",
    isUnread: false,
  },
  {
    subject: "Your Flight Itinerary",
    sender: "travel@example.com",
    timestamp: "2024-12-07 10:45 AM",
    isUnread: false,
  },
  {
    subject: "Holiday Party Details",
    sender: "community@example.com",
    timestamp: "2024-12-06 6:15 PM",
    isUnread: true,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All Mails");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmail, setSelectedEmail] = useState(null); // New state for selected email

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

  // Handler to open an email
  const openEmail = (email) => {
    setSelectedEmail(email);
  };

  // Handler to go back to the dashboard
  const goBack = () => {
    setSelectedEmail(null);
  };

  return (
    <div className="flex min-h-screen bg-black text-white flex-1 ml-64 p-4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-black text-white">
        {selectedEmail ? (
          // Email Details View
          <div>
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg mb-4 hover:bg-gray-600"
            >
              ← Back
            </button>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{selectedEmail.subject}</h2>
              <div className="text-sm text-gray-400 mb-2">
                <strong>From:</strong> {selectedEmail.sender}
              </div>
              <div className="text-sm text-gray-400 mb-2">
                <strong>Received:</strong> {selectedEmail.timestamp}
              </div>
              <p className="text-gray-300">Email content goes here...</p>
            </div>
          </div>
        ) : (
          // Dashboard View
          <div>
            {/* Tabs for All Mails and Unread */}
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-6 py-2 font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === "All Mails"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
                onClick={() => setActiveTab("All Mails")}
              >
                All Mails
              </button>
              <button
                className={`px-6 py-2 font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === "Unread"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
                onClick={() => setActiveTab("Unread")}
              >
                Unread
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search emails..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                🔍
              </span>
            </div>

            {/* Mail List */}
            {filteredEmails.length > 0 ? (
              <MailList
                emails={filteredEmails}
                onEmailClick={openEmail} // Pass the openEmail function to MailList
              />
            ) : (
              <div className="text-center text-gray-500">
                No emails found for the selected filter.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
