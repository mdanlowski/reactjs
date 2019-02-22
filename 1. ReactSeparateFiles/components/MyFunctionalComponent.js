import React from "react";
import Header from "./Header";
import MyList from "./MyList";

function MainContent() {
  return (
    <div className="group">
      <Header />
      <MyList />
      
      <p className="my-bio">I like trains and pizza</p>
      
    </div>
  );
}

export default MainContent;