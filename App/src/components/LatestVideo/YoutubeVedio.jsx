import React from "react";
import "./Style.css";

function YoutubeVedio() {
  return (
    <>
      <div className="youtube-vedio">
        <h2>Latest Videos</h2>
        <div className="video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Latest Video"
                frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="vedio"

            ></iframe>

            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="vedio"
            ></iframe>

            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="vedio"
            ></iframe>

            <iframe src="https://www.youtube.com/embed/PBrYMBacnyM"
             frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="vedio"


            ></iframe>

            <iframe src="https://www.youtube.com/embed/VUr7Me2Sd0U" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="vedio"
            ></iframe>




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
