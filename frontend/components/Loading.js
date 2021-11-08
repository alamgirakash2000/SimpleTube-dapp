import React from "react";

export default function Loading() {
  return (
    <div className='loading'>
      <img src='/loading-gear.gif' alt='' />
      <p>
        <b>Loading... Please wait...</b>
      </p>
    </div>
  );
}
