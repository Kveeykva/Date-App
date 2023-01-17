import React from "react";
import GenderScreen from "./lifeStylePages/gender";
import ZodiacSignScreen from "./lifeStylePages/zodiacSign";
import WorkScreen from "./lifeStylePages/work";
import LocationScreen from "./lifeStylePages/location";
import HomeTownScreen from "./lifeStylePages/homeTown";
import EducationScreen from "./lifeStylePages/education";
import DrinkScreen from "./myBasicsPages/drink";
import LookingForScreen from "./myBasicsPages/lookingFor";
import PetScreen from "./myBasicsPages/pet";
import SporScreen from "./myBasicsPages/spor";
import PoliticsScreen from "./myBasicsPages/politics";
import SmokeScreen from "./myBasicsPages/smoke";

const EditProfileAttribute = (props) => {
  const { type, value } = props.route.params;
  if (type === "GENDER") {
    return <GenderScreen {...props} />;
  } else if (type === "ZODIAC") {
    return <ZodiacSignScreen {...props} />;
  } else if (type === "WORK") {
    return <WorkScreen {...props} />;
  } else if (type === "LOCATION") {
    return <LocationScreen {...props} />;
  } else if (type === "HOMETOWN") {
    return <HomeTownScreen {...props} />;
  } else if (type === "EDUCATION") {
    return <EducationScreen {...props} />;
  } else if (type === "DRINK") {
    return <DrinkScreen {...props} />;
  } else if (type === "LOOKING_FOR") {
    return <LookingForScreen {...props} />;
  } else if (type === "PET") {
    return <PetScreen {...props} />;
  } else if (type === "POLITICS") {
    return <PoliticsScreen {...props} />;
  } else if (type === "SMOKE") {
    return <SmokeScreen {...props} />;
  } else if (type === "SPOR") {
    return <SporScreen {...props} />;
  }
};
export default EditProfileAttribute;
