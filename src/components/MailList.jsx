import React from "react";

const MailList = ({ emails, onEmailClick }) => {
  return (
    <div className="space-y-4">
      {emails.map((email, index) => (
        <div
          key={index}
          className="p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 cursor-pointer"
          onClick={() => onEmailClick(email)}
        >
          <div className="flex justify-between">
            <span className="font-semibold">{email.subject}</span>
            <span className="text-sm text-gray-400">{email.timestamp}</span>
          </div>
          <div className="text-sm text-gray-500">{email.sender}</div>
          {email.isUnread && (
            <span className="text-blue-500 text-xs">Unread</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MailList;
