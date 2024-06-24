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
  { name: 'Dim', value: 'dim' },
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
            data-act-class="ACTIVECLASS"
            data-set-theme={theme.value}
            onClick={() => setActiveTheme(theme.value)}
            className="du-btn du-btn-base-200 border-0 my-1 no-animation w-full flex items-center hover:bg-base-200 hover:border-0"
          >
            <div className="flex flex-row items-center">
              <div className="flex-none w-5">
                {activeTheme === theme.value && <FaCheck />}
              </div>
              <div className="flex-none text-left w-24">{theme.name}</div>
              <div className="flex-none w-5">
                <div className="flex gap-1">
                  <div className="du-badge du-badge-primary rounded-full px-1 py-3"></div>
                  <div className="du-badge du-badge-secondary rounded-full px-1 py-3"></div>
                  <div className="du-badge du-badge-neutral rounded-full px-1 py-3"></div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </ul>
    </details>
  );
};

export default ThemeDropdown;
