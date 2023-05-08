import provider from './ethersProvider'
import { weiToEth } from './formatTransactions'

export const getBalance = async (address: string) => {
  const balance = await provider.getBalance(address)
  return weiToEth(balance)
}
