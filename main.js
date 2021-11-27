alert("Bem vindo ao banco JavaScript!")

let senha = ""
let senhaDigitada = prompt("Digite a senha da sua nova conta:")
let senhaConfirm = prompt("Digite a sua senha novamente para confirmação.")

if(senhaDigitada === senhaConfirm){
    let senha = senhaConfirm
    alert("Senha cadastrada com sucesso, sua senha é " + senhaConfirm)
} else {
    alert("As senhas não conferem, o aplicativo será encerrado.")
    exit
}

let menu = ""
let saldo = 0
let sacar = 0
let depositar = 0

function stop(){
    alert("O aplicativo está sendo encerrado!")
}

function ShowMenu(){
    let menu
    do {
        let menu = prompt("Bem vindo ao menu, escolha a opção desejada:\n" +
            "1 : Saldo em conta\n" +
            "2 : Sacar dinheiro\n" +
            "3 : Depositar dinheiro\n" +
            "4 : Encerrar aplicativo\n")
            switch (menu){
                case "1":
                    alert("Seu saldo atual é de R$ " + saldo)
                    break
                case "2":
                    sacar = +prompt("Informe o valor que deseja sacar:")
                    saldo = saldo - sacar
                    break
                case "3":
                    depositar = +prompt("Informe o valor que deseja depositar:")
                    saldo = saldo + depositar
                    break
                case "4":
                    stop()
                    breack
                default :
                    alert("Opção invalida!")
                }    
    } while(menu != "4")
}

ShowMenu()