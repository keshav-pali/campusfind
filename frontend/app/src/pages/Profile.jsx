import MainLayout from "../layouts/MainLayout";
import ItemCard from "../components/ItemCard";

const Profile = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">

        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h1 className="text-4xl font-bold text-blue-600">
            My Profile 👤
          </h1>

          <p className="mt-4 text-lg">
            <strong>Name:</strong> Keshav Pal
          </p>

          <p className="mt-2 text-lg">
            <strong>Email:</strong> keshav@example.com
          </p>

          <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* My Lost Items */}
        <h2 className="text-3xl font-bold mb-6">
          My Lost Items
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ItemCard
            title="Lost Wallet"
            location="Library"
            status="Lost"
          />

          <ItemCard
            title="Calculator"
            location="Lab Block"
            status="Lost"
          />
        </div>

        {/* My Found Items */}
        <h2 className="text-3xl font-bold mt-12 mb-6">
          My Found Items
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ItemCard
            title="Water Bottle"
            location="Auditorium"
            status="Found"
          />

          <ItemCard
            title="USB Drive"
            location="Computer Center"
            status="Found"
          />
        </div>

      </div>
    </MainLayout>
  );
};

export default Profile;