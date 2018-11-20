<template>
    <tr>
        <th scope="row">{{ +index + 1 }}</th>
        <td
                @click="edit('name')"
        >
            <span v-if="editField !== 'name'">{{ row.name }}</span>
            <input
                    v-click-outside="onClickOutside"
                    v-if="editField === 'name'"
                    v-model="row.name"
                    type="text"
                    class="form-control"
                    required
            >
        </td>
        <td
                @click="edit('location')"
        >
            <span v-if="editField !== 'location'">{{ row.location }}</span>
            <input
                    v-click-outside="onClickOutside"
                    v-if="editField === 'location'"
                    v-model="row.location"
                    type="text"
                    class="form-control"
                    required
            >
        </td>
        <td
                @click="edit('currency')"
        >
            <span v-if="editField !== 'currency'">{{ row.currency }}</span>
            <input
                    v-click-outside="onClickOutside"
                    v-if="editField === 'currency'"
                    type="number"
                    class="form-control"
                    v-model="currency"
                    @input="checkNumber"
            >
        </td>
        <td>
            <router-link :to="{ name: 'details', query: { id: row.id } }">Details</router-link>
        </td>
    </tr>
</template>

<script>
    import vClickOutside from 'v-click-outside';

    export default {
        name: 'TableRow',
        props: {
            index: {
                type: Number,
                default() {
                    return 0;
                }
            },
            row: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                editField: '',
                currency: this.row.currency
            }
        },
        directives: {
            clickOutside: vClickOutside.directive
        },
        watch: {
            'row.name': function (val, oldVal) {
                    this.row.name = val.replace(/[0-9]+/, '');
            },
            'row.location': function (val, oldVal) {
                this.row.location = val.replace(/[0-9]+/, '');
            },
        },
        methods: {
            edit(field) {
                this.editField = field;
            },
            onClickOutside() {
                if (this.row.name.trim().length > 0 && this.row.location.trim().length > 0) {
                    this.editField = '';
                }
            },
            checkNumber() {
                this.row.currency = +this.currency;
            }
        }
    };
</script>

<style scoped>

</style>
