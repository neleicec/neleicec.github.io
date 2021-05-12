const card_odoo = document.getElementById("card_odoo");
const card_odoo1 = document.getElementById("card_odoo1");
const card_sigeca = document.getElementById("card_sigeca");
const card_pcn = document.getElementById("card_pcn");
const card_travelsea = document.getElementById("card_travelsea");
const card_jade = document.getElementById("card_jade");
const card_jade1 = document.getElementById("card_jade1");
const card_colono = document.getElementById("card_colono");
const container = document.getElementById("container");

const logo = document.querySelector(".logo");
const lista = document.querySelector(".lista");

logo.addEventListener("click", () => {
	container.classList.toggle("activado");
});

lista.addEventListener("click", () => {
	container.classList.toggle("activado");
});

card_odoo.addEventListener("click", () => {
	card_odoo.classList.toggle("is-flipped");
});

card_odoo1.addEventListener("click", () => {
	card_odoo1.classList.toggle("is-flipped");
});

card_sigeca.addEventListener("click", () => {
	card_sigeca.classList.toggle("is-flipped");
});

card_pcn.addEventListener("click", () => {
	card_pcn.classList.toggle("is-flipped");
});

card_travelsea.addEventListener("click", () => {
	card_travelsea.classList.toggle("is-flipped");
});

card_jade.addEventListener("click", () => {
	card_jade.classList.toggle("is-flipped");
});

card_jade1.addEventListener("click", () => {
	card_jade1.classList.toggle("is-flipped");
});

card_colono.addEventListener("click", () => {
	card_colono.classList.toggle("is-flipped");
});

addEventListener("scroll", () => {
	if (scrollY > 99) {
		container.classList.add("container_two");
	} else {
		container.classList.remove("container_two");
	}
});

const typed = new Typed(".typed", {
	strings: ["Programadora", "Ingeniera", "Desarrolladora"],
	typeSpeed: 30,
	startDelay: 150,
	backSpeed: 45,
	smartBackspace: true,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: "|",
	contentType: "html",
});
