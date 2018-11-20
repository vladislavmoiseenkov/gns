<template>
    <main class="home">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <input
                            v-model="search"
                            type="text"
                            class="form-control"
                            placeholder="Search.."
                    />
                    <div class="amount mt-3">
                        <h4>Итого: {{ amount }}</h4>
                    </div>
                </div>
                <div class="col-9">
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">
                                #
                            </th>
                            <th
                                    @click="sortBy('name')"
                                    scope="col"
                            >
                                <div>
                                    Name
                                    <sort-by
                                            :value="this.sortByValue"
                                            :field-name="'name'"
                                            :direction="this.sortDirection"
                                    />
                                </div>
                            </th>
                            <th
                                    @click="sortBy('location')"
                                    scope="col"
                            >
                                <div>
                                    Location
                                    <sort-by
                                            :value="this.sortByValue"
                                            :field-name="'location'"
                                            :direction="this.sortDirection"
                                    />
                                </div>
                            </th>
                            <th
                                    @click="sortBy('currency')"
                                    scope="col"
                            >
                                <div>
                                    Currency
                                    <sort-by
                                            :value="this.sortByValue"
                                            :field-name="'currency'"
                                            :direction="this.sortDirection"
                                    />
                                </div>
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <table-row
                                v-for="(row, index) in data"
                                :key="index"
                                :row="row"
                                :index="index"
                        />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { mapGetters, mapActions }           from 'vuex';
    import SortBy                               from '../components/SortBy';
    import TableRow from '../components/TableRow';

    export default {
        name: 'home',
        components: { TableRow, SortBy },
        data() {
            return {
                rows: [],
                search: '',
                sortByValue: '',
                sortDirection: 'DESC'
            };
        },
        computed: {
            ...mapGetters({
                json: 'data/getData',
            }),
            amount() {
                return this.data.reduce((accumulator, item) => {
                    return accumulator + item.currency;
                }, 0);
            },
            data: {
                get() {
                    if (this.search.length > 0) {

                        return this.rows.filter(item => {
                            if (item.name.indexOf(this.search) !== -1 ||
                                item.location.indexOf(this.search) !== -1 ||
                                item.currency.toString().indexOf(this.search) !== -1) {
                                return item;
                            }
                        });
                    }
                    return this.rows;
                },
                set(val) {
                    this.rows = [...val];
                }
            }
        },
        watch: {
            search(val, oldVal) {
                if (oldVal.length > 0 && val.length === 0) {
                    this.data = [...this.json];
                    this.sortByValue = '';
                } else if (val.length !== oldVal.length) {
                    this.sortByValue = '';
                }
            }
        },
        mounted() {
            this.data = [...this.json];
        },
        methods: {
            ...mapActions({
                setData: 'data/setData'
            }),
            sortBy(value) {
                if (this.sortByValue === value) {
                    if (this.sortDirection === 'DESC') {
                        this.sortDirection = 'ASC';
                    } else {
                        this.sortDirection = 'DESC';
                    }
                } else {
                    this.sortByValue = value;
                    this.sortDirection = 'DESC';
                }

                this.sortByFunc(value, this.sortDirection);
            },
            sortByFunc(field, direction) {
                let newData = [];

                switch (direction) {
                    case 'DESC':
                        newData = this.data.sort((a, b) => a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0);
                        break;
                    case 'ASC':
                        newData = this.data.sort((a, b) => a[field] > b[field] ? -1 : b[field] > a[field] ? 1 : 0);
                        break;
                    default:
                        newData = this.data;
                        break;
                }

                this.data = [...newData];
            },
        }
    };
</script>

<style lang="scss">
    .home {
        table {
            thead {
                th {
                    div {
                        align-items: center;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;

                        & > section {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
