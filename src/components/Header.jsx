import React, { useContext } from "react";
import darkmode from "../images/darkmode.svg";
import { Theme } from "../App";
import { useTranslation } from "react-i18next";

function Header() {
  const { theme, setTheme } = useContext(Theme);
  const { t } = useTranslation();

  function handleDark(e) {
    e.preventDefault();
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-1 shadow-md ">
      <div className="w-[1200px] flex justify-between mx-auto pt-5 pb-5">
        <h2 className="text-black font-bold text-2xl dark:text-white ">
          {t("Where in the world?")}
        </h2>
        <div
          onClick={handleDark}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={darkmode} width="20px" alt="darkmode image" />
          <button className="dark:text-white">
            {theme == "light" ? `Enable Dark Mode` : "Disable dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;