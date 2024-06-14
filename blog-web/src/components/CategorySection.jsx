import React from 'react'

const CategorySection = ({onSelectCategory, selectedcategory, activeCategory}) => {

  const categories = [,'AI', ]
  return (
    <div className='px-4 mb-8 lg:space-x-16'>
      <button onClick={()=> onSelectCategory(null)  }className={`lg:ml-11 ${activeCategory ?"":"active-utton" }`}>All</button>
      {
        categories.map((category) => (
          <button onClick={()=>onSelectCategory(category)} key={category} className={`mr-2 space-x-10 ${activeCategory === category ? "active-utton":""}`}>{category}</button>
        )
        )
      }
    </div>
  )
}

export default CategorySection