import React from 'react'
import './RequestConsentForm.css'
import { FaSms } from 'react-icons/fa';
import { AiOutlineWhatsApp,AiFillPrinter } from 'react-icons/ai';

const RequestConsent = () => {
  return (
<div>
     <center>
       
    <div className='con-overall'>
    <div className='consent-btns'>
            <div className='first-btn'>
            <FaSms/><button>Sms</button>
            </div>
            <div className='first-btn'>
            <AiOutlineWhatsApp/><button>Whatsapp</button>
            </div>
            <div className='first-btn'>
            <AiFillPrinter/><button>Save & Print</button>
            </div>
        </div>
    <div className=' con-form'>Consent From</div>
<div className='con-para'>
    <p> I Nikhil &nbsp;  &nbsp;&nbsp;&nbsp;    son/daughter of                            
        <input type='name' placeholder='.......................................' className='con-nikhil'></input> son/daughter of
        <input type='name' placeholder='..........................................' className='con-nikhil'></input>aged<input type='age'placeholder='0....' className='con-nikhil1'></input>resident of<input type='address' placeholder='.............................................' className='con-nikhil'></input>begin under the treatment of<br></br>
     <input type='name'placeholder='................................'className='con-nikhil'></input>(state here name of doctor/hospital/nursing home)do here by<br></br>
     give consent to the perform of medical/surgical/anesthesia/diagonstic  procedure of&nbsp;&nbsp;&nbsp;
     <input type='text' placeholder='............................................' className='con-nikhil2'></input>(mention nature of procedure/treatment to be performed,<br></br>
     etc.) upon myself/upon <input type='text' 
     placeholder='.............................................' 
     className='con-nikhil'></input>aged<input type='age'
     placeholder='................................'className='con-nikhil'>
        </input>who is related to me as<br></br>.........................
        (mention here relationship e,g. Son,Daughter,Father,Mother,Wife etc.)<br></br><br></br><br></br><br></br>
        I declare that im more than 18 years of age, I  informed that there are inherent risks<br></br>
        Involved in treatemt/procedure.I ahve sgned this consent volunterily out of my free will<br></br>
        without any pressure and in my full sense.<br></br><br></br>
        place:.................<br></br>
        Date: ..................<br></br>
        Signature:...............

        
     


    </p>
</div>


</div>
</center>



</div>
  )
}

export default RequestConsent