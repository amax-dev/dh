<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import LvColorpicker from 'lightvue/color-picker';
import LvInput from 'lightvue/input';
import LvNumber from 'lightvue/number';
import LvButton from 'lightvue/button';
import "light-icons/dist/light-icon.css";


export default {
    components:{
        PrimaryButton, LvColorpicker, LvInput, LvNumber, LvButton,
        AuthenticatedLayout, Link, Head,
    },

    props: {
        liste: Array,
        rez: Array,
        mandati: Array,
        iznadCenzusa: Array,
        ispodCenzusa: Array,
        vazeciListici: Number,
    },

    data() {
        return {
            cenzus: 0,
            ukMandata: 0,
            izbori: '',
        }
    },

    methods: {
        addListe: function () {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                this.liste.push({lista: '', skraceno: '', glasova: 0, boja: '#' + randomColor});
        },
        removeListe (i) {
            this.liste.splice(i, 1);
        },
        updateDhont () {
            this.$inertia.post('/dhont', {liste:this.liste, cenzus:this.cenzus, ukMandata:this.ukMandata}, { preserveScroll: true });
        },
        saveDhont () {
            this.$inertia.put('/dhont', {izbori:this.izbori, liste:this.liste, cenzus:this.cenzus, ukMandata:this.ukMandata}, { preserveScroll: true });
        },
    }
}

</script>

<template>
    <Head title="Dhont" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <Link href="dhont/HZv6yNPc">
                Dhondt primjer
                </Link>
            </h2>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div class="flex justify-between w-full space-x-3 p-6">
                        <div class="w-1/2">
                            <lv-input
                                type="text"
                                ref="iz"
                                v-model="izbori"
                                label="Izbori:"
                                placeholder="Unesi naziv izbora..."
                                class="focus:ring-0"
                                floating-label
                            />

                        </div>

                        <div class="w-1/4">
                            <lv-input
                                type="text"
                                v-model="ukMandata"
                                @change="updateDhont()"
                                label="Broj mandata:"
                                placeholder="Unesi broj mandata..."
                                class="focus:ring-0"
                                floating-label
                            />
                        </div>
                        <div class="w-1/4">
                            <lv-input
                                type="text"
                                v-model="cenzus"
                                @change="updateDhont()"
                                label="Izborni cenzus:"
                                placeholder="Unesi izborni cenzus..."
                                class="focus:ring-0"
                                floating-label
                                icon-right="light-icon-link"
                            />
                        </div>



                    </div>

                    <div class="flex p-6 bg-white border-b border-gray-200">

                       <div class="w-full" v-if="ukMandata>0 && cenzus>0">

                            <div  v-for="(item, index) in liste" :key="index" class="flex justify-between space-y-1">

                                <div class="flex items-center">
                                    <span class="text-xs mr-2">Partija: </span>
                                    <lv-input
                                        type="text"
                                        v-model="item.lista"
                                        @change="updateDhont()"
                                        bottom-bar
                                        class="focus:ring-0 text-xs w-64"

                                    />
                                </div>

                                <div class="flex items-center">
                                    <span class="text-xs mr-2">Skraćeni naziv: </span>
                                    <lv-input
                                        type="text"
                                        v-model="item.skraceno"
                                        bottom-bar
                                        class="focus:ring-0 text-xs w-20"

                                    />
                                </div>

                                <div class="flex items-center">
                                    <span class="text-xs mr-2">Boja partije: </span>
                                    <LvColorpicker
                                        :value="'#38b2ac'"
                                        :clearable="true"
                                        :bottomBar="true"
                                        v-model="item.boja"
                                        :colors="['#F44336',
                                    '#E91E63',
                                    '#9C27B0',
                                    '#673AB7',
                                    '#3F51B5',
                                    '#2196F3',
                                    '#03A9F4',
                                    '#00BCD4',
                                    '#009688',
                                    '#4CAF50',
                                    '#8BC34A',
                                    '#CDDC39',
                                    '#FFEB3B',
                                    '#FFC107',
                                    '#FF9800',
                                    '#795548'
                                    ]"
                                    />
                                </div>

                                <div class="flex items-center">
                                    <span class="text-xs mr-2">Glasovi: </span>
                                    <lv-input
                                        v-model="item.glasova"
                                        @blur="updateDhont()"
                                        bottom-bar
                                        class="focus:ring-0 text-right w-20"

                                    />

                                    <span class="ml-2">
                                    <LvButton
                                        icon="light-icon-trash"
                                        rounded
                                        outlined
                                        class="lv--danger"
                                        @click="removeListe(index)"
                                    />
                                    </span>
                                </div>


                            </div>
                                <p>
                                    <PrimaryButton
                                        class="mt-2"
                                        @click="addListe()"
                                    >
                                        Dodaj listu
                                    </PrimaryButton>

                                </p>
                        </div>

                    </div>

                    <div>
                        <div class="py-6 ml-12 text-sm">
                            <p>Vazećih listića: {{ vazeciListici }}</p>
                            <p>Cenzus: {{ Math.ceil(this.vazeciListici * 0.03) }}</p>

                            <div v-if="iznadCenzusa.length !== 0">
                                <h1 class="mt-3 font-bold">Raspodjela mandata</h1>
                                <ul>
                                    <li v-for="(gl, li) in mandati" :key="li">
                                        {{ li }} - {{ iznadCenzusa[li] }}
                                        ({{ (iznadCenzusa[li] / vazeciListici * 100).toFixed(2) }}%)
                                        | mandata: {{ gl }}
                                    </li>

                                </ul>
                            </div>

                            <div v-if="ispodCenzusa.length !== 0">
                                <h1 class="mt-3 font-bold">Ispod cenzusa</h1>
                                <ul>
                                    <li v-for="(gl, li) in ispodCenzusa" :key="li">
                                        {{ li }} - {{ gl }} ({{ (gl / vazeciListici * 100).toFixed(2) }}%)
                                        | bez mandata
                                    </li>

                                </ul>
                            </div>

                            <div class="grid place-content-end mr-4">
                                <PrimaryButton
                                    @click="saveDhont()"
                                    class="bg-blue-400 hover:bg-blue-600 text-xs text-gray-50"
                                >
                                    Sačuvaj
                                </PrimaryButton>
                            </div>




                        </div>
                    </div>


                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
