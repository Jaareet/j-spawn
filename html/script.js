$(() => {
    $.post('https://j-spawn/info')

    var audio_click = new Audio('sounds/sound_2.ogg');
    var audio_song = new Audio('sounds/sound_1.mp3');

    audio_click.volume = 0.3;
    audio_song.volume = 0.4;

    let videos_not = [`
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/SfHa8yABacM?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            rc="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
        <iframe width="320" height="260"
            src="https://www.youtube.com/embed/XBqRSHfxp3w?autoplay=0&mute=1">
        </iframe>
    `];

    let normativa = [`
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
        <p class="normativa">Aqui pones tus normas , reglas , instrucciones o toda la info normativa de tu servidor</p>
    `]

    let comandos = [`
        <p id="info-comandos"><span class="key">X</span> Levantar Brazos</p>
        <p id="info-comandos"><span class="key">B</span> Señalar</p>
        <p id="info-comandos"><span class="key">Z</span> Cambiar modo de voz</p>
        <p id="info-comandos"><span class="key">G</span> Cruzar los brazos</p>
        <br>
        <p id="info-comandos"><span class="comando">/cargar</span> Cargar a alguien</p>
        <p id="info-comandos"><span class="comando">/entorno</span> Mandar un entorno a la LSPD</p>
        <p id="info-comandos"><span class="comando">/forzar</span> Forzar un coche</p>
        <p id="info-comandos"><span class="comando">/me</span> Usa el me para comunicarte en el chat</p>
        <p id="info-comandos"><span class="comando">/do</span> Para hacer acciones en el chat</p>
        <p id="info-comandos"><span class="comando">/report</span> Reportar cualquier problema</p>
        <p id="info-comandos"><span class="comando">/ayuda</span> Pide ayuda a las personas de la ciudad</p>
        <p id="info-comandos"><span class="comando">/id</span> Mirar tu ID</p>
        <p id="info-comandos"><span class="comando">/admin</span> Llamar a un admin disponible</p>
        <p id="info-comandos"><span class="comando">/auxilio</span> Mandar un axulio hacia el EMS</p>
        <p id="info-comandos"><span class="comando">/meca</span> Inforar sobre tu problema al Mecanico</p>
        <p id="info-comandos"><span class="comando">/cargar</span> Cargar a alguien</p>
        <p id="info-comandos"><span class="comando">/entorno</span> Mandar un entorno a la LSPD</p>
        <p id="info-comandos"><span class="comando">/forzar</span> Forzar un coche</p>
        <p id="info-comandos"><span class="comando">/me</span> Usa el me para comunicarte en el chat</p>
        <p id="info-comandos"><span class="comando">/do</span> Para hacer acciones en el chat</p>
        <p id="info-comandos"><span class="comando">/report</span> Reportar cualquier problema</p>
        <p id="info-comandos"><span class="comando">/ayuda</span> Pide ayuda a las personas de la ciudad</p>
        <p id="info-comandos"><span class="comando">/id</span> Mirar tu ID</p>
        <p id="info-comandos"><span class="comando">/admin</span> Llamar a un admin disponible</p>
        <p id="info-comandos"><span class="comando">/auxilio</span> Mandar un axulio hacia el EMS</p>
        <p id="info-comandos"><span class="comando">/meca</span> Inforar sobre tu problema al Mecanico</p>
        <p id="info-comandos"><span class="comando">/cargar</span> Cargar a alguien</p>
        <p id="info-comandos"><span class="comando">/entorno</span> Mandar un entorno a la LSPD</p>
        <p id="info-comandos"><span class="comando">/forzar</span> Forzar un coche</p>
        <p id="info-comandos"><span class="comando">/me</span> Usa el me para comunicarte en el chat</p>
        <p id="info-comandos"><span class="comando">/do</span> Para hacer acciones en el chat</p>
        <p id="info-comandos"><span class="comando">/report</span> Reportar cualquier problema</p>
        <p id="info-comandos"><span class="comando">/ayuda</span> Pide ayuda a las personas de la ciudad</p>
        <p id="info-comandos"><span class="comando">/id</span> Mirar tu ID</p>
        <p id="info-comandos"><span class="comando">/admin</span> Llamar a un admin disponible</p>
        <p id="info-comandos"><span class="comando">/auxilio</span> Mandar un axulio hacia el EMS</p>
        <p id="info-comandos"><span class="comando">/meca</span> Inforar sobre tu problema al Mecanico</p>
    `]

    var consejos_info = [
        '<p class="info-consejo">Recuerda mandar un entorno siempre que hagas cualquier delito!</p>',
        '<p class="info-consejo">¿Necesitas ayuda? contactanos en nuestro discord!</p>',
        '<p class="info-consejo">No puedes atacar a personas en las zonas comunes!</p>',
        '<p class="info-consejo">¿Has robado un vehiculo? , recuerda mandar un /forzar!</p>',
        '<p class="info-consejo">¿Quieres donar? , abre la tienda y informate!</p>'
    ]

    Entrance()

    $('.box').click(function(){
        audio_click.play();
        $('.box').fadeOut(100);
    });

    $('#box-3').click(function(){
        $('.container-comandos').show();
        $('.container-comandos').addClass('scale-in');
        $('.container-info-c').append(comandos);
    });

    $('#box-2').click(function(){
        $('.container-normativa').show();
        $('.container-normativa').addClass('scale-in');
        $('.container-normas').append(normativa);
    });

    $('#box-1').click(function(){
        $('.container-personaje').show();
        $('.container-personaje').addClass('scale-in');
    });

    $('#box-4').click(function(){
        $('.container-noticias').show();
        $('.container-noticias').addClass('scale-in');
        $('.videos').append(videos_not);
    });

    $('#box-5').click(function(){
        $('.container-tienda').show();
        $('.container-tienda').addClass('scale-in');
    });

    $('.volver-com').click(function(){
        $('.container-comandos').removeClass('scale-in');
        $('.container-comandos').addClass('scale-out');
        setTimeout(function(){
            $('.container-comandos').hide();
        } , 300)
        $('.box').fadeIn(200);
        $('.container-info-c').empty()
    });

    $('.volver-p').click(function(){
        $('.container-personaje').removeClass('scale-in');
        $('.container-personaje').addClass('scale-out');
        setTimeout(function(){
            $('.container-personaje').hide();
        } , 300)
        $('.box').fadeIn(200);
    });

    $('.volver-not').click(function(){
        $('.container-noticias').removeClass('scale-in');
        $('.container-noticias').addClass('scale-out');
        setTimeout(function(){
            $('.container-noticias').hide();
        } , 300)
        $('.box').fadeIn(200);
        $('.videos').empty();
    });

    $('.volver-tien').click(function(){
        $('.container-tienda').removeClass('scale-in');
        $('.container-tienda').addClass('scale-out');
        setTimeout(function(){
            $('.container-tienda').hide();
        } , 300)
        $('.box').fadeIn(200);
    });

    $('#icon-norm').click(function(){
        $('.container-normativa').removeClass('scale-in');
        $('.container-normativa').addClass('scale-out');
        setTimeout(function(){
            $('.container-normativa').hide();
            $('.container-normas').empty();
        } , 300)
        $('.box').fadeIn(200);
    });

    $('.discord').click(function(){
        window.invokeNative('openUrl', 'https://discord.gg/xUcYj82nB8')
    });

    $('.twitter').click(function(){
        window.invokeNative('openUrl', 'https://twitter.com/home')
    });

    $('.web').click(function(){
        window.invokeNative('openUrl', 'https://jav-shop.tebex.io/')
    });

    $('.titulo-item').click(function(){
        window.invokeNative('openUrl', 'https://jav-shop.tebex.io/')
    });

    $('#sonando').click(function(){
        $('#sonando').fadeOut(200);
        $('#mute').fadeIn(300);
        $(audio_song).animate({ volume: 0 });
    });

    $('#mute').click(function(){
        $('#sonando').fadeIn(300);
        $('#mute').fadeOut(200);
        $(audio_song).animate({ volume: 0.4 });
    });

    $('.entrar').click(function(){
        EnterGame()
    });

    window.addEventListener('message' , function(event){
        const data = event.data

        if(data.action == 'show:info') {
            $('.nombre').text('Nombre : ' + data.name  + ' ' + data.lastname);
            $('.nacimiento').text('Fecha nacimiento: ' + data.date);
            $('.trabajo').text('Trabajo : ' + data.job  + ' - ' + data.job_grade);
            if(data.sex == 'm') {
                $('.sexo').text('Sexo : Masculino');
            }else{
                $('.sexo').text('Sexo : Femenino');
            };

            if(data.name == null || data.lastname == null) {
                $('.titulo-per').text('Registrate');
                $('.nombre').hide();
                $('.sexo').hide();
                $('.nacimiento').hide();
                $('.trabajo').text('No se encontro ningun personaje , porfavor registrese.');
                $('.entrar').text('Registrarse');
            };
        };
    });

    function EnterGame(){
        $('#loader').fadeIn(400);
        $('.info-p').fadeOut(200);
        $('.titulo-per').fadeOut(200);
        $('.volver-p').fadeOut(200);
        setTimeout(function(){
            $(audio_song).animate({ volume: 0 });
            setTimeout(function() {
                $('body').hide();
                $.post('https://j-spawn/salir', JSON.stringify({}));
            }, 500)
        } , 1500)
    };

    function Entrance(){
        $('.boxes').hide();
        $('#loader').hide();
        $('.consejos').hide();
        $('#containers').hide();
        $('.box-containers').hide();
        setTimeout(function(){
            $('.inicio').addClass('scale-out');
            $('.boxes').fadeIn(200);
            setTimeout(function(){
                $('.consejos').show();
                Consejos();
            } , 1000)
            audio_song.play();
        } , 2000)
    };

    function Consejos() {
        moverConsejos();
        intervalSlider = setInterval(moverConsejos, 20000);
    };

    let randomNumbersShowed = [];

    function moverConsejos() {
        let randomNumber = Math.floor(Math.random() * consejos_info.length);

        if (randomNumbersShowed.length === consejos_info.length) {
            randomNumbersShowed = [];
        };

        if (randomNumbersShowed.includes(randomNumber)) {
            moverConsejos();
            return;
        };

        randomNumbersShowed.push(randomNumber);

        $(".info-consejo").html(consejos_info[randomNumber]);
        $('.consejos').removeClass('consejo-out').addClass('consejo-in');
        setTimeout(function(){
            $('.consejos').removeClass('consejo-in').addClass('consejo-out');
        } , 9000)
    };
})
