// Making the "show/Hide password" icon operatable
const showHideIcon= document.querySelector("#showHideIcon");
const typeofPass=document.querySelector("#loginPassword");
const iconReplace=document.getElementById("eyeIcon");

showHideIcon.addEventListener('click',showHidefun);

function showHidefun()
{
	if(typeofPass.type === "password")
	{
		typeofPass.type="text";
		iconReplace.className="fa-solid fa-eye-slash";
		typeofPass.style.color="white";
	
	}
	else
	{
		typeofPass.type="password";
		iconReplace.className="fa-solid fa-eye";
		typeofPass.style.color="white";
	}
	
}

// Now will do simple validation

const loginContainer =document.getElementsByClassName('form-container');
const loginForm =document.getElementById("loginForm");
const loginUsername=document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

loginUsername.addEventListener('onblur',blurfun)

function blurfun(event)
{
	loginUsername.style.color='white';
}


// when the form will listen the event submit then submitValidation funtion will execute
loginForm.addEventListener('submit',submitValidation);

function submitValidation(event)
{
	event.preventDefault(); // this will prevent page to sumbit
	//username validation
	if(loginUsername.value==="" || loginUsername.value.length <3)
	{
		showError(loginUsername, "User Name not be empty & less than 3");
	}
	else
	{
		showSuccess(loginUsername);
	}

	//password validation
	if(loginPassword.value ==="" || loginPassword.value.length<4)
	{
		showError(loginPassword, "Password cannot be empty & less than 3");
	}
	else
	{
		showSuccess(loginPassword);
	}
}

function showError(input, message)
{
	const formField = input.parentElement;
	formField.className="form-field error";

	if(formField.className=="form-field error")
	{
		const alert_message =formField.querySelector(".alert-message");
		alert_message.style.visibility = "visible";
		alert_message.style.color="red";
		alert_message.innerText =message;
	}
}

function showSuccess(input)
{
	const formField = input.parentElement;

	formField.className="form-field success";

	if(formField.className== 'form-field success')
	{
		const alert_message=formField.querySelector(".alert-message");
		alert_message.style.visibility="hidden";
	}
}
