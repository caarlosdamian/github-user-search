import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Selector } from "../../interfaces/interfaces";
import LighIcon from "../../assets/icon-sun.svg";
import DarkIcon from "../../assets/icon-moon.svg";
import "./Top.scss";
import { toggle } from "../../redux/slices/themeSlices";

export const Top = () => {
  const { light } = useSelector((state: Selector) => state.theme);
  const dispatch = useDispatch()

  return (
    <div className="top__container">
      <h1 className={`top__container-header ${(light && "light") || "dark"}`}>
        devfinder
      </h1>
      <div className="top__wrapper" onClick={()=>dispatch(toggle())}>
        <h3 className={`top__wrapper-header ${(light && "light") || "dark"}`}>{(light && "DARK") || "LIGHT"}</h3>
        <img
          src={(light &&  DarkIcon ) || LighIcon}
          alt={(light && "LighIcon") || "DarkIcon"}
          className="top__wrapper-img"
        />
      </div>
    </div>
  );
};
