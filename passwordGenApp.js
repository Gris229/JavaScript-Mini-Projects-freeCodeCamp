function generatePassword(pwl) {
  const caract = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for(let i = 0; i < pwl; i++) {
    let randomIndex = Math.floor(Math.random() * 72);
    password += caract[randomIndex];
  }

  return password;
}

let password = generatePassword(16);


console.log(`Generated password: ${password}`)
