import React, { useState, useEffect } from 'react'
import Core from '../core/Core';
import pastOrderService from '../../services/pastOrder.service';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import './MyTags.css';

export const MyTags = (props) => {
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
          <div className='key'>F1: </div><div className='value'>{tag.f1}</div>
        </div>
        <div className="holder">
          <div className='key'>F2: </div><div className='value'>{tag.f2}</div>
        </div>
        <div className="holder">
          <div className='key'>F3: </div><div className='value'>{tag.f3}</div>
        </div>
        <div className="holder">
          <div className='key'>Strand: </div><div className='value'>{tag.strand}</div>
        </div>
      </div>
    </>
  )
}

export default MyTags;