import { title } from "process";
import React from "react";
import { MovieListProps } from "../../redux/typeGlobal";
import { Link } from "react-router-dom";
import Label from "../../atoms/Label";
import ImageModal from "../ImageModal";

const Card: React.FC<MovieListProps> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
}) => {
  return (
    <div className="shadow-xl rounded-lg text-center">
      <div className="flex justify-center py-4">
        <ImageModal src={Poster} alt={title} />
        {/* <img
          src={Poster}
          alt={title}
          className="w-full h-auto rounded-tl-lg rounded-lg"
        /> */}
      </div>
      <div className="px-4 pb-4">
        <p className="text-md text-black font-semibold mb-4">
          {Title} <Label>{Type}</Label> <Label>{Year}</Label>
        </p>
        <Link
          className=" py-1 px-4 rounded-xl bg-black text-white text-sm font-semibold hover:text-black hover:bg-white transition"
          to={`/detail/${imdbID}`}
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default Card;
