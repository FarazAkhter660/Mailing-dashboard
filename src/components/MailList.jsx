import React from "react";

const MailList = ({ emails }) => {
  return (
    <div>
      {emails.map((email, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-100 cursor-pointer"
        >
          {/* Sender Info */}
          <div>
            <p className="font-semibold text-gray-800">{email.sender}</p>
            <p className="text-gray-500">{email.subject}</p>
          </div>

          {/* Timestamp */}
          <div className="text-sm text-gray-400">{email.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default MailList;
