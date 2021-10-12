<template>
    <div style="text-align: center;">
        <h2>{{ $route.path == "/" ? "Home" : $route.name.toUpperCase() }}</h2>
    </div>
</template>