<script>
  import { geoMercator, geoPath, selection, select } from 'd3';
  import { appendSelect } from 'd3-appendselect';
  import { feature } from 'topojson-client';
  import { onMount } from 'svelte';

  const d3 = Object.assign({}, { select, selection }, { geoMercator, geoPath });
  d3.selection.prototype.appendSelect = appendSelect;

  export let bbox;
  export let loading = true;

  let chartData;

  onMount(async () => {
    // fetch data
    try {
      const world = await Promise.all(
        ['https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json'].map(
          (url) => fetch(url).then((res) => res.json())
        )
      );

      chartData = feature(world[0], world[0].objects.countries);
      loading = false;
    } catch (error) {
      console.log('Error', error);
    }
  });

  let mapContainer, containerWidth;

  function drawMap(container, props, data) {
    // Projection
    const geoProjection = d3.geoMercator().fitWidth(props.width, props.extents);

    const bounds = d3.geoPath(geoProjection).bounds(props.extents);

    const height = Math.round(bounds[1][1]);

    // Path generator for the projection
    const geoPathGenerator = d3.geoPath().projection(geoProjection);

    const svg = d3
      .select(container)
      .appendSelect('svg.d3-map')
      .attr('class', 'd3-map')
      .attr('width', props.width)
      .attr('height', height);

    svg
      .appendSelect('path#bbox')
      .attr('id', 'bbox')
      .attr('d', geoPathGenerator(props.extents))
      .style('fill', 'none')
      .style('stroke', '#00FFFF')
      .style('stroke-width', 1);

    svg
      .appendSelect('path#land')
      .attr('id', 'land')
      .attr('d', geoPathGenerator(data))
      .style('fill', 'none')
      .style('stroke', '#964B00')
      .style('stroke-width', 1);
  }

  $: props = {
    extents: bbox,
    width: containerWidth,
  };

  $: {
    if (mapContainer) {
      drawMap(mapContainer, props, chartData);
    }
  }
</script>

<div bind:this="{mapContainer}" bind:clientWidth="{containerWidth}"></div>
