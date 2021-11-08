import React, { useEffect, useState } from "react";
import "video-react/dist/video-react.css";

export default function PlayedVideo({ playedVideo }) {
  return (
    <div className='playedVideo my-3' key={playedVideo?.id}>
      <video className='playedVideo' width='100%' controls autoPlay>
        <source
          src={`https://ipfs.io/ipfs/${playedVideo?.hash}`}
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>

      <h1 className='title text-info'>
        Playing: <span className='text-success'>{playedVideo?.title}</span>
      </h1>
    </div>
  );
}
