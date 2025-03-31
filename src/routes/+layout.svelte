

<script>

import { page } from "$app/stores";
import { base } from "$app/paths";
import "../style.css";


//     let pages = [
//   { url: "./", title: "Home" },
//   { url: "./projects", title: "Projects" },
//   { url: "./contact", title: "Contact" },
//   { url: "./cv", title: "CV" },
//   { url: "https://github.com/heytian", title: "Github" }
// ];


// let pages = [
//         { url: "/my_works_lab5", title: "Home" },
//         { url: "/my_works_lab5/projects", title: "Projects" },
//         { url: "/my_works_lab5/contact", title: "Contact" },
//         { url: "/my_works_lab5/cv", title: "CV" },
//         { url: "https://github.com/heytian", title: "Github" }
//     ];

let pages = [
    { url: `${base}/`, title: "Home" },
    { url: `${base}/projects`, title: "Projects" },
    { url: `${base}/contact`, title: "Contact" },
    { url: `${base}/cv`, title: "CV" },
    { url: "https://github.com/heytian", title: "Github" }
  ];

// Step 2.2/ 2.4 Bind color scheme to a variable
let localStorage = globalThis.localStorage ?? {};
let colorScheme = localStorage.colorScheme ?? "light dark";
$: localStorage.colorScheme = colorScheme;


// Step 2.3
let root = globalThis?.document?.documentElement;
$: root?.style.setProperty("color-scheme", colorScheme);


</script>

<!-- <nav>
  {#each pages as p}
  <a 
  href={p.url} 
  class:current={$page.route.id === p.url.replace("/my_works_lab5","/")}
  target={p.url.startsWith("http") ? "_blank" : null}
  >
    {p.title}
  </a>
  {/each}
</nav> -->

<nav>
  {#each pages as p}
  <a 
    href={p.url} 
    class:current={$page.url.pathname === p.url}
    target={p.url.startsWith("http") ? "_blank" : null}
  >
    {p.title}
  </a>
  {/each}
</nav>


<!-- Add theme switcher -->

<label class="color-scheme">
  Theme:
  <select id="theme-select" bind:value={ colorScheme }>
      <option value="light dark">Auto</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
  </select>
</label>

<!-- {
  JSON.stringify($page)
} -->
<slot />

<style>
   /* Step 2.1: Getting <ul> and <li> out of the way */
    nav ul, 
   nav li {
    display: contents; /* remove styling */
  }

  /* Step 2.2: Add flex box to nav */
  nav{
    display:flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid;
    border-bottom-color: oklch(80% 3% 200); 
  }

  /* Step 2.3: Add style */
  nav a {
    flex: 1;
    text-decoration: none;
    color: inherit;
    text-align: center;
    padding: 0.5em;
  }

  nav a.current {
    border-bottom-width: 0.4em;
    border-bottom-style:solid;
    border-bottom-color: oklch(80% 3% 200); 
    padding-bottom:0.5rem;
  }

  /* Step 2.4: Accent color hover */
nav a:hover {
  border-bottom: 0.4em solid oklch(70% 0.1 187); /* Accent color on hover */
  /* background-color: oklch(from var(--color-accent) 95% 5% h) */
  background-color: color-mix(in oklch, var(--color-accent), canvas 85%); 
  /* ^ fix dark mode color */

}

/* css for theme switcher */
.color-scheme {
  position: fixed !important;
  top: 10px !important;
  right: 10px !important;
  left: auto !important;  /* Prevent left-side positioning */
  width: auto;  /* Prevent container issues */
  max-width: none;  /* Ensure it doesn't shrink */
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 75%;
  display: inline-flex;
  gap: 2px;
  z-index: 1000 !important;
  
}

label {
    margin-block: 0.1rem;
}

</style>



