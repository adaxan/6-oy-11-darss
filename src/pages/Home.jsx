import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "../App";
import search from "../images/search.svg";
import germany from "../images/germany.jpg";
import usa from "../images/usa.jpg";
import brazil from "../images/brazil.jpg";
import island from "../images/island.jpg";
import afgan from "../images/afgan.jpg";
import island1 from "../images/island1.jpg";
import albania from "../images/albania.jpg";
import algeria from "../images/algeria.jpg";

function Card({ image, name, population, region, capital }) {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white w-[250px] shadow-md rounded cursor-pointer">
      <div>
        <img src={image} alt={`${name} flag`} />
      </div>
      <div className="p-5">
        <h3 className="font-bold mb-3 text-md">{name}</h3>
        <p className="text-black text-opacity-60 text-sm mb-1 dark:text-white">
          <span className="font-medium text-base text-black dark:text-white">
            Population
          </span>
          : {population}
        </p>
        <p className="text-black text-opacity-60 text-sm mb-1 dark:text-white">
          <span className="font-medium text-base text-black dark:text-white">
            Region
          </span>
          : {region}
        </p>
        <p className="text-black text-opacity-60 text-sm mb-1 dark:text-white">
          <span className="font-medium text-base text-black dark:text-white">
            Capital
          </span>
          : {capital}
        </p>
      </div>
    </div>
  );
}

function Home() {
  const { language, setLanguage } = useContext(Language);
  const { i18n } = useTranslation();

  function handleLang(event){
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const countries = [
    {
      image: germany,
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin",
      border: ["Poland", "Austria", "France"],
      id: Date.now(),
    },
    {
      image: usa,
      name: "United States of America",
      population: "323,947,000",
      region: "Americas",
      capital: "Washington, D.C.",
      id: Date.now(),
    },
    {
      image: brazil,
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      capital: "Brasília",
      id: Date.now(),
    },
    {
      image: island,
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavík",
      id: Date.now(),
    },
    {
      image: afgan,
      name: "Afghanistan",
      population: "27,657,145",
      region: "Asia",
      capital: "Kabul",
      id: Date.now(),
    },
    {
      image: island1,
      name: "Åland Islands",
      population: "28,875",
      region: "Europe",
      capital: "Mariehamn",
      id: Date.now(),
    },
    {
      image: albania,
      name: "Albania",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana",
      id: Date.now(),
    },
    {
      image: algeria,
      name: "Algeria",
      population: "40,400,000",
      region: "Africa",
      capital: "Algiers",
      id: Date.now(),
    },
  ];
  return (
    <div className="dark:bg-slate-900">
      <div className="w-[1200px] mx-auto flex justify-between items-center pt-20 mb-16">
        <form className="bg-white dark:bg-slate-800 dark:text-white w-[500px] flex items-center gap-4 p-4 rounded shadow-md">
          <img src={search} alt="Search icon" />
          <input
            type="text"
            className="dark:bg-gray-800 text-black dark:text-white placeholder-black dark:placeholder:text-white w-full focus:outline-none rounded-lg"
            placeholder="Davlatlarni izlash..."
          />
        </form>
        <div>
          <select
            value={language}
            onChange={handleLang}
            className="w-[200px] dark:bg-slate-800 dark:text-white p-4 rounded shadow-md"
          >
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div
        className="w-[1200px] mx-auto grid grid-cols-4 gap-8 pb-20"
      >
        {countries.map((country, index) => (
          <Card key={index} {...country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
