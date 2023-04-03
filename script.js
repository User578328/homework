const users = [
    {username: 'user1', password: 'password1'},
    {username: 'user2', password: 'password2'},
    {username: 'user3', password: 'password3'}
  ];
  
  const loginBtn = document.getElementById('login-btn');
  
  loginBtn.addEventListener('click', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    let isLoggedIn = false;
    
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        isLoggedIn = true;
        break;
      }
    }
    
    if (isLoggedIn) {
      alert('Úspěšně přihlášen.');
      
  
