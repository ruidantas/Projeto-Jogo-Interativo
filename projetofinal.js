const prompt = require("prompt-sync")()
console.clear()

while (true) {

    // variaveis
let destino
let conhecimento = 0
let treino = 0
let hemopraga = 0
let fissura = 0


// objeto
let tempo = {
    dia : 1,
    hora: 7,
    minuto: 0,
    alterarMin: function (a) {
        this.minuto += a
        if (this.minuto >= 60) {
            this.min -= 60
            this.hora++
        }
        if (this.hora >= 24) {
            this.hora -= 24
            this.dia++
        }
        
    },
    mostrarData: function(){
        console.log(`Dia: ${this.dia}`)
        console.log(`Hora: ${this.hora}h ${this.minuto}min`)
    },
    
    passarHora: function (addhora){
        return (tempo.hora += addhora)
    },

    passarDia: function (addDia) {
        return (tempo.dia += addDia)
    }
}


let personagem = {
    vida: 100,
    ataque: 25,
    defesa: 25,


    mostrarVida: function(){
        console.log(`Vida ${nomeJogador}: ${this.vida.toFixed(2)}`)
        
    },

    habilidadeCura: function() {
        if (personagem.vida <= 40) {
            console.log('Benção divina desbloqueada. Deseja usar?')
            let desejarusar = prompt()
            if (desejarusar == "sim" || desejarusar == "s") {
                console.log(`${nomeJogador} BENÇÃO DIVINA!`)
                console.log(`Você defendeu e se curou!`)
                ganhaVidaPers(40)
                personagem.mostrarVida()
            } else { 
            personagem.mostrarVida()

            }

        }
        
    },

    descanso: function(){
        if (personagem.vida < 80) {
            
            this.mostrarVida()
            console.log(`Você deseja descansar?`)
            let escolha = prompt().toLowerCase()
            console.clear() 
            while (escolha != "nao" && escolha != "n" && escolha != "sim" && escolha != "s") {
                console.log('Digite apenas "sim" ou "nao"')
                console.log(`Você deseja descansar?`)
                 escolha = prompt().toLowerCase() }

            if (escolha == `s` || escolha == `sim`) {
                tempo.passarDia(1)
                personagem.vida = 100
                console.clear()
  
            }
            
              
        }
    }
    
}

let Estevan = {
    vida: 150,
    ataque: 20,
    defesa: 20,

    mostraVidaEstevan: function(){
        console.log(`Vida Estevan: ${this.vida}`)
    }
}

let ogro = {
    vida: 200,
    ataque: 30,
    defesa: 30,

    mostraVidaOgro: function(){
        console.log(`Vida Ogro: ${this.vida.toFixed(2)}`) }
}

let reiDemonio = {
    vida: 400,
    ataque: 40,
    defesa: 40,

    mostrarVidaRei: function(){
        console.log(`Vida Rei Demônio: ${this.vida.toFixed(2)}`) }
}
// funções

function continuar() {
    console.log()
    prompt(`Pressione [ENTER] para prosseguir...`)
  }

function dado() {
   let random = Math.floor(Math.random() * 30 + 1 )

    
    while (random < 15) {
    random = Math.floor(Math.random() * 30 + 1)
    }
    return random

  }

function mostrarDestino() {
    for(let n of listaDestino) {
        console.log(n)
    }
    }

function ganhaVidaPers (vida) {
        return (personagem.vida += vida)
      }    
    
function perdeVidaPers (dano) {
        return (personagem.vida -= dano)
      }

function perdeVidaEstevan(dano) {
        return (Estevan.vida -= dano)
      }

function perdeVidaOgro (dano) {
    return (ogro.vida -= dano)
}

function perdeVidaRei (dano) {
    return (reiDemonio.vida -= dano)
}

function ganhaVidaRei (vida) {
    return (reiDemonio.vida += vida)
  }  
  



console.log(`=======\nBem-vindo ao Yggdrasil.`)
console.log()
let nomeJogador = prompt('Digite seu nome de jogador(a) para continuar: ')

while(nomeJogador.length < 3) {
    console.log(`FAILED. Digite um nome com pelo menos 3 caracteres.`)
    console.log()
    nomeJogador = prompt('Digite seu nome de jogador(a) para continuar: ')
}
console.clear()

console.log(`o Caos criou o mundo antes de criar os Deidade Suprema ("Rei do Nirvana"), demi-humano (variação da espécie humana contendo aspectos animais e o Rei Demônio . O caos ficou desapontado com eles porque eles eram uma raça selvagem, escravos de seu poder e não sabiam nada além de infligir dor um ao outro. Então criou Humanosem que colocou tudo: bondade e malícia, bravura e covardia, amor e ódio, beleza e bestialidade. Embora incompletos, eles eram a raça perfeita que mais se aproximava. A Deidade Suprema e o Rei Demônio estavam cheios de ciúmes e apreensão do Caos, temendo que o amor e o respeito que suas próprias raças tivessem por eles fossem roubados por seu próprio criador. Assim, os dois deuses se uniram e selaram o Caos, permitindo que eles fossem os dois governantes do mundo e acreditavam serem as entidades mais poderosas da existência.`)
continuar()
console.clear()
console.log(`${nomeJogador}, você é um jovem do mundo real atual que é invocado para um reino em um mundo medieval de fantasia paralelo, que está sendo frequentemente atacado por levas de monstros, porém você não sabe como foi parar ali e está perdido no meio de uma cidade e você percebeu que está com um escudo, então você decide buscar informações sobre o local em que está e descobre que o nome  se chama  Nirvana. `)
continuar()
console.clear()

console.log(`Ao pesquisar sobre o lugar você descobre que um mago está te procurando e vai ao encontro então finalmente entende o motivo de sua chegada ao Nirvana e que é ajudar a cidade contra os monstro que o Rei Demônio está invocando para amedronta e exterminar população. Também descobre que é a reecarnação do grande héroi do escudo chamado Atreus que é o único que pode derrota-lo.`)
continuar()
console.clear()



console.log(`O que você deseja fazer?`)
    let listaDestino = [
      ``,
      `[1] Dormir`,
      `[2] Desistir`,
      `[3] Explorar`,
      `[4] Treinar`,
      `[5] Comprar itens`,
      `[6] Enfrentar o Rei Demônio`, 
    ]
   
   menu: while (true) {
    console.clear()

    tempo.mostrarData()
    personagem.mostrarVida()
    mostrarDestino()
    destino = +prompt()
    
   

    if (destino == 1) {
        console.clear()
        listaDestino.splice(listaDestino.indexOf(`[1] Dormir`),1)
        console.log('Você está cansado e decide dormir.')
        tempo.passarHora(8)
        tempo.mostrarData()
    }

    if (destino == 2) {
        console.clear()
        tempo.alterarMin(50)
        tempo.mostrarData()
        console.log('Você andar um pouco, pega uma faca em uma loja e decide se matar para sair do jogo.')
        personagem.mostrarVida()
        perdeVidaPers(200)
        continuar()
        break menu
        

    }

    if (destino == 3) {
        console.clear()
        listaDestino.splice(listaDestino.indexOf(`[3] Explorar`),1)
        console.log(`Você decide explorar a cidade de Nirvana `)
        tempo.alterarMin(45)
        tempo.mostrarData()
        continuar()
        console.clear()
        tempo.passarHora(1)
        tempo.mostrarData()
        console.log(`Você anda até uma loja de comercio de armas e armaduras e encontra várias pessoas. Perguntar sobre Rei Dêmonio poderoso e onde ele se encontra?`)
        let mago = prompt()
        while(mago != "sim" && mago != "s" && mago != "nao" && mago != "n" )
        {
            console.log(`RESPOSTA INVÁLIDA. DIGITE "sim" OU "nao"`)
            console.log(`Você anda até uma loja de comercio de armas e armaduras e encontra várias pessoas. Perguntar sobre Rei Dêmonio poderoso e onde ele se encontra?`)
            mago = prompt()
        }
        console.clear()
        if (mago == "sim" || mago == "s" || mago == 0) {
            tempo.mostrarData()
            console.log(`Você pergunta a um ancião ali persente sobre o maligno. Ele diz que o Rei Demônio é um homem robusto, com uma longa barba encaracolada negra. Ele é muito alto, ainda mais do que qualquer gigante em estatura.`)
            continuar()
            console.clear()
            console.log(`- Ancião: Dizem que o Rei Demônio foi criado pelo Caos, depois que o mundo deu à luz pelo Caos. O Rei Demônio então criou o Reino do Demônio e agora quer destruir o Nirvana e nosso Rei está doente e está próximo da morte.`)
            console.log(`- Ancião: Garoto, o ponto fraco dele é sua barriga você conseguindo destruir o cristal dentro dela ele morre....`)
            continuar()
            tempo.passarHora(2)
            console.log(`Conhecimento ADQUIRIDO!`)
            conhecimento++
            continuar()
            }

        else if (mago == "nao" || mago == "n") {
            tempo.passarHora(1)
            tempo.mostrarData()
            console.log(`Você então não decide perguntar nada sobre e decide apenas observar a conversa de longe e escuta algo sobre o ponto fraco do Rei demonio ser na cabeça.`)
            }

    }

    if (destino == 4) {
        console.clear()
        listaDestino.splice(listaDestino.indexOf(`[4] Treinar`),1)
        console.log(`Você decide ir pra uma roda de luta próximo de sua localização... Chegando lá você decide entrar em combate com um guerreiro portador de lança. `)
        continuar()
        console.clear()
        console.log(`${nomeJogador}, O héroi do escudo vs Estevan, O héroi da lança.`)
        
        
        
        
        while(true) {
                Estevan.mostraVidaEstevan() 
                personagem.mostrarVida()
                console.log()
        let atacardefender = prompt('Você deseja [1] - Atacar ou [2] - Defender? ')
                
        
        if (atacardefender == "atacar" || atacardefender == 1) {
                
            
            if (personagem.vida < Estevan.vida) {
                console.log()
                console.log(`Ataque do escudo!\nCHUVA DO INFERNO!`)
                console.log()
                console.log(`Uma grande explosão acontece,`)
                perdeVidaEstevan(dado())
                Estevan.mostraVidaEstevan() 
                personagem.mostrarVida()

                
            }

            if (personagem.vida >= Estevan.vida) {
                console.log()
                console.log(` ${nomeJogador}: Ataque do escudo!\nCHUVA DO INFERNO!`)
                console.log()
                console.log(`Estevan desviou do seu ataque\nEstevan: Bom ataque, porém...`)
                console.log(`TEMPESTADE UIVANTE!`)
                perdeVidaPers(dado())
                Estevan.mostraVidaEstevan() 
                personagem.mostrarVida()
            }


        }
        
        else if (atacardefender == "defender" || atacardefender == 2) {
                console.log()
                console.log(`DEFESA DO APOCALIPSE!`)
                console.log(`Você defendeu!`)
                Estevan.mostraVidaEstevan() 
                personagem.mostrarVida()
            
            
            if (personagem.vida < Estevan.vida) {
                console.log()
                console.log(`Estevan: Lança perfurante!`)
                console.log(`${nomeJogador}, Você defendeu o ataque e contra-atacou!\n`)
                console.log(`Escudo da estrela cadente!`)
                perdeVidaEstevan(dado())
                Estevan.mostraVidaEstevan() 
                personagem.mostrarVida()


            if (personagem.vida <= 40) {
                console.log('Habilidade secreta desbloqueada. Deseja usar?')
                let desejarusar = prompt()
                if (desejarusar == "sim" || desejarusar == "s") {
                    console.log(`${nomeJogador} BENÇÃO DIVINA!`)
                    console.log(`Você defendeu e se curou!`)
                    ganhaVidaPers(dado())
                    Estevan.mostraVidaEstevan() 
                    personagem.mostrarVida()
                } else {
                console.log(`Estevan: Lança da misericórdia!`)
                console.log(`${nomeJogador}, Você defendeu o ataque e contra-atacou!\n`)
                console.log(`Escudo da estrela cadente!`)
                perdeVidaEstevan(dado())
                Estevan.mostraVidaEstevan() 
                personagem.mostrarVida()

                }

            }

            }
            
            
        }
    
        if (Estevan.vida <= 0 || personagem.vida <= 0)  {
            console.clear()
            tempo.passarHora(3)
            console.log(`O treino acabou.`)
            personagem.descanso()
            treino++
            break

    }



    continuar()
    console.clear()    
        } }

    if (destino == 5)  {
        console.clear()
        listaDestino.splice(listaDestino.indexOf(`[5] Comprar itens`),1)
        console.log(`Você vê uma loja de artefatos e decide ir.`)
        console.log()
        console.log(`Olá jovem guerreiro tenho apenas dois itens: \n[1] - Desbloquear [FISSURA GLACIAL]\n[2] - Desbloquear [HEMOPRAGA]`)
        let escolha = +prompt()
        while (escolha != 1 && escolha != 2) {
            console.clear()
            console.log('ERRO 404 NOT FOUND\nEscolha uma opção válida')
            console.log(`Olá jovem guerreiro tenho apenas dois itens: \n[1] - Desbloquear [FISSURA GLACIAL]\n[2] - Desbloquear [HEMOPRAGA]`)
             escolha = +prompt() }
        if (escolha == 1) {
            console.log(`Habilidade "Fissura Glacial" adquirida!`)
            fissura++
        } else {
            console.log(`Habilidade ""Hemopraga" adquirida!`)
            hemopraga++
        }
        continuar()
    }  
   
    if (destino == 6) {
        if (treino == 0) {
            console.clear()
            console.log(`Você acha que chegou a hora de enfretar o Rei Demônio. Você anda em direção a saída do Reino de Nirvana.\nUm Ogro Gigante apareceu no seu caminho.`)
            continuar()
            console.clear()
            console.log(`O Que fazer? \n[1] - Atacar [2] - Defender`)
            ogro.mostraVidaOgro()
            personagem.mostrarVida()
            let escolha = +prompt()
            if (escolha == 1) {
                console.log()
                console.log(`Você parte pra cima e tenta usar uma habilidade.`)
                console.log(`Uma luz forte se acende e apaga.`)
                continuar()
                console.log(`Ogro: HAHAHAH esse ataque nem mexeu na minha vida. Agora morra!\n O ogro parte pra cima de você pega se escudo e corta sua cabeça com ele.`)
                console.log()
                ogro.mostraVidaOgro()
                perdeVidaPers(100)
                personagem.mostrarVida()
                console.log('## GAME OVER ##')
                break menu
            }
        }
        console.clear()
        console.log(`Você acha que chegou a hora de enfretar o Rei Demônio. Você anda em direção a saída do Reino de Nirvana.\nUm Ogro Gigante apareceu no seu caminho.`)
        continuar()
        console.clear()
        ogro: while (true) {
            console.clear()

            // let ramdom1 = 0
            // let ramdom2 = 0
            // ramdom1 = dado()
            // ramdom2 = dado()
            ogro.mostraVidaOgro()
            personagem.mostrarVida()
            console.log()
            console.log(`[1] - Atacar [2] - Defender`)
            let escolha = +prompt()

            if (escolha == 1) {

                perdeVidaOgro(dado() * 1.5)
                console.log(`Escudo Infernal!`)
                ogro.mostraVidaOgro()
                personagem.mostrarVida()
                continuar() 
                console.log()
                perdeVidaPers(dado())
                personagem.mostrarVida()
                console.log(`Ogro defendeu o ataque e contra-atacou!`);
                ogro.mostraVidaOgro()
                personagem.habilidadeCura() }
            
                
            
            if (escolha == 2) {
              console.log(`ESCUDO DO APOCALIPSE!`)
              if (personagem.vida < ogro.vida) {
                console.log(`Você defendeu e contra-atacou!`)
                perdeVidaOgro(dado())
              }
              
            
                

                
            }

            if (personagem.vida <= 0) {
                console.log(`Você foi derrotado e morreu.`)
                break menu
            }

            if (ogro.vida <= 0) {
                console.clear()
                console.log(`Graças a seu treino você conseguiu derrotar o ogro.`)
                console.log(`Vida máxima aumentada!`)
                personagem.descanso()
                ganhaVidaPers(100)
                break ogro
            }
             continuar()        


        
    }
    

// batalha 
        console.clear()
        personagem.mostrarVida()
        tempo.mostrarData()
        console.log(`Após derrotar o ogro você começa a andar no meio da floresta porém não ouve nada apenas o som do vento.
        Ao andar muito ao norte você começa a sentir uma presença maligna. E vê uma caverna.  Finalmente chegou a hora de enfrentar o Rei demônio.`)
        continuar()
        console.log(`Você  lembra das informações do ancião e vê um homem alto com barba negra. Não tem erro. Chegou a hora.`)
        console.clear()
        console.log(`Rei Demônio: Muito corajoso de vir até aqui.\nEntão é você que dizem que é a reecarnação de Atreus? Melhor eu acabar logo com você, pequeno inseto.`)
        console.log()

        rei: while (true) {
            reiDemonio.mostrarVidaRei() 
            personagem.mostrarVida()
            console.log()
            let atacardefender = prompt('Você deseja [1] - Atacar ou [2] - Defender? ')
            

        if (atacardefender == "atacar" || atacardefender == 1) {
            
            let ramdom1 = 0
            let ramdom2 = 0
            ramdom1 = dado()
            ramdom2 = dado()
            
            
            if (ramdom1 > ramdom2) {
                console.log()
                console.log(`Ataque do escudo!\nCHUVA DO INFERNO!`)
                console.log()
                console.log(`Uma grande explosão acontece,`)
                perdeVidaRei(dado() * 1.8)
                reiDemonio.mostrarVidaRei() 
                personagem.mostrarVida()
                personagem.habilidadeCura()

                
            }

            if (ramdom2 >= ramdom1) {
                console.log()
                console.log(` ${nomeJogador}: Ataque do escudo!\nCHUVA DO INFERNO!`)
                console.log()
                console.log(`Rei demônio desviou.\nRei Demônio: HAHAHAHAHA!`)
                console.log(``)
                perdeVidaPers(dado() * 1.8)
                reiDemonio.mostrarVidaRei() 
                personagem.mostrarVida()
                
            }

        }
        
        else if (atacardefender == "defender" || atacardefender == 2) {
                let ramdom1 = 0
                let ramdom2 = 0
                ramdom1 = dado()
                ramdom2 = dado()
            
                console.log()
                console.log(`DEFESA DO APOCALIPSE!`)
                console.log(`Você defendeu!`)
                reiDemonio.mostrarVidaRei() 
                personagem.mostrarVida()
                personagem.habilidadeCura()
            
            
            if (ramdom1 > ramdom2) {
                console.log()
                console.log(`Rei Dêmonio: MAR VERMELHO!`)
                console.log(`${nomeJogador}, Você defendeu o ataque e contra-atacou!\n`)
                console.log(`Escudo da estrela cadente!`)
                perdeVidaRei(dado() * 2.5)
                reiDemonio.mostrarVidaRei() 
                personagem.mostrarVida()
                personagem.habilidadeCura()
            }
            
        }
    
        if (reiDemonio.vida <= 180 && hemopraga == 1 && conhecimento == 1)  {
            console.clear()
            console.log(`Habilidade HEMOPRAGA DISPONÍVEL`)
            console.log("Você se lembra da técnica secreta que comprou no comerciante e vê que é sua melhor chance de derrota-lo")
            continuar()
            console.log(`${nomeJogador}: Chegou sua hora seu desgraçado.\nRei Demônio: Não pode ser!`)
            console.log(`${nomeJogador}: HEMOPRAGA!`)
            continuar()
            console.clear()
            console.log (`${nomeJogador} infecta uma área com uma praga virulenta. O rei demônio é afetado, recebe dano crescente enquanto durar o efeito. Depois de alguns segundos, Hemopraga causa Dano Mágico e explode a BARRIGA junto com um cristal que o mantinha como imortal. E finalmente o mata.`)
            perdeVidaRei(999)
            personagem.mostrarVida()
            reiDemonio.mostrarVidaRei()
            continuar()  
            break menu
         }
        
        if (reiDemonio.vida <= 160 && fissura == 1 && conhecimento == 1)  {
            console.clear()
            console.log(`Habilidade FISSURA GLACIAL DISPONÍVEL`)
            console.log("Você se lembra da técnica secreta que comprou no comerciante e vê que é sua melhor chance de derrota-lo")
            continuar()
            console.log(`${nomeJogador}: Chegou sua hora seu desgraçado.\nRei Demônio: Não pode ser!`)
            console.log(`${nomeJogador}: FISSURA GLACIAL!`)
            continuar()
            console.clear()
            console.log (`${nomeJogador} bate seu escudo com força no chão, projetando um enorme disparo de precisão de longo alcance golpeia o chão, congelando o ar em volta e em linha reta à sua frente. Uma fissura é criada em sua BARRIGA destruindo-a junto com um cristal que o mantinha como imortal. E finalmente o mata.`)
            perdeVidaRei(999)
            personagem.mostrarVida()
            reiDemonio.mostrarVidaRei() 
            continuar() 
            break menu
          }


        if (reiDemonio.vida <= 160 && conhecimento == 0 && hemopraga == 1) {
            console.clear()
            console.log(`Habilidade HEMOPRAGA DISPONÍVEL`)
            console.log("Você se lembra da técnica secreta que comprou no comerciante e vê que é sua melhor chance de derrota-lo")
            continuar()
            console.log(`${nomeJogador}: Chegou sua hora seu desgraçado.\nRei Demônio: Não pode ser!`)
            Console.log(`${nomeJogador}: HEMOPRAGA!`)
            continuar()
            console.clear()
            console.log(`${nomeJogador} infecta uma área com uma praga virulenta. O rei demônio é afetado, recebe dano crescente enquanto durar o efeito. Depois de alguns segundos, Hemopraga causa Dano Mágico e explode a CABEÇA do rei.`)
            continuar()
            console.log('você acha que o derrotou e virá as costas.... quando de repente é perfurado no peito mesmo com o Rei sem sua cabeça. E morre...')
            console.clear()
            perdeVidaPers(999)
            reiDemonio.mostrarVidaRei()
            personagem.mostrarVida()
            tempo.passarHora(2)
            continuar()
            break menu
            // console.log('## GAME OVER ##')
            // break menu
        }  
        
        if (reiDemonio.vida <= 160 && conhecimento == 0 && fissura == 1) {
            console.clear()
            console.log(`Habilidade FISSURA GLACIAL DISPONÍVEL`)
            console.log("Você se lembra da técnica secreta que comprou no comerciante e vê que é sua melhor chance de derrota-lo")
            continuar()
            console.log(`${nomeJogador}: Chegou sua hora seu desgraçado.\nRei Demônio: Não pode ser!`)
            Console.log(`${nomeJogador}: FISSURA GLACIAL!`)
            continuar()
            console.clear()
            console.log(`${nomeJogador} bate seu escudo com força no chão, projetando um enorme disparo de precisão de longo alcance golpeia o chão, congelando o ar em volta e em linha reta à sua frente. Uma fissura é criada em sua CABEÇA destruindo-a.`)
            continuar()
            console.log('você acha que o derrotou e virá as costas.... quando de repente é perfurado no peito mesmo com o Rei sem sua cabeça. E morre...')
            console.clear()
            perdeVidaPers(999)
            reiDemonio.mostrarVidaRei()
            personagem.mostrarVida()
            tempo.passarHora(3)
            continuar()
             break menu
        }                  
        
        if (reiDemonio.vida <= 250 && conhecimento == 0 ) {
            console.clear()
            console.log("Rei Demônio: Criança tola... estava só me divertindo com você. Agora é hora do Adeus.")
            continuar()
            console.clear()
            console.log(`${nomeJogador}: NÃOOO! BENÇÃO DIVINA!.`)
            console.log("Rei Demônio: TEMPESTADE DE CORVOS!")
            continuar()
            console.clear()
            console.log(`o Rei Dêmonio invoca uma revoada de corvos assassinos voa em volta dele e joga em sua direção, causando dano por segundo e o comendo vivo.`)
            continuar()
            console.clear()
            perdeVidaPers(999) 
            reiDemonio.mostrarVidaRei() 
            personagem.mostrarVida()
            tempo.passarHora(3)
            continuar()
            break menu
        }  

        
    continuar()      
    console.clear()   } 
        
        
    }


    continue menu
}

if ( personagem.vida <= 0)  {
    console.clear()
    tempo.passarHora(1)
    tempo.mostrarData()
    personagem.mostrarVida()
    console.log(`Você morreu`)
    console.log('## GAME OVER ##')
             }
if (reiDemonio.vida <= 0) {
    console.clear()
    console.log(`PARABÉNS, VOCÊ VENCEU!`)
    console.log(`Após derrotar o Rei Demônio você se encaminha novamente para cidade de Nirvana e é recebido com muita festa e alegria por ter ajudo. Você finalmente os livrou do mal e finalmente poderá voltar para o mundo real para descansar`)
}    

let jogarnovamente = prompt('Deseja jogar novamente? ').toLowerCase

if (jogarnovamente == "sim" || jogarnovamente == "s") {
    continue

}
else {
    console.clear()
    console.log(`Obrigado por jogar, ${nomeJogador}.`)
}

    
}