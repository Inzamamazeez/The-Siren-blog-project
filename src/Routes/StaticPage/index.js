import React from 'react'
import CommonPage from './CommonPage'
import Store from '../../Utility/ContextStore/contextAPI'

const StaticPage = () => {
  return (
    <>
    <Store>
      <CommonPage/>
      </Store>
    </>
  )
}

export default StaticPage;