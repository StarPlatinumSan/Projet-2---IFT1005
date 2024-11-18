"use strict";

window.addEventListener("load", () => {
	const form = document.querySelector(".form");

	const convert = (value, fromUnit, toUnit) => {
		const conversions = {
			m: {
				cm: 100,
				km: 0.001,
				pied: 3.28084,
				pouce: 39.3701,
			},
			cm: {
				m: 0.01,
				km: 0.00001,
				pied: 0.0328084,
				pouce: 0.393701,
			},
			km: {
				m: 1000,
				cm: 100000,
				pied: 3280.84,
				pouce: 39370.1,
			},
			pied: {
				m: 0.3048,
				cm: 30.48,
				km: 0.0003048,
				pouce: 12,
			},
			pouce: {
				m: 0.0254,
				cm: 2.54,
				km: 0.0000254,
				pied: 0.0833333,
			},
		};

		return Number(value * conversions[fromUnit][toUnit]);
	};

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const input = document.getElementById("inputValue");
		const inputUnit = document.getElementById("inputUnit");
		const outputUnit = document.getElementById("outputUnit");
		const value = input.value;
		const unit = inputUnit.options[inputUnit.selectedIndex].value;
		const convertUnit = outputUnit.options[outputUnit.selectedIndex].value;
		const affichage = document.querySelector(".afficherForm");

		if (isNaN(value)) {
			affichage.textContent = "Erreur";
			return;
		}

		const result = convert(value, unit, convertUnit);

		affichage.textContent = `${value} ${unit} = ${result} ${convertUnit}`;
	});
});
