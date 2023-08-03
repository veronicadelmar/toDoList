import React, { useState } from "react"

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleDarkMode = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
    }

        setIsDarkMode((prevMode) => !prevMode)
    }

    return (
      <div className="py-5 px-20 flex justify-end">
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
      </div>  
    )
}
export default DarkModeToggle