import { TransactionReceipt, TransactionResponse } from 'ethers'
import provider from './ethersProvider'

export interface CustomTransactionResponse {
  transactions: TransactionResponse[]
  timestamp: number
}

export const getLatestBlockTransactions = async (blockNumber: number): Promise<CustomTransactionResponse> => {
  const block = await provider.getBlock(blockNumber)

  const transactionPromises = block?.transactions.map((txHash: string, index: number) => {
    if (index <= 10) return provider.getTransaction(txHash)
  })

  const transactions = (await Promise.all(transactionPromises!)).filter(Boolean) as TransactionResponse[]

  return {
    transactions,
    timestamp: block!.timestamp
  }
}

export const getTransactionReceipt = async (hash: string): Promise<TransactionReceipt> => {
  const receipt = (await provider.getTransactionReceipt(hash)) as TransactionReceipt
  return receipt
}

export const getTransactionResponse = async (hash: string): Promise<TransactionResponse> => {
  const tx = (await provider.getTransaction(hash)) as TransactionResponse
  return tx
}

export const getBlockTimestamp = async (blockNumber: number): Promise<number> => {
  const block = await provider.getBlock(blockNumber)
  return block!.timestamp
}

export const getBlockNumber = async () => {
  return await provider.getBlockNumber()
}
