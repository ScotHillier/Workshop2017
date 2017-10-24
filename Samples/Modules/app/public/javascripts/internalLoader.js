            //person
            var btn1 = document.querySelector('#personSpeak');
            btn1.addEventListener('click', () => {
                var p = new App.internalModule1.person('Scot', 'Hillier');
                toastr.info(p.speak());
            });

            //customer
            var btn2 = document.querySelector('#customerTalk');
            btn2.addEventListener('click', () => {
                var c = new App.internalModule2.customer('Scot', 'Hillier', 'MVP', 'Scot Hillier Technical Solutions, LLC', 'scot@scothillier.net');
                toastr.info(c.talk());
            });