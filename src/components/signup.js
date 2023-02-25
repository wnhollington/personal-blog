import * as React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class NewsletterSignup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            message: "You will not be spammed and your information will never be sold.",
            result: null
        }
    }

    // Handle Email
    handleEmail = event => {
        this.setState({ email: event.target.value })
    }

    // Handle Submit
    _handleSubmit = async (e) => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result.result})
        console.log(result)
        if (this.state.result === "success"){
            this.setState({ message: "Thank you for signing up!  Please check your email to confirm your subscription.  Please note that this confirmation email may wind up in your 'spam' folder."})
            document.getElementById(`signup-form`).reset()
        }
        else if (this.state.result === "error") {
            this.setState({ message: result.msg})
        }
    }

    render () {
        return (
            <div className='max-w-2xl mx-auto my-8 p-6 flex flex-col items-center bg-primary-900 rounded-md'>
                <h2 className='text-2xl text-white'>Subscribe</h2>
                <p className='text-lg text-gray-100 m-w-md mx-auto'>Subscribe to receive content directly in your inbox.</p>
                <form onSubmit={this._handleSubmit} id={"signup-form"} className="flex flex-col items-center my-4 m-w-sm"> 
                    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:mx-2 w-full">
                        <input onChange={this.handleEmail} type="email" label="email" name="email" id="email" className="flex-grow px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2  focus:ring-primary-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" required/>

                        <input type="submit" label="submit" id="submit" value="Signup" className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md focus:ring focus:ring-primary-500 focus:ring-opacity-80 sm:mx-2 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 hover:cursor-pointer" />

                    </div>
                    <p class="mt-3 text-sm text-gray-100">{this.state.message}</p>
                </form>
            </div>
        )
    }
}