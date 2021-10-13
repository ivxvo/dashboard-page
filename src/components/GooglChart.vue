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
                legend: { position: "top right" },
                vAxis: { title: "Working hours" }
            }
        }
    }
}
</script>