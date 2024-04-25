import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Widget() {
  const [random, setRandom] = useState(0);
  const [imgSrc, setImgSrc] = useState("");

  const sources = [
    "/images/pattern1.avif",
    "/images/pattern2.avif",
    "/images/pattern3.webp",
    "/images/pattern4.jpeg",
    "/images/pattern5.avif",
    "/images/pattern6.avif",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sources.length);
    setRandom(randomIndex);
    setImgSrc(sources[randomIndex]);
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
      <div className="max-w-md max-h-md mb-2">
        <div style={{ width: "200px", height: "150px", overflow: "hidden" }}>
          {" "}
          {/* Set fixed dimensions */}
          <img
            src={imgSrc}
            alt="pattern-background"
            className="w-full h-full object-cover rounded-lg" // Adjust width and height here
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Class Name</h3>
        <div className="w-[200px] p-3 flex items-center justify-between">
          <button className="w-[45%] bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
            Enter
          </button>
          <Link
            to={"/teacher/qr-generator"}
            className="w-[45%] bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            QR
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Widget;
