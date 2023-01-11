import React from "react";
import { BsTwitter } from "react-icons/bs";
import "./share.scss";

export const Share = () => {
  return (
    <>
      <a
        href="https://twitter.com/intent/tweet?text=Stay%20safe%20online%20by%20using%20%23GeneraPass,%20the%20app%20that%20generates%20strong%20and%20unique%20passwords%20for%20all%20your%20accounts!%20Try%20it%20now%3A%20https%3A//generapass.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="share"
      >
        <span>Share on</span>
        <BsTwitter />
        <span>Twitter</span>
      </a>
    </>
  );
};
