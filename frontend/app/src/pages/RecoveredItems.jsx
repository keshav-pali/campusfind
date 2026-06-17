import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import API from "../services/api";

const RecoveredItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRecoveredItems = async () => {
      try {
        const { data } = await API.get("/items");

        const recoveredItems = data.items.filter(
          (item) => item.status === "RETURNED"
        );

        setItems(recoveredItems);
      } catch (error) {
        console.error(
          "Error fetching recovered items:",
          error
        );
      }
    };

    fetchRecoveredItems();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 px-4">

        <h1 className="text-4xl font-bold text-center mb-8">
          Recovered Items 🎉
        </h1>

        <SearchBar />

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {items.length > 0 ? (
            items.map((item) => (
              <ItemCard
                key={item._id}
                title={item.title}
                location={item.location}
                status="Recovered"
                image={item.image}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No recovered items found.
            </p>
          )}

        </div>

      </div>
    </MainLayout>
  );
};

export default RecoveredItems;