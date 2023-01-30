<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>
        <Productlist
            :products="products"
            :loading="loading"
        />

        <div class="row">
            <LengendComponent :title="legend" />
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import LengendComponent from '../components/lengend';
import Productlist from './productlist/index';
import { fetchProducts } from '../services/products-services';

export default {
    name: 'Catalog',
    components: {
        LengendComponent,
        Productlist,

    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            loading: false,
            products: [],
            legend: ' Shipping takes 10-12 weeks!',
        };
    },
    async created() {
        this.loading = true;

        let response;
        try {
            response = await fetchProducts(this.currentCategoryId);

            this.loading = false;
        } catch (e) {
            this.loading = false;

            return;
        }

        this.products = response.data['hydra:member'];
    },
};
</script>

<style>

</style>
