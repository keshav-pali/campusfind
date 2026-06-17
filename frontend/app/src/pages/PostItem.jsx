import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

const PostItem = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    itemType: "",
    image: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = "";

      // Upload Image to Cloudinary
      if (file) {
        const imageData = new FormData();
        imageData.append("image", file);

        const uploadRes = await API.post(
          "/upload-image",
          imageData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        imageUrl = uploadRes.data.imageUrl;
      }

      // Create Item
      await API.post("/items", {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        location: formData.location,
        date: new Date(),
        image: imageUrl,
        itemType: formData.itemType,
      });

      alert("✅ Item Posted Successfully!");

      if (formData.itemType === "LOST") {
        navigate("/lost-items");
      } else {
        navigate("/found-items");
      }

    } catch (error) {
      console.error(error);
      alert("❌ Failed to post item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto py-12 px-4">

        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Post an Item 📦
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Report a lost or found item on campus
          </p>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            {/* Title */}
            <div>
              <label className="block mb-2 font-medium">
                Item Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Wallet, ID Card, Laptop"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium">
                Description
              </label>

              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the item..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              >
                <option value="">Select Category</option>
                <option>Electronics</option>
                <option>ID Card</option>
                <option>Books</option>
                <option>Wallet</option>
                <option>Accessories</option>
                <option>Others</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where was it lost/found?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Type */}
            <div>
              <label className="block mb-2 font-medium">
                Item Type
              </label>

              <select
                name="itemType"
                value={formData.itemType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                required
              >
                <option value="">Select Type</option>
                <option value="LOST">Lost</option>
                <option value="FOUND">Found</option>
              </select>
            </div>

            {/* Image */}
            <div>
              <label className="block mb-2 font-medium">
                Upload Image
              </label>

              <input
                type="file"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Uploading..." : "Submit Item"}
            </button>

          </form>
        </div>
      </div>
    </MainLayout>
  );
};


export default PostItem;

