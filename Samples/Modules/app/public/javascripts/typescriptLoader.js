System.config({
    packages: {
        'javascripts': {
            format: 'register',
            defaultExtension: 'js',
            map: {
                'typescriptPerson':'typescriptPerson.js',
                'typescriptCustomer': 'typescriptCustomer.js'
            }
        }
    }
});
System.import('javascripts/typescriptBoot')
      .then(null, console.error.bind(console));