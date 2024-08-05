<p align="center">
  <a href="https://discord.com/invite/eWcNKXmsgw" target="_blank">
    <img src="https://img.shields.io/badge/Discord-%2300b0ff?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  </a>
  <a href="https://emirhankaya.net" target="_blank">
    <img src="https://img.shields.io/badge/Website-%23000000?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website" />
  </a>
  <a href="https://x.com/EmirhanKaya_41" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="X" />
  </a>
</p>

[![Discord Presence](https://lanyard.cnrad.dev/api/496393095282294796)](https://discord.com/users/496393095282294796)

# 🤖 Discord v14 Bot Infrastructure

This project is a bot infrastructure prepared using version 14 of the Discord.js library. It provides an easy-to-use, flexible, and extensible structure, allowing you to quickly develop your own Discord bot.

## ⚙️ Setup

### 📕 Requirements

- Node.js v16 or higher
- NPM or Yarn

### 📕 Steps

1. Clone this project:

    ```bash
    git clone https://github.com/Danteon0/discord-bot-template-v14.git
    cd discord-bot-template-v14
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Edit the `config.json` file and enter the required information:

    ```json
    {  
      "author": ["AUTHOR_ID"], // Your Discord profile ID
      "token": "BOT_TOKEN", // Your bot token
      "clientId": "CLIENT_ID" // Your bot ID
    }
    ```

4. Start the bot:

    ```bash
    node main.js
    ```

## 📖 Usage

- Commands are located in the `commands` folder. To add a new command, create a new JavaScript file in this folder.
- Events are located in the `events` folder. To add a new event, create a new JavaScript file in this folder.

## 🤝 Contribution

We welcome contributions! Please read the [CONTRIBUTING.md](contributing.md) file before contributing.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

You can use this infrastructure to develop your own bot projects and contribute to the Discord community. Happy coding!

## 📗Detailed Setup Guide

### 📌 Creating a Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click on the "New Application" button.
3. Enter a name for your application and click "Create".
4. Navigate to the "Bot" section on the left sidebar.
5. Click on "Add Bot" and confirm.
6. Your bot is now created. You can find the "Token" here, which you will use in your `config.json`.

### 📌 Obtaining a Bot Token

1. In the "Bot" section of your application, click on the "Copy" button under the "Token" section. 
2. Paste this token into the `config.json` file as shown above.

### 📌 Enabling Intents

1. In the "Bot" section of your application, scroll down to the "Privileged Gateway Intents" section.
2. Enable the "Presence Intent" and "Server Members Intent" if your bot requires them.

### 📌 Getting a Bot Invite Link

1. Go to the "OAuth2" section on the left sidebar.
2. Click on "URL Generator".
3. In the "Scopes" section, select "bot" and "applications.commands".
4. In the "Bot Permissions" section, select the permissions your bot needs.
5. Copy the generated URL and use it to invite your bot to your server.

### 📌 Installing Node.js

1. Go to the [Node.js official website](https://nodejs.org/).
2. Download the LTS version suitable for your operating system.
3. Follow the installation instructions provided.
---

## 🛠️ Support

If you need help or have any questions, feel free to reach out:

- **Join our Discord server:** [Join here](https://discord.com/invite/eWcNKXmsgw)
- **Visit our website:** [emirhankaya.net](https://emirhankaya.net)
- **Follow on Twitter:** [EmirhanKaya_41](https://x.com/EmirhanKaya_41)

By following these detailed instructions, you can set up your own Discord bot using this infrastructure. Enjoy building your bot!