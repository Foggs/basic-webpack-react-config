import React from 'react';
import { render } from 'react-dom';

import _ from 'lodash';
import "../main.css";



const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);

export default HelloWorld;

render(<HelloWorld />, document.getElementById('root'));


