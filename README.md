# GitHub Issues - TanStack Query

This repository showcases a React application that leverages **TanStack Query** to explore its powerful capabilities, such as caching, data fetching, mutations, and more. The project implements a small application to demonstrate the benefits of using TanStack Query's default configurations in comparison to traditional methods of handling asynchronous data.

## Requirements

You need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

> [!NOTE]
> Clicking on the Node.js badge will take you to the Node.js website, where you can download the installer. It is recommended to use the stable version. When you install Node.js, npm will be installed automatically.

Check your Node.js and npm installation by running:

```bash
node --version
npm --version
```

## Technologies used

- Vite
- React
- TanStack Query
- TailwindCSS
- React Router 6+
- React Icons

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/github-issues.git
```

2. **Navigate to the project directory:**

```bash
cd github-issues
```

3. **Install dependencies:**

```bash
npm install
```

4. **Set environment variables**

- Copy the `.env.template` file and rename it to `.env`.
- Open the `.env` file and add the required environment variables.

5. **Start the development server**

```bash
npm run dev
```

> [!NOTE]
> The server will typically run on <http://localhost:5173>, but check the output on your terminal to be sure. For troubleshooting, ensure Docker, Node.js, and the dependencies are correctly installed. Verify that the .env configuration matches your setup.

## Project Structure

```bash
├───📁 public/
├───📁 src/
│   ├───📁 api/
│   ├───📁 issues/
│   │   ├───📁 actions/
│   │   │   └───📄 index.ts
│   │   ├───📁 components/
│   │   ├───📁 hooks/
│   │   ├───📁 interfaces/
│   │   └───📁 views/
│   ├───📁 router/
│   │   └───📄 index.tsx
│   ├───📁 shared/
│   │   ├───📁 components/
│   │   └───📄 index.ts
│   ├───📁 utils/
│   ├───📄 GitApp.tsx
│   ├───📄 index.css
│   ├───📄 main.tsx
│   ├───📄 react-router-dom.d.ts
│   └───📄 vite-env.d.ts
├───📄 .env.template
├───📄 .eslintrc.cjs
├───📄 index.html
├───📄 LICENSE
├───📄 package-lock.json
├───📄 package.json
├───📄 postcss.config.js
├───📄 README.md
├───📄 tailwind.config.js
├───📄 tsconfig.json
├───📄 tsconfig.node.json
└───📄 vite.config.ts
```

## Project Highlights

This project demonstrates how TanStack Query simplifies handling:

- Asynchronous data fetching with intelligent caching.
- Query freshness management and cache invalidation.
- Advanced state updates with optimistic mutations.
- Error handling during updates and rollbacks.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge to see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

For any questions or suggestions, feel free to reach out via [email](mailto:daniel.40.pompa@gmail.com).
