import { useDispatch, useSelector } from 'react-redux';
import { darkmode, lightmode } from  '../store/Feature'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { thememode } = useSelector((state) => state.ui);

  const handleToggle = () => {
    if (thememode === 'light') {
      dispatch(darkmode());
    } else {
      dispatch(lightmode());
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-md transition-all duration-300"
    >
      {thememode === 'light' ? (
        <>
          <MoonIcon className="h-5 w-5" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <SunIcon className="h-5 w-5" />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
