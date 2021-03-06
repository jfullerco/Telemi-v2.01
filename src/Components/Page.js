import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import Columns from './Layout/Columns'
import Column from './Layout/Column'
import { FaArrowLeft } from 'react-icons/fa'

const Page = ({title, subtitle, handleGoBack, pageError, pageSuccess, children}) => {

  const history = useHistory()
  const success = "notification is-success is-overlay is-align-content-center"

  
  return(
    <div> 
      <div className="content pt-5 pb-5" >
        <Columns options="is-mobile is-vcentered">
          <Column size="is-narrow">
            <div className="icon is-large"><FaArrowLeft className="icon pl-1 mx-2 my-2" onClick={() => handleGoBack()}/> </div>
          </Column>
          <Column>
            <span className="title"><div className="donotwrap">{title}</div></span>
          </Column>
        </Columns>
      </div> 
          
      <div>
        <div className={pageSuccess && pageSuccess != false ? success : "is-hidden"}>
          {pageSuccess}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Page