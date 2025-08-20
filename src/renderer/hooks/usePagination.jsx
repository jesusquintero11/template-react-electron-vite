import { useState, useEffect } from "react"

export const usePagination = (filter, totalPages) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [customCurrentPage, setCustomCurrentPage] = useState(1)

    const isFiltered = !!filter;
    const page = isFiltered ? customCurrentPage : currentPage;

    const previous = () => {
        if (page <= 1) return

        if (isFiltered) {
            setCustomCurrentPage(preValue => preValue - 1)
        } else {
            setCurrentPage(preValue => preValue - 1)
        }
    }

    const next = () => {
        if (page >= totalPages) return 

        if (isFiltered) {
            setCustomCurrentPage(preValue => preValue + 1)
        } else {
            setCurrentPage(preValue => preValue + 1)
        }
    }

    const goToPage = (pageNumber) => {
        if (!(pageNumber >= 1 && pageNumber <= totalPages)) return

        if (isFiltered) {
            setCustomCurrentPage(pageNumber)
        } else {
            setCurrentPage(pageNumber);
        }
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
    }, [totalPages])

    return {
        page,
        previous,
        next,
        goToPage,
        isActive,
    }
}