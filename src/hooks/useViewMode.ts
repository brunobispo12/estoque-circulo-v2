import { useCallback, useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { ViewMode } from '../utils/types/viewModesType'


function useViewMode() {
    const { viewMode, setViewMode } = useContext(SearchContext)
    const [useViewMode, setUseViewMode] = useState<ViewMode>()


    useEffect(() => {
        setUseViewMode(viewMode)
    }, [viewMode])

    const changeViewMode = useCallback((newViewMode) => {
        setViewMode(newViewMode)
    }, [setViewMode])

    return { useViewMode, changeViewMode}
}

export default useViewMode