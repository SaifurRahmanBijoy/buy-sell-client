import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import ExtraSection from "../ExtraSection/ExtraSection";
import Slider from "../Slider/Slider";

const Home = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categorisedProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Slider></Slider>

      <div className="flex flex-col justify-center items-center mb-10 bg-slate-700 p-4 lg:p-10">
        <h2 className="text-xl lg:text-2xl uppercase my-3 text-center">
          Second Hand Laptop Categories
        </h2>
        {categories.map((category) => (
          <Link
            to={`/category/${category._id}`}
            key={category._id}
            className="btn btn-accent rounded-none text-lg uppercase font-semibold w-4/5 lg:w-5/12 my-2"
          >
            {category.name}
          </Link>
        ))}
      </div>

      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
