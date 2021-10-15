<template>
    <div class="container grid-container">        
        <ChartPanel
            title="Hi Filip,"
            subtitle="Checkout your latest projects and their progress."  
        >            
            <template v-slot:chart>
                <GooglChart :isChartCaption="true" :chartData="dataStepped" chartType="SteppedAreaChart" chartTitle="Stepped Area Chart"/>
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
                        <GooglChart :isChartCaption="true" :chartData="dataCommon" chartType="ColumnChart" chartTitle="Column Chart"/>
                        <GooglChart :isChartCaption="true" :chartData="dataCommon" chartType="ScatterChart" chartTitle="Scatter Chart"/>
                        <GooglChart :isChartCaption="true" :chartData="dataCommon" chartType="Histogram" chartTitle="Histogram"/>
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
                    <div>
                        <div class="caption chart-caption">
                            <span>Client Hours</span><br/>
                            <span>Working hours</span>
                        </div>
                        <GooglChart :chartData="dataCommon" chartType="PieChart" chartTitle="Pie Chart"/>
                    </div>                                    
                    <div class="summary-container grid-container">
                        <div class="foto">
                            <img src="../assets/img/foto.png" alt="">
                            <div class="caption">
                                <span>Jake Appleseed</span><br/>
                                <span>London, UK</span>
                            </div>
                        </div>
                        <div class="statistics">
                            <span>Working hours</span>
                            <span>14 hours</span>
                        </div>
                        <div class="statistics">
                            <span>Ammount Total</span>
                            <span>$ 6,269</span>
                        </div>
                        <div class="statistics">
                            <span>Overdue</span>
                            <span>$ 829</span>
                        </div>
                        <div class="statistics">
                            <span>% overall work</span>
                            <span>48 %</span>
                        </div>
                        <div>
                            <router-link to="">Send Invoice</router-link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="caption chart-caption">
                                <span>Total Overdue</span><br/>
                                <span>I need Dollars</span>
                            </div>
                            <div class="total">
                                <span>$14,220</span>
                            </div>
                            <GooglChart :chartData="dataStepped" chartType="LineChart" chartTitle="Line Chart"/>
                        </div>
                        
                        <div class="export">
                            <router-link to="">Export PDF</router-link>
                        </div>
                    </div>
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
    padding: 52px 75px 0;
    grid-template-columns: minmax(300px, 1fr);
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) minmax(300px, 2fr));
}

.pie-chart-container {
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.pie-chart-container>* {
    padding: 25px 0;
    background-color: #fff;
}

.summary-container {
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px repeat(3, 70px);
}

.summary-container div:last-child {
    grid-column: 1 / 3;
    text-align: center;
    margin: auto;
}

.summary-container div:last-child a {
    color: #ff4081;
    font-weight: bold;
    font-size: 14px;
}
.foto {
    /* grid-row: 1 / 3; */
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.foto img {
    border-radius: 50%;
}

.foto div {
    text-align: center;
    /* font: 14px AvenirN;
    color: #78909c; */
}

.caption span:first-child {
    font-size: 18px;
    color: #37474f;
}

.caption span {
    font-size: 14px;
    color: #78909c;
}

.chart-caption {
    padding: 0 0 20px 20px;
}

.chart-caption span:first-child {
    font-size: 21px;
}

.statistics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
}

.statistics span:first-child {
    font: 14px "Open Sans";
    color: #a1b1c2;
}

.statistics span {
    font-size: 21px;
    color: #37474f;
}

.total {
    font-size: 32px;
    color: #37474f;
    text-align: center;
    margin: auto;
    padding: 40px 0;
}

.export a {
    font-size: 12px;
    color: #78909c;
}

.export {
    padding-top: 30px;
    padding-left: 15px;
}

@media all and (max-width: 1025px) {

    .bar-chart-container {
        grid-template-columns: minmax(300px, 1fr);
    }

    .container {
        padding: 30px 35px;
    }

    .container>div+div {
        padding-top: 40px;
    }

}

@media all and (max-width: 385px) {
    .container {
        padding: 20px 10px;
    }
}

</style>