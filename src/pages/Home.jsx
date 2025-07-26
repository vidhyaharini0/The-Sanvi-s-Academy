import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero />
      <Courses />
    </div>
  );
}

export default Home;
