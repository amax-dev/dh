<template>
    <GuestLayout>
        <vue-highcharts
            type="chart"
            :options="chartOptions"
            :redrawOnUpdate="true"
            :oneToOneUpdate="false"
            :animateOnUpdate="true"
            @rendered="onRender"/>
    </GuestLayout>
</template>
<script>

import { ref, computed } from "vue";
import VueHighcharts from 'vue3-highcharts';
import GuestLayout from "@/Layouts/GuestLayout.vue";

export default {
    name: 'SimpleChart',

    components: {
        GuestLayout,
        VueHighcharts,
    },

    setup() {
        const seriesData = ref([25, 39, 30, 15]);
        const categories = ref(['Jun', 'Jul', 'Aug', 'Sept']);

        const chartOptions = computed(() => ({
            chart: {
                type: 'bar',
            },
            title: {
                text: 'Number of project stars',
            },
            xAxis: {
                categories: categories.value,
            },
            yAxis: {
                title: {
                    text: 'Number of stars',
                },
            },
            series: [{
                name: 'New project stars',
                data: seriesData.value,
            }],
        }));

        const onRender = () => {
            console.log('Chart rendered');
        };

        return {
            chartOptions,
            onRender,
        };
    },
};
</script>
