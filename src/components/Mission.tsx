import React from "react";

const Mission: React.FC = () => {

  return (
    <div
      data-w-id="3cb2a7a0-ce54-63e3-212a-03b81045c516"
      className="impact-info-wrap"
    >
      <img src="images/arrow-down.svg" loading="lazy" alt="" className="arrow-im" />
      <p className="text-h2">
        <span className="is-purple">By claiming an Impact NFT</span>,{" "}
        <span className="is-green">
          you’re directly supporting Clean Phangan’s mission
        </span>{" "}
        to clean and preserve our environment. Each NFT represents a&nbsp;specific
        tier of impact, with <span className="is-purple">Legendary</span>,{" "}
        <span className="is-blue">Rare</span>, and{" "}
        <span className="is-green">Common</span> categories reflecting the magnitude
        of your contribution. Your participation helps them to sustain
        and&nbsp;expand their clean-up operations, engaging more volunteers and
        removing more trash from vital ecosystems.
      </p>
      <a href="#mint" className="button-reg margin-40-top w-button">
        Mint
      </a>
      <div className="bg-nft-1">
        <img
          src="images/Frame-93_1.webp"
          loading="lazy"
          width={464}
          alt=""
          className="image-5"
        />
      </div>
      <div className="bg-nft-2">
        <img src="images/Frame-94.webp" loading="lazy" width={239} alt="" />
      </div>
      <div className="bg-nft-3">
        <img
          src="images/Frame-93_1.webp"
          loading="lazy"
          width={464}
          alt=""
          className="image-6"
        />
      </div>
    </div>
  );
};

export default Mission;