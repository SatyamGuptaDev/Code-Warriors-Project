import "./App.css";
import Plx from "react-plx";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { useRef } from "react";

export default function App() {
  const [showScrollText, setShowScrollText] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showPressEnter, setShowPressEnter] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setShowScrollText(false);
      } else {
        setShowScrollText(true);
      }

      if (
        scrollY >=
        document.documentElement.scrollHeight - window.innerHeight
      ) {
        setShowPlayButton(true);
      } else {
        setShowPlayButton(false);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        smoothScrollTo(scrollRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const smoothScrollTo = (element) => {
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    const initialY = window.scrollY;
    const distance = Math.abs(targetY - initialY);
    const duration = 5000; // Adjust the duration (in milliseconds) for slower or faster scrolling

    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;

      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, initialY + percent * (targetY - initialY));

      if (time < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };



  return (


    <div>

      <Plx
        parallaxData={[
          {
            start: 600,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 45,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: "50%",
          top: "-50px",
          width: "30vw",
          zIndex: 200
        }}
      >
        <nav className="home-nav" style={{paddingTop:"-20px", display: "flex",height: "32px", paddingBottom: "5px", transform: "translateX(-50%)", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", color: "white"}}>
          <a style={{textDecoration: "none", color:"white"}}>Home</a>
          <a style={{textDecoration: "none", color:"white"}} >About</a>
          <a style={{textDecoration: "none", color:"white"}} >Project</a>
          <a style={{textDecoration: "none", color:"white"}} >Developers</a>
        </nav>
      </Plx>





      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>






      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.22 ,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 0
        }}
      >
                <img
          style={{
            width: "100%"
          }}
          src="/background-01.jpg"
        />
       
      </Plx>







      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "30vw",
          width: "100%",
          zIndex: 10
        }}
      >
          <div style={{width: "100%", height: '100px', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}> 

          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: 0,
                    endValue: -200,
                    property: "translateX",
                  }
                ]
              }
            ]}
            style={{ 
            }}
          >
            <img style={{ height: '65px'}} src="code.png" alt="background" />  

          </Plx>
          

          
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: 0,
                    endValue: 200,
                    property: "translateX",
                  }
                ]
              }

            ]}
            style={{

            }}
            >

              <img style={{ height: '70px' }} src="warriors.png" alt="background" />
          </Plx>
          </div>
      </Plx>





      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 0,
                endValue: 0,
                property: "opacity",
              },
              {
                startValue: 1,
                endValue: 0.9,
                property: "brightness",
              }
            ]
          },
          {
            start: 500,
            end: 600,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          },
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.22 ,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 1
        }}
      >
        <img
          style={{
            width: "100%"
          }}
          src="/background.jpg"
        />
      </Plx>










      {showScrollText && (
        <div
          className={`scroll-down-container ${
            showScrollText ? "scroll-visible" : ""
          }`}
          style={{
            position: "fixed",
            bottom: "10px", // Adjust the bottom position
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <span className="scroll-text arrow">Scroll</span>
          <AiOutlineDown className="arrow" />
          <span className="press-enter-text">
            or Press Enter
            {showPressEnter && (
              <span className="press-enter-highlight"> (Press Enter)</span>
            )}
          </span>
        </div>
      )}
      {showPlayButton && (
        <div
          className={`play-button-container ${
            showPlayButton ? "crash" : ""
          }`}
          style={{
            position: "fixed",
            top: "70%",
            left: "38%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
<<<<<<< HEAD
        >
          <button style={{ background: "transparent", color: "green" }}>
            <h1>
              <span>PLAY</span>
            </h1>
          </button>
=======
        > 
     <h1>
     <a  href="" className="btn" > Play Game</a>
     </h1>
        
>>>>>>> 6c7d0da3ac56904927ba7536d18fcc2d6f893847
        </div>
      )}
      <div ref={scrollRef}></div>
    </div>
  );
}