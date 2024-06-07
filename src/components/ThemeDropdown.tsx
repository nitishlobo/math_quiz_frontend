import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeDropdown: React.FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div class="du-navbar bg-base-300 rounded-box">
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <div class="du-dropdown du-dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="du-btn du-btn-ghost du-rounded-btn"
            >
              Theme
            </div>
            <ul
              tabindex="0"
              class="du-menu du-dropdown-content z-[1] du-p-2 shadow bg-base-100 du-rounded-box w-52 mt-4"
            >
              <li>
                <a data-set-theme="light" data-act-class="ACTIVECLASS">
                  Light
                </a>
              </li>
              <li>
                <a data-set-theme="dark" data-act-class="ACTIVECLASS">
                  Dark
                </a>
              </li>
              <li>
                <a data-set-theme="cupcake" data-act-class="ACTIVECLASS">
                  Cupcake
                </a>
              </li>
              <li>
                <a data-set-theme="bumblebee" data-act-class="ACTIVECLASS">
                  Bumblebee
                </a>
              </li>
              <li>
                <a data-set-theme="emerald" data-act-class="ACTIVECLASS">
                  Emerald
                </a>
              </li>
              <li>
                <a data-set-theme="corporate" data-act-class="ACTIVECLASS">
                  Corporate
                </a>
              </li>
              <li>
                <a data-set-theme="synthwave" data-act-class="ACTIVECLASS">
                  Synthwave
                </a>
              </li>
              <li>
                <a data-set-theme="cyberpunk" data-act-class="ACTIVECLASS">
                  Cyberpunk
                </a>
              </li>
              <li>
                <a data-set-theme="valentine" data-act-class="ACTIVECLASS">
                  Valentine
                </a>
              </li>
              <li>
                <a data-set-theme="halloween" data-act-class="ACTIVECLASS">
                  Orange
                </a>
              </li>
              <li>
                <a data-set-theme="garden" data-act-class="ACTIVECLASS">
                  Garden
                </a>
              </li>
              <li>
                <a data-set-theme="forest" data-act-class="ACTIVECLASS">
                  Forest
                </a>
              </li>
              <li>
                <a data-set-theme="aqua" data-act-class="ACTIVECLASS">
                  Aqua
                </a>
              </li>
              <li>
                <a data-set-theme="lofi" data-act-class="ACTIVECLASS">
                  Lofi
                </a>
              </li>
              <li>
                <a data-set-theme="pastel" data-act-class="ACTIVECLASS">
                  Pastel
                </a>
              </li>
              <li>
                <a data-set-theme="fantasy" data-act-class="ACTIVECLASS">
                  Fantasy
                </a>
              </li>
              <li>
                <a data-set-theme="wireframe" data-act-class="ACTIVECLASS">
                  Wireframe
                </a>
              </li>
              <li>
                <a data-set-theme="black" data-act-class="ACTIVECLASS">
                  Black
                </a>
              </li>
              <li>
                <a data-set-theme="luxury" data-act-class="ACTIVECLASS">
                  Luxury
                </a>
              </li>
              <li>
                <a data-set-theme="dracula" data-act-class="ACTIVECLASS">
                  Dracula
                </a>
              </li>
              <li>
                <a data-set-theme="cymk" data-act-class="ACTIVECLASS">
                  Cymk
                </a>
              </li>
              <li>
                <a data-set-theme="autumn" data-act-class="ACTIVECLASS">
                  Autumn
                </a>
              </li>
              <li>
                <a data-set-theme="business" data-act-class="ACTIVECLASS">
                  Business
                </a>
              </li>
              <li>
                <a data-set-theme="acid" data-act-class="ACTIVECLASS">
                  Acid
                </a>
              </li>
              <li>
                <a data-set-theme="lemonade" data-act-class="ACTIVECLASS">
                  lemonade
                </a>
              </li>
              <li>
                <a data-set-theme="night" data-act-class="ACTIVECLASS">
                  Night
                </a>
              </li>
              <li>
                <a data-set-theme="coffee" data-act-class="ACTIVECLASS">
                  Coddee
                </a>
              </li>
              <li>
                <a data-set-theme="winter" data-act-class="ACTIVECLASS">
                  Winter
                </a>
              </li>
              <li>
                <a data-set-theme="dim" data-act-class="ACTIVECLASS">
                  Dim
                </a>
              </li>
              <li>
                <a data-set-theme="nord" data-act-class="ACTIVECLASS">
                  Nord
                </a>
              </li>
              <li>
                <a data-set-theme="sunset" data-act-class="ACTIVECLASS">
                  Sunset
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDropdown;
