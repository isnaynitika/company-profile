import React from "react";

const DetailItem = ({ item }) => {
  return (
    <div>
      <h1>{item.attributes.judulporto}</h1>
      <p>{item.attributes.penjelasan}</p>
    </div>
  );
};

export default DetailItem;
