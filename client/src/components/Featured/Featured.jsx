import React from "react"
import "./featured.css"
import FeaturedCard from "./FeaturedCard"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import { DISCOVER_NEW_SKILLS } from "./FeaturedStringIds"

const Featured = (props) => {
  const FeaturedList = [
    {
      discoverCardImgPath: "./images/discover1.png",
      discoverCardTitle: "Stacks 101",
      discoverCardSubtitle: "Stacks",
    },
    {
      discoverCardImgPath: "./images/discover2.png",
      discoverCardTitle: "Queues 101",
      discoverCardSubtitle: "Queues",
    },
    {
      discoverCardImgPath: "./images/discover3.png",
      discoverCardTitle: "Linked List 101",
      discoverCardSubtitle: "Linked List",
    },
    {
      discoverCardImgPath: "./images/discover4.png",
      discoverCardTitle: "Remembering Binary",
      discoverCardSubtitle: "Binary",
    },
  ]
  return (
    <div className="featured-container">
      <div className="featured-title">
        <h1 className="bold">{DISCOVER_NEW_SKILLS}</h1>
        <PlayArrowIcon className="featured-play" />
      </div>
      <div className="card-deck ">
        {FeaturedList.map((card, i) => (
          <FeaturedCard key={i} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Featured
export { default as Featured } from "./Featured"
