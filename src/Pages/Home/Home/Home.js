import React from "react";
import ExtraSection from "../ExtraSection/ExtraSection";
import Slider from "../Slider/Slider";

const Home = () => {
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = ({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-liart-xi.vercel.app/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <Slider></Slider>

      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
