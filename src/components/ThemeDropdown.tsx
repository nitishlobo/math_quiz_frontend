import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { themeChange } from 'theme-change';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Orange', value: 'halloween' },
  { name: 'Luxury', value: 'luxury' },
  { name: 'Bumblebee', value: 'bumblebee' },
  { name: 'Emerald', value: 'emerald' },
  { name: 'Cupcake', value: 'cupcake' },
  { name: 'Corporate', value: 'corporate' },
  { name: 'Synthwave', value: 'synthwave' },
  { name: 'Cyberpunk', value: 'cyberpunk' },
  { name: 'Valentine', value: 'valentine' },
  { name: 'Garden', value: 'garden' },
  { name: 'Forest', value: 'forest' },
  { name: 'Aqua', value: 'aqua' },
  { name: 'Lofi', value: 'lofi' },
  { name: 'Pastel', value: 'pastel' },
  { name: 'Fantasy', value: 'fantasy' },
  { name: 'Wireframe', value: 'wireframe' },
  { name: 'Black', value: 'black' },
  { name: 'Dracula', value: 'dracula' },
  { name: 'Cymk', value: 'cymk' },
  { name: 'Autumn', value: 'autumn' },
  { name: 'Business', value: 'business' },
  { name: 'Acid', value: 'acid' },
  { name: 'Lemonade', value: 'lemonade' },
  { name: 'Night', value: 'night' },
  { name: 'Coffee', value: 'coffee' },
  { name: 'Winter', value: 'winter' },
  { name: 'Dim', value: 'dim' },
  { name: 'Nord', value: 'nord' },
  { name: 'Sunset', value: 'sunset' },
];

const ThemeDropdown: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState(
    () => localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="du-navbar bg-base-100">
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="du-menu du-menu-horizontal px-1">
          <li className="relative">
            <details className="dropdown">
              <summary>Themes</summary>
              <ul
                tabIndex={0}
                className="du-menu du-dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 absolute right-0"
              >
                {themes.map((theme) => (
                  <button
                    key={theme.value}
                    data-theme={theme.value}
                    className="du-btn btn-base-100 my-1 hover:bg-base-200 hover:border-0 animate-none"
                    data-set-theme={theme.value}
                    data-act-class="ACTIVECLASS"
                    onClick={() => setActiveTheme(theme.value)}
                  >
                    {activeTheme === theme.value && <FaCheck />}
                    {theme.name} <div className="badge"></div>
                  </button>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeDropdown;
