import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "london",
    },
    {
      id: 2,
      title: "sydney",
    },
    {
      id: 3,
      title: "tokyo",
    },
    {
      id: 4,
      title: "toronto",
    },
    {
      id: 5,
      title: "paris",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
