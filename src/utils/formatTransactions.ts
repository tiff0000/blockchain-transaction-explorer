import { formatDistanceToNow } from 'date-fns'

export const truncatedAddress = (address: string, length = 10) => {
  if (address.length <= length * 2) return address
  const firstChars = address.slice(0, length)
  const lastChars = address.slice(-length)
  return `${firstChars}...${lastChars}`
}

export function weiToEth(wei: bigint): string {
  const eth = Number(wei) / 10 ** 18
  return eth.toLocaleString(undefined, { maximumFractionDigits: 6 })
}

export function formatDate(date: Date): string {
  return date.toLocaleString()
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return formatDistanceToNow(date)
}
