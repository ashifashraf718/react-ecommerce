import React from 'react'

const FilterProduct = () => {
  return (
    <div>
        <select name="filter" id="filter">
  <option value="volvo">price</option>
  <option value="0-50">0-50</option>
  <option value="51-100"></option>
  <option value="101-200">Audi</option>
</select>
    </div>
  )
}

export default FilterProduct