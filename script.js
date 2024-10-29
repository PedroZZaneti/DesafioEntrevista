function verParticipantes(eventoId) {
    // Simulando redirecionamento para página de participantes
    window.location.href = `participantes.html?evento=${eventoId}`;
}

// Simulando dados de participantes para cada evento
const participantesPorEvento = {
    1: [
        { nome: "Ana Costa da Silva", email: "ana@gmail.com" },
    ],
    2: [
        { nome: "Beatriz Gomes Azevedo", email: "beatriz@gmail.com" }
    ]
    3: [
        { nome: "Carlos Rodrigues", email: "carlos@gmail.com" }
    ]
    4: [
        { nome: "João Vitor Vasconcelos", email: "joaovitor@gmail.com" }
    ]
};

// Carregar participantes com base no evento selecionado
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = urlParams.get('evento');
    
    if (eventoId && participantesPorEvento[eventoId]) {
        const listaParticipantes = document.getElementById("lista-participantes");
        participantesPorEvento[eventoId].forEach(participante => {
            const li = document.createElement("li");
            li.textContent = `${participante.nome} (${participante.email})`;
            listaParticipantes.appendChild(li);
        });
    }

    // Adicionar novo participante
    const form = document.getElementById("form-participante");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        
        if (nome && email) {
            const li = document.createElement("li");
            li.textContent = `${nome} (${email})`;
            document.getElementById("lista-participantes").appendChild(li);
            form.reset();
        } else {
            alert("Preencha todos os campos.");
        }
    });
});
