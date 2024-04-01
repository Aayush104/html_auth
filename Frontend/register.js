const btn = document.getElementById('btn');

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value; 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   const response = await fetch('http://localhost:3000/register',{
    method: "POST",
    headers :{
        'content-Type': 'application/json'
    },
    body: JSON.stringify({ username,email,password})})

    if (response.status == 200) {
        toastr.success('Registration Successful');
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
       
    } else if (response.status === 400) {
        toastr.error('Email already exists');
    } else {
        toastr.error('Registration failed');
    }


});
