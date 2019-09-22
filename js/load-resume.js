
if(window.location.href.includes('pdf') === true) {
	document.documentElement.classList.remove('paper');
}

var sectionList = [
	{ loc: './content/experience.html', col: 'first-col'},
	{ loc: './content/projects.html', col: 'first-col'},
	{ loc: './content/education.html', col: 'second-col'},
	{ loc: './content/publications.html', col: 'second-col'},
	{ loc: './content/achievements.html', col: 'second-col'},
	{ loc: './content/skills.html', col: 'second-col'}
]

fetch('./content/page.html')
	.then(resp => resp.text())
	.then((text) =>{
		// add main page
		let frag = document.createRange().createContextualFragment(text);
		document.body.appendChild(frag);
		
		(async () => {for(section of sectionList) {
			let sectionReq = await fetch(section.loc);
			let text = await sectionReq.text();
			let frag = document.createRange().createContextualFragment(text);
			document.getElementById(section.col).appendChild(frag);

		}})();
	});