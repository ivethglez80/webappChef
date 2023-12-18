import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Transition } from "@headlessui/react";
import "../equipo/equipo.css"
import e1 from "../../img/events1.png";
import e2 from "../../img/events2.png"

const Eventos = () => {

    const images = [
        e1,
        e2,
        "https://i.ibb.co/w7qXS4y/wedding-at-los-cabos.png",
        "https://i.ibb.co/8Nsw7sz/dinner-at-the-beach.png",
        "https://i.ibb.co/94fr661/El-Equipo-1.png",
        "https://i.ibb.co/N711cQ5/El-Equipo.png",
        "https://i.ibb.co/j5fgqj5/friends-at-los-cabos.png",
        "https://i.ibb.co/tXj5PrV/wedding-at-los-cabos-2.png",
        "https://i.ibb.co/kc69FB8/wedding-at-los-cabos-3.png",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="md:h-screen                        
                        border-b-2 border-yellow-400">

                {/* <img src={e1} alt="eventos at los cabos" className="       
           md:h-screen md:w-screen md:object-cover sm:hidden md:block
           "/> */}

                <div className=""> {/* img carrousel */}
                    {images.map((image, i) => (
                        <Transition
                            key={i}
                            show={i === index}
                            enter="transition-opacity duration-300 "
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-300 "
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <img
                                key={i}
                                src={image}
                                alt={`slide-${i}`}
                                className="h-screen md:w-screen md:object-cover sm:hidden md:block"
                            />
                        </Transition>
                    ))}
                </div>

            </div>
        </>
    )
};

export default Eventos;