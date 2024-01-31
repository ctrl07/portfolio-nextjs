import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <a
        href="https://65b999c62cc4ca6511abfd08--singular-salmiakki-8359e9.netlify.app/"
        className="project__button"
      >
        View <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
};

export default ProjectItems;
