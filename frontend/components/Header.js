import Identicon from "identicon.js";
import React from "react";

export default function Header({ user, name }) {
  return (
    <div className='header'>
      <div className='container flex-lg-row flex-column'>
        <h1>{name}</h1>
        <div className='right d-flex'>
          <p> {user}</p>
          {user ? (
            <img
              className='ml-2'
              width='30'
              height='30'
              src={`data:image/png;base64,${new Identicon(
                user,
                30
              ).toString()}`}
            />
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}
