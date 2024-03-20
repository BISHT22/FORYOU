
const coinIcon = document.getElementById('coin'); 
const tossBtn = 
	document.getElementById('toss-button'); 
const result = 
	document.querySelector('.result'); 
coinIcon.insertAdjacentElement('afterend', result); 
tossBtn.addEventListener('click', () => { 
	tossBtn.disabled = true; 
	tossCoinFunction(); 
}); 
function tossCoinFunction() { 
	const randomVal = Math.random(); 
	const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails'; 
	const imageUrl = faceCoin === 'Heads' ? 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2FHead-Coin&psig=AOvVaw24tM-UI9sm-eRfdZUiOI-r&ust=1711017767453000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDN1oTUgoUDFQAAAAAdAAAAABAJ' : 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngaaa.com%2Fdetail%2F894139&psig=AOvVaw06WV7QXHkKqONlaBOooyKJ&ust=1711017978607000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiNiunUgoUDFQAAAAAdAAAAABAJ'; 
		
	coinIcon.classList.add('flip'); 
	setTimeout(() => { 
		coinIcon.innerHTML = 
			`<img src="${imageUrl}" alt="${faceCoin}">`; 
		coinIcon.classList.remove('flip'); 
		setTimeout(() => { 
			result.textContent = `Result: ${faceCoin}`; 
			result.style.opacity = 1; 
			tossBtn.disabled = false; 
		}, 500); 
	}, 1000); 
}

