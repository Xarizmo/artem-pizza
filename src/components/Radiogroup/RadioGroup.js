import React from "react";

export const RadioGroup = ({
                             groupName,
                             isSelected,
                             options,
                             handleRadioSelectOption
                           }) => {
  
  const onRadioSelectOption = (e) => {
    handleRadioSelectOption(e.target.name, e.target.value);
  };
  
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={groupName}
            value={option.value}
            checked={option.value === isSelected}
            onChange={onRadioSelectOption}
          />
          {option.value}
        </label>
      ))}
    </div>
  );
};