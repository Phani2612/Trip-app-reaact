import React from "react";
import { useSpring, animated } from "react-spring";
import Sparkle from "react-sparkle";

export const SparklingLink = ({ href, children }) => {
  const [sparkleProps, setSparkle] = useSpring(() => ({
    display: "none",
  }));

  const handleClick = () => {
    // Show the sparkle animation when the link is clicked
    setSparkle({
      display: "block",
      from: { opacity: 1, scale: 0 },
      to: { opacity: 0, scale: 1 },
    });
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          display: sparkleProps.display,
        }}
      >
        <Sparkle {...sparkleProps} />
      </animated.div>
    </div>
  );
};

export default SparklingLink;