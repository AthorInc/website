import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class NewsletterBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			modal: false,
			loading: false
		};
    }

    handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
  	}

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true });

		try {
			const result = await addToMailchimp(this.state.email);
			this.setState({ result: result, modal: true, email: '', loading: false });
		} catch (err) {
			this.setState({ result: false, modal: false, email: '', loading: false });
		}

		this.timeout = setTimeout(function () {
			this.setState({ modal: false });
		}.bind(this), 10000);
	}

	toggle = (e) => {
		this.setState({ modal: !this.state.modal });

		if (this.timeout) {
			clearTimeout(this.timeout)
			this.timeout = null
		}
	}

	render() {
		const { loading, email, result, modal } = this.state;
		let title, msg, color;

		if (result && result.result) {
			title = result.result;
			msg = <p className="lead"><span className="color-alternet" dangerouslySetInnerHTML={{ __html: result.msg }} /></p>
			if (result.result === 'error') color = 'bg-danger';
			else color = 'bg-success';
		}

		return (
			<div className="row justify-content-center">
				<Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader className={color} toggle={this.toggle}>
						<span className="text-white">{title}</span>
					</ModalHeader>
					<ModalBody>{msg}</ModalBody>
					<ModalFooter>
						<Button className="btn-sm" onClick={this.toggle}>Got it</Button>
					</ModalFooter>
				</Modal>
				<div className="col-lg-6 text-center">
					<div className="widget-item">
						<div className="widget-subsctibe">
							<p><label htmlFor="email">Join our newsletter to get updates</label></p>
							{ loading ? (
								<span className="m-0 text-3x lead fa fa-spinner fa-spin"></span>
							) : (
								<form id="subscribe-form" onSubmit={this.handleSubmit} className="subscription-form subscription-form-sm">
									<input type="text" name="email" defaultValue={email} onChange={this.handleChange} className="input-round required email" placeholder="Enter email" />
									<input type="text" className="d-none" name="form-anti-honeypot" />
									<button type="submit" className="btn btn-plane" aria-label="Join newsletter"><i className="fas fa-paper-plane"></i></button>
								</form>
								)
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
