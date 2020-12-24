import React from "react"
import { HeaderComponent } from "../components/Header/HeaderComponent"
import { DiscoverComponent } from "../components/Discover/DiscoverComponent"
import { VideosAndArticlesComponent } from "../components/VideosAndArticles/VideosAndArticlesComponent"
import { CodeAlongComponent } from "../components/CodeAlong/CodeAlongComponent"

function LandingPage() {
  return (
    <div>
      <HeaderComponent />;
      <DiscoverComponent />
      <VideosAndArticlesComponent />
      <CodeAlongComponent />
    </div>
  )
}

export default LandingPage
