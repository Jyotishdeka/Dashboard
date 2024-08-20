import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { useDashboardContext } from "../Context/DashboardContext";

const Dashboard = () => {
  const { state, dispatch } = useDashboardContext();

  console.log(state);

  return (
    <div>
      <Navbar />
      <div className="">
        <Header />
        {state.categories.map((category) => (
         <div key={category.id}>
            <Categories data={category} />
         </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
