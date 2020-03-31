/**
 * Return if the email
 * is a valid one
 * @param {String} email The user's email
 */
export const validadeEmail = (email) => !/\S+@\S+\.\S+/.test(email);

/**
 * Returns if the lenght of the
 * fullname is more than 8 characters
 * @param {String} fullname The user's Fullname
 */
export const validadeFullname = (fullname) => fullname.length <= 8;
