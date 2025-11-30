// ╔════════════════════════════════════════════════════════════════╗
// ║                   🔱 UCHIHA-BOT MENU SYSTEM 🔱                ║
// ║                    Theme by Rúben Silver                       ║
// ║                    Versão: 10.0.1                              ║
// ╚════════════════════════════════════════════════════════════════╝

const UCHIHA_THEME = {
  prefix: "! ",
  border: "╔════════════════════════════════════╗",
  borderEnd: "╚════════════════════════════════════╝",
  empty: "║                                    ║",
  divider: "⚡ ✦ ◉ ✦ ⚡ ✦ ◉ ✦ ⚡ ✦ ◉ ✦ ⚡",
  logo: "🔱 ⚫ 𝐔𝐜𝐡𝐢𝐡𝐚-𝐁𝐨𝐭 ⚫ 🔱",
  welcome: "✨ Bem-vindo(a) ao poder Uchiha!  ✨",
  sharingan: "👁️ Sharingan Ativo - Online 👁️",
  footer: "🔱 Powered by Uchiha 🔱"
};

// ═══════════════════════════════════════════════════════════════════
// 📋 MENU PRINCIPAL
// ═══════════════════════════════════════════════════════════════════

const menuPrincipal = `${UCHIHA_THEME. border}
${UCHIHA_THEME.empty}
║  ${UCHIHA_THEME. divider}  ║
${UCHIHA_THEME.empty}
║           ${UCHIHA_THEME.logo}          ║
${UCHIHA_THEME.empty}
║       ${UCHIHA_THEME.welcome}       ║
${UCHIHA_THEME.empty}
║  ${UCHIHA_THEME.divider}  ║
${UCHIHA_THEME.empty}
${UCHIHA_THEME. borderEnd}`;

// ═══════════════════════════════════════════════════════════════════
// 🎮 MENU DE OPÇÕES
// ═══════════════════════════════════════════════════════════════════

const menuOpcoes = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║     🔱 UCHIHA BOT - MENU PRINCIPAL        ║
${UCHIHA_THEME. empty}
║           ${UCHIHA_THEME.sharingan}           ║
${UCHIHA_THEME.empty}
║ 📋 OPÇÕES DISPONÍVEIS:                     ║
${UCHIHA_THEME. empty}
║ 🏠 ${UCHIHA_THEME. prefix}menu            • Menu Principal       ║
║ 🤖 ${UCHIHA_THEME.prefix}menu-bot        • Funções do Bot       ║
║ 👮 ${UCHIHA_THEME.prefix}menu-adm        • Comandos Admin       ║
║ 👑 ${UCHIHA_THEME.prefix}menu-vip        • Funções VIP          ║
║ 👻 ${UCHIHA_THEME.prefix}menu-dono       • Comandos do Dono     ║
║ ❓ ${UCHIHA_THEME.prefix}menu-help       • Ajuda Completa       ║
║ 🎨 ${UCHIHA_THEME.prefix}menu-logos      • Pack de Logos        ║
║ 🎮 ${UCHIHA_THEME.prefix}menu-jogos      • Jogos Disponíveis    ║
║ 💎 ${UCHIHA_THEME.prefix}menu-premium    • Funções Premium      ║
║ 🎭 ${UCHIHA_THEME.prefix}menu-stickers  • Pacotes de Stickers  ║
║ 🔍 ${UCHIHA_THEME.prefix}menu-pesquisas • Buscas e Pesquisas   ║
║ 📥 ${UCHIHA_THEME.prefix}menu-downloads  • Downloads            ║
║ 😂 ${UCHIHA_THEME.prefix}menu-aleatórios • Conteúdo Aleatório   ║
║ 🎬 ${UCHIHA_THEME.prefix}menu-efeitos    • Efeitos em Imagens   ║
║ 🔧 ${UCHIHA_THEME.prefix}menu-alteradores• Editores e Ferramentas║
║ 📱 ${UCHIHA_THEME.prefix}menu-informativo• Informações Gerais    ║
║ 🎪 ${UCHIHA_THEME.prefix}menu-brincadeiras• Brincadeiras         ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME. borderEnd}

${UCHIHA_THEME. footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🏠 MENU BOT - Funções Gerais
// ═══════════════════════════════════════════════════════════════════

const menuBot = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║        🤖 UCHIHA BOT - FUNÇÕES GERAIS      ║
${UCHIHA_THEME.empty}
║ 📋 COMANDOS DISPONÍVEIS:                   ║
${UCHIHA_THEME.empty}
║ ⚙️ ${UCHIHA_THEME.prefix}ping             • Verificar latência    ║
║ ℹ️ ${UCHIHA_THEME.prefix}info             • Informações do Bot    ║
║ 👤 ${UCHIHA_THEME.prefix}perfil           • Ver seu perfil        ║
║ 💰 ${UCHIHA_THEME.prefix}saldo            • Ver seu saldo         ║
║ 📊 ${UCHIHA_THEME.prefix}stats            • Estatísticas          ║
║ 🌍 ${UCHIHA_THEME.prefix}idioma           • Mudar idioma          ║
║ 🎵 ${UCHIHA_THEME.prefix}prefix           • Alterar prefixo       ║
║ 🔔 ${UCHIHA_THEME.prefix}notificacoes     • Gerenciar notifs      ║
║ ⭐ ${UCHIHA_THEME.prefix}top              • Ranking de usuários   ║
║ 🏆 ${UCHIHA_THEME.prefix}conquistas       • Ver conquistas        ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 👮 MENU ADM - Comandos de Administração
// ═══════════════════════════════════════════════════════════════════

const menuAdm = `${UCHIHA_THEME. border}
${UCHIHA_THEME.empty}
║      👮 UCHIHA BOT - COMANDOS ADMIN        ║
${UCHIHA_THEME.empty}
║ 🔨 GERENCIAMENTO DE GRUPO:                 ║
${UCHIHA_THEME.empty}
║ 🚪 ${UCHIHA_THEME.prefix}kick [@user]     • Remover membro        ║
║ ⛔ ${UCHIHA_THEME.prefix}ban [@user]      • Banir permanentemente ║
║ ✅ ${UCHIHA_THEME.prefix}unban [@user]    • Desbanir membro       ║
║ 🤐 ${UCHIHA_THEME.prefix}mute [@user]     • Silenciar membro      ║
║ 🔊 ${UCHIHA_THEME.prefix}unmute [@user]   • Reativar som          ║
║ ⚠️ ${UCHIHA_THEME.prefix}warn [@user]     • Avisar membro         ║
║ 🗑️ ${UCHIHA_THEME.prefix}clear [número]  • Limpar mensagens      ║
║ 🔐 ${UCHIHA_THEME.prefix}lock             • Trancar grupo         ║
║ 🔓 ${UCHIHA_THEME.prefix}unlock           • Destrancar grupo      ║
║ 📌 ${UCHIHA_THEME.prefix}pin [número]     • Fixar mensagem        ║
║ 📍 {{UCHIHA_THEME. prefix}}unpin [número]  • Desafixar mensagem    ║
║ 👥 {{UCHIHA_THEME. prefix}}membros         • Listar membros        ║
║ ✍️ {{UCHIHA_THEME.prefix}}renomear        • Renomear grupo        ║
║ 🖼️ {{UCHIHA_THEME.prefix}}icone           • Mudar ícone           ║
║ 📝 {{UCHIHA_THEME.prefix}}descricao       • Mudar descrição       ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 👑 MENU VIP - Funções Premium
// ═══════════════════════════════════════════════════════════════════

const menuVip = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║       👑 UCHIHA BOT - FUNÇÕES VIP          ║
${UCHIHA_THEME.empty}
║ ✨ BENEFÍCIOS VIP:                         ║
${UCHIHA_THEME.empty}
║ 💎 {{UCHIHA_THEME. prefix}}vip-info        • Info sobre VIP        ║
║ 👁️ {{UCHIHA_THEME.prefix}}sharingan       • Ativar Sharingan      ║
║ ⚡ {{UCHIHA_THEME.prefix}}susanoo         • Invocar Susanoo       ║
║ 🔥 {{UCHIHA_THEME.prefix}}amaterasu       • Usar Amaterasu        ║
║ 💫 {{UCHIHA_THEME.prefix}}genjutsu        • Criar Genjutsu        ║
║ 🎨 {{UCHIHA_THEME.prefix}}filtro-vip      • Filtros exclusivos    ║
║ 🎬 {{UCHIHA_THEME.prefix}}efeito-premium  • Efeitos VIP           ║
║ 🎵 {{UCHIHA_THEME.prefix}}musica-hd       • Música HD             ║
║ 📥 {{UCHIHA_THEME.prefix}}download-vip    • Downloads VIP         ║
║ ⏱️ {{UCHIHA_THEME.prefix}}sem-espera      • Sem fila de espera    ║
║ 🎁 {{UCHIHA_THEME.prefix}}gift-vip        • Presentes VIP         ║
║ 💸 {{UCHIHA_THEME.prefix}}cash-boost      • Bônus de moeda        ║
│ ⭐ {{UCHIHA_THEME.prefix}}xp-boost        • Bônus de XP           ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 👻 MENU DONO - Comandos Exclusivos do Proprietário
// ═══════════════════════════════════════════════════════════════════

const menuDono = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║     👻 UCHIHA BOT - COMANDOS DO DONO       ║
${UCHIHA_THEME.empty}
║ 🔓 ACESSO TOTAL:                           ║
${UCHIHA_THEME.empty}
║ 💻 {{UCHIHA_THEME.prefix}}eval            • Executar código       ║
║ 🔄 {{UCHIHA_THEME.prefix}}restart         • Reiniciar bot         ║
║ 🛑 {{UCHIHA_THEME.prefix}}parar           • Parar bot             ║
║ 📢 {{UCHIHA_THEME.prefix}}broadcast       • Mensagem para todos   ║
║ 🌍 {{UCHIHA_THEME.prefix}}anuncio         • Anunciar globalmente  ║
║ 🎛️ {{UCHIHA_THEME.prefix}}setprefix       • Mudar prefixo         ║
║ 🎯 {{UCHIHA_THEME.prefix}}setstatus       • Mudar status          ║
║ 🔐 {{UCHIHA_THEME.prefix}}bloquear        • Bloquear usuário      ║
║ 🔓 {{UCHIHA_THEME.prefix}}desbloquear     • Desbloquear usuário   ║
║ 💾 {{UCHIHA_THEME.prefix}}backup          • Fazer backup          ║
║ 📊 {{UCHIHA_THEME.prefix}}database        • Gerenciar BD          ║
║ 🧹 {{UCHIHA_THEME.prefix}}limpar-cache    • Limpar cache          ║
║ 🔧 {{UCHIHA_THEME.prefix}}manutencao      • Modo manutenção       ║
║ 📜 {{UCHIHA_THEME.prefix}}logs            • Ver logs do sistema   ║
║ 🎁 {{UCHIHA_THEME.prefix}}darVIP          • Conceder VIP          ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// ❓ MENU HELP - Ajuda Completa
// ═══════════════════════════════════════════════════════════════════

const menuHelp = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║       ❓ UCHIHA BOT - AJUDA COMPLETA       ║
${UCHIHA_THEME. empty}
║ 📚 DOCUMENTAÇÃO:                           ║
${UCHIHA_THEME.empty}
║ 📖 {{UCHIHA_THEME.prefix}}ajuda           • Guia completo         ║
║ ❓ {{UCHIHA_THEME.prefix}}duvida          • Tirar dúvida          ║
║ 🆘 {{UCHIHA_THEME.prefix}}suporte         • Contato com suporte   ║
║ 📚 {{UCHIHA_THEME.prefix}}tutorial        • Tutoriais             ║
║ 🎓 {{UCHIHA_THEME.prefix}}aprender        • Aprender a usar       ║
║ 💬 {{UCHIHA_THEME.prefix}}dicas           • Dicas úteis           ║
║ 🔗 {{UCHIHA_THEME.prefix}}links           • Links importantes     ║
║ 📞 {{UCHIHA_THEME.prefix}}contato         • Contato do criador    ║
║ ⭐ {{UCHIHA_THEME.prefix}}sobre           • Sobre o bot           ║
║ 📋 {{UCHIHA_THEME.prefix}}creditos        • Créditos              ║
${UCHIHA_THEME.empty}
${UCHIHA_THEME. borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🎨 MENU LOGOS - Pack de Logos
// ═══════════════════════════════════════════════════════════════════

const menuLogos = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║      🎨 UCHIHA BOT - PACK DE LOGOS         ║
${UCHIHA_THEME.empty}
║ 🖼️ COLEÇÃO DISPONÍVEL:                    ║
${UCHIHA_THEME.empty}
║ 🔱 {{UCHIHA_THEME.prefix}}logo-uchiha     • Logo Uchiha           ║
║ 🌙 {{UCHIHA_THEME.prefix}}logo-moon       • Logo Lua              ║
║ ⚡ {{UCHIHA_THEME.prefix}}logo-thunder    • Logo Raio             ║
║ 🔥 {{UCHIHA_THEME.prefix}}logo-fire       • Logo Fogo             ║
║ 💧 {{UCHIHA_THEME.prefix}}logo-water      • Logo Água             ║
║ 🌪️ {{UCHIHA_THEME.prefix}}logo-wind      • Logo Vento            ║
║ 🌍 {{UCHIHA_THEME.prefix}}logo-earth      • Logo Terra            ║
║ ✨ {{UCHIHA_THEME.prefix}}logo-star       • Logo Estrela          ║
║ 💀 {{UCHIHA_THEME.prefix}}logo-skull      • Logo Caveira          ║
║ 👹 {{UCHIHA_THEME.prefix}}logo-demon      • Logo Demônio          ║
║ 🐉 {{UCHIHA_THEME.prefix}}logo-dragon     • Logo Dragão           ║
║ 🗡️ {{UCHIHA_THEME.prefix}}logo-espada     • Logo Espada           ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🎮 MENU JOGOS - Jogos Disponíveis
// ═══════════════════════════════════════════════════════════════════

const menuJogos = `${UCHIHA_THEME. border}
${UCHIHA_THEME.empty}
║      🎮 UCHIHA BOT - JOGOS DISPONÍVEIS     ║
${UCHIHA_THEME.empty}
║ 🕹️ DIVERSÃO E PRÊMIOS:                     ║
${UCHIHA_THEME.empty}
║ 🎰 {{UCHIHA_THEME.prefix}}slots           • Máquina caça-níqueis  ║
║ 🎲 {{UCHIHA_THEME.prefix}}dado            • Lançar dado           ║
║ 🪙 {{UCHIHA_THEME.prefix}}moeda           • Cara ou coroa         ║
║ 🃏 {{UCHIHA_THEME.prefix}}cartas          • Jogo de cartas        ║
║ 🎯 {{UCHIHA_THEME. prefix}}alvo            • Jogo do alvo          ║
║ 🏹 {{UCHIHA_THEME.prefix}}tiro            • Jogo do tiro          ║
║ 🎳 {{UCHIHA_THEME.prefix}}boliche         • Boliche               ║
║ ⛳ {{UCHIHA_THEME.prefix}}golf            • Golf                  ║
║ 🏀 {{UCHIHA_THEME.prefix}}basquete        • Basquete              ║
║ ⚽ {{UCHIHA_THEME.prefix}}futebol          • Futebol               ║
║ 🧠 {{UCHIHA_THEME.prefix}}trivia          • Trivia                ║
║ 🤔 {{UCHIHA_THEME.prefix}}adivinhe        • Adivinhe o número     ║
║ 🔮 {{UCHIHA_THEME.prefix}}bola8           • Bola de cristal       ║
║ 🚀 {{UCHIHA_THEME.prefix}}foguete         • Jogo do foguete       ║
║ 👾 {{UCHIHA_THEME.prefix}}aliens          • Invasão alien         ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 💎 MENU PREMIUM - Funções Premium
// ═══════════════════════════════════════════════════════════════════

const menuPremium = `${UCHIHA_THEME. border}
${UCHIHA_THEME.empty}
║     💎 UCHIHA BOT - FUNÇÕES PREMIUM        ║
${UCHIHA_THEME.empty}
║ 🌟 EXCLUSIVIDADES:                         ║
${UCHIHA_THEME.empty}
║ 🎁 {{UCHIHA_THEME.prefix}}comprar-vip     • Adquirir VIP          ║
║ 💳 {{UCHIHA_THEME.prefix}}metodos         • Métodos de pagamento  ║
║ 📊 {{UCHIHA_THEME.prefix}}preco           • Ver preços            ║
║ 🎯 {{UCHIHA_THEME.prefix}}oferta          • Ofertas especiais     ║
║ 📅 {{UCHIHA_THEME.prefix}}renovar         • Renovar VIP           ║
║ ⏰ {{UCHIHA_THEME.prefix}}vencimento      • Ver vencimento        ║
║ 💰 {{UCHIHA_THEME.prefix}}devolver        • Devolver moeda        ║
║ 🎁 {{UCHIHA_THEME.prefix}}resgatar        • Resgatar cupom        ║
║ 🏆 {{UCHIHA_THEME.prefix}}premium-top    • Ranking Premium       ║
║ 🎊 {{UCHIHA_THEME.prefix}}bonus           • Bônus especial        ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🎭 MENU STICKERS - Pacotes de Stickers
// ═══════════════════════════════════════════════════════════════════

const menuStickers = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║    🎭 UCHIHA BOT - PACOTES DE STICKERS     ║
${UCHIHA_THEME.empty}
║ 🖼️ COLEÇÕES DISPONÍVEIS:                  ║
${UCHIHA_THEME.empty}
║ 👺 {{UCHIHA_THEME.prefix}}stickers-anime   • Stickers Anime       ║
║ 🧟 {{UCHIHA_THEME.prefix}}stickers-horror  • Stickers Horror      ║
║ 😂 {{UCHIHA_THEME.prefix}}stickers-meme    • Stickers Meme        ║
║ 😻 {{UCHIHA_THEME.prefix}}stickers-gato    • Stickers Gato        ║
║ 🐶 {{UCHIHA_THEME.prefix}}stickers-cao     • Stickers Cão         ║
║ 🌺 {{UCHIHA_THEME.prefix}}stickers-flor    • Stickers Flores      ║
║ 🎮 {{UCHIHA_THEME.prefix}}stickers-game    • Stickers Games       ║
║ 🍕 {{UCHIHA_THEME.prefix}}stickers-comida  • Stickers Comida      ║
║ 🚗 {{UCHIHA_THEME.prefix}}stickers-carro   • Stickers Carros      ║
║ ❤️ {{UCHIHA_THEME.prefix}}stickers-amor    • Stickers Amor        ║
║ 🎵 {{UCHIHA_THEME.prefix}}stickers-musica  • Stickers Música      ║
║ 🌈 {{UCHIHA_THEME.prefix}}stickers-arco    • Stickers Arco-íris   ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🔍 MENU PESQUISAS - Buscas e Pesquisas
// ═══════════════════════════════════════════════════════════════════

const menuPesquisas = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║    🔍 UCHIHA BOT - BUSCAS E PESQUISAS      ║
${UCHIHA_THEME.empty}
║ 🔎 FERRAMENTAS DISPONÍVEIS:                ║
${UCHIHA_THEME.empty}
║ 🎵 {{UCHIHA_THEME.prefix}}musica          • Buscar música         ║
║ 🎬 {{UCHIHA_THEME.prefix}}filme           • Buscar filme          ║
║ 📺 {{UCHIHA_THEME.prefix}}serie           • Buscar série          ║
║ 🎮 {{UCHIHA_THEME.prefix}}jogo            • Buscar jogo           ║
║ 👨‍🎤 {{UCHIHA_THEME.prefix}}artista         • Buscar artista        ║
║ 📚 {{UCHIHA_THEME.prefix}}livro           • Buscar livro          ║
║ 📰 {{UCHIHA_THEME.prefix}}noticia         • Buscar notícia        ║
║ 🌍 {{UCHIHA_THEME.prefix}}pais            • Info sobre país       ║
║ 🏙️ {{UCHIHA_THEME.prefix}}cidade          • Info sobre cidade     ║
║ 🏢 {{UCHIHA_THEME.prefix}}empresa         • Info sobre empresa    ║
║ 📊 {{UCHIHA_THEME.prefix}}cripto          • Info criptomoeda      ║
║ 💱 {{UCHIHA_THEME.prefix}}cambio          • Câmbio de moedas      ║
║ 🌡️ {{UCHIHA_THEME.prefix}}clima           • Clima e tempo         ║
║ 🗺️ {{UCHIHA_THEME.prefix}}mapa            • Mapa de localização   ║
║ 📍 {{UCHIHA_THEME.prefix}}gps             • Coordenadas GPS       ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 📥 MENU DOWNLOADS - Downloads e Conversões
// ═══════════════════════════════════════════════════════════════════

const menuDownloads = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║      📥 UCHIHA BOT - DOWNLOADS             ║
${UCHIHA_THEME.empty}
║ 📁 GERENCIADOR DE DOWNLOADS:               ║
${UCHIHA_THEME.empty}
║ 🎥 {{UCHIHA_THEME.prefix}}video           • Baixar vídeo          ║
║ 🎵 {{UCHIHA_THEME.prefix}}audio           • Extrair áudio         ║
║ 📸 {{UCHIHA_THEME.prefix}}foto            • Baixar foto           ║
║ 📹 {{UCHIHA_THEME.prefix}}tiktok          • Baixar TikTok         ║
║ 📸 {{UCHIHA_THEME.prefix}}instagram       • Baixar Instagram      ║
║ 🎥 {{UCHIHA_THEME.prefix}}youtube         • Baixar YouTube        ║
║ 🐦 {{UCHIHA_THEME.prefix}}twitter         • Baixar Twitter        ║
║ 📱 {{UCHIHA_THEME. prefix}}facebook        • Baixar Facebook       ║
║ 🎬 {{UCHIHA_THEME.prefix}}snapchat        • Baixar Snapchat       ║
║ 🎵 {{UCHIHA_THEME.prefix}}spotify         • Baixar Spotify        ║
║ 🎶 {{UCHIHA_THEME.prefix}}soundcloud      • Baixar SoundCloud     ║
║ 📖 {{UCHIHA_THEME.prefix}}pdf             • Converter para PDF    ║
║ 🖼️ {{UCHIHA_THEME.prefix}}jpg             • Converter para JPG    ║
║ 🎬 {{UCHIHA_THEME.prefix}}mp4             • Converter para MP4    ║
║ 🔊 {{UCHIHA_THEME.prefix}}mp3             • Converter para MP3    ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 😂 MENU ALEATÓRIOS - Conteúdo Aleatório
// ═══════════════════════════════════════════════════════════════════

const menuAleatórios = `${UCHIHA_THEME.border}
${UCHIHA_THEME. empty}
║    😂 UCHIHA BOT - CONTEÚDO ALEATÓRIO      ║
${UCHIHA_THEME.empty}
║ 🎲 SURPRESAS E DIVERSÃO:                   ║
${UCHIHA_THEME.empty}
║ 😂 {{UCHIHA_THEME.prefix}}meme            • Meme aleatório        ║
║ 🐱 {{UCHIHA_THEME.prefix}}gato            • Foto de gato          ║
║ 🐶 {{UCHIHA_THEME.prefix}}cachorro        • Foto de cachorro      ║
║ 🦊 {{UCHIHA_THEME.prefix}}raposa          • Foto de raposa        ║
║ 🐤 {{UCHIHA_THEME.prefix}}passaro         • Foto de pássaro       ║
║ 🦘 {{UCHIHA_THEME.prefix}}coala           • Foto de coala         ║
║ 🐨 {{UCHIHA_THEME.prefix}}urso            • Foto de urso          ║
║ 🐹 {{UCHIHA_THEME.prefix}}hamster         • Foto de hamster       ║
║ 🦎 {{UCHIHA_THEME.prefix}}lagarto         • Foto de lagarto       ║
║ 🐢 {{UCHIHA_THEME.prefix}}tartaruga       • Foto de tartaruga     ║
║ 🐧 {{UCHIHA_THEME.prefix}}pinguim         • Foto de pinguim       ║
║ 🦤 {{UCHIHA_THEME.prefix}}quokka          • Foto de Quokka        ║
║ 😍 {{UCHIHA_THEME.prefix}}fofo            • Coisa fofa aleatória  ║
║ 🎨 {{UCHIHA_THEME.prefix}}arte            • Arte aleatória        ║
║ 🌈 {{UCHIHA_THEME.prefix}}cor             • Cor aleatória         ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🎬 MENU EFEITOS - Efeitos em Imagens
// ═══════════════════════════════════════════════════════════════════

const menuEfeitos = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║   🎬 UCHIHA BOT - EFEITOS EM IMAGENS       ║
${UCHIHA_THEME.empty}
║ 🎨 FILTROS E TRANSFORMAÇÕES:               ║
${UCHIHA_THEME.empty}
║ ⚫ {{UCHIHA_THEME.prefix}}pb              • Preto e Branco        ║
║ 🌈 {{UCHIHA_THEME.prefix}}arco-iris       • Filtro Arco-íris      ║
║ 🔴 {{UCHIHA_THEME.prefix}}vermelho        • Filtro Vermelho       ║
║ 🟢 {{UCHIHA_THEME.prefix}}verde           • Filtro Verde          ║
║ 🔵 {{UCHIHA_THEME.prefix}}azul            • Filtro Azul           ║
║ 🟡 {{UCHIHA_THEME.prefix}}amarelo         • Filtro Amarelo        ║
║ 💜 {{UCHIHA_THEME.prefix}}roxo            • Filtro Roxo           ║
║ 🌊 {{UCHIHA_THEME.prefix}}onda            • Efeito de Onda        ║
║ 🌪️ {{UCHIHA_THEME.prefix}}tornado         • Efeito Tornado        ║
║ ❄️ {{UCHIHA_THEME.prefix}}gelo            • Efeito Gelo           ║
║ 🔥 {{UCHIHA_THEME.prefix}}fogo            • Efeito Fogo           ║
║ 💧 {{UCHIHA_THEME.prefix}}agua            • Efeito Água           ║
║ ✨ {{UCHIHA_THEME.prefix}}brilho           • Efeito Brilho         ║
║ 👻 {{UCHIHA_THEME.prefix}}fantasma        • Efeito Fantasma       ║
║ 🎭 {{UCHIHA_THEME.prefix}}mascara         • Aplicar Máscara       ║
║ 🖌️ {{UCHIHA_THEME.prefix}}pincel          • Efeito Pincel         ║
║ 🎪 {{UCHIHA_THEME.prefix}}circo           • Efeito Circo          ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🔧 MENU ALTERADORES - Editores e Ferramentas
// ═══════════════════════════════════════════════════════════════════

const menuAlteradores = `${UCHIHA_THEME. border}
${UCHIHA_THEME.empty}
║   🔧 UCHIHA BOT - EDITORES E FERRAMENTAS   ║
${UCHIHA_THEME.empty}
║ 🛠️ FERRAMENTAS DISPONÍVEIS:                ║
${UCHIHA_THEME.empty}
║ ✏️ {{UCHIHA_THEME.prefix}}editar          • Editor de imagem      ║
║ 🖼️ {{UCHIHA_THEME.prefix}}recortar        • Recortar imagem       ║
║ 📐 {{UCHIHA_THEME.prefix}}redimensionar   • Mudar tamanho         ║
║ 🔄 {{UCHIHA_THEME.prefix}}rotacao         • Girar imagem          ║
║ 🔀 {{UCHIHA_THEME.prefix}}espelho         • Espelhar imagem       ║
║ 📏 {{UCHIHA_THEME.prefix}}proporcao       • Ajustar proporção     ║
║ 📝 {{UCHIHA_THEME.prefix}}texto           • Adicionar texto       ║
║ 🎨 {{UCHIHA_THEME.prefix}}pintar          • Pintar com cores      ║
║ 🖍️ {{UCHIHA_THEME.prefix}}desenho         • Desenhar na imagem    ║
║ 📌 {{UCHIHA_THEME.prefix}}marcador        • Usar marcadores       ║
║ 💠 {{UCHIHA_THEME.prefix}}formas          • Desenhar formas       ║
║ 🌟 {{UCHIHA_THEME.prefix}}adesivos        • Colocar adesivos      ║
║ 🧩 {{UCHIHA_THEME.prefix}}mosaico         • Criar mosaico         ║
║ 🎬 {{UCHIHA_THEME.prefix}}gif             • Criar GIF             ║
║ 📊 {{UCHIHA_THEME.prefix}}grafico         • Criar gráfico         ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 📱 MENU INFORMATIVO - Informações Gerais
// ═══════════════════════════════════════════════════════════════════

const menuInformativo = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║    📱 UCHIHA BOT - INFORMAÇÕES GERAIS      ║
${UCHIHA_THEME.empty}
║ ℹ️ CENTRO DE INFORMAÇÕES:                  ║
${UCHIHA_THEME. empty}
║ 🤖 {{UCHIHA_THEME.prefix}}bot-info        • Info do Bot           ║
║ 📚 {{UCHIHA_THEME.prefix}}guia            • Guia de Uso           ║
║ 🎯 {{UCHIHA_THEME.prefix}}roadmap         • Roadmap do Projeto    ║
║ ⭐ {{UCHIHA_THEME.prefix}}features        • Recursos             ║
║ 🎁 {{UCHIHA_THEME.prefix}}novidades       • O que há de novo      ║
║ 🔄 {{UCHIHA_THEME.prefix}}atualizado      • Últimas atualizações  ║
║ 📊 {{UCHIHA_THEME.prefix}}estatisticas    • Estatísticas gerais   ║
║ 👥 {{UCHIHA_THEME.prefix}}usuarios        • Info de usuários      ║
║ 🌍 {{UCHIHA_THEME.prefix}}servidores      • Status dos servidores ║
║ 🔌 {{UCHIHA_THEME.prefix}}ping            • Verificar conexão     ║
║ 📞 {{UCHIHA_THEME.prefix}}contatos        • Contatos úteis        ║
║ 🆘 {{UCHIHA_THEME.prefix}}emergencia      • Contato de emergência ║
║ 🎓 {{UCHIHA_THEME.prefix}}educacao        • Material educativo    ║
║ 💡 {{UCHIHA_THEME.prefix}}dicas           • Dicas e truques       ║
║ 🔐 {{UCHIHA_THEME.prefix}}privacidade     • Política de privacidade║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 🎪 MENU BRINCADEIRAS - Brincadeiras
// ═══════════════════════════════════════════════════════════════════

const menuBrincadeiras = `${UCHIHA_THEME.border}
${UCHIHA_THEME.empty}
║     🎪 UCHIHA BOT - BRINCADEIRAS           ║
${UCHIHA_THEME.empty}
║ 🎉 DIVERSÃO E RISADAS:                     ║
${UCHIHA_THEME.empty}
║ 😂 {{UCHIHA_THEME.prefix}}piada           • Contar piada          ║
║ 🤪 {{UCHIHA_THEME.prefix}}zuera           • Zoação com membro     ║
║ 🎭 {{UCHIHA_THEME.prefix}}tapa            • Dar um tapa           ║
║ 💔 {{UCHIHA_THEME.prefix}}humilhar        • Humilhar membro       ║
║ 🎊 {{UCHIHA_THEME.prefix}}festa           • Comemorar             ║
║ 🎈 {{UCHIHA_THEME.prefix}}balao           • Estourar balão        ║
║ 🎆 {{UCHIHA_THEME.prefix}}fogos           • Soltar fogos          ║
║ ❤️ {{UCHIHA_THEME.prefix}}amor            • Teste de amor         ║
║ 💕 {{UCHIHA_THEME.prefix}}crush           • Descobrir crush       ║
║ 💬 {{UCHIHA_THEME.prefix}}conversa        • Iniciar conversa      ║
║ 🎤 {{UCHIHA_THEME.prefix}}microfone       • Cantar no microfone   ║
║ 🎸 {{UCHIHA_THEME.prefix}}guitarra        • Tocar guitarra        ║
║ 🥁 {{UCHIHA_THEME.prefix}}bateria         • Tocar bateria         ║
║ 🎹 {{UCHIHA_THEME.prefix}}piano           • Tocar piano           ║
║ 🎺 {{UCHIHA_THEME.prefix}}trompeta        • Tocar trompeta        ║
${UCHIHA_THEME. empty}
${UCHIHA_THEME.borderEnd}

${UCHIHA_THEME.footer}`;

// ═══════════════════════════════════════════════════════════════════
// 📤 EXPORTS - Exportar os Menus
// ═══════════════════════════════════════════════════════════════════

module.exports = {
  UCHIHA_THEME,
  menuPrincipal,
  menuOpcoes,
  menuBot,
  menuAdm,
  menuVip,
  menuDono,
  menuHelp,
  menuLogos,
  menuJogos,
  menuPremium,
  menuStickers,
  menuPesquisas,
  menuDownloads,
  menuAleatórios,
  menuEfeitos,
  menuAlteradores,
  menuInformativo,
  menuBrincadeiras
};
