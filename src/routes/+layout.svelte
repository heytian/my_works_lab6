

<script>

import { page } from "$app/stores";
import "../style.css";


//     let pages = [
//   { url: "./", title: "Home" },
//   { url: "./projects", title: "Projects" },
//   { url: "./contact", title: "Contact" },
//   { url: "./cv", title: "CV" },
//   { url: "https://github.com/heytian", title: "Github" }
// ];

let pages = [
        { url: "/my_works_lab5", title: "Home" },
        { url: "/my_works_lab5/projects", title: "Projects" },
        { url: "/my_works_lab5/contact", title: "Contact" },
        { url: "/my_works_lab5/cv", title: "CV" },
        { url: "https://github.com/heytian", title: "Github" }
    ];


</script>

<nav>
  {#each pages as p}
  <!-- <a href="{p.url}">{p.title}</a> -->
  <!-- <a href={p.url} class:current={"." + $page.route.id === p.url}>
    {p.title}
  </a> -->
  <a
  href={p.url}
  class:current={"." + $page.route.id === p.url}
  target={p.url.startsWith("http") ? "_blank" : null}>
  {p.title}</a>
  {/each}
</nav>

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
</style>

