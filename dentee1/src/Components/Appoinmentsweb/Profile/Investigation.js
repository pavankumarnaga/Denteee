import React, { useState } from 'react';
import './Investigation.css';
import Popup from 'reactjs-popup';
import { IoSettings } from 'react-icons/io5';
import { AiOutlineStepForward, AiOutlineStepBackward } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai';

const Investigation = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const [investigationData, setInvestigationData] = useState({
    date: '',
    weight: '',
    temperature: '',
    bloodPressure: '',
    oxygenSaturation: '',
    bloodSugar: '',
  });

  const [dummydata1, setDummyData1] = useState([
    {
      date: '03-0ct-2023',
      weight: '75 kg',
      temperature: '98.6°F',
      bloodPressure: '120/80 mmHg',
      oxygenSaturation: '98%',
      bloodSugar: '120 mg/dL',
    },

    {
        date: '03-0ct-2023',
        weight: '735 kg',
        temperature: '98.6°F',
        bloodPressure: '120/80 mmHg',
        oxygenSaturation: '98%',
        bloodSugar: '120 mg/dL',
      },
      {
        date: '03-0ct-2023',
        weight: '5 kg',
        temperature: '98.6°F',
        bloodPressure: '120/80 mmHg',
        oxygenSaturation: '98%',
        bloodSugar: '120 mg/dL',
      },
      {
        date: '03-0ct-2023',
        weight: '7 kg',
        temperature: '98.6°F',
        bloodPressure: '120/80 mmHg',
        oxygenSaturation: '98%',
        bloodSugar: '120 mg/dL',
      },
      

    // Add more data objects here
  ]);

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const dummypatient1 = dummydata1.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = indexOfLastItem >= dummydata1.length;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvestigationData({ ...investigationData, [name]: value });
  };

  const handleSaveInvestigation = () => {
    const newInvestigation = { ...investigationData };
    setDummyData1([...dummydata1, newInvestigation]);
    setIsFormOpen(false);
  };

  return (
    <div className="Formsq2">
      {isFormOpen && (
        <div className="invest-main">
          <div className="invest-add">
            <Popup
              trigger={
                <button className="Invest-button">
                  Add Investigation
                </button>
              }
              position="bottom center"
              modal
              nested
            >
              <div>
                <div className="invest-popup">
                  <div className="invest-column">
                    <div className="invest-row">
                      <div className="invest-investigation">
                        Investigation
                      </div>
                      <div className="invest-icons">
                        <button className="Invest-0" onClick={closeForm}>
                          X
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="invest-box">
                      <div className="invest-row">
                        <div className="invest-date">
                          Investigation Date:
                        </div>
                        <div className="invest-place">
                          <input
                            className="invest-place"
                            type="date"
                            id="date"
                            name="date"
                            value={investigationData.date}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="insert-row">
                      <div className="insert-box1">
                        <div className="insert-attributes">
                          Investigation attributes
                        </div>
                      </div>
                      <div className="insert-box-2">
                        <form>
                          <div className="invest-row">
                            <div className="invest-column">
                              <div className="insert-name1">
                                <label for="temperature">Temperature :</label>
                                <input
                                  className="insert-name2"
                                  type="text"
                                  placeholder="Temperature"
                                  name="temperature"
                                  value={investigationData.temperature}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-blood1">
                                <label for="bloodPressure">Blood Pressure : </label>
                                <input
                                  className="insert-blood2"
                                  type="text"
                                  placeholder="Blood Pressure"
                                  name="bloodPressure"
                                  value={investigationData.bloodPressure}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-sugar1">
                                <label for="bloodSugar">Blood Sugar :</label>
                                <input
                                  className="insert-sugar2"
                                  type="text"
                                  placeholder="Blood Sugar"
                                  name="bloodSugar"
                                  value={investigationData.bloodSugar}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="insert-column">
                              <div className="insert-weight1">
                                <label for="weight">Weight :</label>
                                <input
                                  className="insert-weight2"
                                  type="text"
                                  placeholder="Weight"
                                  name="weight"
                                  value={investigationData.weight}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-oxygen1">
                                <label for="oxygenSaturation">Oxygen Saturation : </label>
                                <input
                                  className="insert-oxygen2"
                                  type="text"
                                  placeholder="Oxygen Saturation"
                                  name="oxygenSaturation"
                                  value={investigationData.oxygenSaturation}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="insert-button8">
                                <button
                                  className="insert-button9"
                                  onClick={handleSaveInvestigation}
                                >
                                  Save Investigation
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <div className="invest-table1">
            <table className="invest-table">
              <thead className="invest-thead">
                <tr className="invest-headrow">
                  <th className="invest">Date</th>
                  <th className="invest">Weight</th>
                  <th className="invest">Temperature</th>
                  <th className="invest">Blood Pressure</th>
                  <th className="invest">Oxygen Saturation</th>
                  <th className="invest">Blood Sugar</th>
                  <th className="invest">Action</th>
                </tr>
              </thead>
              <tbody className="invest-tablebody">
                {dummypatient1.map((data, index) => (
                  <tr key={index}>
                    <td className="invest">{data.date}</td>
                    <td className="invest">{data.weight}</td>
                    <td className="invest">{data.temperature}</td>
                    <td className="invest">{data.bloodPressure}</td>
                    <td className="invest">{data.oxygenSaturation}</td>
                    <td className="invest">{data.bloodSugar}</td>
                    <td>
                      <Popup
                        trigger={
                          <button className="int11">
                            <IoSettings className="quit" />
                          </button>
                        }
                        position="bottom"
                      >
                        <div>
                        <div className="invest-pop">
                          <Popup trigger={<button className='int'>Edit Investigation</button>}
                                                modal nested>
                                            <div className='profile-pop1'>
                                            <div className='invest-popup'>
                        <div className='invest-column'>
                            <div className='invest123'>
                                <div className='invest-investigation'>
                                    Investigation
                                    <button className='Invest-0' onClick={closeForm}><MdOutlineCancel className='invest-icon10'/></button>

                                </div>
                                {/* <div className='invest-icons'>
                                    <button className='Invest-0' onClick={closeForm}><MdOutlineCancel className='invest-icon10'/></button>
                                </div> */}
                            </div>
                            <hr></hr>
                            <div className='invest-box'>
                                <div className='invest-row'>
                                    <div className='invest-date'>
                                        Investigation Date : 
                                    </div>
                                    <div className='invest-place'>
                                        <input className='invest-place' type="date" id="birthday" name="birthday"></input>

                                    </div>
                                </div>
                            </div>
                            <div className='insert-row'>
                                <div className='insert-box1'>
                                    <div className='insert-attributes'>
                                        Investigation attributes
                                    </div>
                                </div>
                                <div className='insert-box-2'>
                                    <form >
                                        <div className='invest-row'>
                                            <div className='invest-column'>
                                                <div className='insert-name1'>
                                                <label for="psw">Temperature :</label>
                                                <input className='insert-name2' type="text" placeholder="Temperature" name="" required></input>

                                                </div>
                                                <div className='insert-blood1'>
                                                <label for="psw">Blood Pressure : </label>
                                                <input className='insert-blood2' type="text" placeholder="Blood Pressure" name="" required></input>

                                                </div>
                                                <div className='insert-sugar1'>
                                                <label for="psw">Blood Sugar :</label>
                                                <input className='insert-sugar2' type="text" placeholder="Blood Sugar" name="" required></input>

                                                </div>

                                            </div>
                                            <div className='insert-column'>
                                                <div className='insert-weight1'>
                                                <label for="psw">Weight :</label>
                                                <input className='insert-weight2' type="text" placeholder="Weight" name="" required></input>

                                                </div>
                                                <div className='insert-oxygen1'>
                                                <label for="psw">Oxygen Saturation : </label>
                                                <input className='insert-oxygen2' type="text" placeholder="oxygen Saturation" name="" required></input>

                                                </div>
                                                <div className='insert-button8'>
                                                <Popup trigger=
                                                    { <button className='insert-button9'>Update Investigation</button> }
                                                        position='top'>
                                                            <div>
                                                                <div className='Invest-successfully'>
                                                                <div className='personal-row'>
                                                                    <div className='personal-icon10'>
                                                                        <AiOutlineCheckCircle className='personal-icon0'/>
                                                                    </div>
                                                                    <div className='personal-success'>
                                                                        Saved Successfully
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </Popup>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                                            </div>
                                        </Popup>
                            <div className="deletes">
                            <Popup trigger={<div className='profile-check5q'> Delete Investigation</div>}
  modal nested>
    <div >
        <div className='invest-popup18'>
            <div className='invest-formsss'>
                <div className='invest-row'>
                    <div className='invest-com'>
                        Conform
                    </div>
                    <div className='invest-button41'>
                        <button className='invest-button42' onClick={closeForm}>
                            <AiOutlineClose className='invest-iconw'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className='invest-text90'>
                Are You Sure You Want to change SMS Setting<br></br>this patient ? 
            </div>
            <div className='invest-row'>
                <div className='invest-30'>
                    <button className='invest-33'>
                        Yes
                    </button>
                </div>
                <div className='invest-31'>
                    <button className='invest-33'>
                        No
                    </button>
                </div>
            </div>
        </div>
    </div>
  </Popup>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pat-footer33pat123">
              <button
                className="butpagenation1235"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
              >
                <AiOutlineStepBackward />
              </button>
              <p className="pat-bottom-num33pat123">{currentPage}</p>
              <button
                className="butpagenation1235"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage}
              >
                <AiOutlineStepForward />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investigation;
