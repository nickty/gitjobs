import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobsPagination = ({page, setPage}) => {

    function adjustPage(amount){
        setPage(prevPage => prevPage + amount)
    }

    return (
        <Pagination>

            {page !== 1 && <Pagination.Prev onClick={() => {adjustPage(-1)}} />}
            {page !== 1 && <Pagination.Item onClick={() => {adjustPage(1)}}>{page - 1}</Pagination.Item>}
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Item onClick={() => {adjustPage(1)}}>{page +1}</Pagination.Item>
            <Pagination.Next onClick={() => {adjustPage(1)}} />
            
        </Pagination>
    )
}

export default JobsPagination
