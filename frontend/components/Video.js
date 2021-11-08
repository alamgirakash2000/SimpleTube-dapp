import React from "react";

export default function Video({ video, playedVideo, setPlayedVideo }) {
  return (
    <button
      className={`video ${video?.id === playedVideo?.id && "playing"}`}
      onClick={() => setPlayedVideo(video)}>
      <h1>{video.title}</h1>
      <h1 className={`d-none ${video?.id === playedVideo?.id && "d-block"}`}>
        <i>Now playing</i>
      </h1>
    </button>
  );
}
