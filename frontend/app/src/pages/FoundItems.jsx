import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";

const FoundItems = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">

        <h1 className="text-4xl font-bold text-center mb-8">
          Found Items 🎉
        </h1>

        <SearchBar />

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <ItemCard
            title="Water Bottle"
            location="Auditorium"
            status="Found"
          />

          <ItemCard
            title="Headphones"
            location="Hostel Block"
            status="Found"
          />

          <ItemCard
            title="USB Drive"
            location="Computer Center"
            status="Found"
          />

          <ItemCard
            title="Calculator"
            location="Library"
            status="Found"
          />

          <ItemCard
            title="Backpack"
            location="Lecture Hall"
            status="Found"
          />

          <ItemCard
            title="Mobile Charger"
            location="Canteen"
            status="Found"
          />

        </div>

      </div>
    </MainLayout>
  );
};

export default FoundItems;