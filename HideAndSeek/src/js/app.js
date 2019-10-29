"use strict";

import {secretButton, secretParagraph} from './dom-loader.js';

var showSecert = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
	showSecert = !showSecert;
	updateSecretParagraph();
	updateButton()
}

function updateSecretButton() {
	if (showSecert) {
		secretButton.textContent = 'Hide the Secret';
	} else {
		secretButton.textContent = 'Show the Secret';
	}
}

function updateSecretParagraph() {
	if (showSecert) {
		secretParagraph.style.display = 'block';
	} else {
		secretParagraph.style.display = 'none';
	}
}