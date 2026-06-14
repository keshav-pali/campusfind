const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <div className="text-4xl mb-3">{icon}</div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;