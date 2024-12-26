import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MailList from "../components/MailList";

const mockEmails = [
  {
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
    subject: "Meeting Reminder",
    sender: "team@example.com",
    timestamp: "2024-12-23 5:00 PM",
    isUnread: true,
    content: `Hi Team,

This is a reminder for our project kickoff meeting scheduled for tomorrow:
- Date: 2024-12-24
- Time: 10:00 AM
- Location: Conference Room 1

Looking forward to seeing you all there.`,
  },
  {
    subject: "Invoice for December",
    sender: "billing@example.com",
    timestamp: "2024-12-22 3:15 PM",
    isUnread: false,
    content: `Dear Customer,

Please find attached your invoice for December 2024.
- Total Amount: ₹5,000
- Due Date: 2024-12-31

If you have any questions, feel free to contact us at billing@example.com.`,
  },
  {
    subject: "Your Subscription is Expiring Soon",
    sender: "support@example.com",
    timestamp: "2024-12-21 11:00 AM",
    isUnread: true,
    content: `Hi,

We noticed that your subscription is set to expire on 2024-12-31. 

Renew now to continue enjoying our premium features without interruption.

[Renew Now]`,
  },
  {
    subject: "Happy Holidays!",
    sender: "friends@example.com",
    timestamp: "2024-12-20 6:30 PM",
    isUnread: false,
    content: `Dear Friend,

Wishing you and your family a joyous holiday season and a happy new year!

Best regards,
The Team`,
  },
  {
    subject: "Security Alert: Unusual Login Attempt",
    sender: "security@example.com",
    timestamp: "2024-12-18 8:00 PM",
    isUnread: true,
    content: `Dear User,

We detected an unusual login attempt on your account:
- Date: 2024-12-18
- IP Address: 192.168.1.1
- Location: New York, USA

If this wasn't you, please reset your password immediately.`,
  },
  {
    subject: "Job Application Status",
    sender: "hr@example.com",
    timestamp: "2024-12-17 4:20 PM",
    isUnread: false,
    content: `Dear Applicant,

Thank you for applying to the Software Engineer position. 

We are pleased to inform you that you have been shortlisted for the next round. Our HR team will reach out to you with further details.

Best regards,
HR Team`,
  },
  {
    subject: "Special Offer: 50% Off Your Next Purchase",
    sender: "sales@example.com",
    timestamp: "2024-12-16 2:00 PM",
    isUnread: true,
    content: `Hello,

Don't miss out on our exclusive offer! Get 50% off your next purchase.

Use code: HALFPRICE
Offer valid until: 2024-12-31`,
  },
  {
    subject: "Monthly Performance Report",
    sender: "analytics@example.com",
    timestamp: "2024-12-14 1:00 PM",
    isUnread: true,
    content: `Hi,

Your performance report for December is now available. Here's a summary:
- Total Hours Worked: 160
- Tasks Completed: 45
- Performance Rating: 4.8/5

Visit your dashboard for detailed insights.`,
  },
  {
    subject: "Upcoming Webinar Invitation",
    sender: "events@example.com",
    timestamp: "2024-12-12 11:45 AM",
    isUnread: false,
    content: `Dear Participant,

We are excited to invite you to our upcoming webinar on "The Future of Tech."
- Date: 2024-12-30
- Time: 4:00 PM
- Platform: Zoom

Register here: [Webinar Link]`,
  },
  {
    subject: "Survey: Share Your Feedback",
    sender: "survey@example.com",
    timestamp: "2024-12-10 5:10 PM",
    isUnread: true,
    content: `Hello,

Your feedback matters! Please take a moment to complete our short survey and help us improve our services.

[Take Survey]`,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All Mails");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const filteredEmails = mockEmails.filter((email) => {
    const matchesSearch =
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === "Unread") {
      return email.isUnread && matchesSearch;
    }
    return matchesSearch;
  });

  const openEmail = (email) => {
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
