<template>
    <div
        :class="componentClass"
    >
        <div v-if="!collapse">
            <h5 class="text-center">
                Categories
            </h5>
            <ul class="nav flex-column mb4">
                <li class="nav-item">
                    <a
                        :class="{
                            'nav-link':true,
                            'selected': currentCategoryId === null
                        }"
                        href="/"
                    >
                        All Products
                    </a>
                </li>
                <li
                    v-for="category in categories"
                    :key="category['@id']"
                    class="nav-item"
                >
                    <a
                        :class="{
                            'nav-link':true,
                            'selected': currentCategoryId === category['@id']
                        }"
                        :href="`/category/${category.id}`"
                    >
                        {{ category.name }}
                    </a>
                </li>
            </ul>
            <hr>
        </div>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm"
                @click="$emit('toggle-collapsed')"
                v-text="collapse ? '>>':'<< Collapse'"
            />
        </div>
    </div>
</template>

<script>



export default {
    name: 'Sidebar',
    props: {
        collapse: {
            type: Boolean,
            required: true,
        },
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },

    computed: {
        componentClass() {
            return [this.$style.sidebar, 'p-3', 'mb-5'];
        },

    },

};
</script>

<style lang="scss" module>
@import "../../scss/components/light-component";
.sidebar :global{
  @include light-component;

ul {

li a:hover {
  background: $blue-component-link-hover;
  background: blue;
}
li a.selected {
  background: $light-component-border;
}

}

}
</style>
