import React from "react";

const Contribution: React.FC = () => {

  return (
    <div className="contribution-wrap">
      <div className="color-wrap is-absolute _49-absolute">
        <div className="text-h2">Contribution allocation</div>
      </div>
      <div className="grid-contribution">
        <div>
          <h4 className="is-purple">
            70%{" "}
            <a
              href="https://facebook.com/cleanallworld"
              target="_blank"
              className="is-purple"
            >
              Clean Phangan
            </a>
          </h4>
          <div className="info-contr">
            <img src="images/arrow-purp-left-mob.svg" loading="lazy" alt="" />
            <p className="info-text">for positive environmental Impact done</p>
          </div>
          <div className="info-contr">
            <img src="images/arrow-purp-right-mob.svg" loading="lazy" alt="" />
            <p className="info-text">to do bigger positive environmental Impact</p>
          </div>
        </div>
        <div>
          <img
            src="images/Contribution-img-web.svg"
            loading="lazy"
            alt=""
            className="image-3"
          />
        </div>
        <div
          id="w-node-e464746e-aff3-d4d1-13c5-5dfe90287518-269e8a97"
          className="impacts-wrap"
        >
          <div className="padding-60">
            <p className="text-h2 is-green jl">
              10%
              <br />
              <a
                href="https://x.com/ecosynthesisx"
                target="_blank"
                className="is-green"
              >
                EcoSynthesisX
              </a>
            </p>
            <div className="info-contr">
              <img src="images/arrow-green-left-mob-.svg" loading="lazy" alt="" />
              <p className="info-text">for design solutions and implementation</p>
            </div>
            <div className="info-contr">
              <img src="images/arrow-green-right-mob.svg" loading="lazy" alt="" />
              <p className="info-text">to boost further impact</p>
            </div>
          </div>
          <div className="padding-60">
            <p className="text-h2 is-blue jl">
              10%
              <br />
              <a href="https://x.com/refiphangan" target="_blank">
                ReFi
              </a>{" "}
              &amp;{" "}
              <a href="https://x.com/greenpillkpg" target="_blank">
                GreenPill
              </a>
              <br />
              Phangan
            </p>
            <div className="info-contr">
              <img src="images/arrow-blue-left-mob.svg" loading="lazy" alt="" />
              <p className="info-text">
                for on ground cooperation and local NGOs onboarding
              </p>
            </div>
            <div className="info-contr">
              <img src="images/arrow-blue-right-mob.svg" loading="lazy" alt="" />
              <p className="info-text">to boost further impact</p>
            </div>
          </div>
          <div className="padding-60">
            <p className="text-h2 jl">
              10%
              <br />
              <a
                href="https://x.com/phanganqf"
                target="_blank"
                className="is-white"
              >
                Phangan&nbsp;QF
              </a>
            </p>
            <div className="info-contr">
              <img src="images/arrow-white-right-mob.svg" loading="lazy" alt="" />
              <p className="info-text">to fill up local QF matching pool</p>
            </div>
            <div className="info-contr">
              <img src="images/arrow-white-right-mob.svg" loading="lazy" alt="" />
              <p className="info-text">to distribute further on rounds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;