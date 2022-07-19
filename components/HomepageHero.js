import React, { useContext, useEffect } from "react";
import { getStrapiMedia } from "../util/media";
import rolly from 'rolly.js';

const HomepageHero = (props) => {
  const heroData = props.hpProps.HomepageHero;
  const backgroundImgUrl = getStrapiMedia(heroData.images.data);
  const backgroundImg = {
    backgroundImage: `url(${backgroundImgUrl})`,
  };
  

  return (
    <div className="homepage-hero" style={backgroundImg}>
      <div className="homepage-hero__container">
        <h1 class="homepage-hero__header">{heroData.Header}</h1>
      </div>
    </div>
  );
};

export default HomepageHero;
