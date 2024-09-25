document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button.add, button.sub');

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const targetId = event.target.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const operation = event.target.classList.contains('add') ? 'add' : 'sub';
            
            switch (operation) {
                case 'add':
                    input.value = parseInt(input.value) + 1;
                    break;
                case 'sub':
                    input.value = Math.max(0, parseInt(input.value) - 1);
                    break;
            }
        });
    });


    const erro = document.getElementById('erro');
    const resultado = document.getElementById('resultado');
    const calcular = document.getElementById('calcular');
    const quantidades = document.getElementById('quantidades');

    document.getElementById('botao').addEventListener('click', function() {
        const homemJS = parseInt(document.getElementById('homem').value);
        const mulherJS = parseInt(document.getElementById('mulher').value);
        const criancaJS = parseInt(document.getElementById('crianca').value);

        if((homemJS == 0) && (mulherJS == 0) && (criancaJS == 0) ){
            erro.style.opacity = 1;
        } else {
            erro.style.opacity = 0;

            const carne = (homemJS * 500 + mulherJS * 300 + criancaJS * 200)/1000;
            const frango = (homemJS * 200 + mulherJS * 200 + criancaJS * 100)/1000;
            const linguica = (homemJS * 200 + mulherJS * 200 + criancaJS * 200)/1000;
            const refrigerante = (homemJS * 300 + mulherJS * 400 + criancaJS * 200)/1000;
            const cerveja = (homemJS * 800 + mulherJS * 500 + criancaJS * 0)/1000;

            calcular.style.opacity = 0;
            quantidades.style.opacity = 0;

            setTimeout(function(){       
                resultado.style.zIndex = '1';
                resultado.style.opacity = 100;
            },100);
        
            document.getElementById('tituloResult').innerHTML = 'Quantidade de itens a serem comprados:'
            document.getElementById('corpoResult').innerHTML = `
                <ul>
                <li> ` + carne + `kg de carne bovina</li>
                <li> ` + frango + `kg de frango</li>
                <li> ` + linguica + `kg de linguiça</li>
                <li> ` + refrigerante + `l de refrigerante</li>
                <li> ` + cerveja + `l de cerveja</li>
                </ul>
                `
        }   
    });

    document.getElementById('fechar').addEventListener('click', function() {
        resultado.style.zIndex = -1;
        resultado.style.opacity = 0;

        setTimeout(function(){
            quantidades.style.opacity = 1;
            calcular.style.opacity = 1;
        },100);
    });
});