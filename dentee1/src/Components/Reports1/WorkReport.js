
import React, { useState, useEffect } from 'react';
import './WorkReport.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { AiOutlineArrowLeft, AiOutlineFileExcel, AiOutlineClose, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { BsSearch, BsPencil } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { SiMicrosoftexcel } from 'react-icons/si';
import * as XLSX from 'xlsx';

const WorkReport = () => {
  const [workReportData, setWorkReportData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/workreport');
 
        const jsonData = await response.json();
        setWorkReportData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const totalItems = workReportData.length;
    const lastPage = Math.ceil(totalItems / itemsPerPage);

    setIsFirstPage(currentPage === 1);
    setIsLastPage(currentPage * itemsPerPage >= totalItems);

  }, [workReportData, currentPage, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currenttrain = workReportData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(workReportData.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(workReportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Labwork Data');
    XLSX.writeFile(wb, 'labwork_data.xlsx');
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='maincontwork'>
        <div className='workreportbody'>
          <div className='work-head'>
            <Link to='/Areport'>
              <div className='work-icon'>
                <AiOutlineArrowLeft />
              </div>
            </Link>
            <div className='work-acc-1'>Report / Work Report</div>
          </div>
          <div className='work-totalrow'>
            <select className='work-select'>
              <option className='oppt-totalrow'>All Doctors</option>
              <option className='oppt-totalrow'>Pavan Kumar</option>
            </select>
            <select className='work-selectdate'>
              <option className='oppt-totalrow'>Today</option>
              <option className='oppt-totalrow'>Last 7 days</option>
              <option className='oppt-totalrow'>This Week</option>
              <option className='oppt-totalrow'>This Month</option>
              <option className='oppt-totalrow'>This Year</option>
              <option className='oppt-totalrow'>Last Week</option>
              <option className='oppt-totalrow'>Last Month</option>
              <option className='oppt-totalrow'>Between</option>
            </select>
            <input type="date" className='work-date1' />
            <p className='work-to'> to</p>
            <input type="date" className='work-date2' />
            <Popup trigger={<button className='work-selectbutton'>Select Treatment</button>}
            position='bottom'>
              <div className='work-totalsearchbar'>
                <div className='work-totalselect'><BsPencil className='pencil' />Select Treatment<AiOutlineClose className='work-close' /></div>
                <hr className='work-hr' />
                <div className='work-totalsearch'>
                  <div><input type="text" placeholder='Search Treatment' className='work-search' /></div>
                  <div><button className='work-search1'><BsSearch className='work-searchicon' /></button></div>
                </div>
                <div className='work-container'>
                  <div className='work-searchoptions'>
                    <input type='checkbox' />Select All<br />
                    <input type='checkbox' />Advance Surgical procedure<br />
                    <input type='checkbox' />Braces<br />
                    <input type='checkbox' />Consultation<br />
                    <input type='checkbox' />RE-root Canal Treatment<br />
                    <input type='checkbox' />Root Canal Treatment<br />
                    <input type='checkbox' />Routine Extraction<br />
                    <input type='checkbox' />Surgical Extraction<br />
                    <input type='checkbox' />Teeth Whitening<br />
                    <input type='checkbox' />Veener<br />
                  </div>
                  <hr />
                  <button className='work-okbutton'>OK</button><br />
                </div>
              </div>
            </Popup>
            <button className='work-viewbutton'>View Report</button>
          </div>
          <div class="table-container">
            <table className='work-table'>
              <thead className='work-thead'>
                <tr className='work-headrow1'>
                  <th colSpan={6} className='good'><button className="Varun" onClick={exportToExcel}>
                <SiMicrosoftexcel style={{ color: 'green' }}/>
              </button>EXPORT TO EXCEL</th>
                </tr>

                <tr className='work-headrow'>
                  <th className='th-ih1'>Treatment</th>
                  <th className='th-ih2'>Treatment Date</th>
                  <th className='th-ih3'>Doctor</th>
                  <th className='th-ih4'>No.of Treatments</th>
                  <th className='th-ih5'>No.of Teeth</th>
                  <th className='th-ih6'>Treatment Discount</th>
                </tr>
              </thead>
              <tbody className='work-tablebody'>
                {currenttrain.map((item, index) => (
                  <tr key={index} className='work-tablerow'>
                    <td className='td-oc'>{item.treatment}</td>
                    <td className='td-oc'>{item.treatmentDate}</td>
                    <td className='td-oc'>{item.doctor}</td>
                    <td className='td-oc'>{item.numTreatments}</td>
                    <td className='td-oc'>{item.numTeeth}</td>
                    <td className='td-oc'>{item.treatmentDiscount}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
          <div className='ammu-1'>
            <button className='Ashok'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <AiOutlineStepBackward />
            </button>
            <p className='rani'>{currentPage}</p>
            <button className='Ashok'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <AiOutlineStepForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkReport;