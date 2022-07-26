const fs = require("fs");
const login = require("fca-horizon-remake");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"}; // thông tin tai khoan facebok

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // đăng nhập
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); // tạo appstate.js
});
