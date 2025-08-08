import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name, email, phone, propertyType, message, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (phone === '') {
            error.phone = "Please enter your phone number";
        }
        if (propertyType === '') {
            error.propertyType = "Please select a property type";
        }

        if (error.name || error.email || error.phone || error.propertyType) {
            this.setState({
                error
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: '',
                propertyType: '',
                message: '',
                error: {}
            })
            // Here you can add form submission logic
            alert('Thank you for your inquiry! We will contact you soon.');
        }
    }

    render(){
        const { name, email, phone, propertyType, message, error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Full Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email Address"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={phone} type="tel" name="phone" placeholder="Phone Number"/>
                            <p>{error.phone ? error.phone : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <select className="form-control" onChange={this.changeHandler} value={propertyType} name="propertyType">
                                <option value="">Select Property Type</option>
                                <option value="Studio">Studio</option>
                                <option value="1 Bed">1 Bed</option>
                                <option value="2 Bed">2 Bed</option>
                            </select>
                            <p>{error.propertyType ? error.propertyType : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Additional Message (Optional)" value={message} onChange={this.changeHandler}></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Inquiry</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;