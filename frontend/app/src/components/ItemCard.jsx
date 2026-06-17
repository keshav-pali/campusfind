const ItemCard = ({ title, location, status, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
        />
      ) : (
        <div className="h-52 flex items-center justify-center text-6xl">
          🎒
        </div>
      )}

      <div className="p-6">
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
    </div>
  );
};

export default ItemCard;