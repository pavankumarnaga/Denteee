import React from 'react';

class Clinicdetails extends React.Component {
    
    handleButtonClick = () => {
      this.fileInput.click();
    };
    
    handleFileSelected = (event) => {
      const files = event.target.files;
      console.log(files);
    };

    render() {
  return (
    <div>
        <input
         type="file"
         style={{ display: 'none' }}
         ref={(fileInput) => (this.fileInput = fileInput)}
         onChange={this.handleFileSelected}
         />
        <button className='Clinic-Bot' onClick={this.handleButtonClick}>ADD</button>
    </div>
  );
    };
};
export default Clinicdetails;