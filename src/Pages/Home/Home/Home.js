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

      <div className="mb-10 bg-slate-700 p-4 ">
        <h2 className="text-xl lg:text-2xl uppercase my-3 text-center">
          Second Hand Laptop Categories
        </h2>
        <div className="grid lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              to={`/category/${category.category_id}`}
              key={category._id}
              className="btn btn-accent btn-outline rounded-none text-lg w-full uppercase font-semibold my-2"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
