import React, { useEffect, useState } from 'react';
import ThemeDropdown from '@/components/ThemeDropdown';

const NavBar: React.FC = () => {
  return (
    <div className="du-navbar bg-base-100">
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="du-menu du-menu-horizontal px-1">
          <li className="relative">
            <ThemeDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
