<script>
    import Project from "$lib/Project.svelte";
    import projects from "$lib/projects.json";
</script>

<h1>Yutian</h1>
<p>Hello, welcome!</p>
<img src="/images/yttrio_cropped4.jpg" alt="Enjoy this oil painting of me. Yes. I am a work of art." width="300 px">
<br>
<br>
<h2>Latest projects</h2>
<div class="projects">
{#each projects.slice(0, 3) as p}
<Project data={p} hLevel="3" />
<!-- <Project data={p} /> -->
{/each}
</div>
