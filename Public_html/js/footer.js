const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
<div class="footer-content container">
            <div class="sentence">

                <div class="title ">
                    <h2>
                        “Comunicação não é o que você diz, <br> é o que os outros entendem. ”
                    </h2>
                </div>

                <div class="subtitle">
                    <p>
                        David Ogilvy <span> - Founder of Ogilvy & Mather </span>
                    </p>
                </div>

            </div>

            <div class="line">
                <div class="line-inner"></div>
            </div>

            <div class="inner-content">

                <div class="copyrighs">
                    <p>
                        © Copyright 2024. Todos os direitos reservados. <br>
                        Site desenvolvido pela Abystract Digital Solutions
                    </p>
                </div>

                <div class="brand-logo-inner">
                    <img src="img/icon-complete-W.png" alt="brand-logo-abystract">
                </div>

                <div class="links-inner">
                    <ul class="nav-items">
                        <li class="item"> <a href="#inicio"> Início</a></li>
                        <li class="item"> <a href="#sobre"> Sobre </a></li>
                        <li class="item"> <a href="#servicos"> Serviços </a></li>
                        <li class="item"> <a href="#projetos"> Projetos </a></li>
                        <li class="item"> <a href="#contato"> Contato </a></li>
                    </ul>
                </div>

            </div>
            </div>

            
    `;

}

createFooter();