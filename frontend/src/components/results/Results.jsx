import React from 'react'
import Core from '../core/Core';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import GetAppIcon from '@mui/icons-material/GetApp';


export const Results = (props) => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./testingdownload/download.txt";
    link.click();
  };

  return (
    <>
      <Core button={props.button} text={"Results"} />
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}>
        <Button
          variant="contained"
          size="large"
          onClick={onDownload}
          startIcon={<GetAppIcon />}
        >
          Download Sample Method File
        </Button>
      </Grid>
    </>
  )
}

export default Results;
