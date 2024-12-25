const MailList = ({ emails }) => {
  if (emails.length === 0) {
    return <p className="text-gray-500">No emails to display.</p>;
  }

  return (
    <ul className="space-y-4">
      {emails.map((email, index) => (
        <li key={index} className="p-4 border border-gray-300 rounded shadow">
          <h3 className="font-bold text-lg">{email.subject}</h3>
          <p className="text-gray-600">{email.sender}</p>
          <p className="text-gray-400 text-sm">{email.timestamp}</p>
        </li>
      ))}
    </ul>
  );
};

export default MailList;
