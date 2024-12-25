import React from "react";

const MailList = ({ emails = [] }) => {
  // Handle the case where emails is undefined or empty
  if (emails.length === 0) {
    return <div className="text-gray-500">No emails to display</div>;
  }

  return (
    <ul className="divide-y divide-gray-300">
      {emails.map((email, index) => (
        <li key={index} className="p-4 hover:bg-gray-100">
          <h3 className="font-bold">{email.subject}</h3>
          <p className="text-sm text-gray-600">{email.sender}</p>
          <p className="text-xs text-gray-400">{email.timestamp}</p>
        </li>
      ))}
    </ul>
  );
};

export default MailList;
