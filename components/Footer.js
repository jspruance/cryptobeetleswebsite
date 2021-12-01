import React from 'react'

export default () => {
  return (
    <>
      <footer>
        <p>&copy; 2021-2022 Crypto Beetles NFT Collection</p>
      </footer>
    <style jsx>{`
    footer {
      width: 100%;
      height: 100px;
      border-top: 1px solid #eaeaea;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
    }

    footer img {
      margin-left: 0.5rem;
    }

    footer a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `}</style>
    </>
  )
}