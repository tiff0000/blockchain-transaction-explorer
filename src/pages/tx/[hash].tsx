import { ClipboardIcon } from '@heroicons/react/20/solid'
import { TransactionReceipt, TransactionResponse } from 'ethers'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import Box from '../../components/Box'
import Divider from '../../components/Divider'
import Layout from '../../components/common/Layout'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import { formatTimestamp, truncatedAddress, weiToEth } from '../../utils/formatTransactions'
import { getBalance } from '../../utils/getBalance'
import { getBlockTimestamp, getTransactionReceipt, getTransactionResponse } from '../../utils/getLatestTransactions'
interface TransactionDetailProps {
  label: string
  details: ReactNode
}

const TransactionDetail = ({ label, details }: TransactionDetailProps) => {
  return (
    <div className="flex flex-wrap justify-between mb-4 w-full">
      <span className="font-bold text-white">{label}:</span>
      <div>{details}</div>
    </div>
  )
}

const TransactionDetails = () => {
  const router = useRouter()
  const { hash } = router.query
  const [, copy] = useCopyToClipboard()

  const [transaction, setTransaction] = useState<TransactionResponse | null>(null)
  const [receipt, setReceipt] = useState<TransactionReceipt | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [timestamp, setTimestamp] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchTransactionData = async () => {
    if (!hash) return

    try {
      const txReceipt = await getTransactionReceipt(hash as string)
      const txResponse = await getTransactionResponse(hash as string)
      setTransaction(txResponse)
      setReceipt(txReceipt)
      setIsLoading(false)
    } catch (err) {
      console.log('Error fetching transaction details')
    }
  }

  useEffect(() => {
    fetchTransactionData()
  }, [hash])

  const fetchBalance = async () => {
    if (transaction) {
      const balance = await getBalance(transaction.from)
      setBalance(balance)
    }
  }

  const fetchTimeStamp = async () => {
    if (transaction && transaction.blockNumber !== null) {
      const timeStamp = await getBlockTimestamp(transaction.blockNumber)
      setTimestamp(timeStamp)
    }
  }

  useEffect(() => {
    fetchBalance()
    fetchTimeStamp()
  }, [transaction])

  if (isLoading) return <div>Loading...</div>

  if (!transaction || !receipt || !timestamp) return <></>

  return (
    <Layout>
      <h1 className="mb-6 text-2xl">Transaction Details</h1>
      {balance && <Box>Address&apos;s Balance: {balance} ETH</Box>}
      <Box>
        <TransactionDetail
          label="Transaction Hash"
          details={
            <div className="flex items-center gap-2">
              {truncatedAddress(transaction.hash)}
              <ClipboardIcon
                className="h-4 cursor-pointer"
                onClick={() => {
                  copy(transaction.hash)
                }}
              />
            </div>
          }
        />
        <TransactionDetail
          label="Status"
          details={receipt === null ? 'pending' : receipt.status ? 'success' : 'failed'}
        />
        <TransactionDetail label="Timestamp" details={`${formatTimestamp(timestamp)} ago`} />
        <Divider />
        <TransactionDetail label="From" details={truncatedAddress(transaction.from)} />
        <TransactionDetail label="To" details={truncatedAddress(transaction.to!)} />
        <Divider />
        <TransactionDetail label="Value" details={`${weiToEth(transaction.value)} ETH`} />
        <TransactionDetail label="Transaction Fee" details={`${weiToEth(receipt.gasUsed * receipt.gasPrice)} ETH`} />
      </Box>
    </Layout>
  )
}

export default TransactionDetails
