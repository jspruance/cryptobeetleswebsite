import React from "react"
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import Mint from "../../pages/mint.js"

describe("Test for NFT Minting UI", () => {
  it("should render the heading", () => {
    render(<Mint />)

    const heading = screen.getByText(
      /A botique collection of ERC-721 NFTs on the Ethereum blockchain./i
    )
    expect(heading).toBeInTheDocument()
  })

  it("should render an error message if no mint url is entered", () => {
    render(<Mint />)

    fireEvent.click(screen.getByTestId(/mint-nft/i));

    const errorMessage = screen.getByText(
      /Minting error: Invalid NFT url/i
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it("should render an error message if an invalid mint url is entered", () => {
    render(<Mint />)

    fireEvent.change(screen.getByTestId(/url-input/i), {target: {value: 'http://attacker.com'}})
    fireEvent.click(screen.getByTestId(/mint-nft/i));
    
    const errorMessage = screen.getByText(
      /Minting error: Invalid NFT url/i
    )
    expect(errorMessage).toBeInTheDocument()
  })

})