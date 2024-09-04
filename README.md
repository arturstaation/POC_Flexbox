# Flexbox

## Introdução

Durante muito tempo, as únicas tecnicas disponíveis para a criação de layouts usando CSS e posicionamento de elementos, e com boa compatibilidade entre browsers, eram float e position. Além disso, manipulações entre elementos pai-filho era uma outra tarefa complexa. Visto isso, essa ferramente foi criada para simplificar, sem perder a funcionalidade, essas tarefas,além de aumentar a eficiencia.

## O que é Flexbox?

Flexbox, ou Flexible Box Layout, é um modelo de layout em CSS que facilita a criação de layouts complexos e responsivos. Ele foi desenvolvido para resolver problemas comuns com o posicionamento e alinhamento de elementos dentro de um contêiner. Alem disso, uma das principais ideias por trás desse recurso é possuir a habilidade de alterar o tamanho dos elementos de forma que preencham da melhor maneira o container onde estão inseridos.

## Principais Conceitos

Para entender e manipular melhor o layout flexível, você precisa saber alguns conceitos.

**Start**  
É considerado o início do container flexível, sendo o ponto mais à esquerda no eixo horizontal ou mais acima no eixo vertical.

**End**  
É considerado o final do container flexível, sendo o ponto mais à direita no eixo horizontal ou mais abaixo no eixo vertical.

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

