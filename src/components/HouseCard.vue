<template>
    <div class="card">
        <router-link :to="{ name: 'House', params: { houseId: house.id } }">
            <img :src="house.img" alt="" class="rounded-top img-fluid selectable w-100">
        </router-link>
        <div class="card-body">
            <p><b>bathrooms:{{ house.bathrooms }} bedrooms:{{ house.bedrooms }} - ${{ house.price }}</b></p>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        house: { type: Object, required: true }
    },
    setup() {
        return {
        }
    }
}
</script>


<style lang="scss" scoped></style>