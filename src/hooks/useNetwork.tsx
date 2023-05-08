import { useContext } from 'react'
import { NetworkContext } from '../context/chainContext'

export const useNetwork = () => useContext(NetworkContext)
