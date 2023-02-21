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
            <form onSubmit={this._handleSubmit} id={"signup-form"} className="max-w-5xl mx-auto"> 
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                    
                    <input onChange={this.handleEmail} type="email" label="email" name="email" id="email" className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 focus:border-primary-400 focus:ring-primary-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address" required/>

                    <input type="submit" label="submit" id="submit" value="Signup" className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-700 rounded-md focus:ring focus:ring-primary-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-primary-600 focus:outline-none focus:bg-primary-600 hover:cursor-pointer" />

                </div>

                <p class="mt-3 text-sm text-gray-500">{this.state.message}</p>
            </form>
        )
    }
}