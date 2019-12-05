An starter to built Electron apps with Svelte and Better SQLite3.  

* Electron  
* Svelte  
* Better SQLite3
* Backend server in a separate process wired via IPC for a non-blocking render process  
* Rollup.js  
* Preprocess (svelte-preprocess) for SCSS in components and globally  
* Live reload  
* Router (with hash routing)  
* App icons, Platform install options, Remember window size and position, Confirm before quit if `DocumentEdited`, Persist app settings, [InterUI](https://rsms.me/inter/) font, ...  


## Get started

Install the dependencies...

```bash
cd svelte-electron-better-sqlite3-starter
npm install
```

...then start [Rollup](https://rollupjs.org) with electron:

```bash
npm run electron-dev
```

See `package.json` scripts for other build options
