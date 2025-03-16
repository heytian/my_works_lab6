<svelte:head>
  <title>A2</title>
</svelte:head>

<h3><i>A2</i></h3>
    <h2>An exploratory analysis of corporate landlords & evictions in Boston</h2>
    <p><i>by He Yutian</i></p>
    <br>
    <section id="A2">
    <section>
        <h3>Background and Dataset</h3>
        <p>Precedent studies (elaborated in links below) have indicated a positive correlation between corporate landlords and evictions, and a negative correlation between owner-occupied/ 'live-in'/'live nearby' landlords and evictions. In this exploratory analysis, we are interested to find out if these observations apply to Boston as well, and this will be done with datasets consisting of corporate ownership rates and owner occupancy rates in Boston neighborhoods over 20 years, from 2004 to 2024. The dataset also contains demographic data, albeit not over time since the census is not conducted so frequently.</p>
    </section>
    <section>
        <h3>Initial analysis questions</h3>
        <ol>
            <li>Where does corporate ownership tend to cluster?
                <ul>
                    <li>My hypothesis is that corporate landlords will try to maximize profit by selecting locations with a higher rate of transient resident populations that are more price inelastic. In the context of Boston, this will be areas near the various universities.</li>
                </ul>
            </li>
            <li>Is there a correlation between corporate ownership and median household income?
                <ul>
                    <li>
                        Given the background reading's illustration of how evictions disproportionately affect poorer communities (<a href="https://www.nytimes.com/interactive/2018/04/07/upshot/millions-of-eviction-records-a-sweeping-new-look-at-housing-in-america.html?smid=pl-share"><u>NYTimes article on eviction records in America</u></a>), I want to see whether there is a positive or negative correlation between corporate ownership and median income. The former could potentially indicate a predatory approach by corporate owners to target lower income communities, to drive renters out and pave the way for a gentrified, higher-rent clientele. 
                    </li>
                </ul>
            </li>
            <li>How has corporate ownership changed over time in communities of color?
                <ul>
                    <li>
                        This was motivated by the background reading showing the trend of communities of color facing a higher rate of eviction (<a href="https://www.homesforallmass.org/covid-evictions-report/hfamass-covid-evictions-report-short-03-22-screen-rfs.pdf"><u>Report by Homes for All MA</u></a>). I am curious about causal relationships between the two, such as whether minority populations decreased over time in areas with increasing corporate ownership. 
                    </li>
                </ul>
            </li>
        </ol>
    </section>
    <section>
        <h3>Discoveries and insights</h3>
        <fig><img src="../images/A2_Stackedbarchart.jpg" alt=""><figcaption><i><u>Fig 1: Corporate Ownership and Owner Occupancy Rates Across Boston Neighborhoods</u></i></figcaption></fig>
        <p>By first laying out a stacked bar chart with corporate ownership (hereby referred to as corp-own) rates on the bottom and owner occupancy rates on top, we can quickly see that Boston's rental market is primarily comprised of owner-occupied (hereby referred to as own-occ) properties. There is also significant variance between neighborhoods of the ratio of corp-own vs own-occ rates, with centrally located neighborhoods like Fenway having an almost 50-50 split while neighborhoods further from the city's downtown area such as West Roxbury and Roslindale are primarily owner-occupied.</p>
        <br>
        <fig><img src="../images/A2_Barcharts.jpg" alt=""><figcaption><i><u>Fig 2: Corporate Ownership vs. Owner Occupancy Rates Across Boston Neighborhoods</u></i></figcaption></fig>
        <p>By isolating corp-own and own-occ datasets into separate charts and by sorting them in ascending order (for the corp-own dataset), we can see more clearly a general correlation between the incidence of corp-own rates vs own-occ rates, namely that neighborhoods with higher corp-own rates generally also tend to have lower own-occ rates as compared to other neighborhoods. This was not apparent in the earlier summed stacked chart where we could only see the absolute numbers of each neighborhood.</p>
        <br>
        <fig><img src="../images/A2_CorpOwn_squares.jpg" alt="" max width="650"><figcaption><i><u>Fig 3: Boston neighborhoods sorted by corporate ownership rates</u></i></figcaption></fig>
        <fig><img src="../images/A2_OwnOcc_circles.jpg" alt="" max width="550"><figcaption><i><u>Fig 4: Visualization of Boston neighborhoods' owner occupancy rates</u></i></figcaption></fig>
        <p>While there are general trends already spotted with corp-own and own-occ rates, there are further nuances that can be revealed by the above two visualizations in Figs 3 & 4. There is a greater range and variance in corporate ownership rates in Boston neighbourhoods, with the neighborhood having the smallest corp-own rates being many magnitudes smaller than the one with the largest (Fenway). Conversely, the variance for own-occ rates are more subtle and of a lower magnitude - the smallest, Fenway, is about 1/4 of the largest, West Roxbury, for own-occ rates; in Fig 3, the neighborhood with the lowest rate, West Roxbury, is about 1/6 the size of the largest (Fenway).</p>
        <br>
        <fig><img src="../images/A2_Stackedbarchart_census.jpg" alt=""><figcaption><i><u>Fig 5: Demographics of Boston neighborhoods arranged by corporate ownership rates</u></i></figcaption></fig>
        <p>One of the hypotheses based on earlier research is whether there is any correlation between corp-own rates and demographics. Fig 5 attempts to study this by arranging the neighborhoods in ascending order of corp-own rates, while showing the demographic breakdown of each neighborhood. From this chart, there is no obvious positive correlation, which suggests that the correlation observed in other studies may not apply to Boston. It is also interesting that there is no apparent correlation between number of inhabitants in neighborhoods and corp-own rates, but this could also be because the data has not accounted for density - some of the neighborhoods with higher populations may simply be larger in area. Another area of improvement is that perhaps the absolute sum of demographic groups is not the best way to study this correlation, so the next graph attempts to dissect this further.</p>
        <br>
        <fig><img src="../images/A2_Proportional_census.jpg" alt=""><figcaption><i><u>Fig 6: Proportional demographic composition of Boston neighborhoods</u></i></figcaption></fig>
        <p>By further transforming the data through creating custom calculated fields to calculate the each demographic group's percentage of Boston's total population, we start to more clearly see the ratio rather than absolute sum of various demographic groups in each neighborhood. Even with this further processing step, there is still no immediate correlation that might suggest a connection between corp-own rates and neighborhood demographics. Looking at either end of the chart, it is somewhat surprising to note that neighborhoods on the right with higher corp-own rates have a lower proportion of minority communities, while those on the left have a higher proportion (with West Roxbury being the exception).</p>
        <br>
        <fig><img src="../images/A2_Over_Time.jpg" alt=""><figcaption><i><u>Fig 7: Changes in Corporate Ownership and Owner Occupancy Rates in Boston over time</u></i></figcaption></fig>
        <p>Finally, by looking at how corp-own and own-occ rates have changed over time, we see from Fig 7 that while the absolute rates of own-occ are significantly higher than corp-own, own-occ has gently but steadily decreased across most neighborhoods over the past 20 years, while corp-own rates have increased at a higher rate. </p>
        <br>

    </section>
    <section>
        <h3>Summary</h3>
        <p>Salient insights from this exploratory analysis include how corporate ownership rates are increasing at a faster rate than owner-occupancy rates are decreasing. While Boston presently has a larger proportion of rental properties being owner-occupied than corporate-owned, the aforementioned trend suggests that this gap might close in the future. The apparent lack of a strong correlation between demographic groups and corporate ownership rates suggest that this eventuality might be less of an equity concern in Boston than in other locations where the correlation is stronger. There are a number of data points that I wish were available for this study that could improve the analysis and further test my hypotheses. Data points that would have been particularly useful are median income, which could be used to study potential relationships between socio-economic factors and corp-own rates. It would also be interesting to track census data over time in addition, which might have to wait till the next census rolls around given the infrequency of it.</p>
    </section>
    </section>

    <a href="../images/A2_HeYutian.pdf"><u><i>Link to PDF version of this page</i></u></a>
