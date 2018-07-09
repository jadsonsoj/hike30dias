Template.Feed.events({
	"submit form":function(evento, template) {
		alert("Formulário enviado!")
		evento.preventDefault();
		console.log(evento.target.texto.value);
	}
});
