<script>
import * as d3 from 'd3';
let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
let arc = arcGenerator({
	startAngle: 0,
	endAngle: 2 * Math.PI
});

let data = [1, 2];
let sliceGenerator = d3.pie();
let arcData = sliceGenerator(data);
let arcs = arcData.map(d => arcGenerator(d));
let colors = ['gold', 'purple'];


</script>

<svg viewBox="-50 -50 100 100">
    {#each arcs as arc, index}
    <path d={ arc } fill={ colors[index] } />
    {/each}
</svg>

<style>
svg {
max-width: 20em;
margin-block: 2em;

/* Do not clip shapes outside the viewBox */
overflow: visible;
}

</style>
