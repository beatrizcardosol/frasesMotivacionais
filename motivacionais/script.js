
const frases = [
    "Abrace o erro e evolua.",
    "Primeiro você começa, depois você melhora!",
    "Cada linha de código te deixa mais forte!",
    "O tempo pode ser lento, mas ele é seu!",
    "Persistência vence talento quando o talento não persiste.",
    "O aprendizado pode parecer lento, mas cada linha de código te aproxima do seu objetivo.",
    "O erro não é um fim, é só um degrau na escada do aprendizado.",
    "Primeiro você apanha do código, depois ele começa a fazer sentido, e então… ele obedece!",
    "Seu ritmo é único. Comparações só fazem sentido se for com quem você era ontem.",
    "Cada commit é um lembrete de que você está evoluindo.",
    "Você já superou desafios antes. Esse é só mais um caminho a ser desbravado!",
    "Mesmo quando parece difícil, lembre-se: você já aprendeu coisas que um dia achou impossíveis!",
    
    
];

function gerarFrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.querySelector(".frase").textContent = fraseAleatoria;
}