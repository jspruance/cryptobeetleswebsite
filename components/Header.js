import React from 'react'
import Link from 'next/link'

const Header = props => {
  return (
    <>
      <Link href="/">
        <div className="header-container">
          <h1 className="title">Crypto Beetles</h1>
        </div>
      </Link>
      {
        !props.minimal && <p className="description">
          A botique collection of hand-made ERC-721 NFTs on the Ethereum blockchain.
        </p>
      }
    <style jsx>{`
    .header-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .title {
      margin: 0 .2em;
      font-size: 2rem;
    }

    .title,
    .description {
      text-align: center;
    }

    .description {
      padding-top: 1em;
      font-size: 0.9em;
    }
    `}</style>
    </>
  )
}

export default Header