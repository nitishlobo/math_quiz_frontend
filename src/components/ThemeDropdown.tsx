import React, { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Cupcake', value: 'cupcake' },
  { name: 'Bumblebee', value: 'bumblebee' },
  { name: 'Emerald', value: 'emerald' },
  { name: 'Corporate', value: 'corporate' },
  { name: 'Synthwave', value: 'synthwave' },
  { name: 'Cyberpunk', value: 'cyberpunk' },
  { name: 'Valentine', value: 'valentine' },
  { name: 'Orange', value: 'halloween' },
  { name: 'Garden', value: 'garden' },
  { name: 'Forest', value: 'forest' },
  { name: 'Aqua', value: 'aqua' },
  { name: 'Lofi', value: 'lofi' },
  { name: 'Pastel', value: 'pastel' },
  { name: 'Fantasy', value: 'fantasy' },
  { name: 'Wireframe', value: 'wireframe' },
  { name: 'Black', value: 'black' },
  { name: 'Luxury', value: 'luxury' },
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
                    className="du-btn my-1 hover:bg-base-200"
                    data-set-theme={theme.value}
                    data-act-class="ACTIVECLASS"
                  >
                    {theme.name}
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
