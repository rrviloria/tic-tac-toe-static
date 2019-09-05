
const mockUsers = [
  {id: 1, name: 'Raymund'},
  {id: 2, name: 'Jelly'},
];

export const getUsers = async() => {
	return mockUsers;
};

export const createUser = async(name) => {
	mockUsers.push({id: 3, name: name});
};
