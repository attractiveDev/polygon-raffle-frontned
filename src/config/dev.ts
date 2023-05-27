import Raffle721Abi from '../constants/Raffle/RaffleErc721.json'
import Raffle1155Abi from '../constants/Raffle/Raffle1155.json'
import Auction721Abi from '../constants/Auction/AuctionErc721.json'
import Auction1155Abi from '../constants/Auction/AuctionErc1155.json'
import TokenErc721 from '../constants/Token/Erc721Token.json'
import TokenErc1155 from '../constants/Token/Erc1155Token.json'

export const Backend_URL = 'https://polygonraffle.herokuapp.com'
// export const Backend_URL = 'http://192.168.116.171:5000'

export const API_URL = `${Backend_URL}/api`

export const RAFFLE = {
  CONTRACTADDRESS721: `0xf95eb8849D670E4729DC995703956207A7889544`,
  ABI721: Raffle721Abi,
  CONTRACTADDRESS1155: `0x70A5C7f6A2E25360339C52c06576eAf2cEd89219`,
  ABI1155: Raffle1155Abi,
}

export const AUCTION = {
  CONTRACTADDRESS721: `0xd65aA7C66cBb1cb32c417Bf74B43500A05162cEe`,
  ABI721: Auction721Abi,
  CONTRACTADDRESS1155: `0xE3ceE1b70246d3337bB8e445b07e52424Dcac144`,
  ABI1155: Auction1155Abi,

}

export const TOKENERC721 = TokenErc721
export const TOKENERC1155 = TokenErc1155

export const TOAST_TIME_OUT = 2000;
export const INTERVAL = 6 * 1000;
export const DECIMAL = 1000000000000000000
// export const CHAINID = '0x5' //Goerli
export const CHAINID = '0x13881' //Mumbai
// export const CHAINID = '0x89' //polygon

export const WALLET_STATUS_LOCALSTORAGE = 'wallet'
export const WALLET_ADRESS_LOCALSTORAGE = 'wallet_address'
export const DEFAUL_NONE_WINNER = '0x0000000000000000000000000000000000000000'
export const SIGN_KEY = 'VERIFY WALLET';
