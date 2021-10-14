<template>
    <div class="container grid-container">        
        <ChartPanel
            title="Hi Filip,"
            subtitle="Checkout your latest projects and their progress."  
        >
            <template v-slot:chart>
                <GooglChart :chartData="dataStepped" chartType="SteppedAreaChart" chartTitle="Stepped Area Chart"/>
            </template>
        </ChartPanel>
        <ChartPanel
            title="Crunch some Numbers"
            subtitle="See how your projects are progressing via the new statistics engine." 
            :isTimeline="true" 
        >
            <template v-slot:chart>
                <div class="bar-chart-container grid-container">
                    <div>
                        <GooglChart :chartData="dataCommon" chartType="BarChart" chartTitle="Bar Chart"/>
                        <GooglChart :chartData="dataCommon" chartType="LineChart" chartTitle="Line Chart"/>
                        <GooglChart :chartData="dataCommon" chartType="BubbleChart" chartTitle="Bubble Chart"/>
                    </div>
                    <div>
                        <GooglChart :chartData="dataCommon" chartType="ColumnChart" chartTitle="Column Chart"/>
                        <GooglChart :chartData="dataCommon" chartType="ScatterChart" chartTitle="Scatter Chart"/>
                        <GooglChart :chartData="dataCommon" chartType="Histogram" chartTitle="Histogram"/>
                    </div>                
                </div>
            </template>
        </ChartPanel>     
        <ChartPanel
            title="Current Progress"
            subtitle="This table will show you how your current projects are behaving."  
        >
            <template v-slot:chart>
                <div class="grid-container">
                    <ProgressPanel
                        title="Project 1"
                        subtitle="Design"
                        :dateUpdated="date.toDateString()"
                        :duration="`${date.getHours()}:${date.getMinutes()}`"
                        :comments=602
                        :progress=87
                    />
                    <ProgressPanel
                        title="Project 2"
                        subtitle="Design & Development"
                        :dateUpdated="date.toDateString()"
                        :duration="`${date.getHours()}:${date.getMinutes()}`"
                        :comments=710
                        :progress=54
                    />
                    <ProgressPanel
                        title="Project 3"
                        subtitle="Architecture"
                        :dateUpdated="date.toDateString()"
                        :duration="`${date.getHours()}:${date.getMinutes()}`"
                        :comments=162
                        :progress=17
                    />
                    <ProgressPanel
                        title="Project 4"
                        subtitle="Development"
                        :dateUpdated="date.toDateString()"
                        :duration="`${date.getHours()}:${date.getMinutes()}`"
                        :comments=924
                        :progress=97
                    />
                </div>
            </template>
        </ChartPanel>
        <ChartPanel
            title="Crunch some Numbers"
            subtitle="See how your project progressive via the new statistics engine."  
            :isTimeline="true"
        >
            <template v-slot:chart>
                <div class="pie-chart-container grid-container">                    
                    <GooglChart :chartData="dataCommon" chartType="PieChart" chartTitle="Pie Chart"/>
                    <GooglChart :chartData="dataStepped" chartType="LineChart" chartTitle="Line Chart"/>
                </div>
            </template>
        </ChartPanel>
    </div>
</template>

<script>
import GooglChart from "../components/GooglChart.vue";
import ChartPanel from "../components/ChartPanel.vue";
import ProgressPanel from "../components/ProgressChartPanel.vue";

export default {
    name: "Analytics",
    components: {
        GooglChart,
        ChartPanel,
        ProgressPanel
    },
    data() {
        return {    
            date: new Date(),        
            dataStepped: [
                ["Date", "2020", "2021"],
                ["30.05", 150, 155],
                ["31.05", 149, 141],
                ["01.06", 170, 179],
                ["02.06", 157, 164],
                ["03.06", 180, 189],
                ["04.06", 187, 179],
                ["05.06", 162, 156],
                ["06.06", 155, 186],
                ["07.06", 170, 175],
                ["08.06", 188, 193],
                ["09.06", 197, 201],
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

.bar-chart-container div>*:nth-child(n+2) {
    padding-top: 5px;
}

.bar-chart-container {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) minmax(300px, 2fr));
}

@media all and (max-width: 910px) {
    .bar-chart-container {
        /* gap: 30px; */
        grid-template-columns: 1fr;
        /* grid-template-rows: 200px 200px 200px; */
    }
}

.pie-chart-container {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

</style>