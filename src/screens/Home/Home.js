import React from "react";
import "./Home.css";
import { Navabr } from "../Navabr";
// import mainPhoto from "../images/chef.png";
import { Card } from "../MenuCard/Card";
import { Items } from "../items/Items";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Home = () => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/reserveTable");
  };
  const handleMenu = () => {
    navigate("/menu");
  };

  return (
    <div>
      <Navabr />

      <div>
        <main className="main">
          <section className="topSection">
            <div className="top">
              <div className="shortIntro">
                <h2>Little Lemon Restaurant</h2>
                <h4>Based in Chicago</h4>
                <h5>
                  Little Lemon is a restaurant that specializes in fresh and
                  healthy cuisine, offering a variety of plant-based and
                  gluten-free options. They use locally sourced ingredients to
                  create meals that are both delicious and nutritious. Whether
                  you're stopping in for breakfast, lunch, or dinner, you can
                  enjoy a comfortable and inviting atmosphere.
                </h5>
                <button className="table" onClick={handleBook}>
                  Reserve a Table
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                alt=""
                width={300}
                height={400}
              ></img>
            </div>
          </section>
        </main>
      </div>
      <div>
        <div className="menuu">
          <h1>Specials</h1>
          <button onClick={handleMenu}>Menu</button>
        </div>
      </div>
      <section className="cardsMain">
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
      </section>
    </div>
  );
};
