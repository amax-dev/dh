<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import VueHighcharts from 'vue3-highcharts';
import { ref, computed } from "vue";

import HighchartsMore from 'highcharts/modules/item-series'
import Highcharts3d from "highcharts/highcharts-3d";

import Highcharts from 'highcharts'


HighchartsMore(Highcharts)
Highcharts3d(Highcharts)



export default {
    components: {
        AuthenticatedLayout, Link, Head, PrimaryButton, VueHighcharts
    },
    props: {
        izbori: Array,
        iznadCenzusa: Array,
        ispodCenzusa: Array,
        mandati: Array,
        grafik: Array,
        grafik2: Array,
        grafik2Cat: Array,
        vazecihListica: Number,

    },
    data() {
        return {
            cenzus: this.izbori['cenzus'],
            ukMandata: this.izbori['ukMandata'],
            izbori: this.izbori['naziv'],
            rezultat: this.izbori['rezultat'],
        }
    },


    setup(props) {
        const seriesData = ref(props.grafik);

        const title = ref(props.izbori['naziv']);


        const chartOptions = computed(() => ({

            chart: {
                type: 'item',
            },

            credits:{
                enabled: false,
            },

            title: {
                text: title._value
            },

            subtitle: {
                text: 'Raspored odborničkih mandata'
            },

            legend: {
                labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
            },

            series: [{
                name: 'Mandati',
                keys: ['name', 'y', 'color', 'label'],
                data: seriesData.value,
                dataLabels: {
                    enabled: true,
                    format: '{point.label}',
                    style: {
                        textOutline: '3px contrast'
                    }
                },

                // Circular options
                center: ['50%', '78%'],
                size: '150%',
                startAngle: -100,
                endAngle: 100
            }],
        }));



        const categories = ref(props.grafik2Cat);
        const glasoviGrafik = ref(props.grafik2);

        const glas = computed(() => ({
            chart: {
                renderTo: 'container',
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                }
            },

            credits:{
                enabled: false,
            },
            xAxis: {
                categories: categories.value
            },
            yAxis: {
                title: {
                    enabled: false,
                    text: 'Broj glasova',
                }
            },
            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: 'Glasova: {point.y}'
            },
            title: {
                text: title._value
            },
            subtitle: {
                text: 'Grafički prikaz glasova'
            },
            legend: {
                enabled: false,


            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                keys: ['name', 'y', 'color', 'label'],
                data: glasoviGrafik.value,
                colorByPoint: false
            }],
        }));





        const onRender = () => {
            console.log('Chart rendered');
        };

        return {
            chartOptions,
            glas,
            onRender,
        };
    },



}

</script>

<template>
    <Head title="Prikaz" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dhont
            </h2>

        </template>



        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div class="flex justify-between w-full p-6">
                        <div>
                            <span class="text-xl mr-1">Izbori: {{ izbori }}</span>
                        </div>
                        <div>
                            <span class="text-xl mr-1">Broj mandata: {{ ukMandata }}</span>
                        </div>
                        <div>
                            <span class="text-xl mr-1">Izborni cenzus: {{ cenzus }}%</span>
                        </div>
                    </div>

                    <div class="flex p-6 bg-white border-b border-gray-200">

                        <div class="ml-12 w-1/2 text-sm">
                            <p>Vazećih listića: {{ vazecihListica }}</p>
                            <p>Cenzus: {{ Math.ceil(this.vazecihListica * 0.03) }}</p>

                            <div v-if="iznadCenzusa.length !== 0">
                                <h1 class="mt-3 font-bold">Raspodjela mandata</h1>
                                <ul>
                                    <li v-for="(gl, li) in mandati" :key="li">

                                        {{ li }} - {{ iznadCenzusa[li] }}
                                        ({{ (iznadCenzusa[li] / vazecihListica * 100).toFixed(2) }}%)
                                        | mandata: {{ gl }}

                                    </li>

                                </ul>
                            </div>

                            <div v-if="ispodCenzusa.length !== 0">
                                <h1 class="mt-3 font-bold">Ispod cenzusa</h1>
                                <ul>
                                    <li v-for="(gl, li) in ispodCenzusa" :key="li">
                                        {{ li }} - {{ gl }} ({{ (gl / vazecihListica * 100).toFixed(2) }}%)
                                        | bez mandata
                                    </li>

                                </ul>


                            </div>
                        </div>


                        <div class="w-1/2">

                        </div>





                    </div>


                    <div>
                        <vue-highcharts
                            class="w-full border-gray-300"
                            type="chart"
                            :options="glas"
                            :redrawOnUpdate="true"
                            :oneToOneUpdate="false"
                            :animateOnUpdate="true"
                            @rendered="onRender"
                        />

                    </div>

                    <div>
                        <vue-highcharts
                            class="w-full border-gray-300"
                            type="chart"
                            :options="chartOptions"
                            :redrawOnUpdate="true"
                            :oneToOneUpdate="false"
                            :animateOnUpdate="true"
                            @rendered="onRender"
                        />

                    </div>





                </div>
            </div>
        </div>


    </AuthenticatedLayout>
</template>
