import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import VideoThumb from '../components/video_thumb'


const Video = () => (
  <div>
    <Container classNames='container-xl'>
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/indiansummer_thumb.jpg"
        vidTitle="Indian Summer"
        vidUrl="https://vimeo.com/254480243"
        vidDesc="Experimental video I put together from my trip to Mumbai."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/paq_thumb.jpg"
        vidTitle="Kyra PAQ Trailer"
        vidUrl="https://youtu.be/UTMpeREYaqg"
        vidDesc="Commercial trailer for YouTube show PAQ."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/timeless_thumb.jpg"
        vidTitle="Timeless"
        vidUrl="https://vimeo.com/182575478"
        vidDesc="Compilation of found dashcam footage from the 1950’s."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/posipod_thumb.jpg"
        vidTitle="Posipod"
        vidUrl="https://vimeo.com/234156888"
        vidDesc="Promotional video for a concept project developed in Mumbai."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/bluewave_thumb.jpg"
        vidTitle="Bluewave Teleshopping"
        vidUrl="https://vimeo.com/238535752"
        vidDesc="Mock television ad for Bluewave."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/bluewavetnk_thumb.jpg"
        vidTitle="Bluewave TNK"
        vidUrl="https://vimeo.com/252043227"
        vidDesc="Promotional video for Bluewave."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/clash_thumb.jpg"
        vidTitle="Clash of Class"
        vidUrl="https://vimeo.com/215804672"
        vidDesc="Short film I wrote for a University project."
      />
      <VideoThumb
        vidImg="https://s3.us-east-2.amazonaws.com/tmorsli/blues_thumb.jpg"
        vidTitle="BLUES"
        vidUrl="https://vimeo.com/215492443"
        vidDesc="Short film I edited for a University project."
      />


    </Container>
  </div>
)

export default Video
