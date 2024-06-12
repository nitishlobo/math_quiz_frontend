import React, { useEffect } from 'react';
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
    <div className="du-navbar bg-base-300 rounded-box">
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="du-dropdown du-dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="du-btn du-btn-ghost du-rounded-btn"
            >
              Theme
            </div>
            <ul
              tabIndex="0"
              className="du-menu du-dropdown-content z-[1] du-p-2 shadow bg-base-100 du-rounded-box w-52 mt-4"
            >
              {themes.map((theme) => (
                <li key={theme.value}>
                  <a data-set-theme={theme.value} data-act-class="ACTIVECLASS">
                    {theme.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDropdown;
