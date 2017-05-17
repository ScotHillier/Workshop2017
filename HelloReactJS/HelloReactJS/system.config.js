(function (global) {
    System.config({
        paths: {
            'npm:': 'https://unpkg.com/'
        },
        map: {
            app: 'app',
            'react':'npm:react@15.4.1/dist/react.js',
            'react-dom': 'npm:react-dom@15.4.1/dist/react-dom.js',
            'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
            'es6-promise': 'npm:es6-promise@4.1.0'
        },
        packages: {
            app: {
                defaultExtension: 'js'
            }
        }
    });
})(this);