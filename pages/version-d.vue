<template>
    <div class="container mx-auto">
        <div class="p-5">
            <span class="block text-xl py-2"> D. Lazy Loading </span>
            Simply prefix components with `lazy` to import them dynamically,
            only when needed.
        </div>
        <p v-if="$fetchState.pending">Fetching posts...</p>
        <p v-else-if="$fetchState.error">
            Error while fetching posts: {{ $fetchState.error.message }}
        </p>
        <lazy-aec-list v-else>
            <aec-list-item
                v-for="(post, index) in posts"
                :key="`post-${index}`"
            >
                {{ post.title }}
            </aec-list-item>
            <!-- <aec-list-item v-for="post in posts">
                {{ post }}
            </aec-list-item> -->
        </lazy-aec-list>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    async fetch() {
        this.posts = await this.$http.$get(
            "https://jsonplaceholder.typicode.com/posts"
        );
    },
    fetchOnServer: false,
};
</script>
