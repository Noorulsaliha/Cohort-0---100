const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    const usernameSchema = zod.string().email('Invalid email formats')
    const passwordSchema = zod.string().min(6,{msg:"Must be 6 characters long!"})
    const result1 = usernameSchema.safeParse(username);
    const result2 = passwordSchema.safeParse(password);

    if(result1.success && result2.success){
    const token = jwt.sign({username,password}, jwtpassword)
    console.log(token);
    return token;
    }
    else{
    console.log(null);
    return null;
    }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    const verify = jwt.verify(token, jwtpassword);
    const result = verify ? true: false;
    console.log(result);
    return result;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    const decode = jwt.verify(token, jwtPassword);
    const result = decode ? console.log(decode):false;
    console.log(result);
    return result
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};