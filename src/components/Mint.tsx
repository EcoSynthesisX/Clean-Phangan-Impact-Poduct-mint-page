import {
  ConnectWallet,
  useAddress,
  useContract,
  Web3Button,
  useContractRead,
  useContractEvents,
} from "@thirdweb-dev/react";
import { utils } from "ethers";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import {
  clientIdConst,
  contractConst,
} from "../consts/parameters";
import { useEffect } from "react";
import Modal from 'react-modal';


Modal.setAppElement('#root');

const urlParams = new URL(window.location.toString()).searchParams;
const contractAddress = urlParams.get("contract") || contractConst || "";

export default function Mint() {
  const { contract } = useContract(contractAddress);
  const { toast } = useToast();
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);

  const gasLimit = "300000";
  const maxPriority = "200000";
  const maxFeePer = "400000000";

  const [showModal, setShowModal] = useState(false);
  const [lastMintedTokenId, setLastMintedTokenId] = useState<number | null>(null);
  const [nftImageUrl, setNftImageUrl] = useState<string>("");
  const [nftImageLoaded, setNftImageLoaded] = useState(false);

  let Lcost = '';
  let Rcost = '';
  let Ccost = '';
  let DisplayLPRICE = '';
  let DisplayRPRICE = '';
  let DisplayCPRICE = '';
  let LMinted;
  let RMinted;
  let CMinted;

  const { data: LPRICE, isLoading: loadingLPRICE } = useContractRead(
    contract,
    "L_PRICE",
  );

  if (!loadingLPRICE && LPRICE) {
    DisplayLPRICE = utils.formatUnits(LPRICE.toString());
    Lcost = LPRICE.toString();
  }

  const { data: RPRICE, isLoading: loadingRPRICE } = useContractRead(
    contract,
    "R_PRICE",
  );

  if (!loadingRPRICE && RPRICE) {
    DisplayRPRICE = utils.formatUnits(RPRICE.toString());
    Rcost = RPRICE.toString();
  }

  const { data: CPRICE, isLoading: loadingCPRICE } = useContractRead(
    contract,
    "C_PRICE",
  );

  if (!loadingCPRICE && CPRICE) {
    DisplayCPRICE = utils.formatUnits(CPRICE.toString());
    Ccost = CPRICE.toString();
  }

  const { data: LINDEX, isLoading: loadingLINDEX } = useContractRead(
    contract,
    "L_INDEX",
  );
  if (!loadingLINDEX && LINDEX) {
    LMinted = 50 - (51 - LINDEX);
  }

  const { data: RINDEX, isLoading: loadingRINDEX } = useContractRead(
    contract,
    "R_INDEX",
  );
  if (!loadingRINDEX && RINDEX) {
    RMinted = 150 - (201 - RINDEX);
  }

  const { data: CINDEX, isLoading: loadingCINDEX } = useContractRead(
    contract,
    "C_INDEX",
  );
  if (!loadingCINDEX && CINDEX) {
    CMinted = 300 - (501 - CINDEX);
  }

  const { data: mintEvents, isLoading, error } = useContractEvents(contract, "Transfer",
    {
      queryFilter: {
        filters: {
          to: address,
        },
        fromBlock: 0,
        toBlock: 100,
        order: "asc",
      },
      subscribe: true,
    },
  );

  useEffect(() => {
    if (mintEvents && mintEvents.length > 0) {
      const tokenIdHex = mintEvents[0].data.tokenId._hex;
      const tokenId = parseInt(tokenIdHex, 16);
      setLastMintedTokenId(tokenId);
      console.log(tokenId)
      const imageUrl = `https://nftstorage.link/ipfs/bafybeifxmkf4bxigd34sgjuogldxoch5t7gftatk7wqewiuumv35incvt4/${tokenId}.png`;
      setNftImageUrl(imageUrl);
    }
  }, [mintEvents]);

  const clientId = urlParams.get("clientId") || clientIdConst || "";
  if (!clientId) {
    return (
      <div className="flex items-center justify-center h-full">
        Client ID is required.
      </div>
    );
  }

  if (!contractAddress) {
    return (
      <div className="flex items-center justify-center h-full">
        Contract address is required.
      </div>
    );
  }



  return (
    <>
      <div>
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel="NFT Modal"
          className="Nft-Modal"
        >
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              X
            </span>
            {!nftImageLoaded && (
              <img
                className="minted-nft"
                src="images/loading.gif"
                alt="Placeholder"
              />
            )}
            <img
              className={`minted-nft${!nftImageLoaded ? ' hidden' : ''}`}
              src={nftImageUrl}
              alt={`NFT ${lastMintedTokenId}`}
              onLoad={() => setNftImageLoaded(true)}
            />
            <a className="" target="_blank" href={`https://opensea.io/assets/optimism/0x5f7d5dee10e4cc693f0f9b047286d752550b4323/${lastMintedTokenId}`}>
              <img
                className={`opensea${!nftImageLoaded ? ' hidden' : ''}`}
                src="images/opensea.png"
                alt=""
              />
            </a>
          </div>
        </Modal>
      </div>

      <div className="nft-wrap" id="mint">
        <div className="color-wrap">
          <h2 className="text-h2">
            Impact onchain rank is coming…
            <br />
            Be involved on early stage
          </h2>
        </div>
        <div className="grid-section">
          <div
            id="w-node-_44f92e32-0859-53bf-4c31-fd69466c99be-269e8a97"
            className="card-wrap is-legendary-first"
          >
            <div className="nft is-legendary">
              <div className="nft-img-wrap">
                <div
                  className="nft-slider w-slider"
                >
                  <div className="w-slider-mask">
                    <div className="nft-slide w-slide">
                      <img
                        src="images/Legendary.gif"
                        width={360}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  src="images/Legendary.svg"
                  loading="lazy"
                  width={21}
                  alt=""
                  className="img-grade is-legendary"
                />
              </div>
              <div className="impact-card-info">
                <div className="text-h3">
                  impact value: <span className="is-purple">5</span>
                </div>
                <div className="info-wrap">
                  <div className="text-block">
                    ETH: <span className="is-purple">{DisplayLPRICE}</span>
                  </div>
                  <img src="images/point.svg" loading="lazy" alt="" />
                  <div className="text-block">{LMinted}/50</div>
                </div>
                {address === "" || address === null ? (
                  <ConnectWallet className="card-button is-purple w-button" />
                ) : (
                  <>
                    <Web3Button className="card-button is-purple w-button"
                      contractAddress={contractConst}
                      action={(contract) => contract.call("mintLegendary", [quantity], { gasLimit: gasLimit, value: Lcost, maxPriorityFeePerGas: maxPriority, maxFeePerGas: maxFeePer })}
                      onError={(err) => {
                        console.error(err);
                        console.log({ err });
                        toast({
                          title: "Failed to mint",
                          description: (err as any).reason || "",
                          duration: 9000,
                          variant: "destructive",
                        });
                      }}
                      onSuccess={() => {
                        setShowModal(true)
                        toast({
                          title: "Successfully minted",
                          description:
                            "The Legendary NFT has been transferred to your wallet",
                          duration: 5000,
                          className: "bg-green-500",
                        });
                      }}
                    >
                      Mint
                    </Web3Button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div
            id="w-node-_8e9dc106-371b-18ca-e3a8-7b4bf17f9b82-269e8a97"
            className="card-wrap mob-version"
          >
            <div className="nft">
              <div className="nft-img-wrap">
                <div
                  className="nft-slider is-rare w-slider"
                >
                  <div className="w-slider-mask">
                    <div className="nft-slide w-slide">
                      <img
                        src="images/Rare.gif"
                        width={280}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  src="images/Rare.svg"
                  loading="lazy"
                  alt=""
                  className="img-grade is-rare hide-mob"
                />
              </div>
              <div className="impact-card-info">
                <p className="grade-mob is-blue">RARE</p>
                <div className="text-h3 mob-version">
                  impact value: <span className="is-blue">3</span>
                </div>
                <div className="info-wrap">
                  <div className="text-block mob-version">
                    ETH: <span className="is-blue">{DisplayRPRICE}</span>
                  </div>
                  <img src="images/point.svg" loading="lazy" alt="" />
                  <div className="text-block mob-version">{RMinted}/150</div>
                </div>
              </div>
            </div>
            {address === "" || address === null ? (
              <ConnectWallet className="card-button is-blue w-button" />
            ) : (
              <>
                <Web3Button className="card-button is-blue w-button"
                  contractAddress={contractConst}
                  action={(contract) => contract.call("mintRare", [quantity], { gasLimit: gasLimit, value: Rcost, maxPriorityFeePerGas: maxPriority, maxFeePerGas: maxFeePer })}
                  onError={(err) => {
                    console.error(err);
                    console.log({ err });
                    toast({
                      title: "Failed to mint",
                      description: (err as any).reason || "",
                      duration: 9000,
                      variant: "destructive",
                    });
                  }}
                  onSuccess={() => {
                    setShowModal(true)
                    toast({
                      title: "Successfully minted",
                      description:
                        "The Rare NFT has been transferred to your wallet",
                      duration: 5000,
                      className: "bg-green-500",
                    });
                  }}
                >
                  Mint
                </Web3Button>
              </>
            )}
          </div>
          <div
            id="w-node-c3ffb6de-84cd-c083-c661-e674e3ff836d-269e8a97"
            className="card-wrap is-common-last"
          >
            <div className="nft">
              <div className="nft-img-wrap">
                <div
                  className="nft-slider is-rare w-slider"
                >
                  <div className="w-slider-mask">
                    <div className="nft-slide w-slide">
                      <img
                        src="images/Common.gif"
                        width={215}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  src="images/Common.svg"
                  loading="lazy"
                  alt=""
                  className="img-grade hide-mob"
                />
              </div>
              <div className="impact-card-info">
                <p className="grade-mob is-green">Common</p>
                <div className="text-h3 mob-version">
                  impact value: <span className="is-green">1</span>
                </div>
                <div className="info-wrap">
                  <div className="text-block mob-version">
                    ETH: <span className="impact-1">{DisplayCPRICE}</span>
                  </div>
                  <img
                    src="images/point.svg"
                    loading="lazy"
                    alt=""
                    className="image-7"
                  />
                  <div className="text-block mob-version">{CMinted}/300</div>
                </div>
              </div>
            </div>
            {address === "" || address === null ? (
              <ConnectWallet className="card-button is-green w-button" />
            ) : (
              <>
                <Web3Button className="card-button is-green w-button"
                  contractAddress={contractConst}
                  action={(contract) => contract.call("mintCommon", [quantity], { gasLimit: gasLimit, value: Ccost, maxPriorityFeePerGas: maxPriority, maxFeePerGas: maxFeePer })}
                  onError={(err) => {
                    console.error(err);
                    console.log({ err });
                    toast({
                      title: "Failed to mint",
                      description: (err as any).reason || "",
                      duration: 9000,
                      variant: "destructive",
                    });
                  }}
                  onSuccess={() => {
                    setShowModal(true)
                    toast({
                      title: "Successfully minted",
                      description:
                        "The Common NFT has been transferred to your wallet",
                      duration: 5000,
                      className: "bg-green-500",
                    });
                  }}
                >
                  Mint
                </Web3Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
