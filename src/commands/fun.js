import { getRandomJoke } from '../utils/jokes.js';

export async function commandPiada(sock, message) {
    const joke = getRandomJoke();
    await sock.sendMessage(message.key.remoteJid, { text: joke });
}

export async function commandDado(sock, message) {
    const result = Math.floor(Math.random() * 6) + 1;
    const emoji = ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲'][result - 1];
    await sock.sendMessage(message.key.remoteJid, { 
        text: `${emoji} Você tirou um ${result}!` 
    });
}

export async function commandMoeda(sock, message) {
    const result = Math.random() < 0.5 ? 'Cara' : 'Coroa';
    const emoji = result === 'Cara' ? '🪙' : '🪙';
    await sock.sendMessage(message.key.remoteJid, { 
        text: `${emoji} Resultado: ${result}!` 
    });
}
