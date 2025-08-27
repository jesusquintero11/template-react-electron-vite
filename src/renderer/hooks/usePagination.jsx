import { useState, useEffect } from "react"

export const usePagination = (filter, totalPages) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [customCurrentPage, setCustomCurrentPage] = useState(1)

    const isFiltered = filter.trim().length > 0;
    const page = isFiltered ? customCurrentPage : currentPage;

    const setActivePage = isFiltered ? setCustomCurrentPage : setCurrentPage;

    const previous = () => {
        if (page <= 1) return
        setActivePage(preValue => preValue - 1)
    }

    const next = () => {
        if (page >= totalPages) return
        setActivePage(preValue => preValue + 1)
    }

    const goToPage = (pageNumber) => {
        if (!(pageNumber >= 1 && pageNumber <= totalPages)) return
        setActivePage(pageNumber)
    }

    const isActive = (index) => page === index + 1

    useEffect(() => {
        if (!isFiltered) {
            setCustomCurrentPage(1);
        }
    }, [isFiltered])

    useEffect(() => {
        if (totalPages < currentPage && !isFiltered) {
            setCurrentPage(totalPages);
        }
    }, [totalPages, isFiltered])

    return {
        page,
        previous,
        next,
        goToPage,
        isActive,
    }
}