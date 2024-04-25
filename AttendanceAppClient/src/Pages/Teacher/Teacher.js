import React from "react";
import Table from "../../Components/Table/Table";
import Widget from "../../Components/Widget/Widget";
import Navbar from "../../Layout/Navbar"; // Import the Navbar component

function Teacher(data) {
  return (
    <main className="flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Widgets */}
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-1 max-w-screen-lg mx-auto mt-8 mb-8">
        {/*{data.map((teacher, index) => {
          return (
            <Widget data={teacher.course} />
          );
        })} */}
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>

      {/* Table */}
      <div className="w-full mt-auto">
        <Table />
      </div>
    </main>
  );
}

export default Teacher;
