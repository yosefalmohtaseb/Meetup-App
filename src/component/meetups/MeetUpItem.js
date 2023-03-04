import clasess from "./MeetUpItem.module.css";
import Card from "../ui/Card";

import React from "react";

function MeetUpItem(props) {
  return (
    <li className={clasess.item}>
      <Card>
        <div className={clasess.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={clasess.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={clasess.actions}>
          <button>To Favoriets</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
