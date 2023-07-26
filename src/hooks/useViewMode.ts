import { useCallback, useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import { ViewMode } from '../utils/types/viewModesType'

function useViewMode() {
    const { viewMode, setViewMode } = useContext(SearchContext)
    const [currentViewMode, setCurrentViewMode] = useState<ViewMode>()


    useEffect(() => {
        setCurrentViewMode(viewMode)
    }, [viewMode])

    const changeViewMode = useCallback((newViewMode) => {
        setViewMode(newViewMode)
    }, [setViewMode])

    return { currentViewMode, changeViewMode }
}

export default useViewMode