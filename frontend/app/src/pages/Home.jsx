import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import API from "../services/api";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await API.get("/items");
        setItems(data.items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why CampusFind?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon="📦"
            title="Report Lost Items"
            description="Quickly report items you've lost."
          />

          <FeatureCard
            icon="🔍"
            title="Search Found Items"
            description="Search items reported by others."
          />

          <FeatureCard
            icon="⚡"
            title="Fast Recovery"
            description="Increase chances of getting your belongings back."
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <SearchBar />

        {/* Recent Lost Items */}
        <h2 className="text-3xl font-bold mt-10 mb-6">
          Recent Lost Items
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items
            .filter((item) => item.itemType === "LOST")
            .slice(0, 3)
            .map((item) => (
              <ItemCard
                key={item._id}
                title={item.title}
                location={item.location}
                status="Lost"
              />
            ))}
        </div>

        {/* Recent Found Items */}
        <h2 className="text-3xl font-bold mt-10 mb-6">
          Recent Found Items
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items
            .filter((item) => item.itemType === "FOUND")
            .slice(0, 3)
            .map((item) => (
              <ItemCard
                key={item._id}
                title={item.title}
                location={item.location}
                status="Found"
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;