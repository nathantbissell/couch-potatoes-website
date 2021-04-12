import React from "react";
import { Button } from "react-rainbow-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <h1>Welcome To Couch Potatoes x15!</h1>

      <h3>What would you like to do?</h3>
      <div class="d-flex justify-content-around">
        <Button
          label="Team Stats"
          variant="brand"
          onClick={() => alert("send to list of teams")}
        />
        <Button
          label="League Stats"
          variant="destructive"
          onClick={() => alert("send to league stats")}
        />

        <Button
          label="Player Stats"
          variant="success"
          onClick={() => alert("send to list of player stats")}
        />
      </div>
    </div>
  );
}
