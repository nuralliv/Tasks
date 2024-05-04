// Использовать Fetch для отправки запроса к REST API и получения списка пользователей.  
// Затем обработать полученные данные и динамически создать элементы для каждого пользователя, отображая их на странице. 

//Example  

// Name: Leanne Graham 
// Email: Sincere@april.biz 
// Phone: 1-770-736-8031 x56442 
//Дополнительно можете реализовать функции, такие как сортировка пользователей, добавление новых пользователей, поиск пользователей и обработку ошибок при загрузке данных. 

// Для получение данных => 
// https://jsonplaceholder.typicode.com/users


document.addEventListener('DOMContentLoaded', function () {
   const loadUsersBtn = document.querySelector('#load-users');
   const userList = document.getElementById('#user-list');
   const addUserForm = document.getElementById('add-user-form');

   loadUsersBtn.addEventListener('click', loadUsers);
   addUserForm.addEventListener('submit', addUser);

   function loadUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => {
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            return response.json();
         })
         .then(data => {
            renderUsers(data);
         })
         .catch(error => {
            console.error('Error fetching users:', error);
         });
   }

   function renderUsers(users) {
      userList.innerHTML = '';

      users.forEach(user => {
         const userDiv = document.createElement('div');
         userDiv.classList.add('user');
         userDiv.innerHTML = `
               <p><strong>Name:</strong> ${user.name}</p> 
               <p><strong>Email:</strong> ${user.email}</p>
               <p><strong>Phone:</strong> ${user.phone}</p>
            `;
         userList.appendChild(userDiv);
      });
   }

   function addUser(event) {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const newUser = {
         name: nameInput.value,
         email: emailInput.value,
         phone: phoneInput.value
      };
      addUserToDOM(newUser);
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
   }

   function addUserToDOM(newUser) {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
            <p><strong>Name:</strong> ${newUser.name}</p> 
            <p><strong>Email:</strong> ${newUser.email}</p>
            <p><strong>Phone:</strong> ${newUser.phone}</p>
      `;
      userList.appendChild(userDiv);
   }


});
