import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import list1 from "./../../assets/images/particles/list1.png"
import list2 from "./../../assets/images/particles/list2.png"
import list3 from "./../../assets/images/particles/list3.png"
import list4 from "./../../assets/images/particles/list4.png"
import list5 from "./../../assets/images/particles/list5.png"
import list6 from "./../../assets/images/particles/list6.png"


export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                number: {
                    value: 60,
                    density: {
                    enable: true,
                    value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "images",
                    stroke: {
                    width: 0,
                    color: "#000000"
                    },
                    polygon: {
                    nb_sides: 5
                    },
                    images: [
                        {
                        src: `${list1}`,
                        width: 100,
                        height: 100
                        },
                        {
                        src: `${list2}`,
                        width: 100,
                        height: 100
                        },
                        {
                        src: `${list3}`,
                        width: 100,
                        height: 100
                        },
                        {
                        src: `${list4}`,
                        width: 100,
                        height: 100
                        },
                        {
                        src: `${list5}`,
                        width: 100,
                        height: 100
                        },
                        {
                        src: `${list6}`,
                        width: 100,
                        height: 100
                        },
                    ]
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                    enable: false,
                    speed: 5,
                    opacity_min: 0.5,
                    sync: false
                    }
                },
                size: {
                    value: 30,
                    random: true,
                    anim: {
                    enable: false,
                    speed: 50,
                    size_min: 0.1,
                    sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: "bottom-right",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                    enable: false,
                    rotateX:  2000,
                    rotateY:  2000
                    }
                }
                },
                interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                    enable: true,
                    mode: "repulse"
                    },
                    onclick: {
                    enable: true,
                    mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                    },
                    bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4
                    },
                    push: {
                    particles_nb: 4
                    },
                    remove: {
                    particles_nb: 2
                    }
                }
                },
                retina_detect: true
            }}
        />
    );
};