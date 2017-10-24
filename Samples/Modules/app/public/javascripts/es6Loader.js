       //person
       let btn1 = document.querySelector('#personSpeak');
       btn1.addEventListener('click', () =>{

           System.import('javascripts/es6Module1.js').then(function(module1) {
               let p = module1.Person('Scot', 'Hillier');
               toastr.info(p.speak());
           }).catch(function(err){
               alert(err);
           });
       });

       //customer
       let btn2 = document.querySelector('#customerTalk');
       btn2.addEventListener('click', () =>{

           System.import('javascripts/es6Module2.js').then(function(module2) {
               let c = module2.Customer('Scot', 'Hillier', 'MVP', 'Scot Hillier Technical Solutions','scot@scothillier.net');
               toastr.info(c.talk());
           }).catch(function(err){
               alert(err);
           });
       });