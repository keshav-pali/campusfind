import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Create Account 🚀
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Join CampusFind and never lose track of your belongings.
          </p>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </MainLayout>
  );
};

export default Register;