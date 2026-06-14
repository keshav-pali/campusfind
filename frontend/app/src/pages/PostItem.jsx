import MainLayout from "../layouts/MainLayout";

const PostItem = () => {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto py-12 px-4">

        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Post an Item 📦
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Report a lost or found item on campus
          </p>

          <form className="space-y-5">

            {/* Title */}
            <div>
              <label className="block mb-2 font-medium">
                Item Title
              </label>

              <input
                type="text"
                placeholder="e.g. Wallet, ID Card, Laptop"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium">
                Description
              </label>

              <textarea
                rows="4"
                placeholder="Describe the item..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-medium">
                Category
              </label>

              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Category</option>
                <option>Electronics</option>
                <option>ID Card</option>
                <option>Books</option>
                <option>Wallet</option>
                <option>Accessories</option>
                <option>Others</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                type="text"
                placeholder="Where was it lost/found?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block mb-2 font-medium">
                Item Type
              </label>

              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Type</option>
                <option>Lost</option>
                <option>Found</option>
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-2 font-medium">
                Upload Image
              </label>

              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Item
            </button>

          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostItem;