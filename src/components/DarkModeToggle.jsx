import React, { useState} from "react"

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode)
    }

    return (
        <button onClick={toggleDarkMode}
        className={`rounded-full w-12 h-6 relative overflow-hidden ${
        isDarkMode ? 'bg-[#ba4753]' : 'bg-[#f8ced7]'
      }`}
    >
      <div
        className={`rounded-full w-4 h-4 absolute top-1 ${
          isDarkMode ? 'bg-[#f8ced7] left-6' : 'bg-[#ba4753] left-1'
        } transition-all duration-300`}
      ></div>
    </button>
    )
}
export default DarkModeToggle