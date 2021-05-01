import gsap from "gsap";
import { Power4 } from "gsap/gsap-core";
import React, { useEffect } from "react";
import styled from "styled-components";

function LogoAnimation() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#svg-container", {
        visibility: "visible",
    })
    tl.from("#svg-container", {
      scale: 0.1,
      transformOrigin: "top left",
      duration: 1,
    });
    tl.fromTo(
      "#big-rect",
      {
        fill: "white",
      },
      {
        fill: "#ff492c",
      }, "-=1"
    );
    // tl.to("#svg-container", { duration: 2 });
    tl.fromTo(
      "#circle",
      {
        x: 0.01,
        zIndex: 0,
      },
      { x: 406, duration: 1 }
    );
    tl.fromTo(
      "#small-rect",
      { y: -200, x: 0 },
      { y: -200, x: 280 },
      "-=0.5"
    ).to("#small-rect", {
      y: 0,
    });
    tl.to("#small-rect-container", {
      zIndex: 10,
    });
    tl.to("#small-rect", {
      scaleX: 7,
      scaleY: 4.1,
      transformOrigin: "bottom right",
    });
    tl.to("#svg-container", {
      scaleX: 0.05 ,
      scaleY: 0.1 ,
      transformOrigin: "top left",
    });
    tl.repeat(-1);
  }, []);
  return (
    <SvgContainer id="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="406"
        height="406"
        viewBox="0 0 812 406"
        id="big-rect-container"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="big-rect">
            <rect width="406" height="406" />
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="406"
        height="406"
        viewBox="0 0 812 406"
        id="circle-container"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="circle">
            <circle cx="141" cy="141" r="141" />
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="406"
        height="406"
        viewBox="0 0 812 406"
        id="small-rect-container"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="small-rect">
            <rect x="305" y="305" width="101" height="101" />
          </g>
        </g>
      </svg>
    </SvgContainer>
  );
}

const SvgContainer = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  visibility: hidden;
  opacity: 0.3;
  svg {
    position: absolute;
  }
  #big-rect-container {
    z-index: 10;
  }
  #circle-container {
    z-index: 1;
  }
  #big-rect {
    fill: #ff492c;
  }
  #circle {
    fill: #edbf07;
  }
  #small-rect {
    fill: #e7ebed;
  }
`;

export default LogoAnimation;
