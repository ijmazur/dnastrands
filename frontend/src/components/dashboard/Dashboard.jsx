import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';
import Core from '../core/Core';
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
            <ImageList sx={{ width: 'auto', height: 'auto'}} cols={3} rowHeight='auto'>
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
                                    <InfoIcon />
                                </IconButton>
                            }
                            sx={{textAlign: 'center'}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
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
