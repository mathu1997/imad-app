var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
               console.log('user logged in');
               alert('logged in successfully');
            } else if (request.status === 403) {
                alert('username/password is incorrect');
            }  else if (request.status === 500) {
                alert('something went wrong on server');
            
            }
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://http://mathu1997mm.imad.hasura-app.io/login' + name, true);
    request.setRequestHeader('content-Type', 'application/jason');
    request.send(JSON.stringify({username: username, password: password}));
};