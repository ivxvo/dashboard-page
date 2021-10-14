<template>
    <div class="progress-chart-container">
        <div class="flex-container">
            <img src="../assets/img/RoundedRectangle4.png" alt="" class="logo">
            <div class="caption text">
                <span>{{ title }}</span><br/>
                <span>{{ subtitle }}</span>
            </div>
        </div>
        <div class="flex-container text info">
            <span>Last updated {{ dateUpdated }}</span>
            <div class="verticall"/>
            <div>
                <img src="../assets/img/Clock2.png" alt="" class="icon">
                <span>{{ duration }}</span>
            </div>       
            <div>
                <img src="../assets/img/Says.png" alt="" class="icon">
                <span>{{ comments }}</span>
            </div>            
        </div>
        <div class="flex-container">
            <progress max="100" :value="progress"/>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProgressChartPanel",    
    props: {
        title: String,
        subtitle: String,
        dateUpdated: String,
        duration: String,
        comments: Number,
        progress: Number
    }
}
</script>

<style scoped>

.progress-chart-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    grid-template-rows: 100px;
    grid-auto-rows: 50px;
}

.progress-chart-container .flex-container:first-child {
    justify-content: flex-start;
}

.progress-chart-container .flex-container:first-child>* {
    margin: 0 10px;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.text {
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

.info {
    color: #37474f;
    font-size: 14px;
}

.logo {
    width: 60px;
    height: 60px;
    border-radius: 5px;
}

.icon {
    background-color: #f5f5f5;
    padding-right: 5px;
}

.verticall {
  width: 2px;
  background-color: #a1b1c2;
  height: 24px;
}

</style>