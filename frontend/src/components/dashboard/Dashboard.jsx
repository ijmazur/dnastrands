import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Core from '../core/Core';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import { styled, useTheme, alpha } from '@mui/material/styles';

export default function Dashboard() {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    return (
        <>
            {/* <ImageList sx={{ width: 'auto', height: 'auto'}} cols={3} rowHeight='auto'>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`} 
                                >
                                    <BiotechSharpIcon fontSize='medium' />
                                </IconButton>
                            }
                            sx={{textAlign: 'center'}}
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}
            <Box
                sx={{
                    display: 'flex', justifyContent: 'space-around', p: 1, m: 1,
                    borderRadius: 1, width: '100%', border: '10px solid red',
                    alignItems: 'center', flexWrap: 'wrap', backgroundSize: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex', justifyContent: 'space-around', border: '10px solid yellow',
                        m: 1,
                        alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                        width: '500px', height: '700px',
                    }}>
                      <img src='https://biocryptology.com/wp-content/uploads/2019/11/Untitled-1_0001_AdobeStock_275486156.jpg'
                        alt='Generate1'  maxHeight={'auto'} maxWidth={'auto'}/>
                </Box>
                <Box 
                  sx={{
                    display: 'flex', justifyContent: 'space-around', border: '10px solid green',
                    alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                    width: '500px', height: '700px',
                    }}>
                      <img src='https://www.hermiston.or.us/sites/default/files/imageattachments/police/page/9351/fingerprint.jpg'
                        alt='Generate2' maxHeight={'auto'} maxWidth={'700px'}/>
                </Box>   
                <Box
                  sx={{
                    display: 'flex', justifyContent: 'space-around', border: '10px solid purple',
                    alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                    width: '500px', height: '700px',
                  }}>
                      <img src='https://us.123rf.com/450wm/stunningart/stunningart1804/stunningart180400006/100107681-surreal-image-as-a-businessman-with-invisible-face-stand-with-crossed-hands-and-question-mark-insted.jpg?ver=6'
                        alt='Profile' maxHeight={'auto'} maxWidth={'auto'} />
                </Box>
            </Box>
        </>
    );
}

const itemData = [
    {
        img: 'https://biocryptology.com/wp-content/uploads/2019/11/Untitled-1_0001_AdobeStock_275486156.jpg',
        title: 'Generate #1',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://www.hermiston.or.us/sites/default/files/imageattachments/police/page/9351/fingerprint.jpg',
        title: 'Generate #2',
    },
    {
        img: 'https://us.123rf.com/450wm/stunningart/stunningart1804/stunningart180400006/100107681-surreal-image-as-a-businessman-with-invisible-face-stand-with-crossed-hands-and-question-mark-insted.jpg?ver=6',
        title: 'Profile',
    }
];
