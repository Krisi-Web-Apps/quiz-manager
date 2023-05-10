const email = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const password = (password) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  const isLongEnough = password.length >= minLength;

  return hasUppercase && hasLowercase && hasNumber && hasSymbol && isLongEnough;
};

const username = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
  return usernameRegex.test(username);
};

module.exports = {
  username,
  email,
  password
}
