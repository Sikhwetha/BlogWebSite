import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Singleblogpost = () => {
  const data = useLoaderData();

  // Parse published date
  const publishedDate = new Date(data.published_date);

  // Format date as YYYY-MM-DD HH:MM
  const formattedDate = `${publishedDate.getFullYear()}-${String(
    publishedDate.getMonth() + 1
  ).padStart(2, "0")}-${String(publishedDate.getDate()).padStart(
    2,
    "0"
  )} ${String(publishedDate.getHours()).padStart(2, "0")}:${String(
    publishedDate.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div className="py-40 bg-white text-black px-4">
      <h2 className="text-5xl text-center lg:text-7xl leading-snug font-bold mb-5">
        Single Article
      </h2>
      <div className="max-w-7xl mx-auto my-11 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="w-full mx-auto rounded"
            />
          </div>
          <h2 className="text-3xl font-bold mt-4 text-green-500 cursor-pointer">
            {data.title}
          </h2>
          <p>Category: {data.category}</p>
          <p>
            <img
              src={data.picture}
              alt=""
              className="inline-flex items-center w-10 h-10 rounded-full mr-2"
            />
            {data.author}
          </p>
          <p>Published Date: {formattedDate}</p>
          <p className="mb-2">Reading Time: {data.reading_time}</p>
          <p className="text-sm mb-2">{data.content}</p>
          <p className="text-sm">{data.contentTwo}</p>
        </div>
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Singleblogpost;
