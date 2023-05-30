import React from "react";
import "./InputOption.css";
import { useState } from "react";

function InputOption({ title, Icon, color }) {
  const [particles, setParticles] = useState([]);

  const handleClick = () => {
    const random = (max) => {
      return Math.random() * (max - 0) + 0;
    };

    const createParticle = () => {
      return {
        styles: {
          transform: `translate3d(${random(500) - 250}px, ${
            random(200) - 150
          }px, 0) rotate(${random(360)}deg)`,
          background: `hsla(${random(360)}, 100%, 50%, 1)`,
          animation: "bang 700ms ease-out forwards",
          opacity: 0,
        },
      };
    };

    const newParticles = [];
    for (let i = 0; i < 100; i++) {
      newParticles.push(createParticle());
    }

    setParticles([]);
    setTimeout(() => {
      setParticles(newParticles);
    }, 100);
  };

  return (
    <div className="inputOption" onClick={handleClick}>
      <div className="confetti-container">
        {particles.map((particle, index) => (
          <i key={index} style={particle.styles}></i>
        ))}
      </div>

      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
