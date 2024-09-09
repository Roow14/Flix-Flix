Projeto Plataforma de Streaming - Visualização de Filmes

Este projeto foi desenvolvido utilizando HTML, CSS e uma integração simples com uma API de filmes. O objetivo principal é permitir aos usuários visualizar as imagens dos filmes e ler suas respectivas sinopses. Ele simula a interface de uma plataforma de streaming, inspirado no layout de grandes serviços como Netflix.

Estrutura do Projeto:
Menu Lateral Fixo:

Criado um menu lateral à esquerda da página, com opções de navegação para diferentes categorias de plataformas de streaming, como:
EM ALTA
ORIGINAIS NETFLIX
POPULARES
COMÉDIAS
ROMANCES
DOCUMENTÁRIOS

O menu permanece fixo, permitindo fácil navegação entre as categorias, mas sem funcionalidade completa de troca de conteúdo (somente visual).
API de Filmes:

Foi utilizada uma API pública de filmes para buscar informações sobre os filmes, incluindo a imagem de capa e a sinopse. O projeto faz requisições à API para carregar os dados dos filmes e exibi-los na tela de forma dinâmica.
Cada filme é mostrado com sua imagem de capa e, ao lado ou abaixo, é exibida sua sinopse curta, permitindo ao usuário conhecer um pouco sobre o filme.
Layout e Estilização:

O conteúdo principal da página é centralizado, com o fundo da página sendo preto, proporcionando um design moderno e simples.
A área onde os filmes são exibidos tem um fundo transparente, destacando as imagens dos filmes sem sobrecarregar a interface.
O texto de títulos e descrições segue uma hierarquia bem definida, com os títulos em destaque e as sinopses logo abaixo, para facilitar a leitura.
Responsividade:

O layout foi otimizado para diferentes resoluções, garantindo que o design funcione bem tanto em telas maiores quanto em dispositivos móveis, sem perder a legibilidade e a organização visual.
Funcionalidade Principal:
Visualização de Filmes e Sinopses:
O projeto tem como foco apenas a exibição das imagens dos filmes e suas sinopses. Quando a página é carregada, os filmes são automaticamente buscados na API e exibidos em uma grade visual simples. Não há outras interações avançadas, como a reprodução de trailers ou links externos.
