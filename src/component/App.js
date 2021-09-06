import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

import { Route, Switch } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";

function App() {
	// const LOCAL_STORAGE_KEY = "Contacts";
	const [contacts, setContacts] = useState([]);

	//retrieve contactsfrom json server
	const retrivefromServer = async () => {
		const responce = await api.get("/contacts");
		return responce.data;
	};
	//POST Request
	const addContactHandler = async (contact) => {
		// console.log(contact);

		const request = { id: uuid(), ...contact };
		const responce = await api.post("/contacts", request);
		setContacts([...contacts, responce.data]);
		// setContacts([...contacts, { id: uuid(), ...contact }]);
	};

	//Delete method
	const removeContactHandler = async (id) => {
		await api.delete(`contacts/${id}`);
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	};

	useEffect(() => {
		//retreive from local storage
		// const retrivedContacts = JSON.parse(
		// 	localStorage.getItem(LOCAL_STORAGE_KEY)
		// );
		// if (retrivedContacts) setContacts(retrivedContacts);
		const getAllContacts = async () => {
			const allContacts = await retrivefromServer();
			if (allContacts) setContacts(allContacts);
		};
		getAllContacts();
	}, []);

	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	// }, [contacts]);

	return (
		<div className="ui container">
			<Header />
			<Switch>
				<Route
					path="/add"
					render={(props) => (
						<AddContact {...props} addContactHandler={addContactHandler} />
					)}
				></Route>
				<Route
					exact
					path="/"
					render={(props) => (
						<ContactList
							{...props}
							contacts={contacts}
							getElementId={removeContactHandler}
						/>
					)}
				></Route>
				<Route path="/contact/:id" component={ContactDetail}></Route>
			</Switch>
		</div>
	);
}

export default App;
