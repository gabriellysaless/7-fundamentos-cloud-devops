# Otimização de Performance Web - Galeria de Viagens

Projeto desenvolvido como parte do exercício prático de diagnóstico, otimização e mensuração de performance front-end. O objetivo principal foi transformar uma aplicação intencionalmente lenta em uma página altamente otimizada, comprovando os ganhos através de métricas reais do Google Chrome DevTools (Lighthouse).

---

## 📋 Descrição do Projeto
A Galeria de Viagens é uma aplicação web interativa que apresenta destinos turísticos por meio de imagens e cartões informativos.

O projeto contém:
- Seção principal (*Hero*) com imagem de destaque.
- Grade de destinos turísticos com cartões informativos.
- Sistema de interatividade via JavaScript para exibir detalhes dinâmicos de cada destino.

---

## 🔍 1. Diagnóstico Inicial (Gargalos Encontrados)
No relatório inicial obtido com o **Lighthouse (Mobile)**, a aplicação apresentou baixa pontuação de performance devido aos seguintes problemas:
- **Imagens pesadas e não dimensionadas:** Uso de fotos em alta resolução direta da web (acima de 4000px), gerando um LCP (*Largest Contentful Paint*) elevado.
- **Falta de Lazy Loading:** Todas as imagens da página eram carregadas imediatamente no acesso inicial, consumindo largura de banda desnecessária.
- **Ausência de dimensões fixas (`width`/`height`):** Causava pequenas movimentações no layout durante o carregamento.
- **Arquivos sem minificação:** possibilidade de reduzir o tamanho dos arquivos HTML, CSS e JavaScript por meio da remoção de caracteres desnecessários.

---

## 🚀 2. Melhorias e Técnicas Aplicadas
Para reduzir os gargalos, as seguintes otimizações foram implementadas:
1. **Conversão e Redimensionamento de Imagens:** As imagens foram convertidas para o formato moderno **WebP**, redimensionadas e reduzidas a qualidade sem deixar a imagem com um visual ruim por meio do squoosh.app, reduzindo drasticamente o peso de mb para poucos kb.
2. **Implementação de Lazy Loading:** Adição do atributo `loading="lazy"` nas imagens posicionadas abaixo da primeira dobra.
3. **Minificação por meio do Minify:** Extensão Minify para fazer a minificação dos arquivos (*.min*)
4. **Preload do Elemento Crítico (LCP):** Inclusão de `<link rel="preload">` para a imagem de fundo do *Hero*, priorizando seu carregamento.
5. **Prevenção de Layout Shift:** Inclusão explícita de atributos `width` e `height` nas tags de imagem.
6. **Organização do Código:** Limpeza de código e estruturação correta de pastas (`/images`).

---

## 📊 3. Comparativo de Resultados (Antes e Depois)

### 🔴 Antes da Otimização
#### Lighthouse:
![Lighthouse antes da otimização](/m32-performance-otimizacao-web/pratica/performance-images/lighthouse-antes.png)
#### Métricas Locais:
![Local Metrics antes da otimização](/m32-performance-otimizacao-web/pratica/performance-images/local-metrics-antes.png)
- **Performance:** ~65.
- **LCP:** 0,55 s.
- **CLS:** 0.
- **INP:** 328 ms.

### 🟢 Depois da Otimização
#### Lighthouse:
![Lighthouse depois da otimização](/m32-performance-otimizacao-web/pratica/performance-images/lighthouse-depois.png)
#### Métricas Locais:
![Local Metrics depois da otimização](/m32-performance-otimizacao-web/pratica/performance-images/local-metrics-depois.png)
- **Performance:** **100** 🚀
- **LCP:** 0,12 s.
- **CLS:** 0.
- **INP:** 32 ms.
- Ganhos expressivos de velocidade, carregamento otimizado e excelente experiência do usuário.

---

## 📈 Análise dos resultados

A comparação original demonstra uma redução no LCP de 0,55 s para 0,12 s e no INP de 328 ms para 32 ms. O CLS permaneceu em 0 nas capturas apresentadas.

A pontuação de Performance passou de 65 para 100 pontos.

Esses resultados devem ser interpretados considerando as condições de cada execução. Uma pontuação isolada não comprova que uma técnica específica foi responsável por toda a melhoria.

---

## 🛠️ Tecnologias Utilizadas
- HTML5 Semântico
- CSS3 (Flexbox & Grid Layout)
- JavaScript (Vanilla / DOM API)
- Google Chrome DevTools (Lighthouse)

---

## 👨‍💻 Como Executar o Projeto Localmente
1. Clone este repositório:
   ```bash
   git clone <url-do-seu-repositorio>