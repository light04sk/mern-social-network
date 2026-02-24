const ManageNotificationsCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h2 className="text-base font-semibold text-gray-800">Notifications</h2>

      <p className="text-sm text-gray-500 mt-2">
        See who liked, commented, or connected with you. Important updates about
        your profile and posts will appear here.
      </p>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>• Likes & comments</p>
        <p>• Connection requests</p>
        <p>• Profile activity</p>
      </div>
    </div>
  );
};

export default ManageNotificationsCard;
