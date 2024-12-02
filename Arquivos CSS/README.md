# 👗Fundamentos do CSS
# 🔷 Formas de declarar CSS
- *CSS Inline*: Adicionando o código CSS utilizando a tag **style** em um elemento HTML.
    - Tem mais prioridade, pois sobrepõe qualquer outro estilo.
    ```
    <h1 style="color: blue; font-size: 36px;">Título azul e grande</h1>
    ```
- *CSS Interno*: Código CSS é adiciona dentro da tag `<head>` da página HTML.
    - Tem prioridade sobre estilos externos.
    ```
    <head>
        <style>
            h1 {
                color: red;
                text-align: center;
            }
        </style>
    </head>
    ```
- *CSS Externo*: é criado um arquivo com a extensão `.css` e esse é chamado dentro da tag `<head>` dentro da página HTML.
    ```
    CSS
    
    h1 {
        color: green;
        font-family: Arial, sans-serif;
    }
    ```
    ```
    HTML

    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    ```

### ◻️ *Caminhos Relativos e Absolutos*
- **Caminho Relativo**:
    - É definido em relação ao arquivo HTML atual.
    - `href="style.css"`
    - Caminho relativo com subpastas: `<link rel="stylesheet" href="../css/style.css">`
- **Caminho Absoluto**:
    - Caminho completo do arquivo, começando pela raiz do servidor.
    - `href="http://exemplo.com/css/style.css"`
    

# 🔷 Seletores
- Por Tipo/Tag: todos os elements de um determinado tipo
    ```
    p {
        color: blue;
        font-size: 16px;
    }
    ```
- Por ID(#): elemento único com um ID específico
    ```
    <h1 id="titulo-principal">Título da Página</h1>

    #titulo-principal {
        color: red;
        text-align: center;
    }
    ```
- Por Classe(.): todos os elementos com uma determinada classe.
    ```
    <p class="destaque">Este parágrafo é destacado.</p>

    .destaque {
        font-weight: bold;
        background-color: yellow;
    }
    ```
- Universal(*): seleciona todos os elementos da página.
    ```
    * {
        margin: 0;
        padding: 0;
    }
    ```
- De Atributo([atrib]): elementos com atributo específico.
    - [nome_atributo]=value: seleciona elementos cujo atributo tem exatamente o valor especificado.
    ```
    input[type="text"] {
        border: 1px solid black;
    }
    
    ```
    - [nome_atributo~="alguma_palavra_contida_no_valor"]:
    Seleciona elementos cujo atributo contém a palavra específicada, independentemente de outras palavras.

    ```
    a[href~="google"] {
        color: green;
    }

    ```
    - [nome_atributo|="alguma_palavra_contida_no_valor"]:
    Seleciona elementos cujo atributo começa com a palavra especificada, seguida por um hífen opcional e outras palavras.
    ```
    a[lang|="en"] {
        font-family: Arial, sans-serif;
    }
    ```
    - [nome_atributo^="prefixo"]:
    Seleciona elementos cujo atributo começa com o prefixo especificado
    ```
    input[name^="user_"] {
        width: 200px;
    }
    ```

    # 🔷 Combinadores

    1. Combinador Descendentes: Seleciona todos os descendentes(filhos, netos, bisnetos, etc.) de um elemento.
    - Sintaxe: elemento-pai elemento-filho
    - Exemplo:
    ```
    // Todas as tags <p> que estão dentro da tag <div> terão a cor da fonte azul
    div p {
        color: blue;
    }
    ```
    2. Combinador Filho(>): Seleciona apenas os filhos diretos de um elemento
    - Sintaxe: elemento-pai > elemento-filho
    - Exemplo:
    ```
    // Apenas os itens <li> que são filhos diretos de uma lista <ul> terão a lista de marcadores removida
    ul > li {
        list-tyle: none;
    }
    ```
    3. Combinador Irmão Adjacente(+): Seleciona o elemento imediatamente seguinte a outro elemento, ambos sendo filhos do mesmo pai.
    - Sintaxe: elemento1 + elemento2
    - Exemplo:
    ```
    // O parágrafo que vem imediatamente após um cabeçalho <h2> terá a fonte em negrito.
    h2 + p {
        font-weight: bold;
    }
    ```
    4. Combinador Irmão em Geral(~): Seleciona todos os elementos seguintes a outro elemento, ambos sendo filhos do mesmo pai.
    - Sintaxe: elemento1 ~ elemento2
    - Exemplo:
    ```
    // Todos os parágrafos que vêm após um cabeçalho <h2> (não necessariamente o próximo) terão alinhado ao centro.
    h2 ~ p {
        text-align: center;
    }
    ```

    > **p.texto ou .texto.teste** - pega o parágrafo que possui a classe texto, mas a outra classe texto não será aplicado o estilo

    ## ⚫ Resumão de Combinadores
    *Combinadores - tipo de relação entre dois Seletores*
    1. combinador descendente (espaço)
    2. combinador filho(>): filho direto
    3. combinador irmão adjascente(+): "elementos ao lado de "
    4. combinador irmão em geral(~)

    > **[seletor] [combinador] [seletor]**

## 🔷 Propriedades
- Inherit: permite que um elemento herde o valor de uma propriedade de seu elemento pai. Se um elemento tiver a propriedade `color: inherit`, ele assumirá a cor do seu pai
- Width/height:
    - auto: default. Calcula a altura e largura
    - length: define a altura e largura em px, cm, etc.
    - %: define em porcentagem as altura e largura do container block
    - initial: define um valor padrão tanto para altura quanto para a largura.
> 📌 Height e Width não incluem padding, borders e margens, elas definem a altura e largura da área dentro do padding, border e margin do elemento!
- max-width, min-width, max-height e min-height são úteis para dispositivos menores.
### Obs.: se por algum motivo for usado ambas as width e max-width no mesmo elemento, e o valor de width for maior que da max-width, max-wisth será usada e width será ignorada.
- margin:

    Com 4 valores:

        - `margin: 25px 50px 75px 100px`

            - margem superior é 25px
            - margem direita é 50px
            - margem inferior é 75px
            - margem esquerda é 100px

    A definição dos valores é feita em sentido horário.

    Com 3 Valores:

        - `margin: 25px 50px 75px`
            - Segue a mesma lógica anterior, porém as margens direita e esquerda são setadas com 50px.

    Com 2 Valores:

         - `margin: 25px 50px`
            - Segue a mesma lógica anterior, porém as margens superior e inferior são setadas como 25px e as margens direita e esquerda são setadas com 50px.
    Com apenas 1 valor:
    
        - `margin: 25px`
            - Todas as margens são setadas com 25px

> `margin: auto`: o elemento ocupará a largura especificada e o espaço restante será dividido igualmente entre as margens esquerda e direita, sendo assim podemos dizer que auto = center(horizontalmente)
- Padding: é usado para criar espaço ao redor do conteúdo de um elemento, dentro de quaisquer bordas definida. As regras são as mesmas aplicadas a `margin`.
- Qual a diferença entre padding e margin?: o padding afeta o tamanho da caixa do elemento, enquanto o margin cria espaço entre os elementos.
- Box-sizing: define como o tamanho de um elemento é calculado.
    - Valores:
        - content-box: altura e largura se aplicam apenas ao conteúdo do elemento.
        - border-box: largura e altura especificadas incluem padding e borda. Com essa propriedade se pode definir uma largura e altura exatas, sabendo que o padding e a borda não afetarão o tamanho total.
### 📦 Caixa Modelo (Box Model)
![Imagem de caixa modelo](/Arquivos%20CSS/Captura%20de%20tela%202024-11-08%20205652.png)

Box Model é uma "caixa" que fica ao redor de cada elemento HTML, ele consiste: content, padding, borders e margins

*- Content:* onde texto e imagem aparecem

*- Padding:* área do redor do content

*- Border:* fica ao redor do paddign e do conteúdo.

*- Margin:* área fora da borda

**Exemplo:**
```
div {
  width: 320px;
  height: 50px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}

```
#### OBS.: Quando se é definido as propriedades width e height de um elemento com CSS, se está aplicando apenas ao `content`. Para calcular as altura e largura totais de um elemento, deve-se incluir o `padding` e `border`.
Exemplo de Cálculo:

  320px (largura da área de conteúdo)
+ 20px (preenchimento esquerdo + preenchimento direito)
+ 10px (borda esquerda + borda direita)
= 350px (largura total)

  50px (altura da área de conteúdo)
+ 20px (preenchimento superior + preenchimento inferior)
+ 10px (borda superior + borda inferior)
= 80px (altura total)

**- Fórmula de Cálculo:**
>Largura total do elemento = largura + preenchimento esquerdo + preenchimento direito + borda esquerda + borda direita

>Altura total do elemento = altura + preenchimento superior + preenchimento inferior + borda superior + borda inferior

#### OBS.: A margem não é incluida no tamanho real da caixa, sendo assim a largura total e altura total param até a borda.

# 🔷 Estilizações Básicas
## 🎨 Cores
- Cores Pré-definidas: red, brown, black, etc.
- Palavra-chave "currentcolor": para aplicar estilo de cor de forma dinâmica(porém, observei que aparentemente não há a necessidade de colocar a palavra reservada "currentcolor, pois apenas com o 2px e solid no border foi-se aplicado a cor definida para o id")
- Hexadecimal: os dois primeiros valores está relacionado ao vermelho e os dois últimos ao azul, há como aplicar transparência a cor hexadecimal adicionando mais dois digitos após os dois dígitos finais.
- RGB(Red Green Blue): faixas do 0 ao 255
- RGBA(Red Green Blue Opacidade(nível de transparência)): alfa(0.0 ao 1.0)
- HSL: hsl( matiz(0 a 360) , saturação(0 a 100%) , luminosidade(0 a 100%))
- HSLA: (hue, saturação, luminosidade, alfa(0,0 a 1,0)), os demais parametros seguem a mesma regra do HSL.
## 🌆  Imagens
- Object-fit(Ajuste de Objeto): Ajuste para que a imagem ou video caiba dentro do container.
    - Tipos:
        - Fill: a imagem é redimensionada para preencher a dimensão dada. Se necessário, a imagem será esticada ou comprimida para caber.
        - Contain: a imagem mantém sua proporção, mas é redimensionada para caber dentro da dimensão fornecida.
        - None: a imagem não será redimensionada.
        - Cover: a imagem mantém sua proporção de aspecto e preenche a dimensão dada. A imagem será recortada para caber.
        - Scale-down: a imagem será reduzida para a menor versão de none ou contain
- Object-position: é usada junto com object-fit para especificar como um `<img>`ou `<video>` deve ser posicionado com coordenadas x/y dentro de sua "própria caixa de conteúdo" 
    - Eixos: vertical e horizontal(x, y)
    - Medida em: porcentagem ou pixel
    - Palavras-chave: left, right, center,top e bottom.
## 🔚 Fundo dos elementos
- linear-gradiente: Cria um gradiente que muda de cor ao longo de uma linha reta.
```
    background-image: linear-gradient(direction, color1, color2, ...);
    //direction: Especifica a direção do gradiente (ex: to top, to bottom, to right, 45deg).
    div {
        background-image: linear-gradient(to right, blue, yellow);
        height: 200px;
    }
```
- radial-gradient: Cria um gradiente que muda de cor a partir de um ponto central.
```
    background-image: radial-gradient(shape size at position, color1, color2, ...);
    div {
        background-image: radial-gradient(circle closest-side at center, red, yellow);
        height: 200px;
    }
```
- repeating-linear-gradient: Repete um gradiente linear ao longo de um eixo
```
background-image: repeating-linear-gradient(direction, color1, color2, ...);
div {
    background-image: repeating-linear-gradient(45deg, #eee, #ddd);
    height: 200px;
}
```
- background-image: url(), url(); -> cria camadas de imagens
## Redimensionando a imagem de fundo dos elementos
- Background-size: controla o tamanho da imagem de fundo dentro de um elemento. 
    - auto: mantém proporções originais
    - cover: ocupa todo o fundo do container mesmo a imagem sendo grande
    - contain: se ajusta para caber dentro do elemento, mantendo suas proporções originais e possivelmente deixando espaços em branco.
    - valor
    - valor-1, valor-2(altura, largura)
    - camada-1, camada-2
- background-repeat: pode receber dois parâmetros
    - repeat-x
    - repeat-y
    - space
    - round
    - no-repeat
- background-position: bottom 10px right 20px, além disso pode trabalhar com gradiente, porém ao invés de imagem ser passado a url, seria passada a função gradiente desejada.
- Background-attachment: define como fundo do elemento vai se moveinmetar em realação a janela do navegador
        - tipos:
            - fixed
            - scroll
            - local
- background-origin:
    - padding-box(valor default)
    - border-box
    - content-box
-background-clip:controlar imagem ou cor de fundo do elemento, preenchendo espaçamento do conteudo
    -padding-box
    - border-box
    - content-box
    - text: -webkit-background-clip, para o chrome interpretar
- background-blend-mode
-background: é como se fosse um atalho css para as demais propriedades css background.Por exemplo: 
    `background: url('url_da_imagem') top center / 200px 200px no-reapt fixed`
## bordas
- border-width: espessura da bordar
- border-style
- border-color
- short-hand:
    `border: 20px solid #333`
- border-image:
    - source
    - width
    - repeat
    - outset
    - slice
## Fonts
@font-face {
    font-family
    src: url() ou local(), url()
}
font-variant
font-stretch: só funciona se a font estevir com as configurações para essa propriedade. Porém a maioria das fontes não possuem suporte para essa propriedade
line-height: espaçamento da fonte, ou seja, altura da linha
## Texto
- text-transform: quais caracteres ficaram em maiusculo, minusculo, etc
- text-align: responsável por alinhar o texto do elemento horizontalmente
- text-decoration: adiciona ou remove linhas ao texto, seja linhas em cima, no meio ou embaixo
    - text-decoration-line
    - text-decoration-style
    - text-decoration-color
    - text-decoration-thickness: espessura da linha
    ```
    text-decoration: underline wavy #ab1212 2px
    ```

- text-ident: define o recuo da primeira linha do texto
- letter-spacing: adiciona espaçamento entre cada caractere do texto - unidades de medidas negativas diminui o espaçamento aproximando os caracteres.
- word-spacing: adiciona espaçamento entre cada palavra do texto
- whitespace: define como os espaços em branco do texto de um determinado elemento é tratado.
    - normal
    - nowrap
    - pre
    - pre-line
    - pre-wrap
    - break-spaces
- word-wrap: quebra palavras grandes para caber em uma linha
    - normal(default)
    - break-word
- word-break: define quando o texto deve ter uma quebra de linha
    - normal
    - brek-all
    - keep-all: faz o tratamento igual ao normal
- writing-mode: define a orientação do texto (vertical ou horizontalmente), geralmente utilizado para idiomas lidos da direita para a esquerda
    - horizontal-tb
    - vertical-rl(right-left)
    - vertical-lr(left-right)
- text-overflow: define a orientação do texto(vertical ou horizontal)
    - clip
    - ellipsis
    - string: só funciona no `Firefox`

## Sombras
- box-shadow: definida com uma sombra vertical e uma horizontal
```
div {
    width: 200px;
    height: 200px;
    border: 10px solid #333
    background: #fff
    margin: 20px auto
    box-shadow: inset(sombra dentro do elemento) 30px 30px 20px -7px(tamanho da sombra) red;
}
```
```
img {
    width: 500px;
    height: 200px;
    margin: 20px auto;
    object-fit: cover;
    filter: drop-shadow(10px 10px 5px  gray); // aplica uma sombra na imagem
}
```
- text-shadow: 
```
h2 {
   color: deeppink;
   font-size: 40px;
   text-align: center;
   text-shadow: 10px(horizontal) 10px(vertical) 5px(desfoque) purple(cor da sombra);
}
```
## Opacity
- Define o nível de opacidade(transparência) de todo elemento
- 0(alto grau de transparência) a 1(nenhum nível de transparência)
```
.exemplo {
    opacity: 0.5 ou .5;
}
```
## Overflow
- Controla como o conteúdo deve ser exibido caso ultrapasse os limites do container.
- Funciona com conteudo em bloco com uma altura especificada
    - visible(default): conteudo é mostrado mesmo ultrapassando o container.
    - hidden: o que não couber dentro do container, fica invisivel.
    - scroll: é adicionada uma barra de rolagem para que o usuário possa ver tudo que estiver dentro do elemento
    - auto: se o conteudo passar do container, automaticamente é adicionado uma barra de rolagem
- overflow-x: eixo horizontal
- overflow-y: eixo vertical
## Redefinindo as propriedades padrões dos navegadores
Reset CSS é uma folha de estilos que irá sobrepor todas as propriedades de estilo CSS que os navegadores colocam por padrão nos elementos, ajudando com que os sites tenham o mesmo design em todos os navegadores.
`@import url(./reset.css)`