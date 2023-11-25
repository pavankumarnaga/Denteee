import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './PrintSetting.css';
import { HiPrinter } from 'react-icons/hi';
import { FaRegNewspaper } from 'react-icons/fa';
import { FaFont } from 'react-icons/fa';
import { BiSolidArrowToTop } from 'react-icons/bi';
import { BiSolidArrowToBottom } from 'react-icons/bi';
import { BiSolidLeftArrowAlt } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';



function Cell({ header }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [paperSize, setPaperSize] = useState('');
  const [orientation, setOrientation] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [marginTop, setMarginTop] = useState('');
  const [marginBottom, setMarginBottom] = useState('');
  const [marginLeft, setMarginLeft] = useState('');
  const [marginRight, setMarginRight] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePaperSizeChange = (event) => {
    setPaperSize(event.target.value);
  };

  const handleOrientationChange = (event) => {
    setOrientation(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleMarginTopChange = (event) => {
    setMarginTop(event.target.value);
  };

  const handleMarginBottomChange = (event) => {
    setMarginBottom(event.target.value);
  };

  const handleMarginLeftChange = (event) => {
    setMarginLeft(event.target.value);
  };

  const handleMarginRightChange = (event) => {
    setMarginRight(event.target.value);
  };

  const handleShowPreview = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderMedicineRow = (srNo, medicineName, dosage, duration, frequency) => (
    <>
       
    <div className='maincont5666'>
      <tr className='va1235-tr'>
      <td className='td-5554'>{srNo}</td>
        <td className='td-5554'>{medicineName}</td>
        <td className='td-5554'>{dosage}</td>
        <td className='td-5554'>{duration}</td>
        <td className='td-5554'>{frequency}</td>
      </tr>
      <tr className="note-row1235">
        <td></td>
        <td className='td-5554'>Note: after the meal </td>
        
        
        
      </tr>
     
     
    
      </div>
      </>
  );

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className='maincont56'>
      <div className="header-buttons-444">
        <button className="button-type-10">Save All</button>
        <button className="button-type-20">Save</button>
        <button className="button-type-30" onClick={handleShowPreview}>
          Show Preview
        </button>
      </div>
      <div className="cell-444">
        <div className="cell-header-444">
          <th>
            <HiPrinter /> Print documents
          </th>
        </div>
        <div className="cell-body-444">
          <table>
            <tbody>
              <tr className='trtrtr'>
                <td className="td-class67">
                  <select className='select-444' value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">Prescription</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          {/* {selectedOption && (
            <div>
              You selected: <strong>{selectedOption}</strong>
            </div>
          )} */}
        </div>
      </div>

      <div className="cell-444">
        <div className="cell-header-444">
          <th>
            <HiPrinter /> setup
          </th>
        </div>
        <div className="cell-body-444">
          <table>
            <thead>
              <tr>
                <th>
                  <label className="label-range78">
                    <FaRegNewspaper className="icon-size-90" />Paper size:
                  </label>
                  <select className='select-444' value={paperSize} onChange={handlePaperSizeChange}>
                    <option value="">Select paper size</option>
                    <option value="A4">A4</option>
                    <option value="Letter">Letter</option>
                    <option value="Legal">Legal</option>
                  </select>
                </th>
                <th>
                  <label className="label-range78">
                    <FaRegNewspaper className="iconic-size-90" />Orientation:
                  </label>
                  <select className='select-444' value={orientation} onChange={handleOrientationChange}>
                    <option value="">Select orientation</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Landscape">Landscape</option>
                  </select>
                </th>
                <th>
                  <label className="label-range78">
                    <FaFont className="ic-size-90" />Font size:
                  </label>
                  <select className='select-444' value={fontSize} onChange={handleFontSizeChange}>
                    <option value="">Select font size</option>
                    <option value="12pt">12pt</option>
                    <option value="14pt">14pt</option>
                    <option value="16pt">16pt</option>
                  </select>
                </th>
              </tr>
            </thead>
          </table>
          {/* {(paperSize || orientation || fontSize) && (
            <div>
              You selected:
              <strong> Paper Size: {paperSize}</strong>
              <strong> Orientation: {orientation}</strong>
              <strong> Font Size: {fontSize}</strong>
            </div>
          )} */}
        </div>
      </div>

      <div className="cell-444">
        <div className="cell-header-444">
          <th>
            <HiPrinter /> Margin
          </th>
        </div>
        <div className="cell-body-444">
          <table>
            <tbody>
              <tr className="margin-row345">
                <td className="td-class67">
                  <label className="label-range78">
                    <BiSolidArrowToTop /> top:
                  </label>
                  <select className='select-444' value={marginTop} onChange={handleMarginTopChange}>
                    <option value="">Select margin top</option>
                    <option value="1">1 inch</option>
                    <option value="2">2 inches</option>
                    <option value="3">3 inches</option>
                  </select>
        
                </td>
                <td className="td-class67">
                  <label className="label-range78">
                    <BiSolidArrowToBottom /> bottom:
                  </label>
                  <select className='select-444'
                    value={marginBottom}
                    onChange={handleMarginBottomChange}
                  >
                    <option value="">Select margin bottom</option>
                    <option value="1">1 inch</option>
                    <option value="2">2 inches</option>
                    <option value="3">3 inches</option>
                  </select>
                </td>
                <td className="td-class67">
                  <label className="label-range78">
                    <BiSolidLeftArrowAlt /> left:
                  </label>
                  <select className='select-444' value={marginLeft} onChange={handleMarginLeftChange}>
                    <option value="">Select margin left</option>
                    <option value="1">1 inch</option>
                    <option value="2">2 inches</option>
                    <option value="3">3 inches</option>
                  </select>
                </td>
                <td className="td-class67">
                  <label className="label-range78">
                    <BsArrowRightShort /> right:
                  </label>
                  <select className='select-444'
                    value={marginRight}
                    onChange={handleMarginRightChange}
                  >
                    <option value="">Select margin right</option>
                    <option value="1">1 inch</option>
                    <option value="2">2 inches</option>
                    <option value="3">3 inches</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          {/* {(marginTop || marginBottom || marginLeft || marginRight) && (
            <div>
              You selected:
              <strong> Margin Top: {marginTop}</strong>
              <strong> Margin Bottom: {marginBottom}</strong>
              <strong> Margin Left: {marginLeft}</strong>
              <strong> Margin Right: {marginRight}</strong>
            </div>
          )} */}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-444">
          <div className="modal-content-444">
            <span className="close-444" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Preview</h2>
            {/* Add your table and static data here */}
    
            <table className="preview-table">
              <thead>
                <tr className='va1235-tr'>
                  <th className='th-4445'>Sr No</th>
                  <th className='th-4445'>Medicine Name</th>
                  <th className='th-4445'>Dosage</th>
                  <th className='th-4445'>Duration</th>
                  <th className='th-4445'>Frequency</th>
                </tr>
              </thead>
              <tbody>
              {renderMedicineRow(1, 'Medicine 1', '10mg', '7 days', 'Once daily')}
              {renderMedicineRow(2, 'Medicine 2', '40mg', '5 days', 'twice daily')}
              {renderMedicineRow(3, 'Medicine 3', '30mg', '3 days', 'thrice daily')}
              {renderMedicineRow(4, 'Medicine 4', '20mg', '6 days', 'Once daily')}
                {/* Add more rows here */}
                
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    </>
  );
}






function HeaderFooterLayout() {
  const [customHeader, setCustomHeader] = useState('');
  const [includeheader, setIncludeHeader] = useState(false);
  const [letterhead, setLetterhead] = useState(false);
  const [customizeheader, setCustomizeHeader] = useState(false);
  const [showEmpanelNumber, setShowEmpanelNumber] = useState(false);
  const [printPrescription, setPrintPrescription] = useState(false);
  const [printheading, setPrintHeading] = useState(false);
  const [printRx, setPrintRx] = useState(false);
  const [printTabularBackground, setPrintTabularBackground] = useState(false);
  const [printLogo, setPrintLogo] = useState(true);
  const [printDoctorName, setPrintDoctorName] = useState(true);
  const [printPatientDetails, setPrintPatientDetails] = useState(true);
  const [isHeaderActive, setIsHeaderActive] = useState(true);
  const [isFooterActive, setIsFooterActive] = useState(false);

  const handleHeaderClick = () => {
    setIsHeaderActive(true);
    setIsFooterActive(false);
  };

  const handleFooterClick = () => {
    setIsHeaderActive(false);
    setIsFooterActive(true);
  };

  return (
    <div>
<div className="cell-444">
        <div className="cell-header-444">
          <th>
            Header/Footer
          </th>
      
        </div>





      <div className="sidebyside-50">
        <div className="sidebyside1-links11-50">
          <button
            className={`button-header-60 ${isHeaderActive ? 'active' : ''}`}
            onClick={handleHeaderClick}
          >
            Header
          </button>
          <button
            className={`button-header-60 ${isFooterActive ? 'active' : ''}`}
            onClick={handleFooterClick}
          >
            Footer
          </button>
        </div>
      </div>

      {isHeaderActive && (
        <div className="header-content-456">
          <h2>{isHeaderActive ? 'Customize Header' : 'Customize Footer'}</h2>
         
        <div className="radio-buttons-500">
          <label className='label-range78'>
            <input
              type="radio"
              name="headerOptions"
              checked={includeheader}
              onChange={() => {
                setLetterhead(false);
                setIncludeHeader(true);
                setCustomizeHeader(false);
              }}
            />
            Include header
          </label>
          <label className='label-range78'>
            <input
              type="radio"
              name="headerOptions"
              checked={!includeheader && !letterhead && !customizeheader}
              onChange={() => {
                setIncludeHeader(false);
                setLetterhead(false);
                setCustomizeHeader(false);
              }}
            />
            Print it on my letterhead (Do not include header)
          </label>
          <label className='label-range78'>
            <input
              type="radio"
              name="headerOptions"
              checked={letterhead}
              onChange={() => {
                setLetterhead(true);
                setIncludeHeader(false);
                setCustomizeHeader(false);
              }}
            />
            Letterhead
          </label>
          <label className='label-range78'>
            <input
              type="radio"
              name="headerOptions"
              checked={customizeheader}
              onChange={() => {
                setCustomizeHeader(true);
                setIncludeHeader(false);
                setLetterhead(false);
              }}
            />
            Option to customize header (Create your own template)
          </label>
        </div>
          <hr />
          <div className="checkboxes-500">
          <label className='label-range78'>
            <input
              type="checkbox"
              checked={showEmpanelNumber}
              onChange={() => setShowEmpanelNumber(!showEmpanelNumber)}
            />
            Show Empanel-Number
          </label>
          <label className='label-range78'>
            <input
              type="checkbox"
              checked={printPrescription}
              onChange={() => setPrintPrescription(!printPrescription)}
            />
            Print Prescription Instruction
          </label>
          <label className='label-range78'>
            <input
              type="checkbox"
              checked={printheading}
              onChange={() => setPrintHeading(!printheading)}
            />
            Print heading (Like: Prescription, Bill, Receipt, etc.)
          </label>
          <label className='label-range78'>
            <input
              type="checkbox"
              checked={printRx}
              onChange={() => setPrintRx(!printRx)}
            />
            Rx
          </label>
          <label className='label-range78'>
            <input
              type="checkbox"
              checked={printTabularBackground}
              onChange={() => setPrintTabularBackground(!printTabularBackground)}
            />
            TabularBackground
          </label>
        </div>
          <hr />
          <div className="title-90">
            <input
              className="header-title-554"
              type="text"
              placeholder="Header Title"
              value={customHeader}
              onChange={(e) => setCustomHeader(e.target.value)}
            />
            <textarea
              className="header-text-558"
              placeholder="Header Text"
              value={customHeader}
              onChange={(e) => setCustomHeader(e.target.value)}
            />
          </div>

         
        <div className="radio-buttons-500">
        <label className="label-range78">
        Print Logo:
        <input
          type="radio"
          checked={printLogo}
          onChange={() => {
            setPrintLogo(true);
            setPrintDoctorName(false);
            setPrintPatientDetails(false);
          }}
        />
        Yes
      </label>
      <label className="label-range78">
        <input
          type="radio"
          checked={!printLogo}
          onChange={() => setPrintLogo(false)}
        />
        No
      </label>
      <label className="label-range78">
        Print Doctor Name:
        <input
          type="radio"
          checked={printDoctorName}
          onChange={() => {
            setPrintLogo(false);
            setPrintDoctorName(true);
            setPrintPatientDetails(false);
          }}
        />
        Yes
      </label>
      <label className="label-range78">
        <input
          type="radio"
          checked={!printDoctorName}
          onChange={() => setPrintDoctorName(false)}
        />
        No
      </label>
      <label className="label-range78">
        Print Patient Details:
        <input
          type="radio"
          checked={printPatientDetails}
          onChange={() => {
            setPrintLogo(false);
            setPrintDoctorName(false);
            setPrintPatientDetails(true);
          }}
        />
        Yes
      </label>
      <label className="label-range78">
        <input
          type="radio"
          checked={!printPatientDetails}
          onChange={() => setPrintPatientDetails(false)}
        />
        No
      </label>
        </div>

          {letterhead ? (
            <div className="container-90">
              <div className="dotted-container-99">
                {/* Content goes here */}
              </div>
              <div className="bun-change789">
                <button className="button-type-11">Add Logo</button>
                <button className="button-type-22">Remove</button>
              </div>
            </div>
          ) : null}

          {includeheader ? (
            <div className="container-90">
              <div className="dotted-container-99">
                {/* Content goes here */}
              </div>
              <div className="bun-change789">
                <button className="button-type-11">Add Logo</button>
                <button className="button-type-22">Remove</button>
              </div>
            </div>
          ) : null}

          {customizeheader ? (
            <div className="Remarks-page-tnx-222">
              <textarea className="rectangle-box-222" type="text" />
            </div>
          ) : null}
                      <br></br>

        </div>
      )}

      {isFooterActive && (
        <div className="footer-content-56">
          <div className="footer-heading-59">Footer</div>
          <div className="Remarks-page-tnx-222">
            <textarea className="rectangle-box-222" type="text" />
          </div>
          <div className="footer-options-22">
            <div className="radio-buttons-75">
              <label>Print Footer</label>
              <label>
                <input type="radio" name="printOption" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="printOption" value="no" /> No
              </label>
            </div>
            <br></br>
            <hr />
            <div className="digital-signature-65">
              <label>
                <input type="checkbox" /> Print Authorized Digital Signature
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

function PrintSetting() {
  return (
    <div>
      <Cell header="Header" />
      <HeaderFooterLayout />
    </div>
  );
}

export default PrintSetting;