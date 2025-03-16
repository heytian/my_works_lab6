<script>
    import Project from "$lib/Project.svelte";
    import projects from "$lib/projects.json";
</script>

<!-- <pre>{ JSON.stringify(projects, null, "\t") }</pre> -->

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>{ projects.length } Projects</h1>
<div class="projects">
    {#each projects as p}
    <Project data={p} hLevel="3" />
    <!-- <Project data={p} /> -->
      <!-- <article>
        <h2>{p.title}</h2>
        <img src={p.image} alt="" />
        <p>{p.description}</p>
      </article> -->
    {/each}
  </div>
  