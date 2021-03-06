import React, { useContext } from 'react'
import { stateContext } from './stateContext'
import {vendorList} from './vendorList'
import {stateList} from './states'
import {serviceType} from './serviceType'
import {accessType} from './accessType'


/** Reference Object Dummy Assignments */
  
  let locations = []
  let orders = []
  let accounts = []
  let services = []
  let notes = []
  let serviceStatusType = []
  let serviceTypes = []
  let accessTypes = []

/** Grid Fields */
    const serviceGridColumns = [
      {
        docField: 'Vendor', 
        headerName: 'Vendor', 
        key: "1", 
        filterable: true
      },
      {
        docField: 'VendorServiceName', 
        headerName: 'Product', 
        key: "2", 
        filterable: true
      },
      {
        docField: 'LocationName', 
        headerName: 'Location', 
        key: "3", 
        filterable: true,
        mobile: true
      },
      {
        docField: 'AssetID', 
        headerName: 'Asset ID', 
        key: "4", 
        filterable: false,
        mobile: true
      },
      {
        docField: 'Type', 
        headerName: 'Type', 
        key: "5", 
        filterable: true
      },
      {
        docField: 'Status', 
        headerName: 'Status', 
        key: "6", 
        filterable: true
      }
    ]

    const serviceGroupByFields = [
      {
        Label: 'Vendor',
        Value: 'Vendor'
      },
      {
        Label: 'Type',
        Value: 'Type'
      },
      {
        Label: 'Location',
        Value: 'LocationName'
      },
      {
        Label: 'Status',
        Value: 'Status'
      },
      {
        Label: 'Account Number',
        Value: 'AccountNum'
      },
      {
        Label: 'Tags',
        Value: 'Tags'
      }
    ]

    const serviceMobileGridColumns = [
      {
        docField: 'Vendor', 
        headerName: 'Vendor', 
        key: "1", 
        filterable: true
      },
      {
        docField: 'LocationName', 
        headerName: 'Location', 
        key: "3", 
        filterable: true,
        mobile: true
      },
      {
        docField: 'AssetID', 
        headerName: 'Asset ID', 
        key: "4", 
        filterable: false,
        mobile: true
      },
      {
        docField: 'Type', 
        headerName: 'Type', 
        key: "5", 
        filterable: true
      }
      
    ]

    const locationGridColumns = [
      {
        docField: 'Name',
        headerName: 'Location Name',
        key: "1",
        filterable: false
      },
      {
        docField: 'Address1',
        headerName: 'Address 1',
        key: "2",
        filterable: false
      },
      { 
        docField: 'City', 
        headerName: 'City', 
        key: "4", 
        filterable: true 
      },
      { 
        docField: 'State', 
        headerName: 'State', 
        key: "5", 
        filterable: true 
      },
      { 
        docField: 'Zip', 
        headerName: 'Zip', 
        key: "6", 
        filterable: true 
      }
    ]

    const locationMobileGridColumns = [
      {
        docField: 'Name',
        headerName: 'Location Name',
        key: "1",
        filterable: false
      },
      { 
        docField: 'City', 
        headerName: 'City', 
        key: "4", 
        filterable: true 
      },
      { 
        docField: 'State', 
        headerName: 'State', 
        key: "5", 
        filterable: true 
      }
    ]

    const locationGroupByFields = [
      {
        Label: 'City',
        Value: 'City'
      },
      {
        Label: 'State',
        Value: 'State'
      },
      {
        Label: 'Zip',
        Value: 'Zip'
      },
    ]
    
    const ticketGridColumns = [
      {
        docField: 'Status', 
        headerName: 'Status', 
        key: "1", 
        filterable: true
      },
      {
        docField: 'TicketNum', 
        headerName: 'Ticket', 
        key: "2", 
        filterable: false
      },
      {
        docField: 'LocationName', 
        headerName: 'Location', 
        key: "3", 
        filterable: true
      },
      {
        docField: 'Type', 
        headerName: 'Type', 
        key: "4", 
        filterable: true
      },
      {
        docField: 'Details', 
        headerName: 'Details', 
        key: "5", 
        filterable: false
      }
    ]
    
    const ticketGroupByFields = [
      {
        Label: 'Type',
        Value: 'Type'
      },
      {
        Label: 'Location',
        Value: 'LocationName'
      },
      {
        Label: 'Vendor',
        Value: 'Vendor'
      },
      {
        Label: 'Status',
        Value: 'Status'
      }
    ]

    const ticketMobileGridColumns = [
      {
        docField: 'Status', 
        headerName: 'Status', 
        key: "1", 
        filterable: true
      },
      {
        docField: 'TicketNum', 
        headerName: 'Ticket', 
        key: "2", 
        filterable: false
      },
      {
        docField: 'LocationName', 
        headerName: 'Location', 
        key: "3", 
        filterable: true
      },
      {
        docField: 'Type', 
        headerName: 'Type', 
        key: "4", 
        filterable: true
      },
      {
        docField: 'Details', 
        headerName: 'Details', 
        key: "5", 
        filterable: false
      }
    ]

    const orderGridColumns = [
      {
        docField: 'OrderDate',
        headerName: 'Date',
        key: "1",
        filterable: true
      },
      {
        docField: 'Vendor',
        headerName: 'Vendor',
        key: "2",
        filterable: true
      },
      { 
        docField: 'VendorServiceName', 
        headerName: 'Product', 
        key: "3", 
        filterable: true 
      },
      { 
        docField: 'LocationName', 
        headerName: 'Location', 
        key: "4", 
        filterable: true 
      },
      { 
        docField: 'OrderNum', 
        headerName: 'Order Number', 
        key: "5", 
        filterable: false 
      }
    ]

    const orderGroupByFields = [
      {
        Label: 'Vendor',
        Value: 'Vendor'
      },
      {
        Label: 'Status',
        Value: 'Status',
      },
      {
        Label: 'Location',
        Value: 'LocationName'
      }
    ]

    const orderMobileGridColumns = [
      {
        docField: 'OrderDate',
        headerName: 'Date',
        key: "1",
        filterable: true
      },
      {
        docField: 'Vendor',
        headerName: 'Vendor',
        key: "2",
        filterable: true
      },
      { 
        docField: 'VendorServiceName', 
        headerName: 'Product', 
        key: "3", 
        filterable: true 
      },
      { 
        docField: 'LocationName', 
        headerName: 'Location', 
        key: "4", 
        filterable: true 
      },
      { 
        docField: 'OrderNum', 
        headerName: 'Order Number', 
        key: "5", 
        filterable: false 
      }
    ]

    const accountGridColumns = [
      {
        docField: 'Vendor',
        headerName: 'Vendor',
        key: "1",
        filterable: true,
        visible: true,
        mobile: true
      },
      {
        docField: 'AccountNum',
        headerName: 'Account',
        key: "2",
        filterable: false,
        visible: true,
        mobile: false
      },
      {
        docField: 'PostTaxMRC',
        headerName: 'Cost',
        key: "5",
        filterable: false,
        visible: true,
        mobile: true,
        type: "currency"
      }
    ]

    const accountGroupByFields = [
      {
        Label: 'Vendor',
        Value: 'Vendor'
      },
      {
        Label: 'All',
        Value: ""
      }
    ]

    const accountMobileGridColumns = [
      {
        docField: 'Vendor',
        headerName: 'Vendor',
        key: "1",
        filterable: true,
        visible: true,
        mobile: true
      },
      {
        docField: 'AccountNum',
        headerName: 'Account',
        key: "2",
        filterable: false,
        visible: true,
        mobile: false
      },
      {
        docField: 'PostTaxMRC',
        headerName: 'Cost',
        key: "5",
        filterable: false,
        visible: true,
        mobile: true,
        type: "currency"
      }
    ]

    const userGridColumns = [
      {
        docField: 'FirstName', 
        headerName: 'First Name', 
        key: "3"
      },
      {
        docField: 'LastName', 
        headerName: 'Last Name', 
        key: "2"
      },
      {
        docField: 'Email', 
        headerName: 'Email', 
        key: "1"
      }
    ]

    const contractGridColumns = [
      {
        docField: 'Vendor', 
        headerName: 'Vendor', 
        key: "1"
      },
      {
        docField: 'Date', 
        headerName: 'Date', 
        key: "2"
      },
      {
        docField: 'Term', 
        headerName: 'Term', 
        key: "3"
      },
      {
        docField: 'Details', 
        headerName: 'Details', 
        key: "4"
      }
    ]

    const contractMobileGridColumns = [
      {
        docField: 'Vendor', 
        headerName: 'Vendor', 
        key: "1"
      },
      {
        docField: 'Date', 
        headerName: 'Date', 
        key: "2"
      }
    ]

    const contractGroupByFields = [
      {
        Label: 'Vendor',
        Value: 'Vendor'
      },
      {
        Label: 'All',
        Value: ""
      }
    ]
    
/** Page Fields */
    const serviceDetailFields = [
      {
        label: "Basic Info",
        inputFieldType: "tabTitle"
      },
      { 
        label: "Service Location", 
        dataField: "LocationName", 
        inputFieldType: "related-select", 
        inputSource: "", /** SET BY HANDLEINITIALFIELDMAPPING FN */
        inputID: "id", 
        inputValue: "Name",
        relatedCollection: "Locations", 
        relatedDataField: "LocationID",
        relatedInputLabel: "Location Name",
        relatedInputFields: [
          {
            label: 'Location Name',
            dataField: 'Name',
            inputFieldType: 'text'
          },
          {
            label: "Address 1",
            dataField: "Address1",
            inputFieldType: "text"
          },
          {
            label: "Address 2",
            dataField: "Address2",
            inputFieldType: "text"
          },
          {
            label: "City",
            dataField: "City",
            inputFieldType: "text"
          },
          {
            label: "State",
            dataField: "State",
            inputFieldType: "text"
          },
          {
            label: "Province/Region",
            dataField: "Region",
            inputFieldType: "text"
          },
          {
            label: "Zip",
            dataField: "Zip",
            inputFieldType: "text"
          },
          {
            label: "Country",
            dataField: "Country",
            inputFieldType: "text"
          },
        ],
        relatedDataType: "Location",
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO"  
      },
      { 
        label: "Vendor", 
        dataField: "Vendor", 
        inputFieldType: "select", 
        inputSource: vendorList, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      { 
        label: "Type", 
        dataField: "Type", 
        inputFieldType: "select", 
        inputSource: serviceType, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO"
      },
      { 
        label: "Service Name", 
        dataField: "VendorServiceName", 
        inputFieldType: "text", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      { 
        label: "Access Type", 
        dataField: "AccessType", 
        inputFieldType: "select", 
        inputSource: accessType, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      { 
        label: "Asset ID", 
        dataField: "AssetID", 
        inputFieldType: "text", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO", 
        isHeader: true
      },
      { 
        label: "Bandwidth", 
        dataField: "Bandwidth", 
        inputFieldType: "text", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      { 
        label: "Monthly Cost", 
        dataField: "MRC", 
        inputFieldType: "currency", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      { 
        label: "Status", 
        dataField: "Status", 
        inputFieldType: "status", 
        inputSource: [
          { 
            Name: 'Active', 
            Value: 'Active' 
          },
          { 
            Name: 'Disconnected', 
            Value: 'Disconnected' 
          },
          { 
            Name: 'Pending Activation', 
            Value: 'Pending Activation' 
          },
          { 
            Name: 'Pending Disconnect', 
            Value: 'Pending Disconnect' 
          }
        ], 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      {
        label: 'Details',
        inputFieldType: 'tabTitle'
      },
      { 
        label: "Service Start Date", 
        dataField: "StartDate", 
        visible: true, 
        inputFieldType: "datepicker", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      { 
        label: 'Last Mile', 
        dataField: 'LastMile', 
        inputFieldType: "select", 
        inputSource: vendorList, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      { 
        label: "LEC Circuit ID", 
        dataField: "LECCircuitID", 
        inputFieldType: "text", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      { 
        label: "IPV4 Info", 
        dataField: "IPV4", 
        inputFieldType: "text-area", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      { 
        label: "IPV6 Info", 
        dataField: "IPV6", 
        inputFieldType: "text-area", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      { 
        label: "IP Assignments", 
        dataField: "IPAssignments", 
        inputFieldType: "array-map-list",  
        relatedInputFields: [
          {
            label: 'Version',
            dataField: 'Version',
            inputFieldType: 'select',
            inputID: "Name", 
            inputValue: "Value", 
            inputSource: [
              {
                Name: 'v4',
                Value: 'v4'
              },
              {
                Name: 'v6',
                Value: 'v6'
              }
            ]
          },
          {
            label: 'IP Address',
            dataField: 'IPAddress',
            inputFieldType: 'text',
          },
          {
            label: 'Range',
            dataField: 'Range',
            inputFieldType: 'select',
            inputID: "Name", 
            inputValue: "Value", 
            inputSource: [
              {
                Name: '/30',
                Value: '/30'
              },
              {
                Name: '/29',
                Value: '/29'
              },
              {
                Name: '/28',
                Value: '/28'
              },
              {
                Name: '/27',
                Value: '/27'
              },
              {
                Name: '/26',
                Value: '/26'
              },
              {
                Name: '/25',
                Value: '/25'
              },
              {
                Name: '/24',
                Value: '/24'
              },
              {
                Name: '/23',
                Value: '/23'
              },
              {
                Name: '/22',
                Value: '/22'
              },
              {
                Name: '/21',
                Value: '/21'
              },
              {
                Name: '/20',
                Value: '/20'
              },
              {
                Name: '/19',
                Value: '/19'
              },
              {
                Name: '/18',
                Value: '/18'
              },
              {
                Name: '/17',
                Value: '/17'
              },
              {
                Name: '/16',
                Value: '/16'
              }
            ]
          },
          
        ],
        tab: "DETAILS",
        tabLabel: "DETAILS",
        hasBreakBefore: true  
      },
      { 
        label: 'Demarc Information', 
        dataField: 'DemarcInfo', 
        visible: true, 
        inputFieldType: "text-area", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      { 
        label: "Related Orders", 
        dataField: "OrderNum", 
        inputFieldType: "map-list", 
        inputSource: "", 
        inputID: "id", 
        inputValue: "OrderNum",
        relatedCollection: "Orders", 
        relatedDataField: "ServiceID", 
        relatedInputLabel: "Order Number",
        relatedInputFields: [
          {
            label: 'Date',
            dataField: 'OrderDate',
            inputFieldType: 'datepicker'
          },
          {
            label: 'Existing',
            dataField: 'OrderNum',
            inputFieldType: 'related-select',
            inputSource: "",
            inputID: "id",
            relatedCollection: "Orders", 
            relatedDataField: "OrderID",
            relatedInputLabel: "Order",
            relatedInputFields: [
              {
                label: 'Order',
                dataField: 'OrderNum',
                inputFieldType: 'text'
              }
            ], 
            relatedDataType: 'Order',
          },
          {
            label: 'Order',
            dataField: 'OrderNum',
            inputFieldType: 'text'
          },
          {
            label: 'Status',
            dataField: 'Status',
            inputFieldType: 'text'
          },
        ],
        tab: "DETAILS",
        tabLabel: "DETAILS",
        hasBreakBefore: true  
      },
      { 
        label: "Related Order ID", 
        dataField: "OrderID", 
        visible: false, 
        inputSource: orders, 
        inputID: "ID", 
        inputValue: "id", 
        tab: "DETAILS",
        tabLabel: "DETAILS" 
      },
      {
        label: 'Support',
        inputFieldType: 'tabTitle'
      },
      {
        label: "Related Tickets",
        dataField: "TicketNum",
        inputFieldType: "map-list",
        inputSource: "",
        inputID: "id",
        inputValue: "TicketNum",
        relatedCollection: "Tickets",
        relatedDataField: "ServiceID",
        relatedInputLabel: "Ticket Number",
        relatedInputFields: [
          {
            label: "Ticket",
            dataField: "TicketNum",
            inputFieldType: "text"
          },
          {
            label: "Type",
            dataField: "Type",
            inputFieldType: "select",
            inputID: 'Name',
            inputValue: 'Value',
            inputSource: [
              {
                Name: "Service",
                Value: "Service"
              },
              {
                Name: "Billing",
                Value: "Billing"
              },
              {
                Name: "Disconnect",
                Value: "Disconnect"
              }
            ],
          },
          {
            label: "Status",
            dataField: "Status",
            inputFieldType: "select",
            inputID: 'Name',
            inputValue: 'Value',
            inputSource: [
              {
                Name: 'Submitted',
                Value: 'Submitted'
              },
              {
                Name: 'In Process',
                Value: 'In Process'
              },
              {
                Name: 'Completed',
                Value: 'Completed'
              },
              {
                Name: 'Closed',
                Value: 'Closed'
              }
            ]
          }
        ],
        tab: "SUPPORT"
      },
      {
        label: 'Billing',
        inputFieldType: 'tabTitle'
      },
      { 
        label: "Related Account", 
        dataField: "AccountNum",
        visible: true, 
        inputFieldType: "related-select", 
        inputSource: "", 
        inputID: "id", 
        inputValue: "AccountNum",
        relatedCollection: "Accounts", 
        relatedDataField: "AccountID",
        relatedInputLabel: "Account Number",
        relatedInputFields: [
          {
            label: 'Account Number',
            dataField: 'AccountNum',
            inputFieldType: 'text'
          }
        ], 
        relatedDataType: 'Account',
        tab: 'BILLING',
        tabLabel: 'BILLING'
      },
      { 
        label: "Sub Account", 
        dataField: "SubAccountNum", 
        inputFieldType: "text", 
        tab: "BILLING",
        tabLabel: "BILLING" 
      },
      { 
        label: "Group Number", 
        dataField: "GroupNum", 
        inputFieldType: "text", 
        tab: "BILLING",
        tabLabel: "BILLING" 
      },
      { 
        label: "Last Bill Amount", 
        dataField: "LastBillAmount", 
        inputFieldType: "currency", 
        tab: "BILLING",
        tabLabel: "BILLING" 
      },
      { 
        label: "Bills", 
        dataField: "Bills", 
        inputFieldType: "map-list", 
        relatedCollection: "Bills", 
        relatedDataField: "ServiceID",
        relatedInputLabel: "Bill",
        relatedInputFields: [
          {
            label: 'Date', 
            dataField: 'Date', 
            inputFieldType: 'datepicker'
          }, 
          {
            label: 'Base Cost', 
            dataField: 'Cost', 
            inputFieldType: 'currency'
          }, 
          {
            label: 'Total Cost',
            dataField: 'TotalCost',
            inputFieldType: 'currency'
          },
          {
            label: 'Disputed', 
            dataField: 'DisputedCost', 
            inputFieldType: 'currency'
          }
        ], 
        tab: "BILLING",
        tabLabel: "BILLING", 
      },
      {
        label: 'Notes',
        inputFieldType: 'tabTitle'
      },
      { 
        label: "", 
        dataField: "Notes", 
        inputFieldType: "map-list", 
        relatedCollection: "Notes", 
        relatedDataField: "ServiceID",
        relatedInputLabel: "Note",
        relatedInputFields: [
          {
            label: 'Date', 
            dataField: 'Date', 
            inputFieldType: 'datepicker'
          }, 
          {
            label: 'Note', 
            dataField: 'NoteBody', 
            inputFieldType: 'text-area'
          }, 
        ], 
        tab: "NOTES",
        tabLabel: "NOTES", 
      },
      
    ]
    const ticketDetailFields = [
    
      { 
        label: "Ticket Number", 
        dataField: "TicketNum", 
        inputFieldType: "text", 
        tab: "BASIC INFO",
        isHeader: true 
      },
      { 
        label: "Service Location", 
        dataField: "LocationName", 
        inputFieldType: "related-select", 
        inputSource: "", /** SET BY HANDLEINITIALFIELDMAPPING FN */
        inputID: "id", 
        inputValue: "Name",
        relatedCollection: "Locations", 
        relatedDataField: "LocationID",
        relatedInputLabel: "Location Name",
        relatedInputFields: [
          {
            label: 'Location Name',
            dataField: 'Name',
            inputFieldType: 'text'
          },
          {
            label: "Address 1",
            dataField: "Address1",
            inputFieldType: "text"
          },
          {
            label: "Address 2",
            dataField: "Address2",
            inputFieldType: "text"
          },
          {
            label: "City",
            dataField: "City",
            inputFieldType: "text"
          },
          {
            label: "State",
            dataField: "State",
            inputFieldType: "text"
          },
          {
            label: "Province/Region",
            dataField: "Region",
            inputFieldType: "text"
          },
          {
            label: "Zip",
            dataField: "Zip",
            inputFieldType: "text"
          },
          {
            label: "Country",
            dataField: "Country",
            inputFieldType: "text"
          },
        ],
        relatedDataType: "Location",
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO"  
      },
      { 
        label: "Service Location ID", 
        dataField: "LocationID", 
        visible: false, 
        inputSource: locations, 
        inputID: "ID", 
        inputValue: "id", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Related Account", 
        dataField: "AccountNum",
        visible: true, 
        inputFieldType: "related-select", 
        inputSource: "", 
        inputID: "id", 
        inputValue: "AccountNum",
        relatedCollection: "Accounts", 
        relatedDataField: "AccountID",
        relatedInputLabel: "Account Number",
        relatedInputFields: [
          {
            label: 'Account Number',
            dataField: 'AccountNum',
            inputFieldType: 'text'
          }
        ], 
        relatedDataType: 'Account',
        tab: 'BILLING',
        tabLabel: 'BILLING'
      },
      { 
        label: "Related Account ID", 
        dataField: "AccountID", 
        visible: false, 
        inputSource: accounts, 
        inputID: "ID", 
        inputValue: "id", 
        tab: "BASIC INFO" 
      },

      { 
        label: "Related Service", 
        dataField: "ServiceAssetID", 
        inputFieldType: "related-select", 
        inputSource: services, 
        inputID: "id", 
        inputValue: "AssetID", 
        relatedCollection: "Services",
        relatedDataField: "ServiceID",
        relatedInputLabel: "Related Asset",
        relatedInputFields: [
          {
            label: 'Asset ID',
            dataField: 'AssetID',
            inputFieldType: 'text'
          }
        ], 
        relatedDataType: 'Service',
        tab: "DETAILS",  
        tabLabel: 'DETAILS'
      },
      { 
        label: "Vendor", 
        dataField: "Vendor", 
        inputFieldType: "select", 
        inputSource: vendorList, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO"
      },
      { 
        label: "Date Submitted", 
        dataField: "DateSubmitted", 
        inputFieldType: "datepicker", 
        tab: "BASIC INFO"
      },
      { 
        label: "Type", 
        dataField: "Type", 
        inputFieldType: "select",
        inputID: 'Name',
        inputValue: 'Value', 
        inputSource: [
          { 
            Name: "Service",
            Value: "Service" 
          },
          { 
            Name: "Billing",
            Value: "Billing" 
          },
          { 
            Name: "Disconnect",
            Value: "Disconnect" 
          }
        ], 
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO" 
      },
      { 
        label: "Status", 
        dataField: "Status", 
        inputFieldType: "select",
        inputID: 'Name', 
        inputValue: 'Value', 
        inputSource: [
          { 
            Name: "Submitted",
            Value: "Submitted" 
          },
          { 
            Name: "In Process",
            Value: "In Process" 
          },
          { 
            Name: "Completed",
            Value: "Completed" 
          },
          { 
            Name: "Closed",
            Value: "Closed" 
          }
        ],  
        tab: "BASIC INFO",

      },
      { 
        label: "Details", 
        dataField: "Details", 
        inputFieldType: "text-area", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Notes", 
        dataField: "NoteID", 
        inputFieldType: "map-list", 
        inputSource: "", 
        inputID: "id", 
        inputValue: "TicketID", 
        relatedCollection: "Notes",
        relatedDataField: "NoteID",
        relatedInputLabel: "Notes",
        relatedInputFields: [
          {
            label: 'Date',
            dataField: 'Date',
            inputFieldType: 'datepicker'
          },
          {
            label: 'Note',
            dataField: 'Note',
            inputFieldType: 'textarea'
          }
        ], 
        relatedDataType: 'Note',
        tab: "NOTES",  
        tabLabel: 'NOTES'
      },
      
    ]
    const accountDetailFields = [
    
      { 
        label: "Account Number", 
        dataField: "AccountNum", 
        inputFieldType: "text",
        isHeader: true, 
        tab: "BASIC INFO" 
      },
      { 
        label: "Vendor", 
        dataField: "Vendor", 
        inputFieldType: "select",
        inputSource: vendorList,  
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO"
      },
      { 
        label: "Date Billing Started", 
        dataField: "BillingStartDate", 
        inputFieldType: "datepicker", 
        tab: "DETAILS"
      },
      { 
        label: "Type", 
        dataField: "Type", 
        inputFieldType: "text", 
        tab: "DETAILS" 
      },
      { 
        label: "Related Services", 
        dataField: "Services", 
        inputFieldType: "map-list", 
        inputSource: "", 
        inputID: "id", 
        inputValue: "AssetID", 
        relatedCollection: "Services",
        relatedDataField: "AccountID",
        relatedInputLabel: "Related Asset",
        relatedInputFields: [
          {
            label: 'Asset ID',
            dataField: 'AssetID',
            inputFieldType: 'text'
          },
          {
            label: 'Service Location',
            dataField: 'LocationName',
            inputFieldType: 'text'
          },
          {
            label: 'Group',
            dataField: 'GroupNum',
            inputFieldType: 'text'
          }
        ], 
        relatedDataType: 'Service',
        tab: "BASIC INFO",  
        tabLabel: 'BASIC INFO',
        hasBreakBefore: true
      },
      { 
        label: "Bills", 
        dataField: "Bills", 
        inputFieldType: "map-list", 
        relatedCollection: "Bills", 
        relatedDataField: "AccountID",
        relatedInputFields: [
          {
            label: 'Date', 
            dataField: 'Date', 
            inputFieldType: 'datepicker'
          }, 
          {
            label: 'Sub Account', 
            dataField: 'SubAccountNum', 
            inputFieldType: 'text'
          },
          {
            label: 'Asset ID', 
            dataField: 'AssetID', 
            inputFieldType: 'text'
          },
          {
            label: 'Cost', 
            dataField: 'Cost', 
            inputFieldType: 'currency'
          },                     
        ], 
        tab: "BILLING",
        tabLabel: "BILLING",
      },
      
    ]
    const orderDetailFields = [
      { 
        label: "Service Location", 
        dataField: "LocationName", 
        inputFieldType: "related-select", 
        inputSource: "", /** SET BY HANDLEINITIALFIELDMAPPING FN */
        inputID: "id", 
        inputValue: "Name",
        relatedCollection: "Locations", 
        relatedDataField: "LocationID",
        relatedInputLabel: "Location Name",
        relatedInputFields: [
          {
            label: 'Location Name',
            dataField: 'Name',
            inputFieldType: 'text'
          },
          {
            label: "Address 1",
            dataField: "Address1",
            inputFieldType: "text"
          },
          {
            label: "Address 2",
            dataField: "Address2",
            inputFieldType: "text"
          },
          {
            label: "City",
            dataField: "City",
            inputFieldType: "text"
          },
          {
            label: "State",
            dataField: "State",
            inputFieldType: "text"
          },
          {
            label: "Province/Region",
            dataField: "Region",
            inputFieldType: "text"
          },
          {
            label: "Zip",
            dataField: "Zip",
            inputFieldType: "text"
          },
          {
            label: "Country",
            dataField: "Country",
            inputFieldType: "text"
          }
        ],
        relatedDataType: "Location",
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO"  
      },
      { 
        label: "Order Number", 
        dataField: "OrderNum", 
        inputFieldType: "text",
        isHeader: true, 
        tab: "BASIC INFO" 
      },
      { 
        label: "Date Ordered", 
        dataField: "OrderDate", 
        inputFieldType: "datepicker", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Vendor", 
        dataField: "Vendor", 
        inputFieldType: "select", 
        inputSource: vendorList, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Service Name", 
        dataField: "VendorServiceName", 
        inputFieldType: "text", 
        tab: "BASIC INFO" 
      },
      {
        label: "Order Type",
        dataField: "Type",
        visible: false,
        inputField: "select",
        inputID: "Name",
        inputValue: "Value",
        inputSource: [
          {
            Name: 'New',
            Value: 'New'
          },
          {
            Name: 'Change',
            Value: 'Change'
          },
          {
            Name: 'Disconnect',
            Value: 'Disconnect'
          }
        ],
        tab: "BASIC INFO"
      },
      { 
        label: "Monthly Cost", 
        dataField: "MRC", 
        inputFieldType: "currency", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Status", 
        dataField: "Status", 
        inputFieldType: "select", 
        inputID: "id", 
        inputValue: "Name", 
        inputSource: [
          {
            Name: "Ordered",
            Value: "Ordered"
          },
          {
            Name: "Completed",
            Value: "Completed"
          },
          {
            Name: "Cancelled",
            Value: "Cancelled"
          }
        ], 
        tab: "BASIC INFO" 
      },
      { 
        label: "Bandwidth", 
        dataField: "Bandwidth", 
        inputFieldType: "text", 
        tab: "DETAILS" 
      },
      { 
        label: "Related Service", 
        dataField: "AssetID", 
        inputFieldType: "related-select", 
        inputSource: services, 
        inputID: "id", 
        inputValue: "AssetID", 
        relatedCollection: "Services",
        relatedDataField: "ServiceID",
        relatedInputLabel: "Related Asset",
        relatedInputFields: [
          {
            label: 'Asset ID',
            dataField: 'AssetID',
            inputFieldType: 'text'
          }, 
          {
            label: 'Location',
            dataField: 'LocationName',
            inputFieldType: 'text'
          }
        ], 
        relatedDataType: 'Service',
        tab: "DETAILS",  
        tabLabel: 'DETAILS'
      },
      { 
        label: "Details", 
        dataField: "Details", 
        inputFieldType: "array-list", 
        tab: "DETAILS" 
      },
      {
        label: "Notes",
        dataField: "Notes",
        inputFieldType: "text-area",
        tab: "NOTES"
      }
    ]
    const billsDetailFields = [
      { 
        label: "Location", 
        dataField: "LocationName", 
        inputFieldType: "related-select", 
        inputSource: "", /** SET BY HANDLEINITIALFIELDMAPPING FN */
        inputID: "id", 
        inputValue: "Name",
        relatedCollection: "Locations", 
        relatedDataField: "LocationID",
        relatedInputLabel: "Location Name",
        relatedInputFields: [
          {
            label: 'Location Name',
            dataField: 'Name',
            inputFieldType: 'text'
          },
          {
            label: "Address 1",
            dataField: "Address1",
            inputFieldType: "text"
          },
          {
            label: "Address 2",
            dataField: "Address2",
            inputFieldType: "text"
          },
          {
            label: "City",
            dataField: "City",
            inputFieldType: "text"
          },
          {
            label: "State",
            dataField: "State",
            inputFieldType: "text"
          },
          {
            label: "Province/Region",
            dataField: "Region",
            inputFieldType: "text"
          },
          {
            label: "Zip",
            dataField: "Zip",
            inputFieldType: "text"
          },
          {
            label: "Country",
            dataField: "Country",
            inputFieldType: "text"
          }
        ],
        relatedDataType: "Location",
        tab: "BASIC INFO",
        tabLabel: "BASIC INFO"  
      },
      { 
        label: "Account Number", 
        dataField: "AccountNum", 
        inputFieldType: "text", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Account ID", 
        dataField: "AccountID", 
        inputFieldType: "text", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Vendor", 
        dataField: "Vendor", 
        inputFieldType: "select", 
        inputSource: vendorList, 
        inputID: "Name", 
        inputValue: "Value", 
        tab: "BASIC INFO" 
      },
      {
        label: "Asset ID",
        dataField: "AssetID",
        inputField: "text",
        tab: "BASIC INFO"
      },
      { 
        label: "Amount Billed", 
        dataField: "Cost", 
        inputFieldType: "currency", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Total Billed", 
        dataField: "TotalCost", 
        inputFieldType: "currency", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Disputed Amount", 
        dataField: "DisputedCost", 
        inputFieldType: "currency", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Company Name", 
        visible: false,
        dataField: "CompanyName", 
        inputFieldType: "text", 
        tab: "BASIC INFO" 
      },
      { 
        label: "Company ID", 
        visible: false,
        dataField: "CompanyID", 
        inputFieldType: "text",  
        tab: "BASIC INFO" 
      },
  
    ]
    const locationDetailFields = [
      {
        label: 'Location Name',
        dataField: 'Name',
        inputFieldType: 'text',
        tab: 'BASIC INFO',
        isHeader: true
      },
      {
        label: 'Address 1',
        dataField: 'Address1',
        inputFieldType: 'text',
        tab: 'BASIC INFO',
      },
      {
        label: 'Address 2',
        dataField: 'Address2',
        inputFieldType: 'text',
        tab: 'BASIC INFO'
      },
      {
        label: 'City',
        dataField: 'City',
        inputFieldType: 'text',
        tab: 'BASIC INFO'
      },
      {
        label: 'State',
        dataField: 'State',
        inputFieldType: 'select',
        inputSource: stateList,
        inputValue: "code",
        tab: 'BASIC INFO'
      },
      {
        label: "Province/Region",
        dataField: "Region",
        inputFieldType: "text",
        tab: 'BASIC INFO'
      },
      {
        label: "Zip",
        dataField: "Zip",
        inputFieldType: "text",
        tab: 'BASIC INFO'
      },
      {
        label: "Country",
        dataField: "Country",
        inputFieldType: "text",
        tab: "BASIC INFO"
      },
      {
        label: 'Full Address',
        dataField: 'FullAddress',
        inputFieldType: 'concat',
        visible: false,
        tab: 'BASIC INFO'
      },
    ]
    const notesDetailFields = [
      {
        label: 'Note Date',
        dataField: 'Date',
        inputFieldType: 'datepicker',
        tab: 'NOTES',
        tabLabel: 'NOTES'
      },
      {
        label: 'Note',
        dataField: 'NoteBody',
        inputFieldType: 'text-area',
        tab: 'NOTES',
        tablLabel: 'NOTES'
      },
      {
        label: 'Attached to',
        dataField: 'AttachedTo',
        inputFieldType: 'text'
      }
    ]

    const contractDetailFields = [
      {
        label: 'Contract Name',
        dataField: 'Name',
        inputFieldType: 'text',
        tab: 'BASIC INFO',
        tabLabel: 'BASIC INFO',
        isHeader: true
      },
      {
        label: 'Vendor',
        dataField: 'Vendor',
        inputFieldType: 'select',
        inputSource: vendorList,
        inputID: "Name", 
        inputValue: "Value",
        tab: 'BASIC INFO',
        tablLabel: 'BASIC INFO'
      },
      {
        label: 'Date Signed',
        dataField: 'Date',
        inputFieldType: 'datepicker',
        tab: 'BASIC INFO',
        tabLabel: 'BASIC INFO'
      },
      {
        label: 'Term',
        dataField: 'Term',
        inputFieldType: 'select',
        inputSource: [
          {
            Name: 'Month to Month',
            Value: 'Month to Month'
          },
          {
            Name: '12',
            Value: '12'
          },
          {
            Name: '24',
            Value: '24'
          },
          {
            Name: '36',
            Value: '36'
          },
          {
            Name: '48',
            Value: '48'
          },
          {
            Name: '60',
            Value: '60'
          }
        ],
        inputID: "Name", 
        inputValue: "Value",
        tab: 'BASIC INFO',
        tabLabel: 'BASIC INFO'
      },
      {
        label: 'File',
        dataField: 'FileURL',
        inputFieldType: 'file-field',
        tab: 'BASIC INFO',
        tabLabel: 'BASIC INFO'
      }
    ]
  const userDetailFields = [
    {
      label: 'Email Address',
      dataField: 'Email',
      inputFieldType: 'text',
      tab: "BASIC INFO",
      tabLabel: "BASIC INFO"
    },
    {
      label: 'First Name',
      dataField: 'FirstName',
      inputFieldType: 'text',
      tab: "BASIC INFO",
      tabLabel: "BASIC INFO"
    },
    {
      label: 'Last Name',
      dataField: 'LastName',
      inputFieldType: 'text',
      tab: "BASIC INFO",
      tabLabel: "BASIC INFO"
    },
    {
      label: 'Type',
      dataField: "Type",
      inputFieldType: 'select',
      inputSource: [
        {
          Name: 'User',
          Value: 'User'
        },
        {
          Name: 'Agent',
          Value: 'Agent'
        }
      ],
      inputID: "Name",
      inputValue: "Value",
      tab: "BASIC INFO",
      tabLabel: "BASIC INFO"
    },
    
  ]

  const contactDetailFields = [
    {
      label: 'First Name',
      dataField: 'FirstName',
      inputFieldType: 'text',
      tab: 'BASIC INFO',
      tabLabel: 'BASIC INFO'
    },
    {
      label: 'Last Name',
      dataField: 'LastName',
      inputFieldType: 'text',
      tab: 'BASIC INFO',
      tabLabel: 'BASIC INFO'
    },
    {
      label: 'Company Name',
      dataField: 'CompanyName',
      inputFieldType: 'text',
      tab: 'BASIC INFO',
      tabLabel: 'BASIC INFO'
    },
    {
      label: 'Title/Position',
      dataField: 'Title',
      inputFieldType: 'text',
      tab: 'BASIC INFO',
      tabLabel: 'BASIC INFO'
    },
    {
      label: 'Phone',
      dataField: 'Phone',
      inputFieldType: 'text',
      tab: 'BASIC INFO',
      tabLabel: 'BASIC INFO'
    },
    {
      label: 'Email',
      dataField: 'Email',
      inputFieldType: 'text',
      tab: 'BASIC INFO',
      tabLabel: 'BASIC INFO'
    },
  ]


export {
    serviceGridColumns, 
    serviceMobileGridColumns,
    serviceGroupByFields,
    locationGridColumns,
    locationMobileGridColumns,
    locationGroupByFields,
    locationDetailFields,
    ticketGridColumns, 
    ticketGroupByFields,
    ticketMobileGridColumns,
    orderGridColumns, 
    orderMobileGridColumns,
    accountGridColumns, 
    accountGroupByFields,
    accountMobileGridColumns,
    userGridColumns,
    userDetailFields, 
    contractGridColumns,
    contractMobileGridColumns,
    contractDetailFields,
    contractGroupByFields,
    serviceDetailFields,
    ticketDetailFields,
    accountDetailFields,
    orderDetailFields,
    billsDetailFields,
    contactDetailFields
}
