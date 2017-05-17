(function (global) {
    System.config({
        paths: {
            'npm:': 'https://unpkg.com/'
        },
        map: {
            scripts: '../scripts',

            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.1.1/bundles/platform-browser-dynamic.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser@2.1.1/bundles/platform-browser.umd.js',
            '@angular/core': 'npm:@angular/core@2.1.1/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common@2.1.1/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler@2.1.1/bundles/compiler.umd.js',
            '@angular/http': 'npm:@angular/http@2.1.1/bundles/http.umd.js',
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            scripts: {
                boot: './boot.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);