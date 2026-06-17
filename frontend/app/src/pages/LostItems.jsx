import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import API from "../services/api";

const LostItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const { data } = await API.get("/items");

        // const lostItems = data.items.filter(
        //   (item) =>
        //     item.itemType === "LOST" &&
        //     item.status === "ACTIVE"
        // );
        const lostItems = data.items.filter(
          (item) =>
            item.itemType === "LOST" &&
            item.status === "ACTIVE"
        );

        setItems(lostItems);
      } catch (error) {
        console.error("Error fetching lost items:", error);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">

        <h1 className="text-4xl font-bold text-center mb-8">
          Lost Items 🔍
        </h1>

        <SearchBar />

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {items.map((item) => (
            <ItemCard
             key={item._id}
            title={item.title}
            location={item.location}
            status="Lost"
            image={item.image}
          />
          ))}

        </div>

      </div>
    </MainLayout>
  );
};

export default LostItems;
