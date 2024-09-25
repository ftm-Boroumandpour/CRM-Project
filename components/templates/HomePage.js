import React from "react";
import Card from "../modules/Card";

function HomePage({ customers }) {
  return (
    <div>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
}

export default HomePage;
