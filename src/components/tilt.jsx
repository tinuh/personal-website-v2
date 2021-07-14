import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';
import { BrowserView, MobileView } from 'react-device-detect';

// NOTE(@lachlanjc): only pass one child!
const Tilt = ({ options = {}, children, ...props }) => {
  const root = useRef(null);
  useEffect(() => {
    VanillaTilt.init(root.current, {
      max: 7.5,
      scale: 1.03,
      speed: 400,
      glare: true,
      "max-glare": 0.25,
      gyroscope: false,
    })
  }, [])
  return <>
    <BrowserView>{React.cloneElement(children, { ref: root })}</BrowserView>
    <MobileView>{children}</MobileView>
  </>
}

export default Tilt