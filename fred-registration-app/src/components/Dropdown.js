// components/Dropdown.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Dropdown = ({classname, handleRoadMap, handleRegistration}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Attach event listener for clicks outside the div when the div is visible
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', toggleDropdown);
    } else {
      document.removeEventListener('click', toggleDropdown);
    }
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', toggleDropdown);
    };
  }, [isOpen]);

  return (
    <div className={`${classname} relative inline-block text-left ml-[12px]`}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Change View
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 3a1 1 0 011 1v4a1 1 0 01-2 0V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <button className='w-full' onClick={() => handleRoadMap()}>Road Map</button>
                </div>
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              <button className='w-full' onClick={() => handleRegistration()}>Registration</button>
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
