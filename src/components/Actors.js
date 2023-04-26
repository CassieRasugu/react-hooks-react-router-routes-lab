import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
     <nav>
      <ul>
        <directors to="/actors" activeClassName="active"><h1>Actors Page</h1> </directors>
      </ul>
    </nav>
</div>
    );
}
export default Actors;
