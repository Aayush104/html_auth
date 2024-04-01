const btn = document.getElementById('btn');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const responseData = await response.json(); // Parse JSON response

    if (response.status === 400 && responseData.error === "fill input") {
        toastr.error('Please fill all input');
    }else if(response.status === 401 && responseData.error === "User does not exist." ){
        toastr.error('User with this email donot exist');
    }else if(response.status === 401 && responseData.error === "Incorrect password."){
        toastr.error('Password is incorrect');
    }else{
    window.location.href = '../pages/home.html';
    }
});
