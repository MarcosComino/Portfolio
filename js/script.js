function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    //expressão para verificar se o email é valido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //verifica se os campos estão todos preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return false;
    }

    //verifica se o email é valido
    if (!regex.test(email)) {
        alert("Email Invalido!");
        return false;
    }

    alert("Formulario Enviado com Sucesso!")
    //limpa os campos do formulario depois de enviado com sucesso
    document.getElementById("formulario").reset();
    return true;
}