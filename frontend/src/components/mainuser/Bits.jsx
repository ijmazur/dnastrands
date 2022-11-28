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
  const [bit, setBit] = useState('');
  const [wholeThing, setWholeThing] = useState([]);
  useEffect(() => {
    downloadBitData(id);
  }, [])

  const downloadBitData = (id) => {
    pastOrderService.getBitById(id).then((response) => {
      const bit = response['Bit'];
      bit.orderNumber = `${bit.secret ? 'BIT' : 'S-TAG'}${bit.id.toString().padStart(6, '0')}`;
      setBit(bit)
      setWholeThing(JSON.parse(bit.whole_bit))
      setTimeout(() => console.log('wasd', JSON.parse(bit.whole_bit)), 1000)
    });
  };

  const handleDownload = (event, bit) => {
    pastOrderService.getBitById(bit.id).then((response) => {
      bit.orderNumber = `${bit.secret ? 'BIT' : 'S-TAG'}${bit.id.toString().padStart(6, '0')}`;
      const fileName = `${bit.orderNumber}.json`;
      const fileToSave = new Blob([JSON.stringify(response, undefined, 2)], {
        type: 'application/json'
      });
      saveAs(fileToSave, fileName);
    });
  };

  return (
    <>
      <Core button={props.button} text={`Bit ID: ${id}`} />
      <div>
        <div className='holder'>
          <div className='key'>Order Number: </div><div className='value'>{bit.orderNumber}</div>
        </div>
        <div className="holder">
          <div className='key'>Date: </div><div className='value'>{moment(bit.created_at).format("DD/MM/YYYY")}</div>
        </div>
        <div className="holder">
          <div className='key'>Bits: </div><div className='value'>{bit.bits}</div>
        </div>
        <div className="holder">
          <div className='key'>Sub len: </div><div className='value'>{bit.sub_len}</div>
        </div>
        <div className="holder">
          <div className='key'>Number of sub: </div><div className='value'>{bit.no_sub}</div>
        </div>
        { wholeThing.map((thing, i) => (
        <div className="holder" key={i}>
          <div className='key'>Sub: </div><div className='value'>{thing.join(", ")}</div>
        </div>)) }
        <div className='holder'>
          <div className='key'> { } </div>
          <div className='value'>
            <Button
              variant='string'
              color='inherit'
              style={{ border: '1px solid' }}
              onClick={(event) => {
                handleDownload(event, bit);
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
