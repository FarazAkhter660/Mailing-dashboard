import React from "react";
import {
  AiOutlineInbox,
  AiOutlineSend,
  AiOutlineDelete,
  AiOutlineFileText,
  AiOutlineShop,
} from "react-icons/ai"; // General icons
import { BiArchive } from "react-icons/bi"; // BoxIcons
import { MdOutlineSocialDistance } from "react-icons/md"; // Material Icons
import { RiSpamLine, RiNotification2Line, RiDiscussLine } from "react-icons/ri"; // Remix Icons

const Sidebar = () => {
  const menuItems = [
    { name: "Inbox", icon: <AiOutlineInbox />, count: 128 },
    { name: "Drafts", icon: <AiOutlineFileText />, count: 15 },
    { name: "Sent", icon: <AiOutlineSend />, count: 9 },
    { name: "Junk", icon: <RiSpamLine />, count: 128 },
    { name: "Trash", icon: <AiOutlineDelete />, count: 23 },
    { name: "Archive", icon: <BiArchive />, count: 8 },
    { name: "Social", icon: <MdOutlineSocialDistance />, count: 972 },
    { name: "Updates", icon: <RiNotification2Line />, count: 342 },
    { name: "Forums", icon: <RiDiscussLine />, count: 128 },
    { name: "Shopping", icon: <AiOutlineShop />, count: 8 },
    { name: "Promotions", icon: <AiOutlineInbox />, count: 21 },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h1 className="text-lg font-bold mb-6">Mail App</h1>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between text-sm hover:bg-gray-700 px-4 py-2 rounded ${
              item.name === "Archive" ? "pb-2 border-b border-gray-700" : ""
            }`}
          >
            <span className="flex items-center gap-2">
              {item.icon} {item.name}
            </span>
            {item.count && <span className="text-gray-400">{item.count}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
