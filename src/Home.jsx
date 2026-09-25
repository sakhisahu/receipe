import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Header */}
      <div className="w-full flex items-center gap-8 px-6 py-3 bg-gray-100">
        {/* Logo */}
        <img src="lo.png" className="h-12 w-20" alt="logo" />

        {/* Navigation */}
        <NavLink to="/" className="text-lg font-semibold hover:text-blue-600">HOME</NavLink>

        <NavLink to="/a" className="text-lg font-semibold hover:text-blue-600"> Recipes</NavLink>
      </div>

      {/* Banner Image */}
      <img src="r2.avif" className="w-full h-[600px] object-cover" alt="banner" />

      <div className="absolute top-70 left-140 justify-center mt-4 ">
        <p className="text-purple-600 text-5xl font-bold mt-2"> Recipes Book</p> <br/>
      {/* Button */}
        <a href="category.json" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Search Recipes</a>
      </div>
    </>
  );
}

export default Home;
