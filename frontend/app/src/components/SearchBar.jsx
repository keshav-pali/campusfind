const SearchBar = () => {
  return (
    <div className="my-10">
      <div className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="🔍 Search lost or found items..."
          className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;