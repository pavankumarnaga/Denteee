import React, { useRef, useState, useEffect } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './DefaultFiles.css';

const Files = () => {
  const input1Ref = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [uploadedData, setUploadedData] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleImage1Click = () => {
    input1Ref.current.click();
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('selectedFolder', selectedFolder);

      Array.from(files).forEach((file) => {
        formData.append('selectedFiles', file);
      });


      
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = response.data;
      console.log(data);

      // Update the uploaded data in the state
      setUploadedData([...uploadedData, ...data]);
    } catch (error) {
      console.error('Error uploading files:', error);
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }

    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  useEffect(() => {
    const fetchUploadedData = async () => {
      try {

        
        const response = await axios.get('http://localhost:5000/api/getUploadedData');
        const data = response.data;
        setUploadedData(data);
      } catch (error) {
        console.error('Error fetching uploaded data:', error);
      }
    };

    fetchUploadedData();
  }, []); // Empty dependency array to run the effect only once

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
      <div className='file-box'>
        <div className='file-main'>
          <div className='file-col'>
            <div className='file-show'>SHOW:</div>

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
                  <Link to='/Appoint'>
                    <button className='file-cancel'>Cancel</button>
                  </Link>
                </div>
              </>
            )}

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
            {uploadedData.length > 0 && (
              <div className='uploaded-data'>
                <p>Uploaded Data:</p>
                <ul>
                  {uploadedData.map((data, index) => (
                    <li className='list789' key={index} >
                      <div className='file-row'>
                        <div className='file-folder'>{data.selectedFolder}</div>
                        <div className='file-files'>{data.selectedFiles.join(', ')}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div onClick={handleImage1Click}>
              <div>
                <button className='file-upload'>Select Files</button>
              </div>
              <input
                type='file'
                ref={input1Ref}
                className='file-img-upload-10'
                onChange={handleFileChange}
                multiple
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;