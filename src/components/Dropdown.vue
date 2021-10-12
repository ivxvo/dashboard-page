<template>
    <div>
        <select name="dropdownlist" class="dropdown" @change="onSelected">
            <option
                v-for="item in list"
                :key="item.id"
                :value="item.id"
            >
                {{ item.name }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    name: "Dropdown",
    props: {
        list: Array
    },
    methods: {
        onSelected(event) {
            this.$emit("selected", event.target.value)
        }
    }
}
</script>

<style scoped>

.dropdown {
    border: none;
    background-color: #e0e0e0;
    padding-left: 15px;
    color: #37474f;
    font: 14px AvenirN;
    outline: none;
}

</style>