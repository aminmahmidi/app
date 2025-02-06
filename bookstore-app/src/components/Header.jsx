import React from "react";

const Header = () => {
  return (
    <div>
      header
      <div className="logo-container">
      <div className="header">
      <div className="logo-container">
        <h3 className="logo"> Amin Mahmidi</h3>
      </div>

      <div className="drop-down-container" ref={dropdownRef}>
        <button
          type="button"
          className="drop-down-btn"
          onClick={handleDropDown}
        >
          تنظیمات تم
          <span className={dropDown ? "arrow-icon" : "arrow-icon-down"}>
            <CaretDown />
          </span>
        </button>
        {
          <div
            className={
              !dropDown
                ? "show-drop-down drop-down"
                : "hide-drop-down drop-down"
            }
          >
            <div className="input-container">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === "light"}
                onChange={handleThemeChange}
              />
              <div className="radio-icon">
                <Sun />
                <label>روشن</label>
              </div>
            </div>
            <div className="input-container">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />
              <div className="radio-icon">
                <Moon /> <label>تاریک</label>
              </div>
            </div>
            <div className="input-container">
              <input
                type="radio"
                name="theme"
                value="system"
                checked={theme === "system"}
                onChange={handleThemeChange}
              />
              <div className="radio-icon">
                <Monitor /> <label>سیستم</label>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
      </div>
    </div>
  );
};

export default Header;
