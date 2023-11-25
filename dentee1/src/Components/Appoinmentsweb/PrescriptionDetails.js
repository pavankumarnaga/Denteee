import React,{useRef, useState} from 'react'
import "./PrescriptionDetails.css"
import { TiSpanner } from "react-icons/ti";
import { AiFillCaretDown,AiFillPlusSquare } from "react-icons/ai";
import { BsFillPlusCircleFill, BsFillXCircleFill,BsFillPencilFill } from "react-icons/bs";
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
// import ReactToPrint, {useReactToPrint} from 'react-to-print'
const PrescriptionDetail = () => {
  const [rowCount, setRowCount] = useState(1);
  const [formData, setFormData] = useState('');
  // ----------------------printing-------------------
  const componentref = useRef();
  // const handleprint =useReactToPrint({
  //   content:() => componentref.current,
  // });

  const handleAddClick = () => {
    setRowCount(prevCount => prevCount + 1);
  }
  const handleRemoveRow = (index) => {
    setRowCount(prevCount => Math.max(prevCount - 1, 1));
  }
  // ------------------selecting items---------------------
  const handleAddClickItems = () => {
    setRowCount2(prevCount => prevCount + 1);
  }

  const handleRemoveRowItems = (index) => {
    setRowCount(prevCount => Math.max(prevCount - 1, 1));
  }

  const handleMedicineSelect = (medicine) => {
    setSelectedMedicine(medicine);
  }
  

  const handleDosageSelect = (dosage) => {
    setSelectedDosage(dosage);
  }

  const handleFrequencySelect = (frequency) => {
    setSelectedFrequency(frequency);
  }

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  }

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  }

  const [rowCount2, setRowCount2] = useState(1);
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [selectedDosage, setSelectedDosage] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedNote, setSelectedNote] = useState('');

  return (
    <div className='Prescription-detail-body' > 
          <div className='precription-detail-head'>
             <h3 className='Prescription-deatil-heading'>Prescription Details</h3>
            <Popup trigger= { <div> <button className='prescription-head-btn'>
              <span><TiSpanner/></span>
              <span><AiFillCaretDown/></span>
             </button></div>
            } position= "bottom right">
              <div className='popuphead-dd'>
               <div className='firstline'>
<input type='checkbox'/>&nbsp;<span>Medication</span>
               </div>
               <div className='secondline'>
<input type='checkbox'/>&nbsp;<span>Investigation Att</span>
               </div>
               <div className='thirdline'>
<input type='checkbox'/>&nbsp;<span>Prescription</span>
               </div>
              </div>
            </Popup>
          </div>
         <div className='prescription-deatil-inputs' ref={componentref}>
          <input id="dateRequired" type="date" name="dateRequired" className='prescription-date-input' required/>
          <select className='prescrition-select'>
            <option>Abhishek</option>
            <option>Abhishek</option>
          </select>
          <input type='text' value="Select Prescription Template" className='prescription-text' />
         </div>
         <div className='prescription-deatil-contents' ref={componentref} >
          {[...Array(rowCount)].map((_, index) => (
            <div key={index} className='prescription-row'>

              {/* ------------start of select medicine popup------------ */}

              <Popup trigger={
                <input
                type='text'
                placeholder='Select Medicine'
                className='choose-medicine'
                value={selectedMedicine} // This sets the input value to the selectedMedicine
                onClick={() => handleMedicineSelect('')} // Pass an empty string for now
              />              
              }
              position={'bottom center'}>
                <ul className='choose-med-popup'>
  <li onClick={() => handleMedicineSelect('Tab Voveran')}>Tab Voveran</li>
  <li onClick={() => handleMedicineSelect('Syr. Mox')}>Syr. Mox</li>
  <li onClick={() => handleMedicineSelect('Otrivin Nasal Drop')}>Otrivin Nasal Drop</li>
  <li onClick={() => handleMedicineSelect('Tab E-Mycin')}>Tab E-Mycin</li>
  <li onClick={() => handleMedicineSelect('Anabel')}>Tab Anabel</li>
  <li onClick={() => handleMedicineSelect('Orex-Lo')}>Orex-Lo</li>
  <li onClick={() => handleMedicineSelect('Tab Neurobeon Forte')}>Tab Neurobeon Forten</li>
  <li onClick={() => handleMedicineSelect('Tab Dicilomom')}>Tab Dicilomom</li>
  <li onClick={() => handleMedicineSelect('Emoform Toothpaste')}>Emoform Toothpaste</li>
  <li onClick={() => handleMedicineSelect('Cap Proxyvon')}>Cap Proxyvon</li>
  <li onClick={() => handleMedicineSelect('Cap Spasmo-proxyvon')}>Cap Spasmo-proxyvon</li>
  <li onClick={() => handleMedicineSelect('Syr. Ibugesic')}>Syr. Ibugesic</li>
  <li onClick={() => handleMedicineSelect('Cap Mox')}>Tab Voveran</li>
  <li onClick={() => handleMedicineSelect('Karvol Inhalation')}>Karvol Inhalation</li>
  <li onClick={() => handleMedicineSelect('Sensodent KF Toothpaste')}>Sensodent KF Toothpaste</li>
  <li onClick={() => handleMedicineSelect('Gumex')}>Gumex</li>
  <li onClick={() => handleMedicineSelect('Tab. Sumo')}>TTab. Sumo</li>
  <li onClick={() => handleMedicineSelect('Cream Clobetesol')}>Cream Clobetesol</li>
  <li onClick={() => handleMedicineSelect('Tab. Nuerobion')}>Tab. Nuerobion</li>
  <li onClick={() => handleMedicineSelect('Paracetamol')}>Paracetamol</li>
  <li onClick={() => handleMedicineSelect('Tab. Ciplox')}>Tab. Ciplox</li>
  <li onClick={() => handleMedicineSelect('Tab Brufen')}>Tab Brufen</li>
  <li onClick={() => handleMedicineSelect('G-32 Gum Paint')}>G-32 Gum Paint</li>
  <li onClick={() => handleMedicineSelect('Tab. Pyrigesic')}>Tab. Pyrigesic</li>
  <li onClick={() => handleMedicineSelect('TTab. Crocin')}>Tab. Crocin</li>
  <li onClick={() => handleMedicineSelect('Strolin Gum Astringent')}>Strolin Gum Astringent</li>
  <li onClick={() => handleMedicineSelect('Tab. Decdan')}>Tab. Decdan</li>
  <li onClick={() => handleMedicineSelect('Tab Mytrogyl')}>Tab Mytrogyl</li>
  <li onClick={() => handleMedicineSelect('Cap Mox')}>Cap Mox</li>
  <li onClick={() => handleMedicineSelect('Clohex Mouthwash')}>Clohex Mouthwash</li>
  <li onClick={() => handleMedicineSelect('Sensodent KF Toothpaste')}>Sensodent KF Toothpaste</li>
  <li onClick={() => handleMedicineSelect('Gumex')}>Gumex</li>
  
</ul>
               </Popup>

               {/* ---------------------end of select medicine popup----------------- */}

              {/* --------------start of select dose popup-------------- */}
              <Popup trigger={<input type='text' placeholder='Select Dosage' className='choose-dosage'
              value={selectedDosage} onClick={handleDosageSelect}/>}
                  position={'bottom center'}>
              <ul className='choose-dose-popup'>
              <li onClick={() => handleDosageSelect('100 mg')}>100 mg</li>
              <li onClick={() => handleDosageSelect('1 ml')}>1 ml</li>
              <li onClick={() => handleDosageSelect('200 mg')}>200 mg</li>
              <li onClick={() => handleDosageSelect('2 ml')}>2 ml</li>
              <li onClick={() => handleDosageSelect('500 mg')}>500 mg</li>
              <li onClick={() => handleDosageSelect('5 ml')}>5 ml</li>
              </ul>
              </Popup>
          {/* -----------end of select-dose popup-------------- */}
              <Popup trigger={<input type='text' placeholder='Select Frequency' 
              className='select-duration' value={selectedFrequency} onClick={handleFrequencySelect}/>}
                 position={'bottom center'}>
                <ul className='choose-frequency-popup'>
                <li onClick={() => handleFrequencySelect('0-0-1')}>0-0-1</li>
                <li onClick={() => handleFrequencySelect('1-0-1')}>1-0-1</li>
                <li onClick={() => handleFrequencySelect('0-1-1')}>0-1-1</li>
                <li onClick={() => handleFrequencySelect('1-0-1')}>1-0-1</li>
                <li onClick={() => handleFrequencySelect('1-1-0')}>1-1-0</li>
                <li onClick={() => handleFrequencySelect('1-1-1')}>1-1-1</li>
                <li onClick={() => handleFrequencySelect('1-0-0')}>1-0-0</li>
                <li onClick={() => handleFrequencySelect('0-1-0')}>0-1-0</li>
                </ul>
              </Popup>
              
              {/* --------start of select-duration popup---------- */}
             <Popup trigger={<input type='text' placeholder='Select Duration' 
             className='select-duration' value={selectedDuration}  onClick={handleDurationSelect}/>}
               position={'bottom center'}>
              <ul className='choose-duration-popup'>
              <li onClick={() => handleDurationSelect('1 Day')}>1 Day</li>
              <li onClick={() => handleDurationSelect('2 Days')}>2 Days</li>
              <li onClick={() => handleDurationSelect('3 Days')}>3 Days</li>
              <li onClick={() => handleDurationSelect('4 Days')}>4 Days</li>
              <li onClick={() => handleDurationSelect('5 Days')}>5 Days</li>
              <li onClick={() => handleDurationSelect('6 Days')}>6 Days</li>
              <li onClick={() => handleDurationSelect('1 Week')}>1 Week</li>
              <li onClick={() => handleDurationSelect('2 Days')}>2 Weeks</li>
              <li onClick={() => handleDurationSelect('1 Month')}>1 Month</li>
              </ul>
              </Popup>

              {/* ---------------start of chose-note-popup------------- */}
              <Popup trigger={<input type='text' placeholder='Select Note' className='select-note'
              value={selectedNote} onClick={handleNoteSelect}/>}
                  position={'bottom center'}>
              <ul className='choose-note-popup'>
              <li onClick={() => handleNoteSelect('Before Meal')}>Before Meal</li>
              <li onClick={() => handleNoteSelect('After Meal')}>After Meal</li>
              </ul>
              </Popup>
              <span className='remove-row' onClick={() => handleRemoveRow(index)}>
                <span className='remove-plus-icon'><BsFillXCircleFill className='remove-icon' /></span>
              </span>
              <span>
            <BsFillPlusCircleFill onClick={handleAddClick} className='prescriptiion-plus-icon' />
          </span>
            </div>
          ))}
         
         </div>
      <Popup trigger={ <p className='prescription-medicine-notinist'>Medicine not in the list? Add more medicine</p>}
      modal nested> 
      {
        close =>(
          <div className='medicine-not-inlist-popup'>

            <div>
              <div className='add-new-treatment-popup-header'>
              <BsFillPencilFill className='pen-icon'/><h4 className='add-treatment-header'>Add New Medicine</h4>
              <button className='not-in-list-cncl-btn'  onClick={()=>close()}>X</button>
              </div>
              <div className='add-treatment-inputs-body'>
              <div className='inputs-div'>
                 <div className='add-icon'><AiFillPlusSquare /></div>
                <input  type='text' className='add-treatment-popup-inputs' placeholder='Medicine'></input>
              </div>
              <div className='inputs-div2'>
                 <div className='add-icon'><AiFillPlusSquare /></div>
                <input  type='text' className='add-treatment-popup-inputs' placeholder='Molecule'></input>
              </div>
              <select className='selectpopup-div3'>
                <option>0-0-1</option>
                <option>0-1-0</option>
                <option>0-1-1</option>
                <option>1-0-1</option>
                <option>1-1-0</option>
                <option>1-1-0</option>
                <option>1-1-1</option>
                <option>SOS</option>
              </select>
              <button className='treatment-add-btn'>Add</button>
              </div>
              <button onClick={()=>close()} className='add-treatment-ok-btn'>Ok</button>
            </div>
          </div>
          
        )
      }
      </Popup>

         <div className='prescription-btm-texts'>
         <b className='send-notification'>Send Notification Via:</b>
         <div className='btm-radio-btns'>
           <input type='radio'  className='radio-btns'/><span>Email</span>
           <input type='radio'className='radio-btns' /><span>SMS</span>
           <Popup trigger={<input type='checkbox' className='prescription-checkbox'/>}
            position={'bottom center'}>
           <input type='text' placeholder='Enter Rx-Template Name' className='checkboxbtm-popup'/>
           </Popup>
           <span>Create Template for this Prescription</span>
         </div>
         </div>
         <div className='prescription-btm-btns'>
          {/* <button onClick={handleprint} >Save and Print</button> */}
          <button>Save</button>
         <Link to='/Appointment_header'> <button>Cancel</button></Link>
         </div>
        </div>
  )
}

export default PrescriptionDetail