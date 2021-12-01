import Link from 'next/link'

const NftDisplay = props => {
  let { name, link, imageurl } = props
  link = link ? link : 'https://opensea.io/collection/cryptobeetles-nft'
  const displayName = `crypto beetle ${name.substring(name.length - 3, name.length)}`
  return <Link href={link} key={name}>
      <a target="_blank">
        <div className="nft-card">
          <img src={imageurl} alt={name} />
          <p>{displayName}</p>
          <style jsx>{`
            .nft-card {
              padding: 5px;
              margin: 5px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              cursor: pointer;
              xborder: 1px solid green;
            }
            .nft-card img {
              width: 260px;
            }
            .nft-card p {
              font-size: .6em;
              display: flex;
              justify-content: center;
            }
          `}</style>
        </div>
      </a>
    </Link>
}

export default NftDisplay