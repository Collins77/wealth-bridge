import { Route, Routes } from "react-router-dom"
import Layout from "./features/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import VisaApplication from "./pages/services/VisaApplication"
import VisitorVisa from "./pages/services/applications/VisitorVisa"
import StudyVisa from "./pages/services/applications/StudyVisa"
import MedicalVisa from "./pages/services/applications/MedicalVisa"
import VolunteerVisa from "./pages/services/applications/VolunteerVisa"
import RetirementVisa from "./pages/services/applications/RetirementVisa"
import BusinessVisa from "./pages/services/applications/BusinessVisa"
import WorkVisa from "./pages/services/applications/WorkVisa"
import RelativeVisa from "./pages/services/applications/RelativeVisa"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services/visa-application" element={<VisaApplication />} />
          <Route path="services/visa-application/visitor-visa" element={<VisitorVisa />} />
          <Route path="services/visa-application/study-visa" element={<StudyVisa />} />
          <Route path="services/visa-application/medical-treatment-visa" element={<MedicalVisa />} />
          <Route path="services/visa-application/volunteer-visa" element={<VolunteerVisa />} />
          <Route path="services/visa-application/retirement-visa" element={<RetirementVisa />} />
          <Route path="services/visa-application/business-visa" element={<BusinessVisa />} />
          <Route path="services/visa-application/work-visa" element={<WorkVisa />} />
          <Route path="services/visa-application/relative-visa" element={<RelativeVisa />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
