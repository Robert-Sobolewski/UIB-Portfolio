import React, { useEffect, useState } from "react";
import "./App.css";
import { portfolio } from "../types";
import server_data from "./data.json";
import Nav from "./components/nav/Nav";
import Carousel from "./components/carousel/Carousel";
import Card from "./components/card/Card";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  useEffect(() => {
    setData(server_data);
  }, []);
  const [data, setData] = useState<any>(null);
  return (
    <div id="home" className="App">
      <Nav data={data}></Nav>
      <Carousel data={data}></Carousel>
      <Card data={data}></Card>
      <Service data={data}></Service>
      <Contact data={data}></Contact>
      <About data={data}></About>
    </div>
  );
}

export default App;
