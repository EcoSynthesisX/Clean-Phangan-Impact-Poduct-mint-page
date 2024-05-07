import React from "react";
import { useState } from "react";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq-wrap">
      <div className="color-wrap">
        <h2 className="heading">NFT minting on Optimism FAQ</h2>
      </div>
      <section className="faq-content-wrap">
        <div className="rl_faq1_component">
          <div className="rl_faq1_list">
            <div className="rl_faq1_accordion">
              <div
                data-w-id="5be393b4-4c8b-13a6-fe07-7ed3ec91360a"
                className="rl_faq1_question" onClick={() => handleToggle(0)}
              >
                <div className="number-line">
                  <p className="text-h2">1</p>
                </div>
                <p>What are Impact NFTs?</p>
                <div className="rl_faq1_icon-wrapper">
                  <div className="rl_faq1_icon w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: activeIndex === 0 ? "100%" : 0, width: "100%" }} className="rl_faq1_answer">
                <div className="number-line" />
                <div className="rl_faq1_answer-wrapper">
                  <p className="info-text">
                    Impact NFTs are representing positive changes did by activists
                    &amp; NGOs. They allow to purchase and own the Impact and be
                    part of positive changes
                  </p>
                </div>
              </div>
            </div>
            <div className="rl_faq1_accordion">
              <div
                data-w-id="5be393b4-4c8b-13a6-fe07-7ed3ec913614"
                className="rl_faq1_question" onClick={() => handleToggle(1)}                >
                <div className="number-line">
                  <p className="text-h2">2</p>
                </div>
                <p>Why do I need it?</p>
                <div className="rl_faq1_icon-wrapper">
                  <div className="rl_faq1_icon w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: activeIndex === 1 ? "100%" : 0, width: "100%" }} className="rl_faq1_answer">
                <div className="number-line" />
                <div className="rl_faq1_answer-wrapper">
                  <p className="info-text">
                    it’s easy way to do positive impact on the planet and build your
                    onchain Impact rank that will open new opportunities in the
                    future
                  </p>
                </div>
              </div>
            </div>
            <div className="rl_faq1_accordion last-line">
              <div
                data-w-id="5be393b4-4c8b-13a6-fe07-7ed3ec91361e"
                className="rl_faq1_question" onClick={() => handleToggle(2)}                >
                <div className="number-line">
                  <p className="text-h2">3</p>
                </div>
                <p>What are the gas fees for minting an NFT on Optimism?</p>
                <div className="rl_faq1_icon-wrapper">
                  <div className="rl_faq1_icon w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: activeIndex === 2 ? "100%" : 0, width: "100%" }} className="rl_faq1_answer">
                <div className="number-line">
                  <p className="text-h2 hide">3</p>
                </div>
                <div className="rl_faq1_answer-wrapper">
                  <p className="info-text">Usually few cents </p>
                </div>
              </div>
            </div>
            <div className="rl_faq1_accordion last-line">
              <div
                data-w-id="5023b7b7-fca8-fb67-6a0b-f96526447571"
                className="rl_faq1_question" onClick={() => handleToggle(3)}                >
                <div className="number-line">
                  <p className="text-h2">4</p>
                </div>
                <p>Can't see Impact NFT in my wallet?</p>
                <div className="rl_faq1_icon-wrapper">
                  <div className="rl_faq1_icon w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: activeIndex === 3 ? "100%" : 0, width: "100%" }} className="rl_faq1_answer">
                <div className="number-line">
                  <p className="text-h2 hide">3</p>
                </div>
                <div className="rl_faq1_answer-wrapper">
                  <p className="info-text">
                    Use smart wallet like Zerion or add manually for MetaMask
                  </p>
                </div>
              </div>
            </div>
            <div className="rl_faq1_accordion last-line">
              <div
                data-w-id="ede6add9-590e-2295-de7d-33d8924c2bab"
                className="rl_faq1_question" onClick={() => handleToggle(4)}                >
                <div className="number-line">
                  <p className="text-h2">5</p>
                </div>
                <p>Why my minting transaction fails?</p>
                <div className="rl_faq1_icon-wrapper">
                  <div className="rl_faq1_icon w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: activeIndex === 4 ? "100%" : 0, width: "100%" }} className="rl_faq1_answer">
                <div className="number-line">
                  <p className="text-h2 hide">3</p>
                </div>
                <div className="rl_faq1_answer-wrapper">
                  <p className="info-text">
                    Check you have enough ETH and ensure the mint is still open.
                    Contact us on{" "}
                    <a href="https://discord.gg/9dgXswwUAX" target="_blank">
                      Discord
                    </a>{" "}
                    if any issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
