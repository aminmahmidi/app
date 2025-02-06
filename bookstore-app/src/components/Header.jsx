import { useContext } from "react";
import { MyContext } from "../features/theme/ThemeContext";
import {
  Sun,
  Moon,
  Monitor,
  CaretDown,
  BookBookmark,
} from "@phosphor-icons/react";
import { Wrapper } from "./HeaderWrapper";
const Header = () => {
  const {
    theme,
    setTheme,
    handleThemeChange,
    setDropDown,
    dropDown,
    handleDropDown,
    dropdownRef,
  } = useContext(MyContext);
  return (
    <Wrapper>
      <div className="logo-container">
        <div className="header">
          <div className="logo-container">
            <BookBookmark size={32} className="logo" />
            <h3 > Amin Mahmidi</h3>
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
    </Wrapper>
  );
};

export default Header;
