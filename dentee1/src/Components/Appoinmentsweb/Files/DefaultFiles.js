import React, { useRef, useState } from 'react';
import './DefaultFiles.css';
import { FaQuestionCircle, FaCloudUploadAlt } from 'react-icons/fa';
import { AiFillFolder, AiFillExclamationCircle } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Files = () => {
  const inputRef = useRef(null);
  const input1Ref = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImage1Click = () => {
    input1Ref.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  function formatFileSize(sizeInBytes) {
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;
    const gigabyte = megabyte * 1024;
  
    if (sizeInBytes < kilobyte) {
      return sizeInBytes + ' B';
    } else if (sizeInBytes < megabyte) {
      return (sizeInBytes / kilobyte).toFixed(2) + ' KB';
    } else if (sizeInBytes < gigabyte) {
      return (sizeInBytes / megabyte).toFixed(2) + ' MB';
    } else {
      return (sizeInBytes / gigabyte).toFixed(2) + ' GB';
    }
  }
  

  return (
    <div className='file-head'>
      <div className='file-main'>
        {/* ... */}
      </div>
      <div className='file-box'>
        <div className='file-main'>
          <div className='file-col'>
            <div className='file-show'>SHOW:</div>
            {/* ---------------------- Popup ---------------------- */}
            <Popup trigger={<div className='file-upload'>Selected Files</div>} position='bottom left'>
              <div className='file-popup-box'>
                <div className='file-main'>
                  <div className='file-popup-box1'>
                    <div className='file-main'>
                      <AiFillExclamationCircle className='file-icon3' />
                      <div className='file-portlet'>Portlet Drag and Drop Uploader</div>
                    </div>
                    <div className='file-box2'>
                      <div className='file-box3'>
                        <div className='file-main'>
                          <div className='file-drop'>Drop Files</div>
                          <div className='file-to'>to upload</div>
                        </div>
                        <div className='file-click'>(or click)</div>
                      </div>
                    </div>
                  </div>
                  <div className='file-col'>
                    {selectedFolder && (
                      <>
                        <select className='file-select1'>
                          <option>Patient Reports</option>
                          <option>Testimonials</option>
                          <option>Scanned Images</option>
                        </select>
                        <input type='text' placeholder='Description' className='file-input'></input>
                        <div className='file-main'>
                          <button className='file-save'>Save</button>
                          <Link to='/Appoint'><button className='file-cancel'>Cancel</button></Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Popup>
            {/* ---------------------------------------------------- */}
            <div className='file-folder'>FOLDERS</div>
            <div className='file-main' onClick={() => handleFolderClick('Patient Reports')}>
              <AiFillFolder className='file-icon1' />
              <div className='file-patient'>Patient Reports</div>
            </div>
            <div className='file-line'></div>
            <div className='file-main' onClick={() => handleFolderClick('Scanned Images')}>
              <AiFillFolder className='file-icon2' />
              <div className='file-scan'>Scanned Images</div>
            </div>
            <div className='file-line'></div>
            <div className='file-main' onClick={() => handleFolderClick('Testimonials')}>
              <AiFillFolder className='file-icon2' />
              <div className='file-scan'>Testimonials</div>
            </div>
            <div className='file-line'></div>
          </div>
          <div className='file-col'>
  {selectedFiles.length === 0 && (
    <div className='file-there'>There are no files</div>
  )}
  {selectedFiles.length > 0 && (
    <div className='selected-files'>
      <p>Selected Files:</p>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>
            <div className='file-row'>
              <div className='file-name'>{file.name}</div>
              <div className='file-size'>{formatFileSize(file.size)}</div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  )}
  <div onClick={handleImage1Click}>
    <div>
      <button className='file-upload1'>Select Files</button>
    </div>
    <input type='file' ref={input1Ref} className='file-img-upload-10' onChange={handleFileChange} multiple></input>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Files;
