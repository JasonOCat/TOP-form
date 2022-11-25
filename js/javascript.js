const pass = document.querySelector('#password');
const checkPass = document.querySelector('#check_password');
const errorPass = document.querySelector('.error-pass');
const submitBtn = document.querySelector('.btn');

console.log(checkPass);

pass.addEventListener('keyup', passCheck);
checkPass.addEventListener('keyup', passCheck);
submitBtn.addEventListener('submit', submitForm)


function submitForm(e) {
    e.preventDefault();
    return false;
}


function passCheck(e) {

    if (!pass.value || !checkPass.value) {
        submitBtn.setAttribute('disabled','disabled');
        errorPass.hidden = true;
        pass.classList.add("error");
        checkPass.classList.add("error");
        pass.classList.remove("valid");
        checkPass.classList.remove("valid");
        return
    }

    if (pass.value === checkPass.value ) {
        submitBtn.removeAttribute('disabled');
        errorPass.hidden = true;
        pass.classList.remove("error");
        checkPass.classList.remove("error");
        pass.classList.add("valid");
        checkPass.classList.add("valid");
    } else {
        submitBtn.setAttribute('disabled','disabled');
        errorPass.hidden = false;
        pass.classList.add("error");
        checkPass.classList.add("error");
        pass.classList.remove("valid");
        checkPass.classList.remove("valid");
    }
}
