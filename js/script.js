const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista")
const idade = document.querySelector("#idade")
const telefone = document.querySelector("#number")




/* eventos javaScript */
button.addEventListener("click", () => {
    event.preventDefault();

    /* Capturando o valor do input */
    const inputNameValue = nome.value;

    const inputIdadeValue = idade.value;

    const inputTelefoneValue = telefone.value;

    /* Criando um template HTML */
    const templateHTML = `
    <div class="div-script">
        <div class="inputs">
            <h4>DADOS</h4>
           <li>Nome:${ inputNameValue}</li>
           <li>Email:${ inputIdadeValue}</li>
           <li>Telefone:${ inputTelefoneValue}</li>
        </div>
       <div class="but">
        <button class="excluir-btn">Excluir</button>
       </div>
        </div>
    `

    /* Validando se o campo está vazio */
    if (inputNameValue === "" || inputIdadeValue === "" || inputTelefoneValue === "") {
        alert("Por favor preencha todos os campos!");
        return false;
    }


    /* Incluindo itens no html */
    lista.innerHTML += templateHTML;
    nome.value = "";
    idade.value = "";
    telefone.value = "";


    /* Limpando meu campo */

    nome.value = "";
    idade.value = "";
    telefone.value = "";
});
    /* Apagando dados */
    lista.addEventListener("click", (e) => {
        if (e.target.classList.contains("excluir-btn")) {
          const item = e.target.closest(".div-script");
          item.remove();
        }
      });   






