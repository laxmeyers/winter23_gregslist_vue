<template>
    <div class="container">
        <div class="row mt-3" v-if="house">
            <div class="col-8 m-auto">
                <HouseCard :house='house' />
                <div class="card">
                    <div class="card-body">
                        <p>{{ house.info }}</p>
                        <ul>
                            <li>levels: {{ house.levels }}</li>
                        </ul>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <div>
                            <button v-if="house.seller.id == account.id">remove</button>
                        </div>
                        <div>
                            <span class="me-2">{{ house.seller.name }}</span>
                            <img height="64" width="64" :src="house.seller.picture" :alt="house.seller.name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { AppState } from '../AppState';
import { housesService } from '../services/HousesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
export default {
    setup() {
        const route = useRoute()
        const houseId = route.params.houseId

        async function getHouse() {
            try {
                await housesService.getHouse(houseId)
            } catch (error) {
                Pop.error(error, '[get house by id]')
            }
        }

        onMounted(() => {
            getHouse()
        })
        return {
            houseId,
            house: computed(() => AppState.house),
            account: computed(() => AppState.account),


        }
    }
}
</script>


<style lang="scss" scoped></style>