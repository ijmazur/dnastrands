import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Core from '../core/Core';
import { Box, Button } from '@mui/material';
import DownloadingIcon from '@mui/icons-material/Downloading';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DataGrid } from '@mui/x-data-grid';
import pastOrderService from '../../services/pastOrder.service';
import moment from 'moment';
import { saveAs } from 'file-saver';

export const History = (props) => {
  const [rows, setRows] = useState([]);
  const [idk, setIdk] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getHistory();
  }, [])


  const handleLink = (event, cellValues) => {
    navigate(cellValues.row.secret ? `/bits/${cellValues.row.id}` : `/history/${cellValues.row.id}`);
  };

  const handleDownload = (event, cellValues) => {
    if(cellValues.row.secret) {
      pastOrderService.getBitById(cellValues.id).then((response) => {
        const fileName = `${cellValues.row.orderNumber}.json`;
        const fileToSave = new Blob([JSON.stringify(response, undefined, 2)], {
          type: 'application/json'
        });
        saveAs(fileToSave, fileName);
      });
    } else {
      pastOrderService.getTagById(cellValues.id).then((response) => {
        const fileName = `${cellValues.row.orderNumber}.json`;
        const fileToSave = new Blob([JSON.stringify(response, undefined, 2)], {
          type: 'application/json'
        });
        saveAs(fileToSave, fileName);
      });
    }
  };

  const handleDelete = (event, cellValues) => {
    if(cellValues.row.secret) {
      pastOrderService.deleteBitById(cellValues.id).then(() => getHistory());
    } else {
      pastOrderService.deleteTagById(cellValues.id).then(() => getHistory());
    }
  };
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  const getHistory = () => {
    pastOrderService.getMyTags()
      .then(response => {
        const rows2 = response['Tags']
        rows2.forEach(row => {
          row.orderNumber = `${row.secret ? 'TAG' : 'S-TAG'}${row.id.toString().padStart(6, '0')}`
        })
      pastOrderService.getMyBits()
        .then(response => {
        const rows3 = response['Bis']
        rows3.forEach(row => {
          row.orderNumber = `${row.secret ? 'BIT' : 'S-BIT'}${row.id.toString().padStart(6, '0')}`
        })
        const allRows = rows2.concat(rows3);
        setRows(allRows.sort((a, b) => a.id - b.id))
      })
      })
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'created_at',
      headerName: 'Date',
      valueFormatter: params => moment(params?.value).format("DD/MM/YYYY"),
      width: 150,
    },
    {
      field: 'orderNumber',
      headerName: 'Order Number',
      width: 150,
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
              handleLink(event, cellValues);
            }}
          >
            <Link to={ cellValues.row.secret ? `/bits/${cellValues.row.id}`: `/history/${cellValues.row.id}`}>Link</Link>
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
              handleDownload(event, cellValues);
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
              handleDelete(event, cellValues);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        );
      }
    },
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
