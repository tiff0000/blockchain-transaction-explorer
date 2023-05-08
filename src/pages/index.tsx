import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Layout from '../components/common/Layout'
import { formatTimestamp, truncatedAddress, weiToEth } from '../utils/formatTransactions'
import { CustomTransactionResponse, getBlockNumber, getLatestBlockTransactions } from '../utils/getLatestTransactions'

const txnTableHeader = ['Transaction Hash', 'Block Number', 'Timestamp', 'Sender', 'Receiver', 'Amount Sent']
interface BlockExplorerTableProps {
  transactions: CustomTransactionResponse
}

const BlockExplorerTable = ({ transactions }: BlockExplorerTableProps) => {
  const router = useRouter()

  if (!transactions) return <></>

  return (
    <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-cloud-200">
            {txnTableHeader.map((headerName) => (
              <th key={headerName} className="py-3 px-4 text-blackuppercase font-bold tracking-wider text-center">
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.transactions.map((txn, index) => (
            <tr
              key={txn.hash}
              className={`text-center hover:bg-black dark:hover:bg-gray-700 cursor-pointer ${
                index % 2 === 0 && 'bg-gray-900'
              }`}
              onClick={() => router.push(`/tx/${txn.hash}`)}
            >
              <td className="py-3 px-4 whitespace-nowrap">{truncatedAddress(txn.hash)}</td>
              <td className="py-3 px-4 whitespace-nowrap">{txn.blockNumber}</td>
              <td className="py-3 px-4 whitespace-nowrap">{formatTimestamp(transactions.timestamp)}</td>
              <td className="py-3 px-4 whitespace-nowrap">{truncatedAddress(txn.from)}</td>
              <td className="py-3 px-4 whitespace-nowrap">{truncatedAddress(txn.to!)}</td>
              <td className="py-3 px-4 whitespace-nowrap">{weiToEth(txn.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Home = () => {
  const [lastestTxns, setLatestTxns] = useState<CustomTransactionResponse | null>()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const fetchLatestTxns = async () => {
    try {
      const blockNumber = await getBlockNumber()
      const txns = await getLatestBlockTransactions(blockNumber)
      setLatestTxns(txns)
      setIsLoading(false)
    } catch (err) {
      alert('error fetching latest transactions')
    }
  }

  useEffect(() => {
    fetchLatestTxns()
  }, [])

  if (!lastestTxns) return <>Loading...</>

  return (
    <Layout>
      <h1 className="text-2xl">Transactions</h1>
      {!isLoading && <BlockExplorerTable transactions={lastestTxns} />}
      <Button onClick={() => router.push('/')} className="flex gap-3 items-center">
        View All Transactions
        <ArrowRightIcon className="h-5" />
      </Button>
    </Layout>
  )
}

export default Home
