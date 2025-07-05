// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContato');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
      const resultado = document.getElementById('resultado');

      if (!nome || !email || !mensagem) {
        resultado.textContent = 'Por favor, preencha todos os campos.';
        resultado.style.color = 'red';
        return;
      }

      // validação do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        resultado.textContent = 'Por favor, insira um e-mail válido.';
        resultado.style.color = 'red';
        return;
      }

      resultado.textContent = 'Mensagem enviada com sucesso! Obrigada pelo contato.';
      resultado.style.color = 'green';

      // Limpar campos
      form.reset();
    });
  }
});

// Efeito interativo: mudar cor do botão de envio ao passar o mouse
const botao = document.querySelector('button');
if (botao) {
  botao.addEventListener('mouseenter', () => {
    botao.style.backgroundColor = '#a07d45';
  });
  botao.addEventListener('mouseleave', () => {
    botao.style.backgroundColor = '#c59d5f';
  });
}
