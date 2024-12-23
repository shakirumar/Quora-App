import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "react-avatar";

const Notification = () => {
  // Notifications data
  const notifications = [
    {
      id: 1,
      title: "Human Psychology Facts",
      type: "Space",
      timestamp: "Wed",
      message: "What surprised you today?",
      avatar: "data:image/jpeg;base64,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", // Placeholder for avatar image
    },
    {
      id: 2,
      title: "Technology Updates",
      type: "Group",
      timestamp: "Tue",
      message:
        "A detailed discussion about the future of artificial intelligence, the possibilities it brings, and the ethical considerations surrounding its implementation in various sectors.",
      avatar: "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg",
    },
    {
      id: 3,
      title: "Answered Questions",
      type: "Question",
      timestamp: "Mon",
      message: "Your question 'How do I stay motivated in tough times?' was answered by John Doe.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYSi6OELi0D6ZpKtqRZJ4RVYSm4ZMs6WFrw&s",
    },
    
    {
      id: 4,
      title: "New Reads",
      type: "Group",
      timestamp: "Yesterday",
      message:
        "Check out the latest articles on human behavior and decision-making processes shared in the 'Psychology Insights' group.",
      avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
  ];

  // Helper function to truncate long messages
  const truncateMessage = (message, maxLength = 120) =>
    message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full min-h-screen">
        {/* Main Container */}
        <div className="flex w-full max-w-screen-xl px-7 overflow-hidden">
          {/* Sidebar */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters</h2>
            </div>
            <div className="w-44 mt-6 border-t pt-4">
              <ul className="space-y-4">
                <li className="font-semibold rounded-sm text-red-700 bg-red-100 hover:bg-red-200 pl-4">
                  All Notifications
                </li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Stories</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Questions</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Spaces</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">People updates</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Comments and mentions</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Upvotes</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Your content</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Your profile</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Announcements</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Earnings</li>
                <li className="rounded-sm text-gray-600 hover:bg-red-200 pl-4">Subscriptions</li>
              </ul>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Notifications</h2>
              <button className="text-sm text-gray-500">Settings</button>
            </div>

            <div className="mt-6 border-t pt-4 space-y-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-center space-x-4">
                  <Avatar
                    src={notification.avatar}
                    size="40"
                    round
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      <span className="text-gray-700">{notification.title}</span> · Posted in{" "}
                      {notification.type} · <span className="text-gray-400">{notification.timestamp}</span>
                    </p>
                    <p className="text-base font-semibold mt-1">
                      {truncateMessage(notification.message)}
                    </p>
                  </div>
                  <button className="text-gray-500">
                    <span className="text-xl">•••</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
