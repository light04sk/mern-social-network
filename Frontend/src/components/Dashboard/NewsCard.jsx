const NewsCard = () => {
  return (
    <div className=" bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h3 className="text-base font-semibold text-gray-900 mb-4">
        LinkedIn News
      </h3>

      <ul className="space-y-3 text-sm">
        {[
          "Buffett to remain Berkshire chair",
          "Foreign investments surge again",
          "Tech stocks hit new high",
        ].map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
