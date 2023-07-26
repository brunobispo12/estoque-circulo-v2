import { useState, createContext } from 'react'
import { PropsChildren } from '../utils/types/genericTypes'
import { ViewMode } from '../utils/types/viewModesType'

export const SearchContext = createContext<any>({})

export function SearchProvider({ children }: PropsChildren) {

    const [search, setSearch] = useState()
    const [viewMode, setViewMode] = useState()

    return (
        <SearchContext.Provider value={{ search, setSearch, viewMode, setViewMode }}>
            {children}
        </SearchContext.Provider>
    )
}