// ===== CONTADOR DE PEDIDOS =====

const botoes = document.querySelectorAll(".btn-add");

let total = 0;

// cria caixa do contador
const pedidoBox = document.createElement("div");

pedidoBox.classList.add("pedido-box");

pedidoBox.innerHTML = `
🛒 Pedido: <span id="contador-pedido">0</span>
`;

// adiciona no cardápio
const cardapio = document.querySelector("#cardapio .container");

cardapio.appendChild(pedidoBox);

// ação dos botões
botoes.forEach((botao) => {

  botao.addEventListener("click", () => {

    total++;

    document.getElementById("contador-pedido").textContent = total;

    // efeito visual
    botao.textContent = "Adicionado ✓";

    botao.style.background = "#2e7d32";

    setTimeout(() => {

      botao.textContent = "Adicionar";

      botao.style.background = "#6a1b9a";

    }, 1200);

  });

});

// ===== FORMULÁRIO =====

const form = document.querySelector(".form");

// cria feedback automático
const feedback = document.createElement("p");

feedback.id = "form-feedback";

form.appendChild(feedback);

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const nome = form.querySelector('input[type="text"]').value.trim();

  const email = form.querySelector('input[type="email"]').value.trim();

  const mensagem = form.querySelector("textarea").value.trim();

  feedback.classList.remove("success", "error");

  // validação
  if (!nome || !email || !mensagem) {

    feedback.textContent = "Preencha todos os campos.";

    feedback.classList.add("error");

    return;
  }

  if (!email.includes("@") || !email.includes(".")) {

    feedback.textContent = "Digite um e-mail válido.";

    feedback.classList.add("error");

    return;
  }

  // sucesso
  feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

  feedback.classList.add("success");

  form.reset();

});

// ===== SCROLL SUAVE =====

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {

      destino.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// ===== ANO AUTOMÁTICO =====

const footerSpan = document.querySelector(".footer-content span");

const anoAtual = new Date().getFullYear();

footerSpan.innerHTML = `
© ${anoAtual} Açaí Tropical — Todos os direitos reservados.
`;
