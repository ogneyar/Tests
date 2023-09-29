
const path = require( 'path' );

// игнорируем импорты `.scss`
require( 'ignore-styles' );

// транспилируем на лету импорты
require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

// импортируем express-сервер
require( './express.js' );