import React, { useState } from 'react';

const DropDown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    // Perform actions based on the selected item
    // For example, navigate to a different page, perform some action, etc.
    // Close the dropdown after an item is clicked
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="toggle-button" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleItemClick('Option 1')}>
            Option 1
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Option 2')}>
            Option 2
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Option 3')}>
            Option 3
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
