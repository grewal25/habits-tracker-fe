import React from "react";

const DateComp: React.FC = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayOfTheweek = date.toLocaleString("default", { weekday: "long" });
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <>
      <div className="flex justify-evenly">
        <h1>
          {dayOfTheweek}, {formattedDate}
        </h1>
        <button>PICK DATE</button>
      </div>
    </>
  );
};

export default DateComp;
