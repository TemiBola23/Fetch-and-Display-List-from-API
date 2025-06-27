# 📦 React Mini Project: Fetch and Display List from an API

This project is a mini React application that demonstrates fetching data from a public API and rendering it using a reusable list component. It showcases React fundamentals including hooks (`useState`, `useEffect`), component reusability, PropTypes validation, accessibility, and basic testing with CI integration.

---

## 🚀 Features

- ✅ Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- ✅ Uses functional components and React hooks
- ✅ Includes a fully **reusable** `ListComponent`
- ✅ Customizable rendering via `renderItem` prop
- ✅ Graceful loading and error states
- ✅ Accessible HTML markup with `aria-live` and `role="status"`
- ✅ Edge case handling (e.g., empty list)
- ✅ Unit tested using **React Testing Library**
- ✅ GitHub Actions CI workflow for automatic builds

---

## 📁 Project Structure

fetch-display-list/
├── public/index.html
├── src/components/ListComponent.jsx
├── src/__tests__/ListComponent.test.jsx
├── src/App.jsx
├── src/main.jsx
├── .github/workflows/ci.yml
├── README.md
├── REPORT.md
├── package.json
└── vite.config.js


## ⚙️ Setup Instructions
```bash
git clone https://github.com/your-username/fetch-display-list.git
cd fetch-display-list
npm install
npm run dev
```

## 📃 License
MIT License
