import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import SingleReportedItem from "../SingleReportedItem/SingleReportedItem";

const ReportedItems = () => {
  const {
    data: reportedItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch(
        `https://buy-sell-server-saifurrahmanbijoy.vercel.app/reporteditems`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-5 lg:w-4/5 mx-auto">
      <h2 className="text-xl lg:text-2xl text-slate-700 text-center my-3 bg-red-300 py-1 rounded-3xl font-serif">
        Reported Products Available: {reportedItems.length}
      </h2>
      {reportedItems.map((r) => (
        <SingleReportedItem
          key={r._id}
          item={r}
          refetch={refetch}
        ></SingleReportedItem>
      ))}
    </div>
  );
};

export default ReportedItems;
