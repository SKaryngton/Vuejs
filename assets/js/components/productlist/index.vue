<template>
    <div class="row">
        <div class="col-12">
            <div class="mt-4">
                <loading v-show="loading" />
                <h5 v-show="!loading && products.length === 0">
                    no products found!
                </h5>
            </div>
        </div>
        <product-card
            v-for="product in products "
            v-show="!loading"
            :key="product['@id']"
            :product="product"
        />
    </div>
</template>

<script>
import productCard from './product-card';
import loading from '../loading';

export default {
    name: 'ProductList',
    components: {
        productCard,
        loading,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
        loading: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style>

</style>
