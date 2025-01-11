import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blockchain from "../assets/ThemeLogo/Blockchain.png";
import Ai from "../assets/ThemeLogo/Ai.png";
import Iot from "../assets/ThemeLogo/Iot.png";
import Helthcare from "../assets/ThemeLogo/Healthcare.png";
import Ml from "../assets/ThemeLogo/machineLearning.png";
import Cloud from "../assets/ThemeLogo/Cloud.png";
    


    const themes = [
    {
        icon: "cloud-computing",
        title: "Cloud Computing",
        image:Cloud, 
    },
    {
        icon: "education",
        title: "Blockchain",
        image: Blockchain,
    },
    {
        icon: "ai",
        title: "Artificial Intelligence",
        image: Ai,
    },
    {
        icon: "iot",
        title: "IOT",
        image: Iot,
    },
    {
        icon: "healthcare",
        title: "Healthcare",
        image:  Helthcare,
    },
    {
        icon: "machine-learning",
        title: "Machine Learning",
        image: Ml,
    },
    ];

    const HackathonThemes = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        themes.forEach((theme, index) => {
        const card = cardRefs.current[index];

        let animationProps = {
            opacity: 0,
            y: 60,
        };

        if (index === 0) {
            // First card: Coming from the left
            animationProps.x = -250;
        } else if (index === 1) {
            // Second card: Coming from the top
            animationProps.y = -250;
        } else if (index === 2) {
            // Third card: Coming from the right
            animationProps.x = 250;
        }

        // Animation for each card
        gsap.fromTo(
            card,
            animationProps,
            {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
                trigger: card,
                start: "top 80%", // Start when top of the card is at 80% of the viewport
                end: "bottom 20%",
                scrub: true,
                 // Smooth animation on scroll
            },
            }
        );
        });
    }, []);

    return (
        <section id="Theme" className="font-[Ghr4] bg-[#014EB6] text-white py-16">
        <div className="container mx-auto px-4">
            <h2 className="font-[Ghr4] text-5xl mb-12 text-center text-white">
            Hackathon Themes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
                <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Store card reference
                className="theme-card h-56 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105"
                >
                <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-52 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                    {theme.title}
                </h3>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default HackathonThemes;
