import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReportedItems = () => {
  const { data: reportedItems = [] } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reporteditems`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {/* {reportedItems.map(r=><SingleReportedItem></SingleReportedItem>)} */}
    </div>
  );
};

export default ReportedItems;
