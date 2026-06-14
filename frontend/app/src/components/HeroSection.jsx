import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">
        CampusFind 🎓
      </h1>

      <p className="text-xl mb-8">
        Lost something on campus? Find it faster.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/post-item"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Post Lost Item
        </Link>

        <Link
          to="/found-items"
          className="bg-indigo-800 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900"
        >
          Browse Found Items
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;