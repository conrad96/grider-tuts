/**
 * write isValid password function
 * it accepts 2 arguments: password, username
 * Password:
 *  - must be atleast 8 characters
 *  - cannot contain spaces
 *  - cannot contain username
 *  if all conditions are met returns TRUE else FALSE
 * 
 */

function isValidPassword(username, password)
{

    if(password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) return false;

    return true;
}

let result = isValidPassword('conrad', 'conrad12345')
console.log(result);