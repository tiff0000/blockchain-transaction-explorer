import React, { createContext, useState } from 'react'
import { AvailableChains } from '../types'

type NetworkContextType = {
  chain: AvailableChains
  setChain: (chain: AvailableChains) => void
}

export const NetworkContext = createContext<NetworkContextType>({
  chain: AvailableChains.ETHEREUM,
  setChain: () => {}
})

type NetworkProviderProps = {
  children: React.ReactNode
}

export const NetworkProvider = ({ children }: NetworkProviderProps) => {
  const [chain, setChain] = useState<AvailableChains>(AvailableChains.ETHEREUM)

  return <NetworkContext.Provider value={{ chain, setChain }}>{children}</NetworkContext.Provider>
}
