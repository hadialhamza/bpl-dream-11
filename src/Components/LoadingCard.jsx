import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl p-6">
      <div className="skeleton h-[240px] w-full"></div>
      <div className="flex items-center gap-4">
        <div className="skeleton h-[24px] w-[24px]"></div>
        <div className="skeleton h-[24px] w-[240px]"></div>
      </div>
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="skeleton h-[24px] w-full"></div>
      </div>
      <div className="skeleton h-[24px] w-[180px]"></div>
      <div className="flex justify-between items-center text-base font-bold">
        <div className="skeleton h-[24px] w-full"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="skeleton h-[24px] w-full"></div>
      </div>
    </div>
  );
};

const LoadingCard = () => {
  //   console.log(Array.length(6));
  //   const arr = [1, 2, 3, 4, 5, 6];
  //   const newArr = Array(6);

  return (
    <div className="container w-[97%] mx-auto grid grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Loader key={index} />
      ))}
      {/* <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader />
      <Loader /> */}
    </div>
  );
};

export default LoadingCard;
