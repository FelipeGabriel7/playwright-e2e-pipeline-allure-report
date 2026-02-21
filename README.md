# Playwright E2E Tests – Tracalorie App

Projeto de automação End-to-End utilizando **Playwright**, aplicando o padrão **Page Object Model (POM)** e geração de relatórios com **Allure Report**.

Os testes foram desenvolvidos sobre uma aplicação real de treino de automação.

---

## 🧪 Objetivo do projeto

- Projeto desenvolvido para prática de:
- Automação E2E moderna
- Playwright
- Page Object Model (POM)
- Relatórios Allure
- CI/CD aplicado a QA

## 🌐 Aplicação testada

Os cenários automatizados utilizam a aplicação pública:

https://practice.expandtesting.com/tracalorie

Essa aplicação simula um sistema real de controle de calorias, permitindo praticar:

- Preenchimento de formulários  
- Validações de UI  
- Edição de dados  
- Exclusão de itens  
- Navegação entre páginas  

---

## 🚀 Tecnologias utilizadas

- Playwright
- Typescript  
- Node.js  
- Allure Report  
- GitHub Actions  
- GitHub Pages  

---

## 🧱 Padrão de projeto – Page Object Model (POM)

O projeto segue o padrão **Page Object Model (POM)**, que tem como objetivo:

✔ Separar regras de interação da UI dos testes  
✔ Melhorar legibilidade e manutenção  
✔ Reduzir duplicação de código  
✔ Facilitar escalabilidade da automação  

Cada página da aplicação possui uma classe responsável por:

- Mapear elementos (locators)  
- Encapsular ações (click, fill, etc.)  
- Expor comportamentos reutilizáveis  


Como rodar o projeto? 

- clone o repositorio ou faça um fork

- Instale as dependências
```bash
 npm install
```

- Instale os navegadores do playwright
```bash
npx playwright install
```

- Execute os testes
```bash
npx playwright test
```

- Execução em modo debug
```bash
npx playwright test --debug
```

### Gerar o relatório com o Allure Report
```bash
npx allure generate allure-results --clean -o allure-report
```

- abrir o relatório em um servidor local
```bash
npx allure open allure-report
```
