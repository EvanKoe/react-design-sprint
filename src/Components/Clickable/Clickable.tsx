import React from "react";
import './Clickable.css';

interface ClickableProps {
  /*
  ** Text value of the button
  */
  value?: string;
  /*
  ** Any children will be inside the clickable frame
  */
  children?: React.ReactComponentElement<any>;
};

const Clickable = ({
  value = '',
  children = <></>
}: ClickableProps) => {
  return (
    <div className='ClickableDivStyle'>
      { value && <p>{ value }</p> }
      { children && children }
    </div>
  );

}


export default Clickable;