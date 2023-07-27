// JavaScript Document

var total_tentativas = document.getElementById("mostrar_tentativas").value ;

var numero_maximo = document.getElementById("mostrar_numero").value;

function minhatentativa()
{
	/* As linhas seguintes guardam em 2 variáveis:
	o número inserido (nova_tentiva)
	o texto da caixa resultados (tentativas). */
	var nova_tentativa = document.getElementById("caixa_tentativa").value;
	var tentativas = document.getElementById("resultado");
	
	// Se a tentativa for correta, mostra o número.
	// se não, indica se é mais baixo ou mais alto. 
	if (nova_tentativa == numcorreto)
		{
			tentativas.value = tentativas.value + "\r" + 
				"Adivinha o número! ("+nova_tentativa+")";
		}
	else if (nova_tentativa > numcorreto)
		{
			tentativas.value = tentativas.value + "\r" +
			"O número é mais baixo!("+nova_tentativa+")";
		}
	else 
		{
			tentativas.value = tentativas.value + "\r" +
			"O número é mais alto!("+nova_tentativa+")";
		}
	document.getElementById('caixa_tentativa').value = '';
}

function mostrar_numero()
{
	// Mostra o número aleatório se for clicada a caixa de verificação 
	// Se não, remove o número e esconde a caixa (display:none)
	if (document.getElementById('batota').checked)
		{
			document.getElementById('numero_certo').value = numcorreto;
			document.getElementById('mostra_batota').style.display = 'inline';
		}
	else 
		{
			document.getElementById('numero_certo').value = '';
			document.getElementById('mostra_batota').style.display = 'none';
		}
}

// Gerar numero aleatório
function gerar_aleatorio(confirmIt)
{
	var tentativas = document.getElementById("resultado");
	// Confirmar se pretendes começar novo jogo 
	if (confirmIt && !confirm('Começar novo jogo?'))
		{
			return;
		}
	tentativas.value = '';
	// O número aleatório está entre 0 e 20 
	numcorreto = Math.floor (Math.random()*20);
	tentativas.value = "Gerador novo número (5 tentativas) \n";
	
	// Esconde o novo número aleatório 
	document.getElementById('numero_certo').value = '';
	document.getElementById('mostra_batota').style.display = 'none';
	document.getElementById('caixa_tentativa').value = '';
}

function mostrar_tentativas()
{
	var tentativas = document.getElementById('tentativas');
	var btn = document.getElementById('mostrar_tentativas');
	if (tentativas.style.display != 'block')
		{
			tentativas.style.display = 'block';
			btn.value = 'Escolher tentativas';
		}
	else
	{
		tentativas.style.display = 'none';
		btn.value = 'Mostrar tentativas';
	}
}

window.onload = function()
{
	gerar_aleatorio();
}