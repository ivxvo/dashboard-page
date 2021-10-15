<template>
    <div>
        <div class="caption">                        
            <div v-if="isTimeline" class="flex-container">
                <div>
                    <span>{{ title }}</span><br/>
                    <span>{{ subtitle }}</span>
                </div>
                <div>
                    <label for="period">Timeline:</label>
                    <select id="period">
                        <option value="1">7 days</option>
                    </select>
                </div>
            </div>
            <div v-else>
                <span>{{ title }}</span><br/>
                <span>{{ subtitle }}</span>
            </div>
        </div>
        <div class="horizontal"/>
        <div class="chart">                     
            <slot name="chart"/>
        </div>
    </div>
</template>

<script>

export default {
    name: "ChartPanel",
    props: {
        title: String,
        subtitle: String,
        isTimeline: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

.caption span:first-child {
    font-size: 18px;
    color: #37474f;
}

.caption span {
    font-size: 14px;
    color: #78909c;
}

.caption .flex-container {
    display: flex;
    align-items: center;
}

.caption span:first-child {
    font-size: 18px;
    color: #37474f;
}

.caption span, .caption label {
    font-size: 14px;
    color: #78909c;
}

.caption select {
    border: none;
    outline: none;
    border-radius: 15px;
    background-color: #cfd8dc;
    margin-left: 10px;
    padding: 7px;
    color: #37474f;
    cursor: pointer;
}

.caption .flex-container div:first-child {
    margin-right: auto;
}

.caption .flex-container div+div {
    margin-left: auto;
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