import React, { useState } from 'react'
import web3 from '../ethereum/web3'
import nftContract from '../ethereum/nft'
import Header from '../components/Header'
import Head from 'next/head'

export default function Mint() {
  const [mintError, setMintError] = useState('')
  const [mintSuccess, setMintSuccess] = useState('')
  
  const mintNFTHandler = async() => {
    setMintError('')
    setMintSuccess('')
    let resp
    try {
      const mintUrl = 'https://gateway.pinata.cloud/ipfs/QmS6C7HikeRRarAyNJzbTZkUA1WawxzVB76yjmV77x5qRT'
      const accounts = await web3.eth.getAccounts()
      resp = await nftContract.methods.mint(mintUrl).send({
        from: accounts[0],
        gas: 300000,
        gasPrice: null,
      })
      setMintSuccess(`NFT succesfully minted! :::: ${JSON.stringify(resp)}`)
    } catch(err) {
      setMintError(`Minting error :::: ${err.message}`)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Mint NFT</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css"></link>
        <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
      </Head>

      <main>
        <Header />
        <div className="container">
          <div className="mint-container">
            <div className="address-entry">
              <button 
                onClick={mintNFTHandler} 
                type="button" 
                className="nes-btn is-primary mint-btn">
                  Mint Crypto Beetle
              </button>
            </div>
          </div>
          {
            mintError && <div className="mint-error">{mintError}</div>
          }
          {
            mintSuccess && <div className="mint-success">{mintSuccess}</div> 
          }
        </div>
      </main>

      <style jsx>{`
        .container {
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container h2 {
          font-size: 1em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .container img {
          margin-bottom: 1em;
        }

        .or {
          margin: 1em 0;
        }

        main {
          padding: 0 0;
          margin: 0 0 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .mint-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 1em 0;
        }

        .address-entry {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          xmargin-left: 2em;
        }

        .input-label {
          font-size: .7em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .mint-txt-input {
          width: 700px;
          font-size: .9em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .mint-error {
          color: red;
          max-width: 900px;
        }

        .mint-success {
          color: green;
          max-width: 900px;
        }

        .metamask-btn {
          height: 55px;
          width: 325px;
          margin-bottom: 1em;
          font-weight: bold;
          font-size: .7em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          background: top 2px left 5px no-repeat url("/mm_logo_45.png"), #ffffff;
          cursor: pointer !important;
        }

        .metamask-btn span {
          margin-left: 52px;
        }
        
        .metamask-btn:hover {
          cursor: pointer;
          color: #ffffff;
          background-color: #FF007A;
        }

        .mint-btn {
          margin-left: 1em;
          margin-top: 2em;
          margin-bottom: 1em;
          font-size: .8em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          color: black;
        }

        .mint-btn span {
          margin-left: 40px;
        }
        
        .mint-btn:hover {
          cursor: pointer;
          color: #ffffff;
        }

        .instructions a {
          color: white;
          text-decoration: underline;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1000px;
          margin-top: 1rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: black;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          cursor: pointer !important;
        }

        a, button {
          cursor: pointer !important;
        }

        .white {
          color: #FFFFFF;
        }

        .pink {
          color: #FF007A;
        }

        .default-font {
          font-family: Times,"Times New Roman", serif;
        }

        body {
          background: url("/stars_sparkle_bg.gif");
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
