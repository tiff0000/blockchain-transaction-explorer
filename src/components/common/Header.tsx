import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { chains } from '../../constants/chains'
import { useNetwork } from '../../hooks/useNetwork'
import { AvailableChains } from '../../types'

const menuItems = [
  {
    label: 'Home',
    url: '/'
  }
]

const Header = () => {
  const { chain, setChain } = useNetwork()
  const [selectedChain, setSelectedChain] = useState(chains[0]) // default: ethereum chain

  const handleSelectChain = (chain: AvailableChains) => setChain(chain)

  return (
    <div className="flex flex-row bg-night-900 text-white p-3 justify-between">
      <Link href="/">
        <h3 className="font-bold">Blockchain Explorer</h3>
      </Link>

      {/* Navigation menu list */}
      <ul className="flex gap-10 items-center">
        {menuItems.map((menuItem) => (
          <Link href={menuItem.url} key={menuItem.url}>
            <li>{menuItem.label}</li>
          </Link>
        ))}
      </ul>

      {/* right section */}
      <div className="flex gap-4 items-center w-[20rem]">
        <span className="mt-1">select chain:</span>
        <Listbox value={selectedChain} onChange={setSelectedChain}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-500 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
              <span className="block w-20 truncate">{selectedChain.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 -ml-3 max-h-60 w-32 overflow-auto rounded-md bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {chains.map((chain, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-gray-600 text-amber-900' : 'text-white'
                      }`
                    }
                    value={chain}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`w-20 truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {chain.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  )
}

export default Header
