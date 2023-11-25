import React, { useState } from 'react';
import './AGENDA.css';
// import './Navbar.css';
import Main from './Main';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';

function Month() {
    const [selectedOption, setSelectedOption] = useState('option1'); 
const [stateVariable, setStateVariable] = useState();
const [isChecked, setIsChecked] = useState(false);

const handleClick = () => {
  console.log('Button clicked');
};

const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
  console.log('Checkbox changed');
};

const handleDropdownChange = (e) => {
  setSelectedOption(e.target.value);
  console.log('Selected option:', e.target.value);
};
const data = [
   
  { age: 'Date', name: 'Time', description: 'Apponiment' },
 
];

  return (
    <>
    <Main/>
    <div>
    <table className='Bold'>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.age}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Month;