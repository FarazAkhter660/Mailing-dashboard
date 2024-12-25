const MailList = ({ emails, onSelectEmail }) => {
    return (
      <div className="flex-1 bg-gray-900 text-white p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Inbox</h2>
        {emails.map((email, index) => (
          <div
            key={index}
            className="p-4 mb-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer"
            onClick={() => onSelectEmail(email)}
          >
            <h3 className="text-lg font-semibold">{email.subject}</h3>
            <p className="text-sm text-gray-400">{email.sender}</p>
            <p className="text-sm text-gray-500">{email.preview}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MailList;
  