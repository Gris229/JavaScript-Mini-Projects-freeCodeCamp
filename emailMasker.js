function maskEmail(email) {
  let emailArobaseIndex = email.indexOf("@");
  emailArobaseIndex--;
  let emailSlice = email.slice(1,emailArobaseIndex);
  let emailSliceLength = emailSlice.length;
  let emailReplace = "*".repeat(emailSliceLength);
  emailReplace = email.replace(emailSlice, emailReplace);
  
  return emailReplace;
}

let email = "grisdev229@gmail.com";

console.log(maskEmail(email));
