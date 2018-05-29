import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import VideoThumb from '../components/video_thumb'


const Video = () => (
  <div>
    <Container classNames='container-xl'>
      <VideoThumb
        vidImg="http://i3.ytimg.com/vi/VeUn5ZQxANc/maxresdefault.jpg"
        vidTitle="Indian Summer"
        vidUrl="https://vimeo.com/254480243"
        vidDesc="Experimental video I put together from my trip to Mumbai."
      />
      <VideoThumb
        vidImg="http://i3.ytimg.com/vi/UTMpeREYaqg/maxresdefault.jpg"
        vidTitle="Kyra PAQ Trailer"
        vidUrl="https://youtu.be/UTMpeREYaqg"
        vidDesc="Commercial trailer for YouTube show PAQ."
      />
      <VideoThumb
        vidImg="https://i.vimeocdn.com/video/591518863.webp?mw=1920&mh=1080&q=70"
        vidTitle="Timeless"
        vidUrl="https://vimeo.com/182575478"
        vidDesc="Compilation of found dashcam footage from the 1950’s."
      />
      <VideoThumb
        vidImg="https://i.vimeocdn.com/video/656323462.webp?mw=1920&mh=1080&q=70"
        vidTitle="Posipod"
        vidUrl="https://vimeo.com/234156888"
        vidDesc="Promotional video for a concept project developed in Mumbai."
      />
      <VideoThumb
        vidImg="https://i.vimeocdn.com/video/661257544.webp?mw=1500&mh=1122&q=70"
        vidTitle="Bluewave Teleshopping"
        vidUrl="https://vimeo.com/238535752"
        vidDesc="Mock television ad for Bluewave."
      />
      <VideoThumb
        vidImg="https://i.vimeocdn.com/video/678570393.webp?mw=1500&mh=1125&q=70"
        vidTitle="Bluewave TNK"
        vidUrl="https://vimeo.com/252043227"
        vidDesc="Promotional video for Bluewave."
      />
      <VideoThumb
        vidImg="https://i.vimeocdn.com/video/632618252.webp?mw=1920&mh=1080&q=70"
        vidTitle="Clash of Class"
        vidUrl="https://vimeo.com/215804672"
        vidDesc="Short film I wrote for a University project."
      />
      <VideoThumb
        vidImg="https://i.vimeocdn.com/video/632618765.webp?mw=1920&mh=1080&q=70"
        vidTitle="BLUES"
        vidUrl="https://vimeo.com/215492443"
        vidDesc="Short film I edited for a University project."
      />


    </Container>
  </div>
)

export default Video
