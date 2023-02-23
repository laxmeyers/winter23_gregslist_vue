<template>
    <form @submit.prevent="handleSubmit()">
        <div class="mb-3">
                <label for="bedrooms" class="form-label">bedrooms</label>
                <input required type="number" v-model="editable.bedrooms" class="form-control" id="bedrooms" placeholder="bedrooms..." name="bedrooms">
              </div>
              <div class="mb-3">
                <label for="bathrooms" class="form-label">bathrooms</label>
                <input required type="number" v-model="editable.bathrooms" class="form-control" id="bathrooms" placeholder="bathrooms..." name="bathrooms">
              </div>
              <div class="mb-3">
                <label for="levels" class="form-label">levels</label>
                <input required type="number" v-model="editable.levels" class="form-control" id="levels" placeholder="levels..." name="levels">
              </div>
              <div class="mb-3">
                <label for="year" class="form-label">year</label>
                <input required type="number" v-model="editable.year" class="form-control" id="year" placeholder="year..." name="year">
              </div>
              <div class="mb-3">
                <label for="img" class="form-label">img</label>
                <input required type="text" class="form-control" v-model="editable.imgUrl" id="img" placeholder="img..." name="imgUrl">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input required type="number" class="form-control" v-model="editable.price" id="price" placeholder="price..." name="price">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <textarea name="description" v-model="editable.description" class="form-control" id="description" rows="3">
                </textarea>
              </div>
              <div class="text-end">
                  <button class="btn btn-success w-25" data-bs-dismiss="modal">Post</button>
              </div>
    </form>
</template>


<script>
import { ref } from 'vue';
import { router } from '../router';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';

export default {
    setup(){
        const editable = ref({})
        return {
            editable,

            async handleSubmit() {
                try {
                    const house = editable.value.id
                    ? await housesService.editHouse(editable.value)
                    : await housesService.createHouse(editable.value)

                    if(house?.id){
                        router.push({name: 'House', params: {houseId: house.id}})
                    }
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