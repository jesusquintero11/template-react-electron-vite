import { useState, useEffect } from "react"

export const usePagination = (filter, totalPages) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredCurrentPage, setFilteredCurrentPage] = useState(1)

    const isFiltered = filter?.trim()?.length > 0;
    const page = isFiltered ? filteredCurrentPage : currentPage;
    const setActivePage = isFiltered ? setFilteredCurrentPage : setCurrentPage;

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
        if (isFiltered) {
            setFilteredCurrentPage(1);
        }
    }, [isFiltered, setFilteredCurrentPage])

    useEffect(() => {
        // En caso de paginación en tiemporeal, evitar que la pagina actual sea mayor al total de paginas
        if (totalPages === 0) {
            return;
        }

        if (totalPages < page) {
            setActivePage(totalPages);
        }

    }, [totalPages, page, setActivePage])

    return {
        page,
        previous,
        next,
        goToPage,
        isActive,
    }
}