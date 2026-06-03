const questionBank = [
    {
        keywords: ["salut", "buna", "hey", "ciao"],
        answer: "Salut! Sunt asistentul virtual Barul Pe Roți. Cu ce te pot ajuta astăzi?"
    },
    {
        keywords: ["pret", "preturi", "cost", "cat costa"],
        answer: "Pachetele noastre încep de la 2500 RON. Poți vedea lista detaliată pe pagina 'Pachete și Prețuri'."
    },
    {
        keywords: ["cocktail", "bauturi", "meniu"],
        answer: "Oferim o gamă largă de cocktailuri clasice și signature, precum și mocktails (non-alcoolice). Folosim doar ingrediente proaspete!"
    },
    {
        keywords: ["eveniment", "nunta", "botez", "party"],
        answer: "Suntem specializați în nunți, botezuri și evenimente corporate. Aduceți barul unde e petrecerea!"
    },
    {
        keywords: ["contact", "locatie", "unde"],
        answer: "Ne găsești în Timișoara, dar ne deplasăm oriunde în zonă. Folosește pagina de Contact pentru o ofertă personalizată."
    },
    {
        keywords: ["multumesc", "mersi"],
        answer: "Cu mare drag! Dacă mai ai întrebări, sunt aici."
    }
];

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

    const messageContent = document.createElement('p');
    messageContent.textContent = text;

    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userInput) {
    const input = userInput.toLowerCase();

    for (const item of questionBank) {
        for (const keyword of item.keywords) {
            if (input.includes(keyword)) {
                return item.answer;
            }
        }
    }

    return "Ne pare rău, nu am înțeles întrebarea. Încearcă să folosești cuvinte cheie precum 'preț', 'cocktail' sau 'contact'.";
}

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = chatInput.value.trim();

    if (message !== "") {
        addMessage(message, 'user');
        chatInput.value = "";

        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
});

window.onload = () => {
    setTimeout(() => {
        addMessage("Bună! Întreabă-mă orice despre Barul Pe Roți.", "bot");
    }, 300);
};
