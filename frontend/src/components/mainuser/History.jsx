import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Core from '../core/Core';
import { Box, Button } from '@mui/material';
import DownloadingIcon from '@mui/icons-material/Downloading';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DataGrid } from '@mui/x-data-grid';

export const History = (props) => {

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      editable: true,
    },
    {
      field: 'orderNo',
      headerName: 'Order Number',
      width: 150,
      editable: true,
    },
    {
      field: 'url',
      headerName: 'Link',
      renderCell: (cellValues) => {
        return (
          <Button
            variant='contained'
            color='inherit'
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            <Link to={`/${cellValues.row.url}`}>Link</Link>
          </Button>
        );
      },
    },
    {
      field: 'download',
      headerName: 'Download',
      renderCell: (cellValues) => {
        return (
          <Button
            variant="string"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            <DownloadingIcon />
          </Button>
        );
      }
    },
    {
      field: 'remove',
      headerName: 'Delete',
      renderCell: (cellValues) => {
        return (
          <Button
            variant="string"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        );
      }
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const rows = [
    // { id: 1, date: '25-08-2022', orderNo: 'TAG-000001' },
    // { id: 2, date: '25-08-2022', orderNo: 'TAG-000002' },
    // { id: 3, date: '25-08-2022', orderNo: 'TAG-000003' },
    // { id: 4, date: '25-08-2022', orderNo: 'TAG-000004' },
    // { id: 5, date: '25-08-2022', orderNo: 'TAG-000005' },
    // { id: 6, date: '25-08-2022', orderNo: 'TAG-000006' },
    // { id: 7, date: '25-08-2022', orderNo: 'TAG-000007' },
    // { id: 8, date: '25-08-2022', orderNo: 'TAG-000008' },
    // { id: 9, date: '25-08-2022', orderNo: 'TAG-000009' },
    // { id: 10, date: '25-08-2022', orderNo: 'TAG-000010' },
    { id: 1, date: '25-08-2022', orderNo: 'TAG-000001', url: 'test' },
    { id: 2, date: '25-08-2022', orderNo: 'TAG-000002', url: 'test2' },
    { id: 3, date: '25-08-2022', orderNo: 'TAG-000003', url: 'test3' },
    { id: 4, date: '25-08-2022', orderNo: 'TAG-000004', url: 'test' },
    { id: 5, date: '25-08-2022', orderNo: 'TAG-000005', url: 'test' },
    { id: 6, date: '25-08-2022', orderNo: 'TAG-000006', url: 'test' },
    { id: 7, date: '25-08-2022', orderNo: 'TAG-000007', url: 'test' },
    { id: 8, date: '25-08-2022', orderNo: 'TAG-000008', url: 'test' },
    { id: 9, date: '25-08-2022', orderNo: 'TAG-000009', url: 'test' },
    { id: 10, date: '25-08-2022', orderNo: 'TAG-000010', url: 'test' },
    { id: 11, date: '25-08-2022', orderNo: 'TAG-000011', url: 'test' },
    { id: 12, date: '25-08-2022', orderNo: 'TAG-000012', url: 'test' },
    { id: 13, date: '25-08-2022', orderNo: 'TAG-000013', url: 'test' },
  ];

  return (
    <>
      <Core button={props.button} text={"Past Orders"} />
      <Box sx={{
        display: 'flex', justifyContent: 'space-around', width: '100%'
      }}>
        <Box sx={{
          display: 'flex', height: 631.5, width: 700
        }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onCellClick={handleCellClick}
            onRowClick={handleRowClick}
          />
        </Box>
      </Box>
    </>
  )
}

export default History;