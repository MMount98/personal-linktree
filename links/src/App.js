import "./App.css";

import tiktok from "./images/tiktok.png"
import discord from "./images/discord.png"
import insta from "./images/Insta.png"

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <div className="socialBox flex-col items-center justify-center md:mb-12 mb-36" >
      <h1 className="font-custom text-6xl my-3 text-green">Soical Links</h1>
       <ul className="w-72 h-92 rounded-lg bg-green">
        <li><a href="https://www.tiktok.com/@mmount.tv"><img src={tiktok} alt="Tiktok Link" className="p-5"/></a></li>
        <li><a href="https://discord.gg/yY4xXdbF"><img src={discord} alt="Discord Link" className="p-5"/></a></li>
        <li><a href="https://www.instagram.com/michael_mount_/"><img src={insta} alt="Tiktok Link" className="p-5"/></a></li>
       </ul>
      </div>
    </div>
  );
}

export default App;
