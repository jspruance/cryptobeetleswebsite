import Head from 'next/head'
import Header from '../components/Header'
import NftDisplay from '../components/NftDisplay'
import nftlist from '../nfts/nftlist'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crypto Beetles NFT Collection</title>
        <meta name="description" content="Crypto Beetles is an original NFT collection based on the ERC-721 standard and running on the Ethereum blockchain." />
        <meta property="og:title" content="Crypto Beetles NFT Collection" />
        <meta property="og:description" content="Crypto Beetles NFT Collection: An original NFT collection based on the ERC-721 standard" />
        <meta property="og:url" content="https://www.cryptobeetlesnft.com" />
        <meta property="og:type" content="website"></meta>
        <link rel="icon" href="/cryptobeetles_favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css"></link>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-56EGRFZ924"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date())

              gtag('config', 'G-56EGRFZ924')
            `,
          }}
        />
      </Head>

      <main>
        <Header />
        <p className="opensea-link"> 
          <Link href="https://opensea.io/collection/cryptobeetles-nft">
            <a target="_blank">
              View collection on OpenSea
            </a>
          </Link>
          </p>
        <div className="nft-display-container">
          {
            nftlist.map(nftrelease => {
              nftrelease.nfts.sort(function (a, b) {
                return a.order - b.order
              })
              return nftrelease.nfts.map(nft => {
                const nftName = nft.name
                const imageUrl = `/nftimages/release_${nftrelease.release}/${nftName}.${nft.extension}`
                return <NftDisplay key={nftName} name={nftName} imageurl={imageUrl} link={nft.link} />
              })
            })
          }
        </div>
        <p className="contact-link">
          <a href="mailto:info@cryptobeetlesnft.com">info@cryptobeetlesnft.com</a>
        </p>
        <div className="social-media-links">
          <Link href="#">
            <a target="_blank">Instagram</a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="https://twitter.com/BeetlesNft">
            <a target="_blank">Twitter</a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="https://etherscan.io/address/0xFB2Ce8f578D11A4d6cBaE57151BB0cc2E32a3562">
            <a target="_blank">Etherscan</a>
          </Link>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 90%;
          padding: 0 0;
          margin: 0 0 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .nft-display-container {
          padding-top: 2em;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
        }

        a {
          color: inherit; 
          text-decoration: none;
        }

        .contact-link {
          margin-top: 4em;
        }

        .contact-link a {
          font-size: 0.7em;
          text-decoration: underline;
        }

        .contact-link a:hover {
          text-decoration: none;
        }

        .social-media-links {
          margin-top: 2em;
        }

        .social-media-links a {
          font-size: 0.7em;
          text-decoration: underline;
        }

        .social-media-links a:hover {
          text-decoration: none;
        }

        .opensea-link {
          font-size: 0.7em;
        }

        .opensea-link a {
          text-decoration: underline;
        }

        .opensea-link a:hover {
          text-decoration: none;
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
        }

        .white {
          color: #FFFFFF;
        }

        .pink {
          color: #FF007A;
        }

        .default-font {
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        body {
          background-color: white;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
