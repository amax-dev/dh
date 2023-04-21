<template>
    <div class="flex flex-col min-w-full min-h-screen items-center justify-center">
    <div>
        <img :src="'storage/img/logo.jpg'">
    </div>

    <div class="mt-3 text-md font-semibold hover:font-medium">
        <Link :href="route('login')">Prijavi se!</Link>
    </div>

    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';

export default {
    components:{
        Link, Head
    }

}
</script>
