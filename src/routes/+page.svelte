<script>
    import Project from "$lib/Project.svelte";
    import projects from "$lib/projects.json";


</script>

<h1>Yutian</h1>
<p>Hello, welcome!</p>
<img src="./images/yttrio_cropped4.jpg" alt="Enjoy this oil painting of me. Yes. I am a work of art." width="300 px">
<br>
<br>

<!-- Lab 5 Github stats -->

<!-- let profileData = fetch("https://api.github.com/users/heytian"); -->
{#await fetch("https://api.github.com/users/heytian") }
<p>Loading...</p>
{:then response} {#await response.json()}
<p>Decoding...</p>
{:then data}
<!-- <p>The data is { JSON.stringify(data) }</p>
{:catch error} -->


<!-- let profileData = {
ok: true,
json: async () => ({
    followers: 100,
    following: 100,
    public_repos: 100,
    public_gists: 100,
})
}; -->

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
    grid-template-columns: repeat(3, 1fr); /* Four equal-sized columns */
    gap: 0.5rem; /* Space between grid items */
    text-align: left; /* Center align text */
  }

  dt {
    font-weight: bold; /* Make titles bold */
    color: #555; /* Slightly darker color for titles */
    grid-row: 1; /* Place all <dt> elements in the first row */
  }

  dd {
    font-size: 1.2rem; /* Slightly larger font for values */
    color: #000; /* Darker color for values */
    grid-row: 2; /* Place all <dd> elements in the second row */
  }

</style>

{:catch error}
  <p class="error">Something went wrong: {error.message}</p>
{/await}
{:catch error}
<p class="error">Something went wrong: {error.message}</p>
{/await}




<h2>Latest projects</h2>
<div class="projects">
{#each projects.slice(0, 3) as p}
<Project data={p} hLevel="3" />
<!-- <Project data={p} /> -->
{/each}
</div>

    
