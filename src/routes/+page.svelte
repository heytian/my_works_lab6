<script>
  import Project from "$lib/Project.svelte";
  import projects from "$lib/projects.json";


</script>

<h1>Yutian</h1>
<p>Hello, welcome!</p>
<img src="./images/yttrio_cropped4.jpg" alt="Enjoy this oil painting of me. Yes. I am a work of art." width="300 px">
<br>
<br>


{#await fetch("https://api.github.com/users/heytian") }
<p>Loading...</p>
{:then response} {#await response.json()}
<p>Decoding...</p>
{:then data}


<section>
  <h2>My GitHub Stats</h2>
  <dl>
      <dt>Followers:</dt>
      <dd>{data.followers}</dd>
      <dt>Following:</dt>
      <dd>{data.following}</dd>
      <dt>Public Repositories:</dt>
      <dd>{data.public_repos}</dd>
  </dl>
</section>

<style>
  section {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: left;
  color: #333;
}

dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 0.5rem; 
  text-align: left; 
}

dt {
  font-weight: bold; 
  color: #555; 
  grid-row: 1; 
}

dd {
  font-size: 1.2rem; 
  color: #000; 
  grid-row: 2; 
}

</style>

{:catch error}
<p class="error">Something went wrong: {error.message}</p>
{/await}
{:catch error}
<p class="error">Something went wrong: {error.message}</p>
{/await}



<h2>Latest Projects</h2>
  
  <div class="projects">
    {#each projects.slice(0, 3) as project}
      <Project data={project} hLevel="3" />
    {/each}
  </div>
  
  <style>
  /* Responsive Grid Container */
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
    gap: 1.5rem;
    padding: 1rem;
  }
  </style>
  

  