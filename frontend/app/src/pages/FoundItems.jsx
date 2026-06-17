import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import API from "../services/api";

const FoundItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const { data } = await API.get("/items");

        // const foundItems = data.items.filter(
        //   (item) => item.itemType === "FOUND"
        // );
        const foundItems = data.items.filter(
          (item) =>
            item.itemType === "FOUND" &&
            item.status === "ACTIVE"
        );

        setItems(foundItems);
      } catch (error) {
        console.error("Error fetching found items:", error);
      }
    };

    fetchFoundItems();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">

        <h1 className="text-4xl font-bold text-center mb-8">
          Found Items 🎉
        </h1>

        <SearchBar />

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {items.map((item) => (
            <ItemCard
              key={item._id}
              title={item.title}
              location={item.location}
              status="Found"
              image={item.image}
            />
          ))}

        </div>

      </div>
    </MainLayout>
  );
};

export default FoundItems;