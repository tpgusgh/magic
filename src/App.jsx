import React, { useState } from "react";

const App = () => {
  const [magicMessage, setMagicMessage] = useState("");
  const [audio, setAudio] = useState(null);

  // MP3 파일 목록
  const songs = [
    "src/assets/no.mp3",
    "src/assets/thatno.mp3",
    "src/assets/yes.mp3",
    "src/assets/onemore.mp3",
  ];

  const triggerMagic = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];

    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(selectedSong);
    setAudio(newAudio);
    newAudio.play();

    setMagicMessage("마법이 일어났습니다! 🎵");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "-50px",
        backgroundImage: "url('src/assets/obs.jpeg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "750px", 
        color: "white", 
      }}
    >
      <h1>마법의 소라고동</h1>

      <img
        src="src/assets/magic.jpg" 
        alt="소라고동"
        onClick={triggerMagic}
        style={{
          width: "500px",
          height: "500px",
          cursor: "pointer",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      />

      {magicMessage && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "24px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          {magicMessage}
        </div>
      )}
    </div>
  );
};

export default App;
