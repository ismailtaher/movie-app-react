import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const PCNav = ({
  genreSearch,
  handleCheck,
  ratingValue,
  handleSliderChange,
  notifyChanges,
}) => {
  const valueText = (value) => value;

  const marks = [
    {
      value: 0,
      label: 0,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 10,
      label: 10,
    },
  ];

  const onSliderChange = (event, newValue) => {
    handleSliderChange(event, newValue);
    notifyChanges();
  };

  return (
    <aside className="bg-[#F9F6EE] p-3 shadow-lg border rounded-lg">
      <h2 className="text-2xl">Genres</h2>
      <ul className="px-2 my-3 flex flex-row justify-start items-center flex-wrap gap-2">
        {genreSearch.map((genreSingle) => (
          <div
            key={genreSingle.id}
            className="flex flex-row space-y-1 justify-center items-center">
            <label className="cursor-pointer hover:bg-emerald-100 has-[:checked]:bg-[#1A936F]  has-[:checked]:border-[#1A936F] w-auto text-center px-4 py-1 border-[#1A936F] border-2 rounded-full">
              <input
                className="hidden"
                type="checkbox"
                checked={genreSingle.cond}
                onChange={() => {
                  handleCheck(genreSingle.id);
                }}
              />
              {genreSingle.name}
            </label>
          </div>
        ))}
      </ul>

      <h2 className="text-2xl my-3">Rating</h2>
      <div className="px-2">
        <Slider
          getAriaValueText={valueText}
          step={1}
          value={ratingValue}
          onChange={onSliderChange}
          min={0}
          max={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    </aside>
  );
};

export default PCNav;
