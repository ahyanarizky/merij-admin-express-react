import React, { Component } from 'react'
import { Link } from 'react-router'
import Breadcrumb from '../../../components/breadcrumb'
import DataTable from '../../../components/datatable'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Breadcrumb />
        <DataTable />
      </div>
    )
  }
}
