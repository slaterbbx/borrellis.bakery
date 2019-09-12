import React from "react"
import styled from "styled-components"

const TableWrapper = styled.div`
  display: table;
  width: 100%;
  height: 100%;

  .sudoTableCell {
    vertical-align: middle;
    display: table-cell;

    .cellCenter {
      text-align: center;
    }
  }
`

const SudoTable = ({ children }) => (
  <TableWrapper>
    <div className="sudoTableCell">{children}</div>
  </TableWrapper>
)

export default SudoTable
