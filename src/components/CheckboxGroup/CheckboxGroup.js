import React from "react";

export const CheckboxGroup = ({
                                groupName,
                                options,
                                handleCheckboxSelectOption
                              }) => {
  
  const onCheckboxSelectOption = (e) => {
    handleCheckboxSelectOption(e.target.value);
  };
  
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            name={groupName}
            value={option.value}
            onChange={onCheckboxSelectOption}
          />
          {option.value}
        </label>
      ))}
    </div>
  );
};
