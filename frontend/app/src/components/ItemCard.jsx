const ItemCard = ({ title, location, status }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100">
      
      <div className="text-5xl mb-4">
        🎒
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-2">
        📍 <span className="font-medium">{location}</span>
      </p>

      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          status === "Lost"
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {status}
      </span>

      <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default ItemCard;