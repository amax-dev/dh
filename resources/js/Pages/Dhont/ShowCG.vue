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
        naziv: String,
        mandati: Array,
        cenzus: Number,
        grafik: Array,
        grafik2: Array,
        grafik2Cat: Array,
        vazecihListica: Number,

    },
    data() {
        return {
            cenzus: this.cenzus,
            ukMandata: this.mandati,
            izboriNaziv: this.naziv,
            rezultat: this.izbori,
        }
    },


    setup(props) {
        const seriesData = ref(props.grafik);

        const title = ref(props.naziv);


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
                text: 'Raspored mandata'
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
            <h2 class="font-semibold text-xl text-gray-800 leading-tight space-x-4">
                <Link href="/cg/2012">2012</Link>
                <Link href="/cg/2016">2016</Link>
                <Link href="/cg/2020">2020</Link>
            </h2>

        </template>



        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div class="flex flex-col md:flex-row justify-between w-full p-6">
                        <div>
                            <span class="text-xl mr-1">Izbori: {{ izboriNaziv }}</span>
                        </div>
                        <div>
                            <span class="text-xl mr-1">Broj mandata: {{ ukMandata }}</span>
                        </div>
                        <div>
                            <span class="text-xl mr-1">Izborni cenzus: {{ cenzus }}%</span>
                        </div>
                    </div>

                    <div class="flex px-1 py-3 bg-white border-b border-gray-200">

                        <div class="mx-4 w-full text-sm">
                            <p>Vazećih listića: {{ vazecihListica }}</p>
                            <p>Cenzus: {{ Math.ceil(this.vazecihListica * 0.03) }}</p>

                            <div v-if="izbori.length !== 0">
                                <h1 class="mt-3 font-bold">Raspodjela mandata</h1>
                                
                                <!-- <ul>
                                    <li v-for="(gl, li) in izbori" :key="li"  class="font-bold" :style="{ color: gl.boja }">

                                        {{ gl.lista }} - {{ gl.glasova }} ({{ (gl.glasova / vazecihListica * 100).toFixed(2) }}%) | mandat: {{ gl.mandata}}

                                    </li>

                                </ul> -->
                            </div>


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

                    <div class="mx-auto w-11/12 md:w-10/12 text-sm">


                                <table class="w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                                    <thead class="text-white">
                                        <tr class="bg-teal-400  rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                            <th class="p-3 text-right">#</th>
                                            <th class="p-3 text-left">Naziv liste</th>
                                            <th class="p-3 text-center">Broj glasova</th>
                                            <th class="p-3 text-center">%</th>
                                            <th class="p-3 text-center">Broj mandata</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(gl, li) in izbori" :key="li"
                                            class="mb-2 sm:mb-0"
                                        >
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right">{{ li + 1 }}</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1">{{ gl.lista }}</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right">{{ gl.glasova }}</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right">{{ (gl.glasova / vazecihListica * 100).toFixed(2) }}%</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right">{{ gl.mandata}}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="2"  class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right">Ukupno:</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right font-semibold">{{ vazecihListica }}</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right font-semibold">100%</td>
                                            <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 text-right font-semibold" >{{ mandati }}</td>
                                        </tr>
                                    </tfoot>
                                </table>

                    </div>

                            





                </div>
            </div>
        </div>


    </AuthenticatedLayout>
</template>
