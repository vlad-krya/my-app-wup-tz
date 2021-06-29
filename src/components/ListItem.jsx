import React from "react";

const ListItem = ({ item }) => {
  return (
    <li className="list__item">
      <span className="list__item__massage">{item.value}</span>
      <span className="list__item__time">{item.time}</span>
    </li>
  );
};

export default ListItem;
