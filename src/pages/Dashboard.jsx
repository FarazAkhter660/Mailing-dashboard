import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MailList from "../components/MailList";

const mockEmails = [
  {
    id: 1,
    subject: "Welcome to the Mailing Dashboard",
    sender: "admin@example.com",
    timestamp: "2024-12-25 10:30 AM",
    isUnread: true,
    content: `Dear Investor,
Greetings!!

This is with reference to the application made by you in the public issue of SANATHAN TEXTILES LIMITED-IPO ("Company" or "Issuer"). 

Please find the allotment cum unblocking details as given below:
- Allotment Status: Successful
- Amount Unblocked: ₹10,000

Thank you for investing with us.`,
  },
  {
    id: 2,
    subject: "New Updates Available",
    sender: "updates@example.com",
    timestamp: "2024-12-24 9:00 AM",
    isUnread: false,
    content: `Hello,

We are excited to announce new updates in our dashboard. Here's what's new:
- Enhanced security features
- Improved performance

Check it out now!`,
  },
  {
    id: 3,
    subject: "Invoice for December 2024",
    sender: "billing@example.com",
    timestamp: "2024-12-23 3:15 PM",
    isUnread: true,
    content: `Dear Customer,

Your invoice for December 2024 is now available. 
Invoice Amount: ₹5,000
Due Date: 2024-12-31

Please make the payment to avoid late fees.

Thank you for your business!`,
  },
  {
    id: 4,
    subject: "Happy Holidays!",
    sender: "team@example.com",
    timestamp: "2024-12-22 12:00 PM",
    isUnread: false,
    content: `Season's Greetings!

We wish you and your family a joyous holiday season and a prosperous new year. Thank you for being with us this year.

Best regards,  
The Team`,
  },
  {
    id: 5,
    subject: "Security Alert: Suspicious Login Attempt",
    sender: "security@example.com",
    timestamp: "2024-12-21 5:45 AM",
    isUnread: true,
    content: `Dear User,

We detected a suspicious login attempt to your account.  
Location: Unknown  
Device: Windows 10  

If this was you, no further action is required. Otherwise, please reset your password immediately.

Stay safe!  
Security Team`,
  },
  {
    id: 6,
    subject: "Reminder: Meeting Tomorrow",
    sender: "colleague@example.com",
    timestamp: "2024-12-20 4:00 PM",
    isUnread: false,
    content: `Hi,

Just a quick reminder about our meeting scheduled for tomorrow:  
- Time: 10:00 AM  
- Topic: Project Roadmap  

Let me know if you need any preparation materials.

Cheers,  
John`,
  },
  {
    id: 7,
    subject: "Your Weekly Newsletter",
    sender: "newsletter@example.com",
    timestamp: "2024-12-19 8:00 AM",
    isUnread: true,
    content: `Hello,

Here's your weekly dose of news and updates from our team.  
- Feature Spotlight: Enhanced Analytics Dashboard  
- Pro Tips: Making the most of our services  

Read more on our blog.  

Best,  
Newsletter Team`,
  },
  {
    id: 8,
    subject: "System Maintenance Notice",
    sender: "support@example.com",
    timestamp: "2024-12-18 7:30 PM",
    isUnread: false,
    content: `Dear User,

We will be performing scheduled maintenance on our systems:  
- Date: 2024-12-20  
- Time: 1:00 AM to 5:00 AM  

During this time, some services may be unavailable. We apologize for any inconvenience caused.

Thank you for your understanding.  
Support Team`,
  },
];


const Dashboard = () => {
  const [emails, setEmails] = useState(mockEmails);
  const [activeTab, setActiveTab] = useState("All Mails");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const filteredEmails = emails.filter((email) => {
    const matchesSearch =
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === "Unread") {
      return email.isUnread && matchesSearch;
    }
    return matchesSearch;
  });

  const openEmail = (email) => {
    setEmails((prevEmails) =>
      prevEmails.map((e) =>
        e.id === email.id ? { ...e, isUnread: false } : e
      )
    );
    setSelectedEmail(email);
  };

  const goBack = () => {
    setSelectedEmail(null);
  };

  return (
    <div className="flex min-h-screen bg-black text-white flex-1 ml-64 p-4">
      <Sidebar />

      <div className="flex-1 p-6 bg-black text-white">
        {selectedEmail ? (
          <div>
            <button
              onClick={goBack}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg mb-4 hover:bg-gray-600"
            >
              ← Back
            </button>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                {selectedEmail.subject}
              </h2>
              <div className="text-sm text-gray-400 mb-2">
                <strong>From:</strong> {selectedEmail.sender}
              </div>
              <div className="text-sm text-gray-400 mb-2">
                <strong>Received:</strong> {selectedEmail.timestamp}
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">
                {selectedEmail.content}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center space-x-4 mb-6">
              <button
                className={`px-8 py-3 font-medium text-lg rounded-full transition-all duration-300 ${
                  activeTab === "All Mails"
                    ? "bg-gradient-to-r from bg-gray-700 to text-white shadow-lg transform scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab("All Mails")}
              >
                All mail
              </button>
              <button
                className={`px-8 py-3 font-medium text-lg rounded-full transition-all duration-300 ${
                  activeTab === "Unread"
                    ? "bg-gradient-to-r from bg-gray-700 to text-white shadow-lg transform scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab("Unread")}
              >
                Unread
              </button>
            </div>

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

            {filteredEmails.length > 0 ? (
              <MailList emails={filteredEmails} onEmailClick={openEmail} />
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
