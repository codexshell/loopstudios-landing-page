import imgDeepEarthUrl from "../assets/mobile/image-deep-earth.jpg";
import imgNightArcadeUrl from "../assets/mobile/image-night-arcade.jpg";
import imgSoccerTeamUrl from "../assets/mobile/image-soccer-team.jpg";
import imgTheGridUrl from "../assets/mobile/image-grid.jpg";
import imgFromUpAboveUrl from "../assets/mobile/image-from-above.jpg";
import imgPocketBorealis from "../assets/mobile/image-pocket-borealis.jpg";
import imgTheCuriosity from "../assets/mobile/image-curiosity.jpg";
import imgFishEye from "../assets/mobile/image-fisheye.jpg";

type Image = {
  url: string;
  alt: string;
};

export const mobileImageList: Image[] = [
  { url: imgDeepEarthUrl, alt: "DEEP EARTH" },
  { url: imgNightArcadeUrl, alt: "NIGHT ARCADE" },
  { url: imgSoccerTeamUrl, alt: "SOCCER TEAM VR" },
  { url: imgTheGridUrl, alt: "THE GRID" },
  { url: imgFromUpAboveUrl, alt: "FROM UP ABOVE VR" },
  { url: imgPocketBorealis, alt: "POCKET BOREALIS" },
  { url: imgTheCuriosity, alt: "THE CURIOSITY" },
  { url: imgFishEye, alt: "MAKE IT FISHEYE" },
];
