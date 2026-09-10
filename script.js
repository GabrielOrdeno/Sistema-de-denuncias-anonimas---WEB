// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Selecionando os botões da página principal
    const btnRegistrar = document.getElementById("btn-registrar");
    const btnConsultar = document.getElementById("btn-consultar");
    const btnNavDenuncia = document.getElementById("btn-nav-denuncia");
    const btnNavConsulta = document.getElementById("btn-nav-consulta");
    const btnAdmin = document.querySelector(".btn-admin");

    // Função simulando a abertura do formulário de denúncia
    const abrirFormularioDenuncia = () => {
        alert("PROTÓTIPO: Redirecionando para a tela de 'Formulário de Nova Denúncia'.\nNesta tela, o usuário preencheria os dados do crime anonimamente.");
    };

    // Função simulando a tela de consulta de protocolo
    const abrirConsultaProtocolo = () => {
        const protocolo = prompt("Simulação: Digite o número do seu protocolo para consultar:");
        if(protocolo) {
            alert(`Buscando no banco de dados...\nO status do protocolo ${protocolo} é: "EM ANÁLISE PELA DELEGACIA".`);
        }
    };

    // Função simulando acesso restrito da delegacia
    const acessarAreaDelegacia = () => {
        const senha = prompt("Acesso Restrito - Administrador da Delegacia\nDigite a senha de acesso:");
        if (senha === "admin123") {
            alert("Acesso Permitido! Bem-vindo ao Painel de Gestão de Denúncias.");
        } else if (senha !== null) {
            alert("Senha incorreta. Acesso negado.");
        }
    };

    // Adicionando os eventos de clique aos botões
    if(btnRegistrar) btnRegistrar.addEventListener("click", abrirFormularioDenuncia);
    if(btnNavDenuncia) btnNavDenuncia.addEventListener("click", abrirFormularioDenuncia);
    
    if(btnConsultar) btnConsultar.addEventListener("click", abrirConsultaProtocolo);
    if(btnNavConsulta) btnNavConsulta.addEventListener("click", abrirConsultaProtocolo);
    
    if(btnAdmin) btnAdmin.addEventListener("click", acessarAreaDelegacia);

});
