# 🟧 HTML Documents
- `<!DOCTYPE>`: representa o tipo de documento e ajuda o browser(navegador) exibir a página web corretamente.
- Todos os documentos HTML começam e terminam com a tag `<html></html>` 
- A tag `<head></head>` define os elementos que serão carregadas antes de ser exibidas para o usuário.
- A tag `<body></body>` fica os elementos que serão mostrados para o usuário.
- `style`: atributo que aplicada css diretamente no HTML.
- `class`: atributo que faz a padronização de um formato pré-definido.
- `id`: identificador, que é utilizado pelo javascript.
- `strong`: deixa o texto em negrido.
- `u`: cria um underline no texto.
- `mark`: cria um destaque no texto, ou seja, é um marca-texto.
- A tag `<blockquote>` cria uma citação.
- A tag `<p>` cria um parágrafo.
- As tags que vão do `<h1> `ao `<h6> ` determinam os tamanhos e adequações de titulo.
- Listas são obtidas pelas seguintes tags:
    - `<ol>`: Para listas ordenadas.
    - `<ul>`: Para listas não ordenadas.
    - Dentro dessas há os itens que são criados por meio da tag `<li>`
- A taf `<a>` é a ancora, tag essa quer permite a criação de links com o `href` que é a referência, ou seja a URL, `target` que pode ser a navegabilidade para a própria página, ou fora da página, isso a depender do contexto, uma vez que de acordo com as práticas SEO, o mais indicado é que o usuário passe mais tempo dentro da própria páginas, e apenas para sites externos ele saia, `title` que cria um titulo que descreve a ação que o usuário ira realizar ao clicar no link.
- A tag `img` é referente a imagem sendo uma tag sem fechamento.
***
# 👀 Importante!
- V8: é o interpretador (traduz o código fonte linha por linha durante a execução) JavaScript (ou engine), desenvolvido pelo Google e utilizado pelo navegador Google Chrome. O V8 tem por finalidade acelerar o desempenho de uma aplicação JavaScript para o formato nativo de máquina antes de ser executado.
***
# 🟧 Formulários
- Tag `<form>`: Trecho HTML que tem inputs e serve para que o servidor processe informações. É fundamental para coletar dados do usuário em uma página web. Ele possui diversos atributos que controlam o comportamento e a funcionalidade do formulário.
### 📄 *Atributos de Formulários:*
- `action`: Para onde os dados irão - endereço do servidor que receberá essas informações. Define a URL para onde os dados do formulário serão enviados quando o usuário clicar no botão de submit.

> 📌 Tomar cuidado pois pode infringir as regras de CORS.
- `method`: Especifica o método HTTP que será utilizado para enviar os dados. Os valores mais comuns são:
    - *GET* = Os dados são adicionados à URL e enviados na barra de endereço. Ideal para formulários curtos e não sensíveis.
    - *POST* = Realiza requisição e não pela url da página.Os dados são enviados no corpo da requisição HTTP, sendo mais seguro para enviar dados confidenciais.
- `name`: Atribui um nome ao formulário, útil para identificá-lo em JavaScript.
- `target`: Especifica onde o resultado da submissão do formulário será exibido. Pode ser uma nova janela, um frame ou o próprio documento. Com os parâmetros: *`_self`* = abre nele mesmo ou *`_blank `*= abre uma nova aba.
- `autocomplete`: quando `on` e for trafegar para outra pagina ao voltar os campos estara preenchido, apenas senhas não são completadas por questões de segurança.
- `on(alguma_coisa)`: significa `eventos`
***
- Tag` <input>`: 
    - `text`: texto 
    - `number`: numero, quando colocado min='0' define a partir de onde vai começar, e se colocar step='5', vai incrementar ou decrementar de 5 em 5.
    - `button`: button semanticamente funciona melhor. 
    - `Range`: funciona como scroll, no value, o valor do range é definido.
    - `color`: cria uma caixa de paleta de cores
    - `email`: já traz uma validação automaticamente.
    - `url`: funciona da mesma forma que o email, pois há um padrão a ser seguido.
    - `date`: pega o indioma do navegador para definir a data
    - `week`: define os dias da semana, mas não funiona no firefox
    - `mouth`: exibe os meses.
    - `checkbox`: caixa de seleção associado ao valor booleano.
    - `radio`: seleciona ou um ou outro.
    - `hidden`: fica invisível para o usuário e o navegador, mas quando for clicado no botão enviar o valor é enviado
    - `file`: campo de envio de arquivos, quando associado ao multiple, deixa selecionar mais de um arquivo utilizando o ctrl para enviar mais de um arquivo.
    - `search`: só funciona no chrome, é um campo texto comum, com um x no final para limpeza da busca

## ⭕Checkbox e Radio Button
- `checkbox`: utilizado para selecionar multiplos valores, mas tem que dizer quais são os valores selecionados. Deve ser implementado em uma variavel que armazene mais de um valor. Sendo assim para funcionar, mandando varios, uma lista de valores, é necessário enviar o método post e o name deve ser igual a opcional[]. Tem a função disabled que desabilita o checkbox.
- `radio`: ou um ou outro, mesmo com o nome sendo iguais, mas com o value diferente.
## ⭕Select e seus tipos
- `select-box`: campos pré-definidos. Com a tag option determina os valores. O atributo multiple permite com o ctrl selecionar mais de um objeto.
## ⭕Textarea
- Campo que se fornece um texto maior de mais informação. Quando associado a rows e cols adiciona linhas e colunas. Com css pode-se fixar o textarea para não explodir no layout da página.
# 🟧 Estruturando o HTML + Formatações
## ⭕ Formatação de Texto
- `<sup>`:
- `<sub>`: 
- `<mark>`: marca o texto
- `<u>`: sublinhado
- `<strong>`: negrito
- `<b>`: negrito
- `<i>`: italico
- `<strong> vs <b>`: `<strong>` essa tag indica que o texto dentro dela é importante ou urgente. Ela transmite uma ênfase semântica, sugerindo que o conteúdo deve ser lido com mais atenção. É como se você estivesse gritando uma palavra em uma frase. Além disso, leitores de tela, utilizados por pessoas com deficiência visual, interpretam a tag `<strong>` como uma indicação de importância. Eles podem ajustar a entonação ou o volume para destacar o texto dentro desta tag, facilitando a compreensão do conteúdo. Por outro lado, a tag`<b>` serve apenas para formatar o texto em negrito. Ela não carrega nenhum significado semântico além da visualização. É mais como um comando para o navegador: "Deixe este texto em negrito".
- `<span>`: elemento inline que agrupa elementos inline para aplicar estilos ou manipular o conteúdo como um todo. Essa tag é ideal para aplicar estilos específicos a partes de texto, como por exemplo, destacar palavras.
- `<div>`: elemento block que define umas divisão. Serve para agrupar outros elementos e aplicar estilos a um bloco de conteúdo
- `<fieldset>`: Define um conjunto de elementos relacionados dentro de um formulário. Ajuda a organizar os elementos de um formulário em grupos lógicos, melhorando a legibilidade e acessibilidade.
- `<legend>`: Define uma legenda para fieldset, descrevendo o grupo de elementos. Torrna o formulário mais claro e intuitivo para usuário.
- `<embed>`(não é mais utilizada) - Antigamente, era usado para incorporar diversos tipos de conteúdo, como vídeos, áudio e plugins. Foi depreciado e substituído por elementos mais semânticos e flexíveis, como o `<iframe>` e os elementos de áudio e vídeo nativos.
- `<iframes>`: Cria um frame inline, incorporando um documento HTML completo dentro da página atual. Ideal para exibir conteúdo de outros sites, como mapas, vídeos do Youtube ou outros aplicativos web.
- retroconpatibilidade: Capacidade de um sistema ou aplicação de funcionar em versões anteriores de software ou hardware. Garante que os usuários possam continuar acessando e utilizando um site ou aplicação mesmo que utilizem navegadores mais antigos. A retrocompatibilidade é de suma importancia no desenvolvimento de aplicações, pois permite que se alcance o maior número possível de usuários. Isso envolve o uso de HTML, CSS e JavaScript que sejam compatíveis com os navegaadores mais populares e suas versões anteriores.
# 🟧 iframes
Semelhante ao embed. Ele permite que seja mostrado conteúdo de outra site em uma janela previamente aberta. Ou seja, abre páginas(websites) inteiras dentro de uma janela.Porém a visita da página, é contada para a página que está sendo gerada, na sua página, mas não propriamente dita para a sua página. Além disso, é necessário tomar cuidado com essa tag devido a questões de segurança.

Principais questões de segurança da `<iframe>`:
- **Clickjacking**: técnica maliciosa onde um elemento transparente ou invisível é colocado sobre um botã ou link dentro de um iframe, enganando o usuário a clicar em um elemento diferente do que ele intenciona. Isso pode levar o usuário a executar ações indesejadas, como revelar informações confidenciais ou realizar transações fraudulentas.
- **XSS (Cross-Site Scripting)**: Vulnerabilidade que permite a injeção de scripts maliciosos. Atacadores podem roubar cookies, redirecionar o usuário para sites maliciosos ou assumir o controle da sessão do usuário. Se um conteúdo dentro do iframe não for devidamente sanitizado, pode ser um vetor para esse tipo de ataque.
- **Framing**: Colocar um página web dentro de um inframe em outro site, sem permissão do proprietário do conteúdo. O que pode ser utilizado para criar páginas falsas que imitam legítimas, com  o objetivo de roubo de informações ou espalhar malware.
- **Sandbox Escape**: Exploração de vulnerabilidade no iframe para escapar do ambiente isolado e executar código no contexto da página principal. Isso permite que um atacante execute um código arbitrário na página hospedeira, comprometendo toda a aplicação.

### Como Mitigar esses riscos:
- Política de Segurança do Conteúdo.
- Validação e Sanitização.
- Atualizações.
- Monitoramento.
- Utilizar atributos de seguranla para aumentar a segurança do iframes.

# 🟧 HTML Semântico
### O que é semantica?
Segundo a definição do dicionário é a significação das palavras e expressões bem como das relações de sentido que estabelecem entre si.
Sendo assim, o HTML Semântico ajuda os bots de pesquisa(como por exemplo, da google) a identificar o conteúdo do site e encontrar palavras chaves, sua estrutura é a que se conhece por HTML5, sendo assim, o HTML Semântico refere-se à sintaxe que torna o HTML mais compreensível, por sua vez o HTML "não semântico" apenas divide tudo em divs.
- Estrutura do HTML Semântico:
    - `<header>`
    - `<nav>`
    - `<aside>`: dentro dessa tag fica o assunto que não tem muita relação com o assunto principal da página, como assuntos auxiliares, assuntos que tangenciam o conteúdo ao redor podendo ser considerado separado do conteúdo. Lembrando que dentro dessa tag não se deve utilizar o texto com parênteses.
    - `<main>`: só pode ter uma por página, podendo ser filha de body, div, mas não podendo ser filha de header, nav, section, article, footer, pois ela define o conteúdo principal(tópico central) e único.Além disso, dentro dela pode ser colocada as tags header, footer e article.
    - `<section>`: seção genérica, geralmente com título. Essa tag, por sua vez não pode ser utilizada como um container.
    - `<article>`: pode conter as tags header e footer
    - `<q>`: funciona semelhante a blockquote e pode receber o atributo cite que faz referência ao site de origem da citação, podendo esse ser externo ou interno.
    - `<figure>`: é um container que delimita o escopo de figuras e imagens.
    - `<picture>`: essa tag permite a alteração de imagens em dispositivos menores, por exemplo:
        ```
        <picture>
            <source srcset="car-small.jpg" media=(min-width:600px)>
            <img src="car-medium.jpg">
        <picture>
        ``` 
    - etc.

![imagem descritiva sobre HTML vs HTML Semântic](/HTML.jpeg)
### Árvore de Acessibilidade
Aria: elemento que não modifica o default do elemento, mas a árvore de acessibilidade.

WCAG
### Web Scraping
Robos que segue links, visitando páginas e indexando, muito utilizado para montar uma base de dados.

# 🟧 SEO
### O que é?
**SEO** significa ***Search Engine Optimization*** ou em tradução livre ***Otimização para Motores de Busca***, e é o conjunto de técnicas utilizadas para melhorar a visibilidade e o posicionamento de um site nos resultados orgânicos dos mecanismos de busca, como o Google.
Essa prática visa fazer com que um site apareça nas primeiras posições quando um usuário digita uma palavra-chave.
### Quando Usar?
É essencial para qualquer site que queira aumentat sua visibilidade online e atrair tráfego orgânico.
### Como Usar?
O SEO utiliza técnicas tanto on-page quanto off-page. Algumas das principais técnicas incluem:
- Otimização de palavras-chave.
- Otimização de títulos e meta descrições.
- Criação de conteúdo de qualidade.
- Otimização da estrutura do site.
- Link building: construção de links de qualidade a partir de outros sites relevantes.
- Otimização para dispositivos móveis, como responsividade.
### Por que Usar?
- Aumento de tráfego orgânico
- Melhora da autoridade do site
- Aumento das conversões
- Melhora da experiência do usuário
### Como é aplicado?
O SEO é aplicado tanto no conteúd do site(on-page) quanto em atividades externas ao site(off-page). As técnicas on-page envolvem otimização das palavras-chave, títulos, meta descrições, estrutura do site e conteúdo. As técnicas off-page envolvem a construção de links, a participação em redes sociais e outras atividades de divulgação.
### Quais são as métricas e ferramentas utilizadas?
**🟢 *Métricas***: tráfego orgânico, taxa de cliques, tempo médio na pagina, taxa de rejeição, posições nas pesquisas e conversões.

**🟢 *Ferramentas***: Google Search Console, Google Analytics entre outras