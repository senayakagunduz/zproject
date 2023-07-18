import React from "react";
import "./map.scss";
import {settings} from "../../../../helpers/settings"
const Map = () => {
  return (
    <div>
      <iframe
        src={settings.mapEmbedUrl}
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
