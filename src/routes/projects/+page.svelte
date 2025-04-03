<!-- <script>
    import Project from "$lib/Project.svelte";
    import projects from "$lib/projects.json";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>{ projects.length } Projects</h1>
<div class="projects">
    {#each projects as p}
    <Project data={p} />
    {/each}
  </div> -->

  <script>
    import Project from "$lib/Project.svelte";
    import projects from "$lib/projects.json";
    import Pie from '$lib/Pie.svelte';

</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>{ projects.length } Projects</h1>
<Pie />
<div class="projects">
  {#each projects as p}
    <Project data={p} />
  {/each}
</div>

<style>
/* Responsive Grid for Projects */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjusts dynamically */
  gap: 1.5rem; /* Spacing between projects */
  padding: 1rem; /* Padding around the grid */
  justify-content: center;
}

/* Ensure images inside project cards scale properly */
.projects img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>

  