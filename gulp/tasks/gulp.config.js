module.exports = function(){

	var client = "./app";
	var server = "./docs";


	var config  = {
		cssIN : client + "/assets/styles/styles.css",
		cssOUT : client + "/temp/styles",
		htmlFile : client + "/*.html",
		imagesIN: client + "/assets/images/**/*",
		imagesOUT: server + "/assets/images",

		watchCSS :  client + "/assets/styles/**/*.css",
		watchHTML :  client + "/*.html",
		watchJS :  client + "/assets/scripts/**/*.js",

		compileCss :  client + "/temp/styles/*.css"

	}

	return config;
}