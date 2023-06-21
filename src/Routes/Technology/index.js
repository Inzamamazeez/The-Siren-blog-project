import React from 'react'
import { Logo, TopNavigation,LogoMobile } from '../../Components'
import TechArticleList from './TecArticleList';
import TechTopPost from './TecTopPost';
import Store from '../../Utility/ContextStore/contextAPI';

const Technology = () => {
  return (
    <>
   <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <TechArticleList/>
    <TechTopPost/>
    </Store>
    </div>
    </div>
    </div>
    </>
  )
}

export default Technology;