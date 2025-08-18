# Host Application Example
This directory contains an example of how to render a Myop component inside a Vue host application.

It demonstrates how a Vue project can consume and display components exposed through Myop,
showing how to integrate remote Myop components seamlessly into an existing Vue app.

---

## 📂 Project Structure
```
host
├── src
│ ├── components        | # Local Myop components used in the host app
│ │ └── HelloWorld.vue  | # Example of a Myop component
│ ├── App.vue           | # Main application entry that renders Myop components
│ └── main.ts           | # Vue bootstrap file
├── package.json        | # Project dependencies and scripts
└── vite.config.ts      | # Vite configuration
```

---

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
    ```
2. Start the development server:
   ```bash
   npm run dev
    ```


Open http://localhost:4900 (or the port shown in your terminal) to view the host app.

<br/>
<br/>


👉 For more details about Myop, check out the [Myop documentation](https://docs.myop.dev/) site.
