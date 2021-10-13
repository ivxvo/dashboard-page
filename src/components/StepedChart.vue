<template>
    <div></div>
</template>

<script>
export default {
    name: "SteppedChart",
    props: {
        data: Array
    },
    data() {
        return {
            headings: ["Week", "2020", "2021"],
            options: {
                title: "Stepped Area Chart",
                width: "100%",
                height: "100%",
                legend: { position: "bottom" }
            }
        }
    },
    methods: {
        drawChart() {
            // const dataTable = google.visualization.arrayToDataTable([
            //     this.headings,
            //     ...this.data
            // ], false);

            // const chart = new google.visualization.SteppedAreChart(this.$el);
            // chart.draw(dataTable, this.options);
        }
    }
}
</script>