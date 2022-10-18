import React from 'react'
import Core from '../core/Core';
import Dashboard from '../dashboard/Dashboard';

export const Test = (props) => {
  return (
    <>
      <Core button={props.button} text={props.text} />
      <Dashboard />
    </>
  )
}

export default Test;
