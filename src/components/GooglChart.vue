<template>
    <div>
        <div v-show="isChartCaption" class="strip">
            <div class="caption chart-caption">
                <span>Stepped Lines</span><br/>
                <span>Working hours</span>
            </div>
            <div>
                <select name="period">
                    <option value="1">THIS WEEK</option>
                </select>                
            </div>
        </div> 
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
        chartTitle: String,
        isChartCaption: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            chartOptions: {
                title: this.chartTitle,
                width: "100%",
                height: "100%",
                legend: { position: "bottom" },
                vAxis: { title: "Working hours" },
                pieHole: 0.25,
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

<style scoped>

.chart-caption span:last-child {
    font-size: 14px;
    color: #78909c;
}

.chart-caption {
    padding: 20px 15px;
}

.chart-caption span:first-child {
    font-size: 21px;
    color: #37474f;
}

.strip {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

select {
    color: #37474f;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: #fff;
    margin-right: 15px;
    cursor: pointer;
}

</style>