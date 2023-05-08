import { InfuraProvider, ethers } from 'ethers'

const provider = new InfuraProvider('homestead', process.env.INFURA_API_KEY)

export default provider
