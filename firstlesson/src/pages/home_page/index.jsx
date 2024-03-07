import React, { useState } from 'react';
import './index.css'

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToTable = () => {
    if (inputValue.trim() !== '') {
      setTableData([...tableData, inputValue]);
      setInputValue(''); 
    } else {
      alert('Please enter some data.');
    }
  };

  return (
    <div className='book-info'>
      <div className='input-btn'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
      <button onClick={handleAddToTable}>Add to Table</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Book's name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
