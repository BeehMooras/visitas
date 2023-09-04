var linkProjetos = [
    {
        linkProjeto:"https://codepen.io/Mooras/pen/WNOPVGX",
        linkImg: "",
        span: "2021 - Atual",
        title:"Conversor de Moedas",
        subTitle:"Front-End",
        resumo:"Projeto produzido para introduzir meus conhecimentos em JS, usando calculos feitos pelo próprio computador",
        like: 0 
    },
    {
        linkProjeto:"https://codepen.io/Mooras/pen/jOwaeqP",
        linkImg: "",
        span: "2021 - Atual",
        title:"Calculadora de Médias",
        subTitle:"Front-End",
        resumo:"Projeto produzido para introduzir meus conhecimentos em JS, usando calculos feitos pelo próprio computador",
        like: 0
    },
    {
        linkProjeto:"",
        linkImg: "",
        span: "",
        title:"",
        subTitle:"",
        resumo:"",
        like:"",
    },
    {
        linkProjeto:"",
        linkImg: "",
        span: "",
        title:"",
        subTitle:"",
        resumo:"",
        like:"",
    },
    
];
function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
    document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
    var elementButton = document.getElementById("clear");
    document.body.classList.toggle("clear");

    if (document.body.classList == "clear") {
        elementButton.innerHTML = "DARK MODE";
    } else {
        elementButton.innerHTML = "CLEAR MODE";
    }
}