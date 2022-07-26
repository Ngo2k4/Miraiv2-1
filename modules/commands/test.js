module.exports.config = {
    name: "test",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ABCD",
    description: "",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function({api, event, args}){
    api.sendMessage("123123123123", event.threadID, event.messageID)
}