# Catálogo de Produtos - Otimização de Performance

## Descrição do Projeto

Este projeto consiste em um catálogo de produtos desenvolvido em React utilizando Vite. O objetivo da atividade foi analisar métricas de performance utilizando o Lighthouse do Chrome DevTools, identificar gargalos e aplicar otimizações para melhorar a experiência do usuário.

---

## Tecnologias Utilizadas

- React
- Vite
- JavaScript
- CSS
- Lighthouse
- Chrome DevTools

---

## Análise Inicial

A análise inicial foi realizada utilizando o Lighthouse no Google Chrome em modo Desktop.

### Resultados Iniciais

| Métrica | Pontuação |
|---|---|
| Performance | 76 |
| Accessibility | 89 |
| Best Practices | 100 |
| SEO | 83 |

### Gargalos Identificados

Durante a análise inicial foram encontrados os seguintes pontos de melhoria:

- Imagens sem otimização adequada
- Ausência de lazy loading nas imagens
- Estrutura semântica limitada nos formulários
- Recursos que poderiam ser carregados de forma mais eficiente

---

## Melhorias Aplicadas

### Otimização de Imagens

- Conversão da imagem principal para o formato `.webp`
- Redução do tamanho da imagem
- Utilização de imagem local otimizada

### Lazy Loading

Foi aplicado:

```html
loading="lazy"
```

nas imagens dos produtos para melhorar o carregamento inicial da página.

### Melhorias de Acessibilidade

Foram adicionadas:

- labels nos inputs do formulário
- atributos de acessibilidade
- melhoria na semântica dos elementos

### Otimização de Build

O projeto foi compilado utilizando o build de produção do Vite:

```bash
npm run build
```

permitindo:
- minificação automática
- compactação dos arquivos
- melhor carregamento da aplicação

---

## Resultados Finais

| Métrica | Antes | Depois |
|---|---|---|
| Performance | 76 | 85 |
| Accessibility | 89 | 93 |
| Best Practices | 100 | 100 |
| SEO | 83 | 83 |

---

## Prints da Análise

### Antes

![Antes](./screenshots/antes.png)

### Depois

![Depois](./screenshots/depois.png)

---

## Considerações Finais

As otimizações aplicadas melhoraram principalmente a acessibilidade e a performance geral da aplicação. Mesmo sendo um projeto relativamente pequeno, foi possível aplicar boas práticas modernas de otimização front-end utilizando recursos como imagens otimizadas, lazy loading e melhorias semânticas no HTML.

O uso do Lighthouse permitiu identificar gargalos e acompanhar a evolução das métricas após as alterações realizadas.