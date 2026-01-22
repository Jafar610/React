import React, { useState, useEffect } from "react";
import "./Style.css";

function YoutubeVedio() {
  const [YoutubeVedios, setYoutubeVedio] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=4&order=date&key=AIzaSyB6NkG86l4g3PIoQNDdlsDCOtCUM61SGFQ",
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubeVedio(data.items);
      });
  }, []);

  // console.log(YoutubeVedios);

  return (
    <>
      <div className="youtube-vedio">
        <h2>Latest Videos</h2>
        <div className="video-container">
          {YoutubeVedios?.map((singleVedio) => {
            let vidID = singleVedio.id.videoId;
            let vidLink =`https://www.youtube.com/watch?v=${vidID}`;
            let vedioWrapper = (
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src= {singleVedio.snippet.thumbnails.high.url}
                      alt="Video Thumbnail"
                    />
                  </a>
                </div>
                <div className="videoInfo">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      {singleVedio.snippet.title}
                    </a>
                  </div>
                  <div className="viedoDiscreption">
                    {singleVedio.snippet.description}
                  </div>
                  <div className="videoMeta">
                    <span className="videoViews">1M views</span> •{" "}
                    <span className="videoDate">{singleVedio.snippet.publishedAt}</span>
                  </div>
                </div>
              </div>
            );
            return vedioWrapper;
          })}

        
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default YoutubeVedio;
