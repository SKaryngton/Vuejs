<template>
    <div class="input-group">
        <input
            v-model="searchTerm"
            class="form-control"
            placeholder="Search Products..."
            type="search"
            @input="onInput"
        >
        <div
            v-show="searchTerm !== ''"
            class="input-group-append"
            @click="eraseSearchTerm"
        >
            <button class="btn btn-outline-secondary">
                X
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
            searchTimeout: null,
        };
    },
    methods: {
        onInput() {
            this.searchTimeout = setTimeout(() => {
                this.$emit('search-products', { term: this.searchTerm });
                this.searchTimeout = null;
            }, 200);
        },
        eraseSearchTerm() {
            this.searchTerm = '';
            this.$emit('search-products', { term: this.searchTerm });
        },
    },
};
</script>

<style lang="scss" module>

</style>
