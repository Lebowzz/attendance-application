import React from "react";
import Table from "../../Components/Table/Table";
import Navbar from "../../Layout/Navbar"; // Import the Navbar component

function Student() {
  return (
    <main className="flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>
      
      {/* Table */}
      <div className="w-full">
        <Table />
      </div>
    </main>
  );
}

export default Student;
