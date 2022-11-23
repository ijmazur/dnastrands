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
  const [rowsBits, setRowsBits] = useState([]);
  const [idk, setIdk] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    allShit();
  }, [])

  console.log('rows', rows);
  console.log('rowsBits', rowsBits);
  console.log('idk', idk);

  const handleLink = (event, cellValues) => {
    navigate(`/history/${cellValues.row.id}`);
  };

  const handleDownload = (event, cellValues) => {
    pastOrderService.getTagById(cellValues.id).then((response) => {
      console.log('responseH', response);
      const fileName = `${cellValues.row.orderNumber}.json`;
      const fileToSave = new Blob([JSON.stringify(response, undefined, 2)], {
        type: 'application/json'
      });
      saveAs(fileToSave, fileName);
    });
  };

  const handleDelete = (event, cellValues) => {
    pastOrderService.deleteTagById(cellValues.id).then(() => getHistory());
  };
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  const gettingTags = () => {
    pastOrderService.getMyTags()
      .then(response => {
        const rows2 = response['Tags']
        console.log('rows2', rows2);
        rows2.forEach(row => {
          row.orderNumber = `${row.secret ? 'TAG' : 'S-TAG'}${row.id.toString().padStart(6, '0')}`
        })
        setRows(rows2)
      })
    console.log('got Tags');
  }

  const gettingBits = () => {
    pastOrderService.getMyBits()
      .then(response => {
        console.log('response in bits', response);
        const rows3 = response['Bis']
        console.log('rows3', rows3);
        rows3.forEach(row => {
          row.orderNumber = `${row.secret ? 'BIT' : 'S-BIT'}${row.id.toString().padStart(6, '0')}`
        })
        setRowsBits(rows3)
      })
    console.log('got Bits');
  }

  const allShit = () => {
    pastOrderService.getMyTags()
      .then(response => {
        const rows2 = response['Tags']
        console.log('rows2', rows2);
        rows2.forEach(row => {
          row.orderNumber = `${row.secret ? 'TAG' : 'S-TAG'}${row.id.toString().padStart(6, '0')}`
        })
        setRows(rows2)
      })

    pastOrderService.getMyBits()
      .then(response => {
        console.log('response in bits', response);
        const rows3 = response['Bis']
        console.log('rows3', rows3);
        rows3.forEach(row => {
          row.orderNumber = `${row.secret ? 'BIT' : 'S-BIT'}${row.id.toString().padStart(6, '0')}`
        })
        setRowsBits(rows3)
      })
    // const x = rows.concat(rowsBits);
    //setIdk([...rows, ...rowsBits])
    // setIdk(x)
    
    // for (let i = 0; i < (rows.id || rowsBits.id); i++) {
    //   console.log('test', (rows.id && rowsBits.id));
    //   const tmp = rows[i] + rowsBits[i];
    //   setIdk(tmp);
    //   console.log('tmp', tmp);
    // }

    // https://stackoverflow.com/questions/21776389/javascript-object-grouping
    // const groups = rows.reduce((groups, item) => {
    //   const group = (groups[item.secret] || []);
    //   group.push(item);
    //   groups[item.secret] = group;
    //   return groups;
    // }, {});
    // console.log('groups', groups);

    // const x = [...groups, ...groups2];
    // console.log('x', x);
  }

  const getHistory = () => {
    gettingTags()
    gettingBits()
    console.log('got History');
    setIdk([...rows, ...rowsBits])
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
            <Link to={`/history/${cellValues.row.id}`}>Link</Link>
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
            rows={idk}
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