import React, { useState, useEffect } from 'react'
import Core from '../core/Core';
import pastOrderService from '../../services/pastOrder.service';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Button } from '@mui/material';
import './MyTags.css';
import { saveAs } from 'file-saver';

export const Bits = (props) => {
  const { id } = useParams();
  const [tag, setTag] = useState('');
  useEffect(() => {
    downloadTagData(id);
  }, [])

  const downloadTagData = (id) => {
    pastOrderService.getTagById(id).then((response) => {
      const tag = response['Tag'];
      tag.orderNumber = `${tag.secret ? 'TAG' : 'S-TAG'}${tag.id.toString().padStart(6, '0')}`;
      setTag(tag)
    });
  };

  const handleDownload = (event, tag) => {
    pastOrderService.getTagById(tag.id).then((response) => {
      tag.orderNumber = `${tag.secret ? 'TAG' : 'S-TAG'}${tag.id.toString().padStart(6, '0')}`;
      const fileName = `${tag.orderNumber}.json`;
      const fileToSave = new Blob([JSON.stringify(response, undefined, 2)], {
        type: 'application/json'
      });
      saveAs(fileToSave, fileName);
    });
  };

  return (
    <>
      <Core button={props.button} text={`Tag ID: ${id}`} />
      <div>
        <div className='holder'>
          <div className='key'>Order Number: </div><div className='value'>{tag.orderNumber}</div>
        </div>
        <div className="holder">
          <div className='key'>Date: </div><div className='value'>{moment(tag.created_at).format("DD/MM/YYYY")}</div>
        </div>
        <div className="holder">
          <div className='key'>Bits: </div><div className='value'>{tag.bits}</div>
        </div>
        <div className="holder">
          <div className='key'>Sub len: </div><div className='value'>{tag.sub_len}</div>
        </div>
        <div className="holder">
          <div className='key'>Number of sub: </div><div className='value'>{tag.no_sub}</div>
        </div>
        <div className='holder'>
          <div className='key'> { } </div>
          <div className='value'>
            <Button
              variant='string'
              color='inherit'
              style={{ border: '1px solid' }}
              onClick={(event) => {
                handleDownload(event, tag);
              }}
            >
              Download JSON
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bits;