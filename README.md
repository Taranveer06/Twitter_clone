Twitter Clone 
so i wanted to build something that actually looks and feels like a real app, not just another todo list. twitter felt like the right challenge — i use it every day so i know exactly when something feels off. that made it harder, honestly. you can't fake it when you already know what it's supposed to feel like.
this is a frontend-only clone built with React and Vite. no backend, no database — just UI, components, and figuring out how to make things work together.

what's in it

feed — tweets load up on the main page, scrollable timeline
post section — you can write and post tweets, improved the UI to feel closer to the real thing
sidebar — navigation and layout structure, built from scratch
responsive layout — works on different screen sizes

still a work in progress. the post section and feed UI just got a round of improvements and there's more to come.

what's in the repo
Twitter_clone/
├── public/          # static assets
├── src/             # all the React components and logic
├── index.html       # entry point
├── package.json     # dependencies and scripts
├── vite.config.js   # Vite config
├── eslint.config.js # linting rules
└── .gitignore

run it locally
you'll need Node.js installed. then:
bashgit clone https://github.com/Taranveer06/Twitter_clone.git
cd Twitter_clone
npm install
npm run dev
open http://localhost:5173 — that's Vite's default port.

built with

React — component structure, state management
Vite — fast dev server and build tool
HTML + CSS — layout, styling, all custom
JavaScript — logic and interactivity


10 commits in, still building.
