<template>
    <div class="container">
        <div class="greeting">
            <span>Hi Filip,</span><br/>
            <span>Checkout your latest projects and their progress</span>
        </div>
        <div class="horizontal"/>
        <div class="steppedChart">
            <SteppedChart
                :data="dataStepped"
            ></SteppedChart>
        </div>
    </div>
</template>

<script>
import SteppedChart from "../components/StepedChart.vue";

export default {
    name: "Analytics",
    components: SteppedChart,
    data() {
        return {
            dataStepped: [
                ["week 1", 40, 42],
                ["week 2", 44, 41],
                ["week 3", 41, 45],
                ["week 4", 47, 40],
            ]
        }
    }
}
</script>

<style scoped>

.container {
    padding: 52px 0 0 70px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1170px));
    grid-template-rows: 440px 506px  375px;
}

.greeting {
    font-family: AvenirN;
}

.greeting span:first-child {
    font-size: 18px;
    color: #37474f;
}

.greeting span {
    font-size: 14px;
    color: #78909c;
}

.horizontal {
    margin-top: 24px;
    width: 1170px;
    height: 2px;
    background-color: #dee3e7;
}

.steppedChart {
    padding-top: 43px;
}

</style>