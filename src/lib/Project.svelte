<script> 
    export let data = {};
    export let hLevel = 2;
</script>

<article>
    <!-- <h2>{data.title}</h2> -->
    <svelte:element this={"h" + hLevel}>{data.title}</svelte:element>
    <img src={data.image} alt="" />
    <p>{data.description}</p>
</article>

<style>
    /* Step 4.2: Apply responsive grid */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 1em;
}

/* Step 4.3: Horizontal alignment with subgrid */
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
</style>