const base_URL = "https://3245-c666d49f-bc0f-4624-9edd-8edf7ff5c311.ws-us02.gitpod.io/todos";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			getTodos: async () => {
				try {
					const response = await fetch(`${base_URL}`);
					if (response.ok) {
						let todos = await response.json();
						setStore({
							todos: todos
						});
					} else {
						alert(`response:${response.status} ${response.statusText}`);
					}
				} catch (error) {
					alert(`error!: ${error}`);
				}
			},
			deleteTodos: async indexItem => {
				let response = await fetch(`${base_URL}/${indexItem}`, {
					method: "DELETE",
					body: JSON.stringify({}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					getActions().getTodos();
				} else {
					alert(`Something went wrong: ${response.status}`);
				}
			},
			addTask: async task => {
				alert(task);
				let response = await fetch(`${base_URL}`, {
					method: "POST",
					body: JSON.stringify(task),
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					getActions().getTodos();
				} else {
					alert(`Something went wrong: ${response.status}`);
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
