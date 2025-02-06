import { useContext } from "react";
import { MyContext } from "../features/theme/ThemeContext";
import {
  Sun,
  Moon,
  Monitor,
  CaretDown,
  BookBookmark,
  PaintBrushBroad,
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
      <div className="header">
        <div className="logo-container">
          <BookBookmark className="logo" />
          <h3> Book Shelf</h3>
        </div>

        <div className="drop-down-container" ref={dropdownRef}>
          <button
            type="button"
            className="drop-down-btn"
            onClick={handleDropDown}
          >
            <PaintBrushBroad size={32} />
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
                  <label>Light</label>
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
                  <Moon /> <label>Dark</label>
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
                  <Monitor /> <label>System</label>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
