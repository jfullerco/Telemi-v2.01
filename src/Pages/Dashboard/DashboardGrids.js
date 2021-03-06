import React, {useState, useEffect, useContext, useRef} from 'react'
import { useHistory, Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';

import { stateContext } from '../../Contexts/stateContext'
import { fieldContext } from '../../Contexts/fieldContext'
import { db } from '../../Contexts/firebase'
import { useSortHook } from '../../Hooks/useSortHook'
import {useGroupBy, handleIsGroupReducer} from '../../Hooks/useGroupBy'
import {useFilterArray} from '../../Components/Tables/useFilterArray'
import RenderDrawer, {useDrawer} from '../../Hooks/useDrawer'

import GridComponent from './Components/GridComponent'
import GridGroup from '../../Components/Grids/GridGroup'
import GridGroup2 from '../../Components/Grids/GridGroup2'
import Grid from '../../Components/Grids/Grid'
import CardGrid from '../../Components/Grids/CardGrid'
import CostBySite from '../../Components/Graphs/CostBySite'
import NetworkGraphComponent from '../../Components/NetworkGraph/NetworkGraphComponent'
import SelectView from '../../Components/Grids/SelectView'
import Columns from '../../Components/Layout/Columns'
import Column from '../../Components/Layout/Column'
import SideDrawer from '../../Components/Drawers/SideDrawer'
import DetailDrawer from '../DetailDrawer'
import SquareSelectField from '../../Components/Forms/SquareSelectField'

const DashboardGrids = ({visible}) => {

  const userContext = useContext(stateContext)
  const history = useHistory()

  const { isStyle, 
          fetchLocations,
          fetchServices,
          fetchTickets,
          fetchOrders,
          fetchAccounts,
          fetchBills,
          fetchUsers,
          data,
          setData,
          fetchContracts,
          setLocations,
          setServices,
          setTickets,
          setOrders,
          setAccounts,
          setUsers,
          setBills,
          setContracts,
          setDataLoading,
          setCurrentModule,
          setCurrentDocID,
          setCurrentGrid, } = userContext

  const { dataLoading,
          currentUser,
          currentCompany,
          currentCompanyID,
          locations,
          services,
          tickets,
          orders,
          accounts,
          bills,
          users,
          userDefaults,
          contracts,
          currentGrid,
          currentModule,
          currentDocID } = userContext.userSession
  const {
    serviceGridColumns,
    serviceGroupByFields,
    serviceMobileGridColumns,
    locationGridColumns,
    locationGroupByFields,
    locationMobileGridColumns,
    ticketGridColumns,
    ticketGroupByFields,
    ticketMobileGridColumns,
    orderGridColumns,
    orderGroupByFields,
    orderMobileGridColumns,
    accountGridColumns,
    accountGroupByFields,
    accountMobileGridColumns,
    userGridColumns,
    userGroupByFields,
    userDetailFields,
    contractGridColumns,
    contractMobileGridColumns,
    contractGroupByFields
  } = useContext(fieldContext)

  const searchRef = useRef("")
 
  const [grid, setGrid] = useState(currentGrid != undefined ? currentGrid : userDefaults?.Grid || "SERVICES" )
  
  const [groupByOptions, setGroupByOptions] = useState(serviceGroupByFields)

  const [groupBy, setGroupBy] = useState(userDefaults?.groupBy || "ALL")  

  const [recent, setRecent] = useState()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isRefreshDrawer, setIsRefreshDrawer] = useState(false)
  const [isNewDocDrawerOpen, setIsNewDocDrawerOpen] = useState(false)
  const [isNewDoc, setIsNewDoc] = useState(false)
  const [isCurrentDocID, setIsCurrentDocID] = useState()
  const [isModule, setIsModule] = useState()
  

  const { sortedArr, sortArr } = useSortHook() 
  const {drawers, setDrawers} = useDrawer()

  /**
   * console.log('isNew:', 'grid:', grid, 'isNewDoc:', isNewDoc, 'isModule:', isModule, 'isCurrentDocID:', isCurrentDocID)
   * */

  useEffect(() => {
   recentUpdatesArr("SERVICES") 
  },[services])

  useEffect(() => {
    
  },[isDrawerOpen])

  useEffect(() => {
    grid === 'SERVICES' ? setGroupByOptions(serviceGroupByFields) : 
    grid === 'TICKETS' ? setGroupByOptions(ticketGroupByFields) :
    grid === 'ORDERS' ? setGroupByOptions(orderGroupByFields) :
    grid === 'ACCOUNTS' ? setGroupByOptions(accountGroupByFields) :
    grid === 'LOCATIONS' ? setGroupByOptions(locationGroupByFields) :
    grid === 'CONTRACTS' ? setGroupByOptions(contractGroupByFields) :
    grid === 'NETWORK' ? setNetworkMap(!networkMap) :
    setGroupByOptions(serviceGroupByFields)
    recentUpdatesArr("SERVICES")
  },[grid])

  const handleSorting = (sortBy, colRef) => {
   const sortedArray = sortArr(sortBy, colRef)

     setLocations(sortedArr) 

  }
  
  /** Handle Change when choosing different Grid via Selector */

  const handleGridChange = (e) => {
    const {value} = e.target
    console.log(value)
    setGrid(value)
    setCurrentGrid(value)
    
  }
  
  /** Modifty Grid Name to Title Case */

  const modGridStr = (str) => {
    const strLower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + strLower.slice(1)
  }

  /** Add New Document Button */

  const handleAddClick = () => {
    const isModule = modGridStr(grid)
    setCurrentModule(isModule)
    
    setIsNewDocDrawerOpen(true)
    
  }

  const handleCloseDrawer = () => {
    setData()
    setIsDrawerOpen(false)
    setIsNewDocDrawerOpen(false)
  }

  
  const recentUpdatesArr = (arr) => {
    switch (arr) {
      case "SERVICES": 
        return (
          setRecent([...services])
        )
      case "TICKETS": 
        return (
          setRecent([...tickets])
        )
      case "ORDERS": 
        return (
          setRecent([...orders])
        )
    }
  }

  const sortByDate = (arr) => {
    const sorter = (a, b) => {
      return new Date(b.LastUpdated).getTime() - new Date(a.LastUpdated).getTime()
    }
    arr.sort(sorter)
  }

  sortByDate(recent != undefined ? recent : [])
  const recentUpdates = recent != undefined ? recent.slice(0, 10) : ""
  
  const handleAddDrawer = (drawer) => {
    
    setCurrentModule(drawer.modRef)
    setCurrentDocID(drawer.id)
      
    const newDrawer = {
      open: true,
      fields: drawer.colRef,
      currentCompany: currentCompany,
      isModule: drawer.modRef,
      docID: drawer.id
    } 

    const addDrawer = [...drawers]
    addDrawer.push(newDrawer)
    setDrawers(addDrawer)
  }

  const handleClose = (index) => {
    const removeDrawer = [...drawers]
    removeDrawer.splice(index, 1)
    setDrawers(removeDrawer)
    
  }
console.log('data', data)
return (
  <>
    <div className="is-flex is-justify-content-flex-end">
    <Columns options="is-mobile pr-3 pb-3 is-gapless">
      <Column size="is-narrow mr-2 mt-1 is-hidden-mobile">View</Column>
      <Column size="is-narrow mr-2">
        <SelectView onChange={(e)=>handleGridChange(e)} value={grid}>
        <option value="SERVICES">Services</option>
        <option value="TICKETS">Tickets</option>
        <option value="ORDERS">Orders</option>
        <option value="ACCOUNTS">Accounts</option>
        <option value="LOCATIONS">Locations</option>
        <option value="USERS">Users</option>
        <option value="CONTRACTS">Contracts</option>
        
        </SelectView>
      </Column>

      <Column size="is-narrow mr-2">

        <div className="select is-rounded is-small">
        <select onChange={(e) => setGroupBy(e.target.value)} value={groupBy}>

          <option value="ALL">Show All</option>

          {groupByOptions.map(groupOption => (

            <option value={groupOption.Value}>Group by {groupOption.Label}</option>

          ))}

        </select>
        </div>

      </Column>
      <Column size="is-1">
        <button className="button is-rounded is-link is-small has-text-weight-bold" onClick={()=>handleAddClick()}>Add</button>
        <button onClick={()=>handleAddDrawer(services, serviceGridColumns)}>Test</button>
      </Column>
      
    </Columns>
    </div>
    
    <Grid title="Monthly Cost">
      <CostBySite />
    </Grid>

    
    
    <div className={grid === 'SERVICES' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "SERVICES" ? services : null}
        isGrid='Services'
        headerFields={serviceGridColumns}
        mobileHeaderFields={serviceMobileGridColumns}
        handleClick={(e) => handleAddDrawer({id: e, colRef: serviceGridColumns, modRef: "Services"})}
        handleSort={(e)=>handleSorting(e)}
        groupBy={groupBy}
      />
    </div>
    <div className={grid === 'TICKETS' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "TICKETS" ? tickets : null}
        isGrid='Tickets'
        headerFields={ticketGridColumns}
        mobileHeaderFields={ticketMobileGridColumns} 
        handleClick={(e) => handleAddDrawer({id: e, colRef: ticketGridColumns, modRef: "Tickets"})}
        handleSort={(e)=>handleSorting(e)}
        groupBy={groupBy}
      />
    </div>
    <div className={grid === 'ORDERS' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "ORDERS" ? orders : null}
        isGrid='Orders'
        headerFields={orderGridColumns}
        mobileHeaderFields={orderMobileGridColumns}
        handleClick={(e) => handleAddDrawer({id: e, colRef: orderGridColumns, modRef: "Orders"})}
        handleSort={(e)=>handleSorting(e)}
        groupBy={groupBy || "ALL"}
      />
    </div>
    <div className={grid === 'ACCOUNTS' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "ACCOUNTS" ? accounts : null}
        isGrid='Accounts'
        headerFields={accountGridColumns}
        mobileHeaderFields={accountMobileGridColumns}
        handleClick={(e) => handleAddDrawer({id: e, colRef: accountGridColumns, modRef: "Accounts"})}
        handleSort={(e)=>handleSorting(e)}
        groupBy={groupBy}
      />
    </div>
    <div className={grid === 'LOCATIONS' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "LOCATIONS" ? locations : null}
        isGrid='Locations'
        headerFields={locationGridColumns}
        mobileHeaderFields={locationMobileGridColumns}
        handleClick={(e) => handleAddDrawer({id: e, colRef: locationGridColumns, modRef: "Locations"})}
        handleSort={(sortBy, colRef)=>handleSorting(sortBy, colRef)}
        groupBy={groupBy}
      />
    </div>
    <div className={grid === 'CONTRACTS' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "CONTRACTS" ? contracts : null}
        isGrid='Contracts'
        headerFields={contractGridColumns}
        mobileHeaderFields={contractMobileGridColumns}
        handleClick={(e) => handleAddDrawer({id: e, colRef: contractGridColumns, modRef: "Contracts"})}
        handleSort={(sortBy, colRef)=>handleSorting(sortBy, colRef)}
        groupBy={groupBy}
      />
    </div>
    <div className={grid === 'USERS' ? "" : "is-hidden"}>
      <GridGroup2
        data={grid === "USERS" ? users : null}
        isGrid='Users'
        headerFields={userGridColumns}
        mobileHeaderFields={userGridColumns}
        handleClick={(e) => handleAddDrawer({id: e, colRef: userGridColumns, modRef: "Users"})}
        handleSort={(sortBy, colRef)=>handleSorting(sortBy, colRef)}
        groupBy={groupBy}
      />
    </div>
    
    <p/>

    <SideDrawer 
      direction="right" 
      checked={isDrawerOpen} 
      handleClose={() => handleCloseDrawer()}
      title={currentCompany}
    >
      <DetailDrawer
        currentCompanyID={currentCompanyID}
        id={currentDocID}
        isModule={currentModule}
        handleRelatedClick={(e)=>handleRelatedClick(e)}
        isNew={isNewDoc || false}
        isRefreshDrawer={isRefreshDrawer}
        isDrawerActive={isNewDoc || false}
        setIsDetailDrawerOpen={() => setIsDrawerOpen(!isDrawerOpen)}
        isDetailDrawerOpen={isDrawerOpen}
        resetIsNew={()=>setIsNewDoc()}
      />
    </SideDrawer>
    
    <SideDrawer 
      direction="right" 
      checked={isNewDocDrawerOpen} 
      handleClose={() => handleCloseDrawer()}
      title={currentCompany}
    >
      <DetailDrawer
        currentCompanyID={currentCompanyID}
        id={isCurrentDocID}
        isModule={currentModule}
        isNew={true}
        isDrawerActive={true}
        setIsDetailDrawerOpen={() => setIsDrawerOpen(!isDrawerOpen)}
        isDetailDrawerOpen={isDrawerOpen}
        resetIsNew={()=>setIsNewDoc()}
      />
    </SideDrawer>

    <RenderDrawer 
      drawers={drawers} 
      handleAddDrawer={(e)=>handleAddDrawer({id: e.id, modRef: e.colRef})} 
      handleClose={(index)=>handleClose(index)} 
    />
    
        {/** Network Graph 
          <div className={grid === 'NETWORK' ? "card" : "is-hidden"}>
            <NetworkGraphComponent 
              data={locations && locations}
            />
          </div>
      */}
    
  
  </>
  
  )
}


export default DashboardGrids
