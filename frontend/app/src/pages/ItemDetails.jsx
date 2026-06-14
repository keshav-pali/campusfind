import MainLayout from "../layouts/MainLayout";

const ItemDetails = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-10 px-4">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Image Section */}
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            <span className="text-8xl">🎒</span>
          </div>

          {/* Details Section */}
          <div className="p-8">

            <div className="flex justify-between items-center mb-4">
              <h1 className="text-4xl font-bold">
                Lost Wallet
              </h1>

              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
                Lost
              </span>
            </div>

            <p className="text-gray-600 mb-6">
              Posted on: 13 June 2026
            </p>

            {/* Location */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg">
                📍 Location
              </h3>

              <p className="text-gray-700">
                Central Library
              </p>
            </div>

            {/* Category */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg">
                📂 Category
              </h3>

              <p className="text-gray-700">
                Wallet
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">
                📝 Description
              </h3>

              <p className="text-gray-700 mt-2">
                Black leather wallet containing student ID card,
                ATM card and some cash. Lost near the Central
                Library reading hall.
              </p>
            </div>

            {/* Posted By */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">
                👤 Posted By
              </h3>

              <p className="text-gray-700">
                Keshav Pal
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Owner
              </button>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Claim Item
              </button>

            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default ItemDetails;