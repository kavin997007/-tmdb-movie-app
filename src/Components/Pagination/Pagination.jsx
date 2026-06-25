import React from 'react'
import './Pagination.scss';

const Pagination = ({currentPage,handleNext,handlePrevious}) => {

  return (
    <div>
      <div className="pagination">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>{currentPage}</span>

        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
