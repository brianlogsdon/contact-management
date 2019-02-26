const getState = (scope) => {
    return {
        store: {
        //this is where your store data lives
        contacts: [
				
			],
			images:
			["https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
			],
				markers: [
				{
					name: "Test 1",
					title: "Title",
					type: "food",
					lat: 26.15,
					long: -80.1373
				},
				{
					name: "Test 1",
					title: "Title",
					type: "house",
					lat: 26.12,
					long: -80.136
				},
				{
					name: "Test 1",
					title: "Title",
					type: "clothes",
					lat: 26.2,
					long: -80.12
				},
				{
					name: "Test 1",
					title: "Title",
					type: "house",
					lat: 26.17,
					long: -80.3
				}
			]
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
            
            addContact: (name,email,phone,address,props) => {
				//new contact info from add contact form
				let newContact={full_name:name,email:email,agenda_slug:"downtown_vi",address:address,phone:phone};
				
				//function to update the store after new contact is added to database
				function update() {
					fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(data);
						let store = scope.state.store;
						store.contacts=data;
						props.history.push("/");
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
				//put new contact into the database and then call update function
				fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/', {
				method: "post",
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(newContact)
				})
				.then(update);
				
           
			},
			
			
			deleteElement:(index,props)=>{
				//function to update the store after new contact is added to database
				function update() {
					fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(data);
						let store = scope.state.store;
						store.contacts=data;
						props.history.push("/");
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
					
				fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/'+index, {method:'DELETE'})
				.then(update);
				
				
			},
			updateElement:(index,name,email,phone,address,props)=>{
				
				
				let updatedContact={full_name:name,email:email,agenda_slug:"downtown_vi",address:address,phone:phone};
				
				
				//function to update the store after new contact is added to database
				function update() {
					fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/')
					.then(response=>(response.json()))
					.then(data => {
						window.console.log(updatedContact);
						let store = scope.state.store;
						store.contacts=data;
						props.history.push("/");
						scope.setState({store});
							
					})
					.catch(error=> window.console.log('error'));
					}
					
				//update contact in the database and then call update function
				fetch('https://ancient-reaches-29695.herokuapp.com/api/contacts/'+index, {
				method: 'post',
				headers: {"Content-type": 'application/json'},
				body: JSON.stringify(updatedContact)
				})
				.then(update);
				
			
				
			}
			
        }
    };
};

export default getState;

