import { db } from '../config/database.js';
import { formatBalance } from '../utils/helpers.js';

export async function commandSaldo(sock, message) {
    const userId = message.key.participant || message.key.remoteJid;
    const balance = db.getBalance(userId);
    
    const response = `${formatBalance(balance)}\n\nUse !transferir @user valor para enviar moedas!`;
    await sock.sendMessage(message.key.remoteJid, { text: response });
}

export async function commandTransferir(sock, message, args) {
    const userId = message.key.participant || message.key.remoteJid;
    const amount = parseInt(args[1]);

    if (!args[0] || !amount || amount <= 0) {
        await sock.sendMessage(message.key.remoteJid, { 
            text: '❌ Uso correto: !transferir @user valor' 
        });
        return;
    }

    const balance = db.getBalance(userId);
    if (balance < amount) {
        await sock.sendMessage(message.key.remoteJid, { 
            text: `❌ Saldo insuficiente! Você tem ${formatBalance(balance)}` 
        });
        return;
    }

    db.removeBalance(userId, amount);
    db.addBalance('general', amount);

    await sock.sendMessage(message.key.remoteJid, { 
        text: `✅ Transferência de ${formatBalance(amount)} realizada com sucesso!` 
    });
}

export async function commandDiario(sock, message) {
    const userId = message.key.participant || message.key.remoteJid;
    const user = db.getUser(userId);
    
    if (!user) {
        await sock.sendMessage(message.key.remoteJid, { text: '❌ Usuário não encontrado!' });
        return;
    }

    const reward = 500;
    db.addBalance(userId, reward);
    
    await sock.sendMessage(message.key.remoteJid, { 
        text: `✅ Recompensa diária! Você recebeu ${formatBalance(reward)}` 
    });
}
