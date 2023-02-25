import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <div className="w-full flex flex-col items-center justify-center my-2 py-4">
      <h1 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" action="/blog" className="bg-white py-6 lg:px-28 px-8">
          <input type="hidden" name="form-name" value="contact"/>
          <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                  <label htmlFor="name" className="text-base font-semibold leading-none text-gray-800">Name</label>
                  <input type="text" name="name" id="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label htmlFor="email" className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                  <input type="email" name="email" id="email" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
              </div>
          </div>
          <div className="md:flex items-center mt-8">
              <div className="md:w-full flex flex-col md:mt-0 mt-4">
                  <label htmlFor="subject" className="text-base font-semibold leading-none text-gray-800">Subject</label>
                  <input type="text" name="subject" id="subject" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
              </div>
          </div>
          <div>
              <div className="w-full flex flex-col mt-8">
                  <label htmlFor="message" className="text-base font-semibold leading-none text-gray-800">Message</label>
                  <textarea type="text" name="message" id="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
              </div>
          </div>
          <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
          <div className="flex items-center justify-center w-full">
              <button type="submit" name="submit" id="submit" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary-900 rounded hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 focus:outline-none w-full">SUBMIT</button>
          </div>
      </form> 
    </div>   
  </Layout>
)

export default Contact

export const Head = () => (
  <Seo 
    title="Contact"
  />
)
