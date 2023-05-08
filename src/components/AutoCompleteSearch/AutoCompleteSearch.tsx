import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export interface SearchItem {
  id: string
  name: string
}

export interface SearchInputProps {
  items: SearchItem[]
  placeholder?: string
  onSelect: (item: SearchItem) => void
  onSearch: (keyword: string, results?: any[]) => void
  className?: string
}

const AutoCompleteSearch = ({ items, placeholder, onSelect, onSearch }: SearchInputProps) => {
  const formatResult = (item: SearchItem) => <div className="bg-transparents cursor-pointer text-left">{item.name}</div>

  const handleOnSearch = (keyword: string) => onSearch(keyword)

  const handleOnSelect = (item: SearchItem) => onSelect(item)

  return (
    <div className="flex-center flex w-full flex-col items-start gap-10 overflow-visible">
      <div className="focus:box-shadow-none w-full border-transparent text-white">
        <ReactSearchAutocomplete
          styling={{
            zIndex: 200,
            backgroundColor: '#2B2E45', // cloud 800
            hoverBackgroundColor: '#1F233A !important', // cloud 900
            border: '1px solid rgba(255, 255, 255, 0.3) !important',
            placeholderColor: '#B8B9C1 !important', // cloud-300
            color: 'white',
            fontFamily: 'Nunito',
            boxShadow: 'none !important'
          }}
          items={items}
          inputDebounce={500}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          showIcon={true}
          placeholder={placeholder ? placeholder : 'Search'}
          formatResult={formatResult}
          maxResults={15}
          fuseOptions={{ keys: ['name'] }} // search only by name
        />
      </div>
    </div>
  )
}

export default React.memo(AutoCompleteSearch)
