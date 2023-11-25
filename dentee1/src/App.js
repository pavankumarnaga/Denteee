import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';


// import Teeth from './Components/DentalChart';

import Loginpage from './Components/Loginpage';


// Patient


import Addpatient from './Components/Patient/Addpatient';
import Patient from './Components/Patient/Patient';


// Appointment


import Webappointment from './Components/Appointments/Webappointment';
import Main from './Components/Appointments/Main';
import AGENDA from './Components/Appointments/AGENDA';
import Week from './Components/Appointments/Week';
import Month from './Components/Appointments/Month';
import Day from './Components/Appointments/Day';
import POP from './Components/Appointments/POP';
import Appointment_header from './Components/Appoinmentsweb/Appointment-header';
import PrescriptionDetail from './Components/Appoinmentsweb/PrescriptionDetails';
import Add_New_Payment from './Components/Appoinmentsweb/Bills/AddNewPayment';
import Refundagainist from './Components/Appoinmentsweb/Bills/RefundAgainstBill';
import Refundpay1 from './Components/Appoinmentsweb/Bills/RefundPay';
import RefundPage from './Components/Appoinmentsweb/Bills/RefundPage';
import RequestConsent from './Components/Appoinmentsweb/Files/RequestConsentForm'
import Prescriptionhome from './Components/Appoinmentsweb/Prescriptionhome';

// import Calendar from './Components/Appointments/Calendar';



// Administator


import Administator from './Components/Administatorpage/Administator';
import Rxcustomview from './Components/Administatorpage/Rxcustomview';
import Browsersessionhistroy from './Components/Administatorpage/Browsersessionhistroy';
import Dentalchart from './Components/Administatorpage/Dentalchart';
import Managemaster from './Components/Administatorpage/Managemaster';
import Deviceaccess from './Components/Administatorpage/Deviceaccess';
import Ipaccess from './Components/Administatorpage/Ipaccess';
import Ipaccesspage from './Components/Administatorpage/Ipaccesspage';
import Manageclinic from './Components/Administatorpage/Manageclinic';
import Managetreatment from './Components/Administatorpage/Managetreatment';
import Managemedicine from './Components/Administatorpage/Managemedicine';
import Useractivitylog from './Components/Administatorpage/Useractivitylog';
import Smstemplet from './Components/Administatorpage/Smstemplet';
import Personalizesettings from './Components/Administatorpage/Personalizesettings';
import Managereferences from './Components/Administatorpage/Managereferences';
import Importpatient from "./Components/Administatorpage/Importpatient";
import Importpatientpage from "./Components/Administatorpage/Importpatientpage";
import Recyclebin from './Components/Administatorpage/Recyclebin';
import Email from './Components/Administatorpage/Email';
import Emailpage from './Components/Administatorpage/Emailpage';
import Import from './Components/Administatorpage/Import';
import Export from './Components/Administatorpage/Export';
import Table from './Components/Administatorpage/Table';
import Bankaccount from './Components/Administatorpage/Bankaccount';
import AddBankAccount from './Components/Administatorpage/AddBankAccount';
import Manageuser from './Components/Administatorpage/Manageuser';
import Manageadduser from './Components/Administatorpage/Manageadduser';
import Manageupdateuser from './Components/Administatorpage/Manageupdateuser';
import Customerview from './Components/Administatorpage/Customerview';
import Customerviewpage from './Components/Administatorpage/Customerviewpage';
import Manageclinicone from './Components/Administatorpage/Manageclinicone';
import Userroleaccess from './Components/Administatorpage/Userroleaccess'
import Userroleaccesspage from './Components/Administatorpage/Userroleaccesspage'
import Rxtemplate from './Components/Administatorpage/Rxtemplete';
import Doctormanage from './Components/Administatorpage/Doctormanage';
import Doctormanagepage from './Components/Administatorpage/Doctormanagepage';


// extra
import Dynamicconsentform from './Components/Administatorpage/Dynamicconsentform';
import Dynamicconsent from "./Components/Administatorpage/Dynamicconsent";
import PrintSetting from './Components/Administatorpage/PrintSetting';










// accounts 


import HomePage from './Components/Accounts/Accounts';
import Bills from './Components/Accounts/Bills';
import Payment from './Components/Accounts/Payment';
import Pettycash from './Components/Accounts/Pettycash';
import Bankdetails from './Components/Accounts/Bankdetails';
import Passbook from './Components/Accounts/Passbook';
import AddPayment from './Components/Accounts/Addpayment';
import Addbills from './Components/Accounts/Addbills';
import Addvoucher from './Components/Accounts/Addvoucher';
import Addnewbill from './Components/Accounts/Addnewbill';
import Addbankdeposit from "./Components/Accounts/Addbankdeposit";


// extra
// import Areport from './Components/Reports/Areport';
// import Patientdocumentreport from './Components/Reports/Patientdocumentreport';




// Report


import Analysis from './Components/Reports1/Analysis';
import Areport from './Components/Reports1/Areport';
import PatientDocumentReport from './Components/Reports1/PatientDocumentReport';
import ConsultantBilling from './Components/Reports1/ConsultantBilling';
import AppointmentReport from './Components/Reports1/AppointmentR';
import Revenue from './Components/Reports1/Revenue';
import Routine_Remainder from './Components/Reports1/RoutineRemainder';
import Doctorwise_Report_1 from './Components/Reports1/DoctorWiseReport';
import ReferReport from './Components/Reports1/ReferReport';
import PatientPresonal_Report from './Components/Reports1/PatientPersonalReport';
import ClinicDataAnalysis from './Components/Reports1/ClinicAnalysis';
import Customized_patient_report from './Components/Reports1/CustomPatientReport';
import Generalreport from './Components/Reports1/GeneralReport';
import LabworkReport from './Components/Reports1/LabworkReport';
import OutsandingReport from './Components/Reports1/OutstandingReport';
import Online_Patient_Payment_Report from './Components/Reports1/Online_Patient_Payment_Report';
import WaitingAnalysis from './Components/Reports1/WaitingAnalysis';
import DailyCollection from './Components/Reports1/DailyCollection'
import WorkReport from './Components/Reports1/WorkReport';
import Clinicpatient from './Components/Reports1/Clinicpatient';
import Clinicappointment from './Components/Reports1/Clinicappointment';
import Clinictreatment from './Components/Reports1/Clinictreatment';
import Cliniccollection from './Components/Reports1/Cliniccollection';


// extra
// import ClinicInsightAppointment from './Components/Reports1/ClinicInsignt-Appointment';
// import ClinicInsightCollection from './Components/Reports1/ClinicInsight-Collection';
// import ClinicInsightTreatment from './Components/Reports1/ClinicInsight-Treatment';
// import ClinicInsight from './Components/Reports1/ClinicInsight';



function App() {
  return (
    <div className="App">
    <Router>
    
    {/* <Navbar/>
    <Sidebar/> */}
      <Routes>

{/* <Route path='/Teeth' element={<Teeth/>}/> */}

        <Route path='/' element={<Loginpage/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        

{/* Patient */}
        <Route path='/Addpatient' element={<Addpatient/>}/>
        <Route path='/Patient' element={<Patient/>}/>







{/* Appointment */}

<Route path='/Webappointment' element={<Webappointment/>}/>
<Route path='/Main' element={<Main/>}/>
<Route path='/AGENDA' element={<AGENDA/>}/>
          <Route path='/Week' element={<Week/>}/>
          <Route path='/Month' element={<Month/>}/>
          <Route path='/Day' element={<Day/>}/>
          <Route path='/POP' element={<POP/>}/>

          <Route path="/Appointment_header" element={<Appointment_header/>}/>

          
          <Route path="/Appointment_header/:patientId" element={<Appointment_header/>} />


           <Route path="/AddPrescription" element={<PrescriptionDetail/>}/>
           <Route path="/AddNewPayment_1" element={<Add_New_Payment/>}/>
           <Route path="/Refund_1" element={<RefundPage/>}/>
           <Route path="/RefundAgainstBill" element={<Refundagainist/>}/>
           <Route path="/RefundPay" element={<Refundpay1/>}/>
           <Route path="/Requconsent" element={<RequestConsent/>}/>
           <Route path='/Prescriptionhome' element={<Prescriptionhome/>}/>
                {/* <Route path='/Calendar' element={<Calendar/>}/> */}

      
      
      
      
        <Route path='/Administator' element={<Administator/>}/>
        <Route path='/Rxcustomview' element={<Rxcustomview/>}/>
        <Route path='/Browsersessionhistroy' element={<Browsersessionhistroy/>}/>
        <Route path='/Dentalchart' element={<Dentalchart/>}/>
        <Route path='/Managemaster' element={<Managemaster/>}/>
        <Route path='/Deviceaccess' element={<Deviceaccess/>}/>
        <Route path='/Ipaccess' element={<Ipaccess/>}/>
        <Route path='/Ipaccesspage' element={<Ipaccesspage/>}/>
        <Route path='/Manageclinic' element={<Manageclinic/>}/>
        <Route path='/Managetreatment' element={<Managetreatment/>}/>
        <Route path='/Managemedicine' element={<Managemedicine/>}/>
        <Route path='/Useractivitylog' element={<Useractivitylog/>}/>
        <Route path='/Smstemplet' element={<Smstemplet/>}/>
        <Route path='/Personalizesettings' element={<Personalizesettings/>}/>
        <Route path='/Managereferences' element={<Managereferences/>}/>
        <Route path='/Recyclebin' element={<Recyclebin/>}/>
        <Route path='/Importpatient' element={<Importpatient/>}/>
        <Route path='/Importpatientpage' element={<Importpatientpage/>}/>
        <Route path='/Email' element={<Email/>}/>
        <Route path='/Emailpage' element={<Emailpage/>}/>
        <Route path='/Import' element={<Import/>}/>
        <Route path='/Export' element={<Export/>}/>
        <Route path='/Table' element={<Table/>}/>
        <Route path='/Bankaccount' element={<Bankaccount/>}/>
        <Route path='/AddBankAccount' element={<AddBankAccount/>}/>
        <Route path='/Manageuser' element={<Manageuser/>}/>
        <Route path='/Manageadduser' element={<Manageadduser/>}/>
        <Route path='/Manageupdateuser' element={<Manageupdateuser/>}/>
        <Route path='/Customerview' element={<Customerview/>}/>
        <Route path='/Customerviewpage' element={<Customerviewpage/>}/>
        <Route path='/Manageclinicone' element={<Manageclinicone/>}/>
        <Route path='/Userroleaccess' element={<Userroleaccess/>}/>
        <Route path='/Userroleaccesspage' element={<Userroleaccesspage/>}/>
        <Route path='/Rxtemplete' element={<Rxtemplate/>}/>
        <Route path='/Doctormanage' element={<Doctormanage/>}/>
        <Route path='/Doctormanagepage' element={<Doctormanagepage/>}/>

{/* extra */}
            <Route path='/Dynamicconsent' element={<Dynamicconsent/>}/>
        <Route path='/Dynamicconsentform' element={<Dynamicconsentform/>}/>
        <Route path='/PrintSetting' element={<PrintSetting/>}/>

{/* accounts  */}

        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/pettycash" element={<Pettycash />} />
        <Route path="/bankdetails" element={<Bankdetails />} />
        <Route path="/passbook" element={<Passbook />} />
        <Route path="/addpayment" element={<AddPayment />} />
        <Route path="/addbills" element={<Addbills />} />
        <Route path="/addvoucher" element={<Addvoucher />} />
        <Route path="/addnewbill" element={<Addnewbill/>} />
        <Route path="/addbankdeposit" element={<Addbankdeposit/>} />


        {/* extra */}
{/* 
        <Route path='/Areport' element={<Areport/>}/>
        <Route path='/Patientdocumentreport' element={<Patientdocumentreport/>}/>
 */}









{/* Reports */}

<Route path='/Areport' element={<Areport/>}/>
      <Route path='/Patient Analysis' element={<Analysis/>}/>
      <Route path='/Patient Document Report' element={<PatientDocumentReport/>}/>
      <Route path='/ConsultantBilling' element={<ConsultantBilling/>}/>
      <Route path='/AppointmentReport' element={<AppointmentReport/>}/>
      <Route path='/RevenueReportAnalysis' element={<Revenue/>}/>
      <Route path='/RoutineRemainder' element={<Routine_Remainder/>}/>
      <Route path='/DoctorWiseReport' element={<Doctorwise_Report_1/>}/>
      <Route path='/ReferReport' element={<ReferReport/>}/>
      <Route path='/PatientPersonalReport' element={<PatientPresonal_Report/>}/>
      <Route path='/CilnicDataAnlaysis' element={<ClinicDataAnalysis/>}/>
      <Route path='/Customizedpatientreports' element={<Customized_patient_report/>}/>
      <Route path='/Generalreport' element={<Generalreport/>}/>
      <Route path='/LabworkReport' element={<LabworkReport/>}/>
      <Route path='/OutsandingReport' element={<OutsandingReport/>}/>
      <Route path='/OnlinePatientPaymentReport' element={<Online_Patient_Payment_Report/>}/>
      <Route path='/WaitingAnalysis' element={<WaitingAnalysis/>}/>
      <Route path='/DailyCollection' element={<DailyCollection/>}/>
      <Route path='/WorkReport' element={<WorkReport/>}/>
      <Route path='/Clinicpatient' element={<Clinicpatient/>}/>
      <Route path='/Clinicappointment' element={<Clinicappointment/>}/>
      <Route path='/Cliniccollection' element={<Cliniccollection/>}/>
      <Route path='/Clinictreatment' element={<Clinictreatment/>}/>



{/* extra */}
  {/* <Route path='/ClinicInsight/Appointment' element={<ClinicInsightAppointment/>}/>
      <Route path='/ClinicInsight/Collection' element={<ClinicInsightCollection/>}/>
      <Route path='/ClinicInsight/Treatment' element={<ClinicInsightTreatment/>}/>
      <Route path='/ClinicInsight' element={<ClinicInsight/>}/> */}












      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
