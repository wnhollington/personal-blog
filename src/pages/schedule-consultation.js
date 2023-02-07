import * as React from "react"
import {InlineWidget} from "react-calendly"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ScheduleConsultation = () => (
  <Layout>
    <div className="App">
      <InlineWidget url="https://calendly.com/wnhollington" />
    </div>
  </Layout>
)

export default ScheduleConsultation

export const Head = () => (
  <Seo 
    title="Schedule Consultation"
  />
)
