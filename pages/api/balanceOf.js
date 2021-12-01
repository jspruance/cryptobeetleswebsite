import nftContract from '../../ethereum/nft'

export default async function handler(req, res) {
  try {
    const address = "0x3B5c1926441EC9bE1FA179831f9E6ea9b9205b2f"
    let balance = await nftContract.methods.balanceOf(address).call()
    res.status(200).send({balanceOf: balance})
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
}
