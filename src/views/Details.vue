<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-1 home-btn">
                    <router-link :to="{ name: 'home' }">
                        <i class="fa fa-home fa-3x" aria-hidden="true"></i>
                    </router-link>
                </div>
                <div class="col-11">
                    <div class="details" v-if="getData">
                        <h1>Details</h1>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">{{ getData.id }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td>{{ getData.name }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>{{ getData.location }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Currency</th>
                                <td>{{ getData.currency }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <no-result v-else />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { mapGetters } from 'vuex';
    import NoResult from '../components/NoResult';

    export default {
        name: 'Details',
        components: { NoResult },
        computed: {
            ...mapGetters({
                data: 'data/getData'
            }),
            getData() {
                let id = this.$route.query.id;
                return this.data.find(item => item.id === id);
            }
        },
        mounted() {

        }
    };
</script>

<style scoped lang="scss">
    .home-btn {
        a {
            color: #000;

        }
    }
</style>
