<template>
    <div>
        <GChart
            :type="chartType"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { GChart } from "vue3-googl-chart";
export default {
    name: "GooglChart",
    components: {
        GChart
    },
    props: {
        chartData: Array,
        chartType: String,
        chartTitle: String
    },
    data() {
        return {
            chartOptions: {
                title: this.chartTitle,
                width: "100%",
                height: "100%",
                legend: { position: "top" },
                vAxis: { title: "Working hours" },
                pieHole: 0.4,
                trendlines: {
                    0: {
                    type: 'linear',
                    color: 'green',
                    lineWidth: 3,
                    opacity: 0.3,
                    showR2: true,
                    visibleInLegend: true
                    },
                    1: {
                    type: 'linear',
                    color: 'red',
                    lineWidth: 3,
                    opacity: 0.5,
                    showR2: true,
                    visibleInLegend: true
                    }
                }
            }
        }
    }
}
</script>