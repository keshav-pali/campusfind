import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";

const Home = () => {
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
        </div>

        {/* Recent Found Items */}
        <h2 className="text-3xl font-bold mt-10 mb-6">
          Recent Found Items
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;