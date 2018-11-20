<template>
    <section>
        <span v-if="fieldName === value && direction === 'ASC'">
            <i class="fa fa-caret-up" aria-hidden="true"></i>
        </span>
        <span v-if="fieldName === value && direction === 'DESC'">
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </span>
    </section>
</template>

<script>

    export default {
        name: 'SortBy',
        props: {
            value: {
                type: String,
                default() {
                    return '';
                }
            },
            fieldName: {
                type: String,
                default() {
                    return '';
                }
            },
            direction: {
                type: String,
                default() {
                    return 'DESC';
                }
            }
        }
    };
</script>

<style scoped>

</style>
