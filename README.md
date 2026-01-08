# 🧪 Playwright E2E Testing Project – Sauce Demo

## 📌 Project Overview
This repository showcases a complete End-to-End automated testing framework built with **Playwright**, following real-world QA practices used in professional environments.

The goal of this project is not only to automate test cases, but to demonstrate:
- Test planning and strategy
- Framework architecture and scalability
- Page Object Model (POM)
- Maintainable and readable tests
- QA decision-making and risk-based testing

The application under test is **Sauce Demo**, a public e-commerce demo site commonly used for quality assurance practice.

---

## 🎯 Objectives
- Design a scalable E2E automation framework using Playwright
- Automate critical user journeys of an e-commerce application
- Apply QA best practices such as:
  - Smoke, regression and negative testing
  - Risk-based test selection
  - Clear separation of responsibilities
- Provide a realistic **Test Plan** similar to those used in real companies

---

## 🧠 Why Sauce Demo?
Although Sauce Demo is a simple application, it allows focusing on:
- Test architecture over UI complexity
- Stability and determinism of automated tests
- Clean implementation of Page Object Model
- Realistic e-commerce user flows (login, cart, checkout)

In real projects, automation quality is measured by **how tests are built**, not by how complex the application is.

---

## 🧪 Test Types Covered
- Smoke Tests
- End-to-End Tests
- Regression Scenarios
- Negative Test Cases

## 🗂 Project Structure
The project follows a modular and scalable structure, designed to resemble a real-world automation framework used in professional QA teams.

---

## 📄 Test Plan
A complete test plan is included to reflect how QA automation is approached in real projects.

The test plan covers:
- Testing scope and exclusions
- Test strategy and approach
- Manual vs automated testing decisions
- Risk analysis and assumptions
- Test types and execution criteria

📁 See `/test-plan/test-plan.md` for full details.

---

## 🧠 Automation Strategy
This project prioritizes:
- Critical business flows over edge UI cases
- Stability and maintainability over test quantity
- Clear separation between test logic and UI interactions

Not all scenarios are automated on purpose.  
Some cases are intentionally left as manual to reflect realistic QA decision-making.

---

## 🚀 Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**

---

## ▶️ How to Run the Tests

npm install
npx playwright install
npx playwright test

To run tests in headed mode:

npx playwright test --headed