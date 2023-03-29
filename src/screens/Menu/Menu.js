import React from "react";
import { Card } from "../MenuCard/Card";
import { Items } from "../items/Items";
import { Navabr } from "../Navabr";
import "./Menu.css";

export const Menu = () => {
  return (
    <div>
      <Navabr />
      <div className="menuuItems">
        <h1>Menu Items</h1>
      </div>
      <div className="cardsMain">
        <div className="Cards">
          {Items.map((project) => (
            <Card
              key={project.title}
              Name={project.title}
              description={project.description}
              imgSrc={project.getImageSrc()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
