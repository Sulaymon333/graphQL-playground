// Named export - has a specified name. can have as many as required.
// Default export - has a NO specified name. can ONLY have ONE.

const message = 'Some message to export from myModule.js';
const name = 'Sulaymon';
const location = 'Finland';
const getGreeting = name => `Welcome to the course ${name}`;

export { message, name, getGreeting, location as default };
