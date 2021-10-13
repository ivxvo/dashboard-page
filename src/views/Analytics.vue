<template>
    <div class="container grid-container">
        <div>
            <div class="caption">
                <span>Hi Filip,</span><br/>
                <span>Checkout your latest projects and their progress.</span>
            </div>
            <div class="horizontal"/>
            <div class="chart">
                <GooglChart :chartData="dataCommon" chartType="SteppedAreaChart" chartTitle="Stepped Area Chart"/>
            </div>
        </div>
        <div class="grid-container">
            <div class="caption">
                <span>Crunch some Numbers</span><br/>
                <span>See how your projects are progressing via the new statistics engine.</span>
            </div>
            <div class="horizontal"/>
            <div class="bar-chart-container grid-container">
                <div class="chart">
                    <GooglChart :chartData="dataCommon" chartType="BarChart" chartTitle="Bar Chart"/>
                    <GooglChart :chartData="dataCommon" chartType="LineChart" chartTitle="Line Chart"/>
                    <GooglChart :chartData="dataCommon" chartType="BubbleChart" chartTitle="Bubble Chart"/>
                </div>
                <div class="chart union">
                    <GooglChart :chartData="dataHistogram" chartType="Histogram" chartTitle="Histogram"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GooglChart from "../components/GooglChart.vue";

export default {
    name: "Analytics",
    components: {
        GooglChart
    },
    data() {
        return {
            dataHistogram: [
                ["Month", "2020", "2021"],
                ["Jan", 150, 155],
                ["Feb", 149, 141],
                ["Mar", 170, 179],
                ["Apr", 157, 164],
                ["May", 180, 189],
                ["Jun", 187, 179],
                ["Jul", 162, 156],
                ["Aug", 155, 186],
                ["Sep", 170, 175],
                ["Oct", 188, 193],
                ["Nov", 197, 201],
                ["Dec", 147, 140]                
            ],
            dataCommon: [
                ["Week", "Aug", "Sep"],
                ["week 1", 40, 45],
                ["week 2", 47, 41],
                ["week 3", 42, 49],
                ["week 4", 57, 40]
            ],
        }
    }
}
</script>

<style scoped>

.container {
    padding: 52px 75px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1170px));
    /* grid-template-rows: auto auto; */
}

.container>div+div {
    padding-top: 64px;
}

.grid-container {
    display: grid;    
}

.bar-chart-container .grid-container {
    gap: 1px;
}

.bar-chart-container {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) minmax(300px, 2fr));
    grid-template-rows: 200px 200px 200px;
}

.bar-chart-container>div+div {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
}

.caption {
    font-family: AvenirN;
}

.caption span:first-child {
    font-size: 18px;
    color: #37474f;
}

.caption span {
    font-size: 14px;
    color: #78909c;
}

.horizontal {
    margin-top: 24px;
    max-width: 1180px;
    height: 2px;
    background-color: #dee3e7;
}

.chart {
    padding-top: 43px;
}

</style>