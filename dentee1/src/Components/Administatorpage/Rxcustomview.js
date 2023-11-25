// import React from 'react'
// import './Rxcustomview.css'
// import { AiOutlinePlus } from "react-icons/ai";
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';


// const Rxcustomview = () => {
//   return (
//     <div className='rx-maincont'>
//         <div className='rx-head'>
//             <div className='rx-text'>Administrator / Manage RX<br/>Template </div>
//             <div className='rx-box'>
//                 <div className='rx-box2'>
//                     <div className='rx-text2'>Medication</div>
//                     <input type='text' placeholder='Medicine Template Name' className='rx-input-1'></input>
//                     <div className='rx-select'>
//                         <select className='rx-select-1'>
//                             <option value='Select Medicine'>Select Medicine...</option>
//                             <option value='Stolin Gum Astringent'>Stolin Gum Astringent</option>
//                             <option value='Tab.Neurobion'>Tab.Neurobion</option>
//                             <option value='Cap.Mox'>Cap.Mox</option>
//                             <option value='Emoform Thoothpaste'>Emoform Thoothpaste</option>
//                             <option value='Clohex Mouthwash'>Clohex Mouthwash</option>
//                             <option value='Cap.Spasmo-Proxyvon'>Cap.Spasmo-Proxyvon</option>
//                             <option value='Tab.Diclomol'>Tab.Diclomol</option>
//                             <option value='Syr.Mox'>Syr.Mox</option>
//                             <option value='Otrivin Nasal Drops'>Otrivin Nasal Drops</option>
//                             <option value='Gumex'>Gumex</option>
//                             <option value='Sensodent KF Toothpaste'>Sensodent KF Toothpaste</option>
//                             <option value='Dologel'>Dologel</option>
//                             <option value='Anabel'>Anabel</option>
//                             <option value='Tab.Ciplox'>Tab.Ciplox</option>
//                             <option value='Tab.Brufen'>Tab.Brufen</option>
//                             <option value='Tab.Pyrigesic'>Tab.Pyrigesic</option>
//                             <option value='Tab.Voveran'>Tab.Voveran</option>
//                             <option value='Tab.Doxy-1'>Tab.Doxy-1</option>
//                             <option value='G-32 Gum Paint'>G-32 Gum Paint</option>
//                             <option value='Paracetamol'>Paracetamol</option>
//                             <option value='Tab.E-Mycin'>Tab.E-Mycin</option>
//                             <option value='Cap.Proxyvon'>Cap.Proxyvon</option>
//                             <option value='Paracetamol'>Paracetamol</option>
//                             <option value='Orex-Lo'>Orex-Lo</option>
//                             <option value='Tab.Dedan'>Tab.Dedan</option>
//                             <option value='Cap.Wymox'>Cap.Wymox</option>
//                             <option value='Tab.Crocin'>Tab.Crocin</option>
//                             <option value='Tab.Sumo'>Tab.Sumo</option>
//                             <option value='Karvol inhalations'>Karvol inhalations</option>
//                             <option value='Cream Clobetesol'>Cream Clobetesol</option>
//                             <option value='Tab.Paracetamol'>Tab.Paracetamol</option>
//                             <option value='Syr.Ibugesic'>Syr.Ibugesic</option>
//                             <option value='Tab.Metrogyl'>Tab.Metrogyl</option>
//                             <option value='Tab.Neurobion Forte'>Tab.Neurobion Forte</option>
//                         </select>
//                         <select className='rx-select-1'>
//                         <option value='Select Dosage'>Select Dosage...</option>
//                         <option value='100mg'>100mg</option>
//                         <option value='1ml'>1ml</option>
//                         <option value='200mg'>200mg</option>
//                         <option value='2ml'>2ml</option>
//                         <option value='500mg'>500mg</option>
//                         <option value='5ml'>5ml</option>
//                         </select>
//                         <select className='rx-select-1'>
//                             <option value='Select Frequency'>Select Frequency...</option>   
//                             <option value='0-0-1'>0-0-1</option>
//                             <option value='0-1-0'>0-1-0</option>
//                             <option value='0-1-1'>0-1-1</option>
//                             <option value='1-0-1'>1-0-1</option>
//                             <option value='1-1-0'>1-1-0</option>
//                             <option value='1-1-1'>1-1-1</option>
//                             <option value='1-0-0'>1-0-0</option>
//                             <option value='SOS'>SOS</option>
//                         </select>
//                         <select className='rx-select-1'>
//                         <option value='Select Duration'>Select Duration...</option>
//                         <option value='1 day'>1 day</option>
//                         <option value='2 days'>2 days</option>
//                         <option value='3 days'>3 days</option>
//                         <option value='4 days'>4 days</option>
//                         <option value='5 days'>5 days</option>
//                         <option value='6 days'>6 days</option>
//                         <option value='1 week'>1 week</option>
//                         </select>
//                         <select className='rx-select-1'>
//                         <option value='Note'>Note...</option>
//                         <option value='After Meal'>After Meal</option>
//                         <option value='Before Meal'>Before Meal</option>
//                         </select>
//                         <button className='rx-buttonp'><AiOutlinePlus className='rx-iconp'/></button>
//                     </div>
//                     <hr className='rx-hr'></hr>
//                     <table className='rx-main-table'>
//                         <thead className='rx-table'>
//                             <tr>
//                                 <th>Medicine</th>
//                                 <th>Dosage</th>
//                                 <th>Frequency</th>
//                                 <th>Duration</th>
//                                 <th>Note</th>
//                             </tr>
//                         </thead>
//                         <tbody className='rx-table-body'>
//                             <tr>
//                                 <td>
//                                     <input type='text' placeholder='Tab.Neuroblon' className='rx-input-3'></input>    
//                                 </td>
//                                 <td>
//                                 <input type='text' placeholder='200mg' className='rx-input-3'></input> 
//                                 </td>
//                                 <td>
//                                 <input type='text' placeholder='1-0-1' className='rx-input-3'></input> 
//                                 </td>
//                                 <td>
//                                 <input type='text' placeholder='3days' className='rx-input-3'></input> 
//                                 </td>
//                                 <td>
//                                 <input type='text' placeholder='After Meal' className='rx-input-3'></input> 
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     <div className='rx-text3'>Prescription Note</div>
//                     <input type='text' placeholder='Note' className='rx-input-2'></input>
//                     <div className='rx-sav-can'>
//                         <div className='rx-save'>Save</div>
//                         <div className='rx-cancel'>Cancel</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Rxcustomview;