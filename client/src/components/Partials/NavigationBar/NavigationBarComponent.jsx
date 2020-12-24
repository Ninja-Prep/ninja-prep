import React from "react"
import NavigationBarDesktop from "./NavigationBarDesktop"
import NavigationBarTablet from "./NavigationBarTablet"
import NavigationBarMobile from "./NavigationBarMobile"
import { Desktop, Tablet, Mobile } from "../../MediaQuery/DeviceSizes"

const NavigationBarComponent = () => (
  <div>
    <Desktop>
      <NavigationBarDesktop />
    </Desktop>
    <Tablet>
      <NavigationBarTablet />
    </Tablet>
    <Mobile>
      <NavigationBarMobile />
    </Mobile>
  </div>
)

export default NavigationBarComponent
export { default as NavigationBarComponent } from "./NavigationBarComponent"
