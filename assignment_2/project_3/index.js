function validateEmail(email, domains) {
  const domain = email.split('@')[1];
  console.log('domain', domain);

  if (!domains.includes(domain)) {
    console.log('Invalid email.');
    return false;
  } else {
    console.log('Valid email.');
    return true;
  }
}

const email1 = 'dhaiwatpandya@gmail.com';
const email2 = 'dhaiwatpandya@test.com';

const allowedDomains = ['gmail.com', 'yahoo.com'];

validateEmail(email1, allowedDomains);
validateEmail(email2, allowedDomains);
