var connect = require('connect');
var serveStatic = require('serve-static');
const puppeteer = require('puppeteer');

var server = connect().use(serveStatic('.')).listen(8080, function(){
    console.log('Running Server on http://localhost:8080');
});

(async () => {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		
		console.log('Loading reusme in puppeteer')
		await page.goto('http://0.0.0.0:8080?pdf=1', {waitUntil: 'networkidle2'});
		
		console.log('Generating pdf')
		await page.pdf({path: 'resume.pdf', format: 'A4'});
		
		// clean up
		await browser.close();
		server.close();
		
	} catch(err) {
		console.log(err)
	}
})();
