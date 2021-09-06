import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
	const deleteContact = (id) => {
		props.getElementId(id);
	};

	const RenderContactList = props.contacts.map((contact) => {
		return (
			<ContactCard contact={contact} remove={deleteContact} key={contact.id} />
		);
	});
	return (
		<div>
			<article>
				<h2>
					List of My Contacts
					<Link to="/add">
						<button className="ui button blue right">Add Contact</button>
					</Link>
				</h2>
			</article>

			<div className="ui celled list">{RenderContactList}</div>
		</div>
	);
};
export default ContactList;
