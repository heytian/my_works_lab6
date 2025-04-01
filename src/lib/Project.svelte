<script>
  import projects from '$lib/projects.json'; // Import the JSON file
</script>

<div class="projects">
  {#each projects as project}
    <article>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p><i>{project.year}</i></p>
    </article>
  {/each}
</div>

<style>
/* Parent container for the grid */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr)); /* Responsive columns */
  gap: 1em; /* Space between items */
  padding: 1em; /* Add padding around the grid */
}

/* Individual project items */
.projects article {
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

.projects article:hover {
  transform: scale(1.05); /* Slight zoom on hover */
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

/* Responsive image */
.projects img {
  max-width: 100%;
  height: auto;
}

/* Text styling */
.projects h2,
.projects p {
  margin: 0.5em 0;
}

.projects p:last-of-type {
  font-style: italic; /* Style for year */
}
</style>
