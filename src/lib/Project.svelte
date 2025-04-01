<!-- <script> 
  export let data = {};
  export let hLevel = 2;
</script>

<article>
  <svelte:element this={"h" + hLevel}>{data.title}</svelte:element>
  <img src={data.image} alt="" />
  <p>{data.description}</p>
</article>

<style>
.projects {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
gap: 1em;
}

.projects {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
gap: 1em;
}

.projects article {
display: grid;
grid-template-rows: subgrid;
grid-row: span 3;
}

.projects h2 {
margin: 0;
}
</style> -->

<script> 
  export let data = {};
  export let hLevel = 2;
</script>

<article class="project-card">
  <svelte:element this={"h" + hLevel}>{data.title}</svelte:element>
  <img src={data.image} alt={data.title} />
  <p>{data.description}</p>
</article>

<style>
/* Individual project cards */
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

/* Ensure images scale properly */
.project-card img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}
</style>
