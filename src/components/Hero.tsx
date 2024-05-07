import React from "react";

const Hero: React.FC = () => {

  return (
    <div data-w-id="594b641a-c099-ed3d-570a-22964fdaf0fa" className="hero-wrap">
      <div className="navbar is-2">
        <div className="div-block-4">
          <a href="https://github.com/EcoSynthesisX" className="w-inline-block" target="_blank">
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
          <a href="https://x.com/ecosynthesisx" className="w-inline-block" target="_blank">
            <img src="images/x.svg" loading="lazy" alt="link to x" />
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="logo-wrap mob-version">
          <img
            src="images/eco-logo.svg"
            loading="lazy"
            width={164}
            alt=""
            className="image-2"
          />
        </div>
        <div className="logo-op">
          <a href="https://optimistic.etherscan.io/address/0x5f7d5dee10e4cc693f0f9b047286d752550b4323#code" className="w-inline-block" target="_blank">
            <img
              src="images/op-logo-web.webp"
              loading="lazy"
              width="59.5"
              alt=""
              className="image-8"
            />
          </a>
        </div>
        <a href="#mint" className="button-reg mob-version w-button">
          Mint
        </a>
      </div>
      <h1 className="heading-2">
        1ST IMPACTNFT COLLECTION
        <span className="green-text-span-line">Clean&nbsp;Phangan</span>
      </h1>

      <div className="paragraph-wrap">
        <p>
          <span className="text-span-purpl">
            A Testament to Environmental impact with Clean Phangan
          </span>
          <br />
          We’re excited to unveil a groundbreaking series of Impact NFTs, designed
          to showcase and support the&nbsp;environmental efforts of Clean Phangan.
          This collection is not just a testament to digital innovation but a beacon
          of real-world change, representing our dedication to healing our planet
        </p>
        <a href="#mint" className="button-reg w-button">
          Mint
        </a>
        <img
          src="images/arrow-down.svg"
          loading="lazy"
          alt=""
          className="image-4"
        />
      </div>
      <div className="bg-hero-1">
        <img
          src="images/Frame-89_1.webp"
          loading="lazy"
          width={275}
          alt=""
        />
      </div>
      <div className="bg-hero2">
        <img src="images/Frame-88.webp" loading="lazy" width={248} alt="" />
      </div>
      <div className="bg-hero-3">
        <img
          src="images/Frame-90_1.webp"
          loading="lazy"
          width={258}
          alt=""
        />
      </div>
      <div className="bg-hero-4">
        <img
          src="images/Frame-91_1.webp"
          loading="lazy"
          width={349}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;