const bcrypt = require("bcryptjs");

const helpers = {};

helpers.encrypt = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

helpers.matchPassword = async (password, savedPassword) => {
    try{
        await bcrypt.compare(password, savedPassword);
    }
    catch(e) {
        console.log(e);
    };
};

module.exports = helpers;