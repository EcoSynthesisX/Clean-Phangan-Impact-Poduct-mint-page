import React from "react";

const Footer: React.FC = () => {

  return (
    <>
      <div className="navbar is-last">
        <div className="logo-wrap mob-version">
          <img
            src="images/eco-logo-web.png"
            loading="lazy"
            alt="logo-link"
            className="image-2"
          />
        </div>
        <div className="logo-op">
          <a href="https://optimistic.etherscan.io/address/0x5f7d5dee10e4cc693f0f9b047286d752550b4323#code" className="w-inline-block" target="_blank">
            <img src="images/op-logo-web.webp" loading="lazy" width="59.5" alt="" />
          </a>
        </div>
        <a href="#mint" className="button-reg mob-version w-button">
          Mint
        </a>
      </div>
      <div className="navbar is-2">
        <div className="div-block-4">
          <a
            href="https://github.com/EcoSynthesisX"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="images/github.svg"
              loading="lazy"
              alt="link to github"
            />
          </a>
          <a
            href="https://discord.gg/9dgXswwUAX"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="images/discord.svg"
              loading="lazy"
              alt="link to discord"
            />
          </a>
          <a href="https://x.com/ecosynthesisx" className="w-inline-block">
            <img src="images/x.svg" loading="lazy" alt="link to x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
