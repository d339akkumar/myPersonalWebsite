import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode');
    setIsDarkMode(isDarkModeEnabled === 'true');
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkModeValue = !isDarkMode;
    setIsDarkMode(updatedDarkModeValue);
    localStorage.setItem('darkMode', updatedDarkModeValue ? 'true' : 'false');
    applyDarkModeStyles(updatedDarkModeValue);
  };

  const applyDarkModeStyles = (isDarkModeEnabled : boolean) => {
    const body = document.body;
    if (isDarkModeEnabled) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };

  return (
    <button onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
