import React from "react";
import { Link } from "react-router-dom";
import userLogo from "../images/user.png";

const ContactCard = (props) => {
	const { id, name, email } = props.contact;
	return (
		<div className="item">
			<img className="ui avatar image" src={userLogo} alt="user"></img>
			<div className="content">
				<Link
					to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
				>
					<div className="header">{name}</div>
					<div>{email}</div>
				</Link>
			</div>
			<i
				className="trash alternate outline icon"
				style={{ color: "red", marginTop: "7px" }}
				onClick={() => {
					props.remove(id);
				}}
			></i>
		</div>
	);
};

export default ContactCard;