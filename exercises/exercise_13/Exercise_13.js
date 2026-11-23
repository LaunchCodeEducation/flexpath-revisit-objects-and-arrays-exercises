// Exercise 13: Hiding a Property with enumerable: false
// Non-enumerable properties are skipped by for...in AND JSON.stringify.

const user = {
  username: "john_doe",
  password: "secret",
  email: "john@example.com",
};

Object.defineProperty(user, "password", {
  enumerable: false,
});

for (let key in user) {
  console.log(key); // username, email (password is hidden)
}

console.log(JSON.stringify(user));
// {"username":"john_doe","email":"john@example.com"}
