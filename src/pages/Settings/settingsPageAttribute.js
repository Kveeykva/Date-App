import React from "react";
import PhoneNumberScreen from "./settingsPages/phoneNumber";
import CurrentLocation from "./settingsPages/currentLocation";
import NotificationScreen from "./settingsPages/notification";

const SettingsScreenAttribute = (props) => {
  const { type, value } = props.route.params;
  if (type === "PHONE_NUMBER") {
    return <PhoneNumberScreen {...props} />;
  } else if (type === "CURRENT_LOCATION") {
    return <CurrentLocation {...props} />;
  } else if (type === "NOTIFICATION") {
    return <NotificationScreen {...props} />;
  }
};

export default SettingsScreenAttribute;
