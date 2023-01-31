<template>
    <div class="container-fluid">
        <div class="row">
            <aside :class="asideClass">
                <sidebar-component
                    :collapse="sidebarCollapsed"
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                    @toggle-collapsed="toggleCollapsed"
                />
            </aside>
            <div :class="contentClass">
                <catalog-component
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CatalogComponent from '../components/catalog';
import SidebarComponent from '../components/sidebar';
import { getCurrentCategoryId } from '../services/page-context';
import { fetchCategories } from '../services/categories-services';

export default {
    name: 'Products',
    components: {
        CatalogComponent,
        SidebarComponent,
    },
    data() {
        return {
            sidebarCollapsed: false,
            categories: [],
            currentCategoryId: getCurrentCategoryId(),
        };
    },
    computed: {
        asideClass() {
            return this.sidebarCollapsed ? this.$style.asideCollapsed : 'col-xs-12 col-3';
        },
        contentClass() {
            return this.sidebarCollapsed ? 'col-xs-12 col-11' : 'col-xs-12 col-9';
        },
    },
    async created() {
        const response = await fetchCategories();

        this.categories = response.data['hydra:member'];
    },
    methods: {
        toggleCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
    },

};
</script>

<style  lang="scss" module>
 .asideCollapsed{
   width: 70px;
 }
</style>
