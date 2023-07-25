import { useState, createContext } from 'react'
import { PropsChildren } from '../utils/types/genericTypes'
import { ViewMode } from '../utils/types/viewModesType'

export const SearchContext = createContext<any>(null)

export function SearchProvider({ children }: PropsChildren) {

    const [search, setSearch] = useState<Object>({})
    const [viewMode, setViewMode] = useState<ViewMode>('grid')

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}