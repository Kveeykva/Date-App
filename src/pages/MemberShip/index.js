import React from "react";
import NormalPremium from "./premium";
import GoldPremium from "./gold";
import BoostPremium from "./boost";


const MembershipsAttribute = (props) => {
  const { type, value } = props.route.params;
  if (type === "NormalPremium") {
    return <NormalPremium {...props} />;
  } else if (type === "GoldPremium") {
    return <GoldPremium {...props} />;
  } else if (type === "BoostPremium") {
    return <BoostPremium {...props} />;
  } 
  
};
export default MembershipsAttribute;
