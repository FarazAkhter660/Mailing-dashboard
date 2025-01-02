import React, { useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import MailList from "../components/MailList";
import { Button } from "../components/ui/button";
import Tooltip from "../components/ui/tooltip";
import { FiArchive, FiEyeOff, FiTrash2 } from "react-icons/fi";

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
  {
    id: 9,
    subject: "Exclusive Offer for the New Year",
    sender: "offers@example.com",
    timestamp: "2024-12-17 6:00 PM",
    isUnread: true,
    content: `Hi there,  

Celebrate the new year with our exclusive offer just for you!  
- 50% off on all premium plans  
- Offer valid till: 2024-12-31  

Don't miss out!  

Best regards,  
Offers Team`,
  },
  {
    id: 10,
    subject: "Action Required: Verify Your Account",
    sender: "noreply@example.com",
    timestamp: "2024-12-16 11:45 AM",
    isUnread: false,
    content: `Dear User,  

Please verify your email address to activate your account.  
Click the link below to verify:  
[Verify Now](#)  

Thank you for choosing our service.  

Regards,  
Support Team`,
  },
  {
    id: 11,
    subject: "Payment Receipt",
    sender: "billing@example.com",
    timestamp: "2024-12-15 2:30 PM",
    isUnread: true,
    content: `Dear Customer,  

We have received your payment for the invoice dated 2024-12-01.  
- Amount Paid: ₹5,000  
- Transaction ID: TX12345ABC  

Thank you for your timely payment.  

Sincerely,  
Billing Team`,
  },
  {
    id: 12,
    subject: "Important Update: Privacy Policy Changes",
    sender: "legal@example.com",
    timestamp: "2024-12-14 9:00 AM",
    isUnread: false,
    content: `Dear User,  

We have updated our Privacy Policy to better serve you.  
Please review the updated policy here: [Privacy Policy](#).  

These changes will take effect on 2024-12-31.  

Regards,  
Legal Team`,
  },
  {
    id: 13,
    subject: "Thank You for Your Feedback",
    sender: "feedback@example.com",
    timestamp: "2024-12-13 4:15 PM",
    isUnread: true,
    content: `Hello,  

Thank you for taking the time to share your feedback with us.  
We appreciate your input and are working hard to improve your experience.  

Have a great day!  

Best regards,  
Feedback Team`,
  },
  {
    id: 14,
    subject: "Event Invitation: Tech Conference 2025",
    sender: "events@example.com",
    timestamp: "2024-12-12 10:00 AM",
    isUnread: false,
    content: `Dear Attendee,  

We are excited to invite you to the Tech Conference 2025!  
- Date: 2025-01-15  
- Location: Grand Arena, City Center  

Don't miss this opportunity to connect with industry leaders and innovators.  

Register here: [Register Now](#)  

See you there,  
Events Team`,
  },
  {
    id: 15,
    subject: "Your Order Has Been Shipped",
    sender: "orders@example.com",
    timestamp: "2024-12-11 8:45 AM",
    isUnread: true,
    content: `Dear Customer,  

Your order #ORD123456 has been shipped.  
- Estimated Delivery Date: 2024-12-20  
- Tracking ID: TRK987654321  

Thank you for shopping with us!  

Best,  
Orders Team`,
  },
  {
    id: 16,
    subject: "Job Opportunity at XYZ Corp",
    sender: "careers@example.com",
    timestamp: "2024-12-10 5:30 PM",
    isUnread: false,
    content: `Hi,  

We came across your profile and think you'd be a great fit for the following position:  
- Role: Software Developer  
- Location: Remote  

Apply here: [Job Application](#)  

Looking forward to hearing from you!  

Best regards,  
XYZ Careers`,
  },
  {
    id: 17,
    subject: "Subscription Renewal Reminder",
    sender: "subscriptions@example.com",
    timestamp: "2024-12-09 12:00 PM",
    isUnread: true,
    content: `Dear User,  

Your subscription will expire on 2024-12-31.  
Renew now to continue enjoying uninterrupted services.  

[Renew Now](#)  

Thank you for choosing us.  

Sincerely,  
Subscriptions Team`,
  },
  {
    id: 18,
    subject: "Congratulations on Your Achievement!",
    sender: "awards@example.com",
    timestamp: "2024-12-08 9:30 AM",
    isUnread: false,
    content: `Dear [Name],  

Congratulations on receiving the Excellence Award 2024!  
Your hard work and dedication have been recognized.  

Keep up the fantastic work!  

Cheers,  
Awards Team`,
  },
  {
    id: 19,
    subject: "Upcoming Webinar: Boost Your Productivity",
    sender: "webinars@example.com",
    timestamp: "2024-12-07 4:00 PM",
    isUnread: true,
    content: `Hi,  

Join us for an exclusive webinar on boosting productivity:  
- Date: 2024-12-29  
- Time: 3:00 PM  

Register now to secure your spot: [Register Here](#)  

Best regards,  
Webinars Team`,
  },
  {
    id: 20,
    subject: "Account Deactivation Warning",
    sender: "support@example.com",
    timestamp: "2024-12-06 1:15 PM",
    isUnread: false,
    content: `Dear User,  

We noticed that your account has been inactive for 90 days.  
To keep your account active, log in before 2024-12-31.  

Thank you for staying with us.  

Best regards,  
Support Team`,
  },
  {
    id: 21,
    subject: "Exclusive Invite: VIP Member Access",
    sender: "membership@example.com",
    timestamp: "2024-12-05 10:00 AM",
    isUnread: true,
    content: `Hello,  

You have been selected for exclusive VIP member access!  
Enjoy premium features and special perks.  

Activate your VIP status here: [Activate Now](#)  

Cheers,  
Membership Team`,
  },
  {
    id: 22,
    subject: "Daily Motivation: Quote of the Day",
    sender: "motivation@example.com",
    timestamp: "2024-12-04 7:00 AM",
    isUnread: false,
    content: `Good Morning,  

Here's your quote for the day:  
"The only way to do great work is to love what you do." - Steve Jobs  

Stay motivated!  

Warm regards,  
Motivation Team`,
  },
  {
    id: 23,
    subject: "Black Friday Sale Ends Soon!",
    sender: "sales@example.com",
    timestamp: "2024-12-03 6:45 PM",
    isUnread: true,
    content: `Hi there,  

Our Black Friday Sale ends tonight!  
- Up to 70% off on select items.  

Shop now before it's too late: [Shop Now](#)  

Happy Shopping,  
Sales Team`,
  },
  {
    id: 24,
    subject: "New Features Released!",
    sender: "updates@example.com",
    timestamp: "2024-12-02 11:30 AM",
    isUnread: false,
    content: `Dear User,  

We are thrilled to announce the release of new features:  
- Dark Mode for improved user experience.  
- Advanced Analytics Dashboard.  

Update your app to try them out today!  

Regards,  
Updates Team`,
  },
  {
    id: 25,
    subject: "Your Subscription Has Been Renewed",
    sender: "subscriptions@example.com",
    timestamp: "2024-12-01 9:00 AM",
    isUnread: true,
    content: `Dear Customer,  

Your subscription has been successfully renewed.  
- Plan: Premium  
- Renewal Date: 2024-12-01  
- Amount: ₹2,499  

Thank you for choosing our service!  

Best,  
Subscriptions Team`,
  },
  {
    id: 26,
    subject: "Invitation to Join Our Beta Program",
    sender: "beta@example.com",
    timestamp: "2024-11-30 3:15 PM",
    isUnread: false,
    content: `Dear User,  

We are excited to invite you to our beta testing program.  
Get early access to new features and provide your valuable feedback.  

Join now: [Join Beta Program](#)  

Regards,  
Beta Team`,
  },
  {
    id: 27,
    subject: "Welcome to Our Community!",
    sender: "welcome@example.com",
    timestamp: "2024-11-29 5:30 PM",
    isUnread: true,
    content: `Hi,  

Welcome to our community!  
We are excited to have you on board. Explore and enjoy all the benefits we have to offer.  

Get started here: [Explore Now](#)  

Warm regards,  
Community Team`,
  },
  {
    id: 28,
    subject: "Cyber Monday Deals Are Here!",
    sender: "deals@example.com",
    timestamp: "2024-11-28 7:00 AM",
    isUnread: false,
    content: `Hello,  

Don't miss out on our Cyber Monday deals:  
- Discounts up to 80%!  
- Limited-time offers available now.  

Shop now: [Shop Deals](#)  

Happy Saving,  
Deals Team`,
  },
];

const Dashboard = () => {
  const [emails, setEmails] = useState(mockEmails);
  const [activeTab, setActiveTab] = useState("All Mails");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((term) => {
      setDebouncedSearchTerm(term);
    }, 300),
    []
  );

  const handleSearchInput = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length >= 3) {
      handleSearch(term);
    } else {
      setDebouncedSearchTerm("");
    }
  };

  const filteredEmails = emails.filter((email) => {
    const matchesSearch =
      debouncedSearchTerm &&
      (email.subject
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase()) ||
        email.sender.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));

    if (activeTab === "Unread") {
      return email.isUnread && (!debouncedSearchTerm || matchesSearch);
    }
    return matchesSearch || !debouncedSearchTerm;
  });

  const openEmail = (email) => {
    setEmails((prevEmails) =>
      prevEmails.map((e) => (e.id === email.id ? { ...e, isUnread: false } : e))
    );
    setSelectedEmail(email);
  };

  const goBack = () => {
    setSelectedEmail(null);
  };

  const handleArchive = (emailId) => {
    console.log("Archived email with ID:", emailId);
  };

  const handleMarkAsUnread = (emailId) => {
    setEmails((prevEmails) =>
      prevEmails.map((e) => (e.id === emailId ? { ...e, isUnread: true } : e))
    );
    setSelectedEmail(null);
  };

  const handleDelete = (emailId) => {
    setEmails((prevEmails) => prevEmails.filter((email) => email.id !== emailId));
    setSelectedEmail(null);
  };

  return (
    <div className="flex min-h-screen bg-black text-white flex-1 ml-64 p-4">
      <Sidebar />

      <div className="flex-1 p-6 bg-black text-white">
        {selectedEmail ? (
          <div>
            <Button variant="secondary" onClick={goBack} className="mb-4">
              ← Back
            </Button>
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{selectedEmail.subject}</h2>
                <div className="flex space-x-4">
                  {/* Archive */}
                  <Tooltip text="Archive">
                    <button
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      onClick={() => handleArchive(selectedEmail.id)}
                    >
                      <FiArchive className="text-white w-5 h-5" />
                    </button>
                  </Tooltip>

                  {/* Mark as Unread */}
                  <Tooltip text="Mark as Unread">
                    <button
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      onClick={() => handleMarkAsUnread(selectedEmail.id)}
                    >
                      <FiEyeOff className="text-white w-5 h-5" />
                    </button>
                  </Tooltip>

                  {/* Delete */}
                  <Tooltip text="Delete">
                    <button
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      onClick={() => handleDelete(selectedEmail.id)}
                    >
                      <FiTrash2 className="text-white w-5 h-5" />
                    </button>
                  </Tooltip>
                </div>
              </div>
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
            <div className="flex justify-left space-x-4 mb-6">
              <Button
                className={`px-8 py-3 transition-all duration-300 ${
                  activeTab === "All Mails"
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab("All Mails")}
              >
                All Mail
              </Button>
              <Button
                className={`px-8 py-3 transition-all duration-300 ${
                  activeTab === "Unread"
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab("Unread")}
              >
                Unread
              </Button>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search emails..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                value={searchTerm}
                onChange={handleSearchInput}
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
