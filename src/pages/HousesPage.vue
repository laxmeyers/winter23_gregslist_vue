<template>
  <div class="housesPage">
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-4" v-for="h in houses">
          <HouseCard :house='h'/>
        </div>
      </div>
      <div class="row justify-content-end align-items-end max-height sticky-bottom" v-if="account.id">
        <div class="col-2">
          <button class="btn btn-outline-success rounded-circle fs-2" data-bs-toggle="modal" data-bs-target="#houseModal">
            +🏡
          </button>
        </div>
      </div>
    </div>
    <Modal id="houseModal" modal-title="Add a House 🏡">
      <HouseForm />
    </Modal>
  </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { housesService } from '../services/HousesService';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';

export default {
  setup() {
    async function getHouses(){
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error, '[get Houses]')
      }
    }

    onMounted(() => {
      getHouses()
    })
    return {
      account: computed(() => AppState.account),
      houses: computed(() => AppState.houses),

      async createHouse() {
        try {
          await housesService.createHouse()
        } catch (error) {
          Pop.error(error, '[making house]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
