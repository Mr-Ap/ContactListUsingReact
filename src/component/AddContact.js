import React, { Component } from "react";
export class AddContact extends Component {
	state = {
		name: "",
		email: "",
	};

	add = (e) => {
		e.preventDefault();
		if (this.state.name === "" || this.state.email === "") {
			alert("Kindly Enter the data");
			return;
		}
		// console.log(this.state);
		this.props.addContactHandler(this.state);
		this.setState({ name: "", email: "" });
		// console.log(this.props);
		this.props.history.push("/");
	};
	render() {
		return (
			<div className="ui main">
				<h2>Add Contact</h2>
				<form className="ui form" onSubmit={this.add}>
					<div className="field">
						<label>Name</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							onChange={(e) => {
								this.setState({ name: e.target.value });
							}}
							value={this.state.name}
						></input>
					</div>
					<div className="field">
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={(e) => {
								this.setState({ email: e.target.value });
							}}
							value={this.state.email}
						></input>
					</div>
					<button className="ui button blue">Submit</button>
					{/* <Link to="/">
						<button className="ui button green">Home</button>
					</Link> */}
				</form>
			</div>
		);
	}
}

export default AddContact;
