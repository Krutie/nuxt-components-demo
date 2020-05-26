<template>
    <div class="container mx-auto">
        <div class="p-5">
            <span class="block text-xl py-2"> D. Lazy loading </span>
            <!-- Simply prefix components with `lazy` to import them dynamically,
            only when needed. -->
        </div>
        <p v-if="$fetchState.pending">Fetching posts...</p>
        <p v-else-if="$fetchState.error">
            Error while fetching posts: {{ $fetchState.error.message }}
        </p>

        <!-- DEFAULT -->
        <!--         <list v-else>
            <list-item v-for="(post, index) in posts" :key="`post-${index}`">
                {{ post.title }}
                <list-item-icon icon="code" />
            </list-item>
        </list> -->

        <!-- LAZY LOADING -->
        <lazy-list v-else>
            <lazy-list-item
                v-for="(post, index) in posts"
                :key="`post-${index}`"
            >
                {{ post.title }}
                <lazy-list-item-icon icon="code"> </lazy-list-item-icon>
            </lazy-list-item>
        </lazy-list>

        <!-- LAZY WITH PREFIX -->
        <!-- <lazy-aex-list v-else>
            <lazy-aex-list-item
                v-for="(post, index) in posts"
                :key="`post-${index}`"
            >
                {{ post.title }}
                <lazy-aex-list-item-icon icon="code" />
            </lazy-aex-list-item>
        </lazy-aex-list> -->
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
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        ).then((res) => res.json());
        this.posts = data.slice(0, 10);
    },
    fetchOnServer: false,
};
</script>
