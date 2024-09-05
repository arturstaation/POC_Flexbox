# Flexbox

## Grupo

Artur Valladares Hernandez Giacummo - 10389053 <br>
Gabriel Marques Gonçalves Almeida - 10375711

## Como Executar o Código

Para acessar o site proposto por esta prova de conceito (POC), você tem duas opções:

### Opção 1: Acesso Online

Você pode visualizar o projeto diretamente no navegador acessando o seguinte link:
[**https://arturstaation.github.io/POC_Flexbox/**](https://arturstaation.github.io/POC_Flexbox/)

### Opção 2: Acesso Local

Se preferir trabalhar com uma cópia local do projeto, siga os passos abaixo:

1. **Baixar o Projeto**
   - Acesse o repositório do projeto e clique em **"Código"**.
   - Selecione a opção **"Baixar ZIP"** para obter o arquivo compactado do projeto.

2. **Descompactar o Arquivo**
   - Após o download, localize o arquivo ZIP em seu computador.
   - Descompacte o arquivo para uma pasta de sua escolha.

3. **Abrir o Arquivo HTML**
   - Navegue até a pasta descompactada.
   - Abra o arquivo `index.html` em um navegador web de sua preferência (como Google Chrome, Mozilla Firefox, etc.).

Com esses passos, você poderá visualizar e interagir com a prova de conceito localmente em seu computador.

Se precisar de ajuda adicional ou encontrar algum problema, sinta-se à vontade para entrar em contato!

## Introdução

Durante muito tempo, as únicas técnicas disponíveis para a criação de layouts usando CSS e posicionamento de elementos, e com boa compatibilidade entre navegadores, eram float e position. Além disso, manipulações entre elementos pai-filho era uma outra tarefa complexa. Visto isso, essa ferramenta foi criada para simplificar, sem perder a funcionalidade, essas tarefas, além de aumentar a eficiência.

## O que é Flexbox?

Flexbox, ou Flexible Box Layout, é um modelo de layout em CSS que facilita a criação de layouts complexos e responsivos. Ele foi desenvolvido para resolver problemas comuns com o posicionamento e alinhamento de elementos dentro de um contêiner. Além disso, uma das principais ideias por trás desse recurso é possuir a habilidade de alterar o tamanho dos elementos de forma que preencham da melhor maneira o contêiner onde estão inseridos.

## Principais Conceitos

Para entender e manipular melhor o layout flexível, você precisa saber alguns conceitos.

**Start**  
É considerado o início do contêiner flexível, sendo o ponto mais à esquerda no eixo horizontal ou mais acima no eixo vertical.

**End**  
É considerado o final do contêiner flexível, sendo o ponto mais à direita no eixo horizontal ou mais abaixo no eixo vertical.

**Eixo principal**  
O eixo principal, ou primário, é aquele que define a direção onde serão inseridos os itens.

**Eixo transversal**  
O eixo transversal, ou perpendicular, corta o eixo principal.

**Elemento Pai**  
Um elemento que contém um ou mais elementos filhos aninhados dentro dele.

**Elemento Filho**  
Um elemento que está diretamente contido dentro de outro elemento, que é o seu elemento pai.

## Como usar Flexbox

Agora que você já entende os conceitos básicos, vamos à prática. Para começar, adicione a seguinte propriedade ao seletor CSS do seu elemento: 

```css
display: flex;
```

## Disposição dos Elementos na Flexbox

### Orientação Eixo Principal

O eixo principal, como dito anteriormente, define a direção na qual os elementos serão inseridos. Para definir essa direção, deve-se adicionar, além da propriedade para atribuir ao componente o display flexível, a propriedade `flex-direction`.

No entanto, ela por si só não muda nada. Para que ela tenha um funcionamento adequado, deve-se atribuir um parâmetro a ela. Esses parâmetros podem ser:

**row**  
É o valor padrão. Os itens são dispostos horizontalmente, da esquerda para a direita.

**column**  
Os itens são dispostos verticalmente, de cima para baixo.

**row-reverse**  
Os itens são dispostos horizontalmente, da direita para a esquerda.

**column-reverse**  
Os itens são dispostos verticalmente, de baixo para cima.

### Orientação Eixo Secundário

O eixo secundário, como mencionado anteriormente, é perpendicular ao eixo principal e define como os elementos são alinhados ao longo da sua direção.

Para controlar o alinhamento dos itens ao longo do eixo secundário, além de definir o contêiner com o display flexível, você deve usar a propriedade `align-items`. A propriedade `align-items` é aplicada aos itens individuais.

Assim como com o eixo principal, essa propriedade não terá efeito sozinho e precisa de parâmetros específicos para funcionar corretamente:

**flex-start**  
Alinha os itens no início do eixo secundário.

**flex-end**  
Alinha os itens no final do eixo secundário.

**center**  
Alinha os itens no centro do eixo secundário.

**stretch**  
É o valor padrão. Estica os itens para preencher o contêiner ao longo do eixo secundário.

**baseline**  
Alinha os itens ao longo da linha de base do texto.

## Justify Content

A propriedade `justify-content` no Flexbox controla o alinhamento dos itens ao longo do eixo principal do contêiner. Esta propriedade é usada para distribuir o espaço restante ao longo do eixo principal e alinha os itens dentro do contêiner flexível. É particularmente útil para centralizar, alinhar ou distribuir itens de forma equitativa.

Para definir essa direção, deve-se adicionar, além da propriedade para atribuir ao componente o display flexível, a propriedade `justify-content`. No entanto, ela por si só não muda nada. Para que ela tenha um funcionamento adequado, deve-se atribuir um parâmetro a ela. Esses parâmetros podem ser:

**flex-start**  
É o valor padrão. Os itens são alinhados no início do eixo principal, deixando qualquer espaço restante no final do contêiner.

**center**  
Os itens são centralizados ao longo do eixo principal, deixando o espaço restante igualmente distribuído antes e depois dos itens.

**flex-end**  
Os itens são alinhados no final do eixo principal, deixando qualquer espaço restante no início do contêiner.

**space-between**  
Os itens são distribuídos uniformemente ao longo do eixo principal, com o primeiro item alinhado no início e o último item no final do contêiner. O espaço restante é distribuído igualmente entre os itens.

**space-around**  
Os itens são distribuídos uniformemente ao longo do eixo principal, com o mesmo espaço antes do primeiro item e após o último item. O espaço restante é distribuído igualmente entre os itens, mas com uma margem igual ao redor de cada item.

**space-evenly**  
Os itens são distribuídos uniformemente ao longo do eixo principal, com o mesmo espaço entre todos os itens, incluindo antes do primeiro e depois do último item.

## Wrap

Ao trabalhar com layouts, você pode encontrar o problema de que os itens não cabem em uma única linha dentro do contêiner. Isso é especialmente comum em designs responsivos ou quando o número de itens excede o espaço disponível.

Por padrão, o Flexbox organiza todos os itens em uma única linha, o que pode levar a problemas de sobreposição ou itens sendo forçados a sair do contêiner. Para contornar esse problema e permitir que os itens sejam organizados em várias linhas, pode-se usar a propriedade `flex-wrap`.

Para utilizar `flex-wrap` de forma eficaz, você deve definir o contêiner com display flexível e aplicar a propriedade com um dos seguintes valores:

#### nowrap

É o valor padrão. Os itens são dispostos em uma única linha, sem quebrar para novas linhas. Se o espaço disponível não for suficiente, os itens podem ser comprimidos ou ultrapassar o contêiner.

#### wrap

Os itens quebram e se movem para novas linhas quando o espaço na linha atual é insuficiente. Isso permite que os itens se ajustem ao tamanho do contêiner e sejam organizados de forma mais ordenada.

#### wrap-reverse

Similar ao `wrap`, mas as novas linhas são adicionadas acima da linha inicial, em vez de abaixo. Isso inverte a direção das linhas adicionais, permitindo diferentes padrões de layout.

## Disposição das Linhas

Para controlar o alinhamento das linhas ao longo do eixo secundário, além de definir o contêiner com o display flexível, você deve usar a propriedade `align-content`.

Assim como as outras propriedades, `align-content` não terá efeito sozinha e precisa de parâmetros específicos para funcionar corretamente:

**flex-start**  
Alinha os itens no início do eixo secundário.

**flex-end**  
Alinha os itens no final do eixo secundário.

**center**  
Alinha os itens no centro do eixo secundário.

**stretch**  
É o valor padrão. Estica os itens para preencher o contêiner ao longo do eixo secundário.

**space-between**  
Distribui as linhas com espaços iguais entre elas, sem espaço nas extremidades.

**space-around**  
Distribui as linhas com espaços iguais ao redor de cada linha.

**space-evenly**  
Distribui as linhas com espaços iguais entre todas as linhas, incluindo as extremidades.

## Quando Utilizar

No contexto do desenvolvimento web, o Flexbox se revela uma ferramenta indispensável para lidar com uma variedade de desafios de layout. Em situações onde você precisa garantir que elementos dentro de um contêiner se alinhem corretamente e se ajustem conforme o tamanho da tela muda, o Flexbox oferece uma solução elegante e eficiente.

Essa flexibilidade se torna ainda mais crucial quando consideramos a diversidade de dispositivos utilizados para acessar a internet atualmente. Com uma ampla gama de tamanhos de tela e resoluções – que vão desde smartphones e tablets até computadores de mesa e monitores de alta resolução – garantir que o layout do seu site seja responsivo e funcione bem em todos esses contextos é essencial para uma experiência de usuário otimizada. O Flexbox facilita a adaptação do design a diferentes tamanhos de tela e orientações, permitindo que os elementos se ajustem de maneira fluida e proporcional. Isso significa que, independentemente do dispositivo que o visitante esteja utilizando, o conteúdo do site permanecerá acessível e visualmente agradável, reduzindo a necessidade de ajustes manuais e melhorando a usabilidade geral do site. Em um ambiente digital tão fragmentado, a capacidade do Flexbox de criar layouts adaptáveis e coesos é um verdadeiro diferencial para garantir a compatibilidade e a satisfação do usuário.

## Exemplo De Flex-Direction

**Problema:** Um layout de cartões projetado com `flex-direction: row;` pode funcionar bem em uma tela de computador, exibindo todos os cartões lado a lado. No entanto, quando acessado em um celular, o layout pode ultrapassar o limite da tela, forçando o usuário a rolar horizontalmente, o que compromete a usabilidade.

**Solução:** Aplicando `flex-direction: column;` em telas menores, os cartões são empilhados verticalmente, o que melhora a leitura e a navegação em dispositivos móveis. Isso permite que o layout seja adaptável, sem comprometer a experiência do usuário em telas maiores.

## Exemplo De Flex-Wrap

**Problema:** Com `flex-wrap: nowrap;`, uma galeria de imagens pode se estender horizontalmente sem limites, criando uma barra de rolagem horizontal em dispositivos móveis. Esse problema ocorre porque todos os itens são forçados a permanecer em uma única linha, causando rolagem desnecessária e uma visualização desajustada.

**Solução:** Aplicando `flex-wrap: wrap;`, as imagens são automaticamente movidas para a linha seguinte quando não há espaço suficiente, permitindo uma visualização adequada sem rolagem horizontal em dispositivos móveis e mantendo o layout organizado.

## Exemplo De Align-Items

**Problema:** Com `align-items: flex-start;`, os itens dentro do contêiner são alinhados no início do eixo transversal. Isso pode resultar em um alinhamento desordenado, especialmente quando os itens têm diferentes alturas.

**Solução:** Aplicando `align-items: center;`, os itens são centralizados ao longo do eixo transversal, proporcionando um alinhamento mais equilibrado, independentemente das suas alturas.

## Exemplo De Align-Content

**Problema:** Com `align-content: flex-start;`, as linhas de itens são alinhadas no início do eixo transversal, deixando o espaço restante no final do contêiner. Isso pode resultar em um layout desalinhado se houver muito espaço no final do contêiner.

**Solução:** Aplicando `align-content: center;`, as linhas de itens são centralizadas ao longo do eixo transversal, preenchendo o espaço restante de forma mais equilibrada dentro do contêiner.

## Exemplo De Justify-Content: Space-Evenly

**Problema:** Com `justify-content: flex-start;`, os itens são alinhados no início do eixo principal, deixando qualquer espaço restante no final do contêiner. Isso pode resultar em um layout desbalanceado se houver muito espaço disponível no final.

**Solução:** Aplicando `justify-content: space-evenly;`, os itens são distribuídos igualmente ao longo do eixo principal, com o mesmo espaço entre cada item e entre os itens e as bordas do contêiner.

## Conclusão

O Flexbox é uma ferramenta poderosa para criar layouts responsivos e adaptáveis no desenvolvimento web. Ele resolve problemas comuns de layout, como a distribuição e alinhamento de itens, que podem ser desafiadores com métodos de layout mais tradicionais. A aplicação de `flex-direction`, `align-content`, `align-items`, e `flex-wrap` proporciona uma flexibilidade significativa para ajustar o design do seu site em diferentes dispositivos e tamanhos de tela. Com esses ajustes, você pode garantir que seu layout seja visualmente coeso, funcional e otimizado para a melhor experiência do usuário.
