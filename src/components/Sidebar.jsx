import {
  AiOutlineInbox,
  AiOutlineSend,
  AiOutlineDelete,
  AiOutlineFolder,
} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai"; // Example for Ant Design icons
import { BiArchive } from "react-icons/bi"; // From BoxIcons
import { MdArchive } from "react-icons/md"; // From Material Icons



const Sidebar = () => {
  const menuItems = [
    { name: "Inbox", icon: <AiOutlineInbox />, count: 128 },
    { name: "Sent", icon: <AiOutlineSend />, count: 9 },
    { name: "Trash", icon: <AiOutlineDelete />, count: 23 },
    { name: "Archive", icon: <BiArchive />, count: 8 },
  ];

  return (
    <div className="w-1/4 bg-gray-800 text-white h-full p-4">
      <h1 className="text-2xl font-bold mb-6">Mail App</h1>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-lg hover:bg-gray-700 px-4 py-2 rounded-lg"
          >
            <span className="flex items-center gap-2">
              {item.icon} {item.name}
            </span>
            <span>{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
