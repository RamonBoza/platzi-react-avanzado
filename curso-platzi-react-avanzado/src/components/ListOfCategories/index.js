import React from 'react'
import { Category } from "../Category";


export const ListOfCategories = () => {
  return (
    <ul>
      {
        [1, 2].map(category => <li><Category /></li>)
      }
    </ul>
  )
}
