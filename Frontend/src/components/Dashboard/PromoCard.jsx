const PromoCard = () => {
  return (
    <div className="sticky top-25 bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
      <h3 className="text-base font-semibold text-gray-900">
        Mashhood Ahmad Danish
      </h3>

      <p className="text-sm text-gray-500 mt-2 mb-5">
        Get the latest jobs and industry news
      </p>

      <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm">
        Explore
      </button>
    </div>
  );
};

export default PromoCard;
