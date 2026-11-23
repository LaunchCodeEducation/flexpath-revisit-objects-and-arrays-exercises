// Exercise 10: Object.seal and Object.freeze
// seal: no add/delete, but existing values CAN change.
// freeze: no add/delete/change at all.

// --- seal ---
const config = {
  apiEndpoint: "https://api.example.com",
  timeout: 5000,
};

Object.seal(config);

config.newProperty = true; // Fails silently (throws in strict mode)
config.timeout = 3000; // Succeeds - seal allows modifying existing properties
delete config.apiEndpoint; // Fails silently

console.log(config);
// { apiEndpoint: 'https://api.example.com', timeout: 3000 }

// --- freeze ---
const settings = {
  theme: "dark",
  version: 1.0,
};

Object.freeze(settings);

settings.newSetting = "value"; // Fails silently
settings.theme = "light"; // Fails silently - freeze blocks modification too
delete settings.version; // Fails silently

console.log(settings);
// { theme: 'dark', version: 1.0 }
