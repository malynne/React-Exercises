import React from "react";
import { IMAGE_SOURCE } from "constants/moviesMock";
import genres from "constants/genres.json";
import { MovieCardProp } from "./types";
import "./MovieCard.css";
import {
  ShowBox,
  ImageContainer,
  ShowThumb,
  InfoShow,
  ShowTitle,
  ShowLabel,
  ShowLabelTitle,
  ShowCalification
} from "./styles";
import { Pill } from "components/Pill";

const getColor = (rating: number) => {
  if (rating >= 8) return "#00ff00";
  else if (rating >= 6) return "#ffff00";
  else return "#ff0000";
};

const MovieCard: React.FC<MovieCardProp> = ({
  path,
  title,
  voteAverage,
  genreId,
}) => {
  const poster = IMAGE_SOURCE + path;

  const getGenre = (genreId: number) => {
    const key: any = Object.keys(genres.genres).find(
      (genre: any): boolean => genres.genres[genre].id === genreId
    );
    if (key) {
      return genres.genres[key].name;
    }
    return "Not Classified";
  };

  return (
    <ShowBox>
      <ImageContainer>
        <ShowThumb src={poster} />
      </ImageContainer>
      <InfoShow>
        <ShowTitle>
          <Pill pillColor={getColor(voteAverage)} genre={getGenre(genreId)} />
          {/*  <ShowLabel>{getGenre(genreId)}</ShowLabel> */}
          <ShowLabelTitle>{title}</ShowLabelTitle>
          <ShowCalification>* {voteAverage} / 10</ShowCalification>
        </ShowTitle>
      </InfoShow>
    </ShowBox>
  );
};

export default MovieCard;
