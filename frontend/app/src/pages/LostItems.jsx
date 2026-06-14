import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";

const LostItems = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">

        <h1 className="text-4xl font-bold text-center mb-8">
          Lost Items 🔍
        </h1>

        <SearchBar />

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <ItemCard
            title="Lost Wallet"
            location="Central Library"
            status="Lost"
          />

          <ItemCard
            title="Student ID Card"
            location="Canteen"
            status="Lost"
          />

          <ItemCard
            title="Scientific Calculator"
            location="Lab Block"
            status="Lost"
          />

          <ItemCard
            title="Laptop Charger"
            location="Hostel"
            status="Lost"
          />

          <ItemCard
            title="Notebook"
            location="Classroom"
            status="Lost"
          />

          <ItemCard
            title="Bluetooth Earbuds"
            location="Auditorium"
            status="Lost"
          />

        </div>

      </div>
    </MainLayout>
  );
};

export default LostItems;