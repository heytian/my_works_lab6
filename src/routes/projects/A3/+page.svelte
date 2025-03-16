<svelte:head>
  <title>A3</title>
</svelte:head>

<h3><i>A3</i></h3>
    <h2>Critique by Redesign: Viral Visualizations</h2>
    <p><i>by He Yutian</i></p>
    <br>
    <section id="A3">
        <h3>Critique on the original visualization</h3>
        <p>
            <fig><img src="../images/A3_covid-spiral.png" alt="" max width="400"><figcaption><i>Visualization from a <a href="https://www.nytimes.com/2022/01/06/opinion/omicron-covid-us.html?unlocked_article_code=1.zk4.stTQ.3bTjWtsFU-ls&smid=url-share"><u>New York Times article</u></a> on COVID</i></figcaption></fig>
            <br>
            This diagram is enigmatic and striking because of how it is emblematic of the Omicron symbol and suggests a spiral that is commensurate with the spiraling despair that was the US's COVID response. However, it does have significant limitations in its visual efficacy. The mirroring of the y-axis content in a spiral meant that the volumetric values (shaded in red) were not entirely symmetric, which renders inaccuracies that made the graph difficult to read. The increasing spacing between the years "2021" and "2022" also made it unintuitive for the reader to decipher which years the labelled months of "April", "July" and "Oct" were from, and one has to retrace the spiral to understand that they were in the year of 2021.   
        </p>
        <h3>Sketches</h3>
            <fig><img src="../images/A3_Fig3.jpg" alt="" max width="550"><figcaption><i><u>Fig A: Number of new COVID cases in the US from 2020-2022</u></i></figcaption></fig>
            <br>
            Inspired by the original visualization, I wanted to incorporate visual signifiers of the pandemic, and thus chose to use "+" signs to denote positive COVID cases. I also wanted to use more discrete symbols rather than having a smooth line or shaded area, to depict how COVID cases affect society on an individual level and should be regarded as more than just a statistic (that said, it was impractical to draw 150K plus signs, so I did a scale of 1 plus sign to 30K cases).
            <br>
            <fig><img src="../images/A3_Fig2.jpg" alt="" max width="550"><figcaption><i><u>Fig B: Number of new COVID cases in the US from 2020-2022</u></i></figcaption></fig>
            <br>
            I then played with circular forms in an attempt to recreate the spherical form of the coronavirus. I experimented with extruding plus-signs from the circle to depict the number of COVID cases and settled on a radial pattern for ease of user interpretation. 
            <br>
            <fig><img src="../images/A3_Fig1.jpg" alt="" max width="550"><figcaption><i><u>Fig C: Number of new COVID cases in the US from 2020-2022</u></i></figcaption></fig>
            <br>
            The lecture earlier this week by Professor Lee on the storytelling power of data visualizations really resonated with me, so I started to brainstorm more about what other visuals and shared experiences encapsulated the pandemic, that could be adopted into a visualization format. The linearity of a COVID nasal swab presented itself as an intriguing (and visceral) way to visualize new confirmed cases of COVID.
            <br>
        <br>
        <h3>Critique by redesign</h3>
        <p>Using a combination of <a href="https://flourish.studio/"><u>Flourish</u></a>, Inkscape, and GIMP, I further refined my sketch in Fig C to produce the following visualization.</p>
        <fig><img src="../images/A3_swab_chart.jpg" alt=""><figcaption><i><u>Final visualization: Number of new COVID cases in the US over time</u></i></figcaption></fig>
        <br>
        <p><b>Rationale for design decisions</b></p>
        <p>I experimented with both Tableau and Flourish to generate a fluid bar chart that resembled mucus dripping from a COVID swab, but at the same time individualized the data discretely enough to not give the impression that COVID cases are merely part of a statistic. In order to achieve this, I used days instead of months or years as the y-axis, to introduce more granularity in the visualization. At the same time, I did not want to overwhelm the viewer with too much text, and so I only labelled the crests and troughs with months along the x-axis (despite the granularity of the chart being actually that of individual days) - while this might obscure information on daily COVID cases, I assessed that it was a reasonable trade-off to prioritize visual clarity over detail. As a next step of improvement (and since we were instructed not to embed interactive visualizations, but only to produce a static one), I will incorporate an interactive element where when one mouses over individual bars, one should be able to glean the daily number of new COVID cases. I also scaled the maximum height of the bar charts to be proportionate to the hand and swab graphic I made. Lastly, I chose blue as the accent color to better convey that the bar chart doubles up as a fluid.</p>
        <p><b>Reflections on this final design</b></p>
        <p>This process of critique by redesign definitely helped in identifying communication challenges and trade-offs. One key direct response to my initial critique is the 'unfolding' of the spiral, as I found the initial graphic's imprecision to distract the viewer from what was meant to be a communication of objective facts. At the same time, I appreciated the striking nature of the initial graphic, and sought to retain that spirit in my redesign, by adopting another motif that reminds one vividly of the pandemic. The final design is a better balance of the trade-offs between transparency in data representation (with a more consistent scale and the removal of the confusing mirrored axis) and emotive storytelling.</p>
</section>