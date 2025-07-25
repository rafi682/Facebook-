module.exports = {
    dashboardPassword: "your-password",
    logType: "json",
    note: "Change this to 'mongodb', 'tgBot' or 'json' as needed",
    timezone: "Asia/Dhaka",
    bot: {
        token: "telegram_bot_token",
        id: "telegram_chat_id",
        note: "Add telegram bot token and chatid for telegram log."
    },
    database: {
        mongodbURL: "mongo_url_here",
        note: "Add your mongodb database url here"
    },
    jsonPath: "./data/submissions.json"
};
