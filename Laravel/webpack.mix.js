const mix = require('laravel-mix');

/*
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
*/

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css');
    


mix.browserSync({
	//baseDir: "./public",
    port: 3000,
    //index: "index.html",
	//startPath: "/index.html",
	//host: "192.168.1.1",
    proxy: "localhost:8000",
    browser: "opera",
	open: 'external'
});	


//mix.disableNotifications();

// npm run hot
/*
mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 8000
    }
});
*/
