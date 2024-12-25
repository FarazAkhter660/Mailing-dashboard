import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MailList from "../components/MailList";
import MailDetail from "../components/MailDetail";
import mockEmails from "../utils/mockData";

const Dashboard = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <MailList emails={mockEmails} onSelectEmail={setSelectedEmail} />
      <MailDetail email={selectedEmail} />
    </div>
  );
};

export default Dashboard;
