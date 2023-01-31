<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :categories="categories"
                    :current-category-id="currentCategoryId"
                />
            </div>
            <div class="col-9">
                <SearchBar
                    @search-products="onSearchProducts"
                />
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

import LengendComponent from '../components/lengend';
import Productlist from './productlist/index';
import { fetchProducts } from '../services/products-services';
import TitleComponent from './title.vue';
import SearchBar from './search-bar.vue';

export default {
    name: 'Catalog',
    components: {
        SearchBar,
        LengendComponent,
        Productlist,
        TitleComponent,

    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },

    },
    data() {
        return {
            loading: false,
            products: [],
            searchTerm: null,
            legend: ' Shipping takes 10-12 weeks!',
        };
    },
    watch: {
        currentCategoryId() {
            this.loadProducts();
        },
    },
    created() {
        this.loadProducts();
    },
    methods: {
        onSearchProducts({ term }) {
            this.searchTerm = term;
            this.loadProducts();
        },
        async loadProducts() {
            this.loading = true;

            let response;
            try {
                response = await fetchProducts(this.currentCategoryId, this.searchTerm);

                this.loading = false;
            } catch (e) {
                this.loading = false;

                return;
            }

            this.products = response.data['hydra:member'];
        },
    },
};
</script>

<style>

</style>
