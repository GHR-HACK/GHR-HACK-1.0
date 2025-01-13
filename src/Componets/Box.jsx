import React, { useEffect } from "react";

const PrizeCard = () => {
  useEffect(() => {
    const card = document.querySelector(".prize-card-3d");

    const handleMouseMove = (e) => {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;

      const xRotation = ((offsetY - clientHeight / 2) / clientHeight) * 20;
      const yRotation = ((offsetX - clientWidth / 2) / clientWidth) * -20;

      card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    const resetTransform = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTransform);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section className="bg-[#014EB6] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center py-8">
          <span className="text-yellow-400">Exciting Prizes</span> Await!
        </h1>
        <div className="prize-card-3d relative mx-auto bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 p-10 m-10 rounded-2xl shadow-2xl max-w-sm text-center transform transition-transform duration-500">
          <i className="fas fa-trophy text-yellow-400 text-6xl mb-4 animate-bounce"></i>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Cash Prizes Worth
          </h2>
          <p className="text-5xl font-extrabold text-yellow-400">₹80,000</p>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-400 rounded-full blur-lg opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-sky-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PrizeCard;
