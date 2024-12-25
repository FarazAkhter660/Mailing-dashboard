const MailDetail = ({ email }) => {
  if (!email) {
    return (
      <div className="flex-1 bg-gray-900 text-white p-4">
        Select an email to view details.
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold">{email.subject}</h2>
      <p className="text-gray-400">{email.sender}</p>
      <p className="mt-4">{email.body}</p>
    </div>
  );
};

export default MailDetail;
