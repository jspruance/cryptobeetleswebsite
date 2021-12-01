import nftContract from './nft'

export default init = function () {
  try {
    const resp = await nftContract.methods.mint("https://gateway.pinata.cloud/ipfs/QmQ883fTgkxKfuHyvHAxXxfrgz7HeSHqmaDxXT5pHEtb1Z").send({
      from: accounts[0],
      gas: 300000,
      gasPrice: null,
    })
    console.log(`NFT succesfully minted! :::: ${JSON.stringify(resp)}`)
  } catch(err) {
    console.log(`Minting error :::: ${err.message}`)
  }
};

