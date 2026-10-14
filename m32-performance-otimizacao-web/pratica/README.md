# Otimização de Performance Web - Galeria de Viagens

Projeto desenvolvido como parte do exercício prático de diagnóstico, otimização e mensuração de performance front-end. O objetivo principal foi transformar uma aplicação intencionalmente lenta em uma página altamente otimizada, comprovando os ganhos através de métricas reais do Google Chrome DevTools (Lighthouse).

---

## 📋 Descrição do Projeto
Uma aplicação web interativa de galeria de viagens contendo:
- Seção principal (*Hero*) com imagem de destaque.
- Grade de destinos turísticos com cartões informativos.
- Sistema de interatividade via JavaScript para exibir detalhes dinâmicos de cada destino.

---

## 🔍 1. Diagnóstico Inicial (Gargalos Encontrados)
No relatório inicial obtido com o **Lighthouse (Mobile)**, a aplicação apresentou baixa pontuação de performance devido aos seguintes problemas:
- **Imagens pesadas e não dimensionadas:** Uso de fotos em alta resolução direta da web (acima de 4000px), gerando um LCP (*Largest Contentful Paint*) elevado.
- **Falta de Lazy Loading:** Todas as imagens da página eram carregadas imediatamente no acesso inicial, consumindo largura de banda desnecessária.
- **Ausência de dimensões fixas (`width`/`height`):** Causava pequenas movimentações no layout durante o carregamento.

---

## 🚀 2. Melhorias e Técnicas Aplicadas
Para corrigir os gargalos, as seguintes otimizações foram implementadas:
1. **Conversão e Redimensionamento de Imagens:** As imagens foram convertidas para o formato moderno **WebP**, redimensionadas e reduzidas a qualidade sem deixar a imagem com um visual ruim por meio do squoosh.app, reduzindo drasticamente o peso de mb para poucos kb.
2. **Implementação de Lazy Loading:** Adição do atributo `loading="lazy"` nas imagens posicionadas abaixo da primeira dobra.
3. **Preload do Elemento Crítico (LCP):** Inclusão de `<link rel="preload">` para a imagem de fundo do *Hero*, priorizando seu carregamento.
4. **Prevenção de Layout Shift:** Inclusão explícita de atributos `width` e `height` nas tags de imagem.
5. **Organização do Código:** Limpeza de código e estruturação correta de pastas (`/images`).

---

## 📊 3. Comparativo de Resultados (Antes e Depois)

### 🔴 Antes da Otimização
- **Performance:** ~68
- **Métricas:** LCP alto e carregamento pesado em rede móvel simulada.

### 🟢 Depois da Otimização
- **Performance:** **100** 🚀
- **Métricas:** Ganhos expressivos de velocidade, carregamento otimizado e excelente experiência do usuário.

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