import React from 'react'
import Link from 'gatsby-link'

const VideoThumb = ({ vidTitle, vidImg, vidDesc, vidUrl }) => (
  <div>
    <div className='video-thumb'>
      <a href={vidUrl}>
        <img src={vidImg} alt={vidDesc} />
        <h3 className="f4 bold">{vidTitle}</h3>
        <p>{vidDesc}</p>
      </a>
    </div>
  </div>
)

export default VideoThumb
