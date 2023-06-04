<template>
  <main
    v-if="!edit"
    class="p-6"
  >
    <WarehouseHeaderWidget>
      {{ store.inventoryData?.name }}
    </WarehouseHeaderWidget>
    <div class="flex justify-end">
      <a
        type="submit"
        class="btn btn--secondary ml-4 flex"
        :href="`../inventory`"
      >
        Back
      </a>
      <a
        type="submit"
        class="btn btn--primary ml-4 flex"
        :href="`${store.inventoryData?.id}?edit=true`"
      >
        Edit
      </a>
    </div>
    <div class="flex gap-6">
      <div class="flex-1 border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4">
        <p class="text-2xl text-vvn-green mb-3">
          Basic Information
        </p>
        <div class="w-full mr-4">
          <label
            for="name"
            class=" text-vvn-gray text-base mb-2 inline-block"
          >Main Identifier</label>
          <p class=" text-white text-base">
            {{ store.inventoryData?.name }}
          </p>
        </div>
        <div>
          <label
            for="description"
            class=" text-vvn-gray text-base mb-2 mt-4 inline-block"
          >Description</label>
          <p class=" text-white text-base">
            {{ store.inventoryData?.description }}
          </p>
        </div>
      </div>
      <div class=" border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4 w-[378px]">
        <p class="text-2xl text-vvn-green mb-3">
          Inventory
        </p>
        <div class="w-full mr-4">
          <label
            for="name"
            class=" text-vvn-gray text-base mb-2 inline-block"
          >Current Inventory</label>
          <p class=" text-white text-base">
            {{ store.inventoryData?.quantity }}
          </p>
        </div>
        <div class=" mt-4">
          <label
            for="trackThreshold"
            class=" text-vvn-gray text-base mb-2 block"
          >Track Inventory
            Threshold</label>
          <p class=" text-white text-base">
            <span v-if="true && store.inventoryData?.trackThreshold">Yes</span>
            <span v-else>No</span>
          </p>
        </div>
        <div class=" mt-4">
          <label
            for="threshold"
            class=" text-vvn-gray text-base mb-2"
          >Inventory Threshold</label>
          <p class=" text-white text-base">
            {{ store.inventoryData?.threshold || "Not Set" }}
          </p>
        </div>
      </div>
    </div>
    <div class=" border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-6">
      <p class="text-2xl text-vvn-green mb-3">
        Custom Fields
      </p>
      <div>
        <p
          for="name"
          class=" text-vvn-gray text-base mb-2 inline-block w-96"
        >
          Key
        </p>

        <p
          for="name"
          class=" text-vvn-gray text-base mb-2 inline-block w-96"
        >
          Value
        </p>
      </div>
      <hr class=" border-y-vvn-gray-90 mb-3">
      <div
        v-for="(item, index) in store.inventoryData?.extraDetails"
        :key="index"
        class="flex items-end mb-2 text-white"
      >
        <p
          for="name"
          class=" text-base mb-2 inline-block w-96"
        >
          {{ item.name }}
        </p>

        <p
          for="name"
          class="text-base mb-2 inline-block w-96"
        >
          {{ item.value }}
        </p>
      </div>
    </div>
    <div>"  "</div>
    <div>
      <h1 class="font-bold text-white">
        Live View - {{ store.inventoryData?.name }}
      </h1>
    </div>
    <canvas class="canvas"></canvas>
  </main>
  <form
    v-else
    id="form"
    class="p-6"
    @submit.prevent="onSubmit"
  >
    <WarehouseHeaderWidget>
      Edit {{ store.inventoryData?.name }}
    </WarehouseHeaderWidget>
    <div class="flex justify-end">
      <a
        :href="`${inventory.id}`"
        class="btn btn--secondary flex"
      >
        Cancel
      </a>
      <button
        type="submit"
        class="btn btn--primary ml-4"
      >
        Save
      </button>
    </div>
    <div class="flex gap-6">
      <div class="flex-1 border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4">
        <p class="text-2xl text-vvn-green mb-3">
          Basic Information
        </p>
        <div class="w-full mr-4">
          <label
            for="name"
            class=" text-vvn-gray text-base mb-2 inline-block"
          >Main Identifier</label>
          <TextInput
            id="name"
            v-model="data.editInventoryData.name"
            name="name"
            :rules="'required|min:2'"
          />
        </div>
        <div>
          <label
            for="description"
            class=" text-vvn-gray text-base mb-2 mt-4 inline-block"
          >Description</label>
          <TextArea
            id="description"
            v-model="data.editInventoryData.description"
            name="description"
            :rules="'required|min:2|max:256'"
          />
        </div>
      </div>
      <div class=" border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4 w-[378px]">
        <p class="text-2xl text-vvn-green mb-3">
          Inventory
        </p>
        <div class="w-full mr-4">
          <label
            for="name"
            class=" text-vvn-gray text-base mb-2 inline-block"
          >Current Inventory</label>
          <TextInput
            id="quantity"
            v-model.number="data.editInventoryData.quantity"
            type="number"
            name="quantity"
            :rules="'required|numeric'"
          />
        </div>
        <div class=" mt-4">
          <label
            for="trackThreshold"
            class=" text-vvn-gray text-base mb-2 block"
          >Track Inventory
            Threshold</label>
          <CheckBox
            v-model="data.editInventoryData.trackThreshold"
            class="block"
            :value="false"
            name="trackThreshold"
          />
        </div>
        <div class=" mt-4">
          <label
            for="threshold"
            class=" text-vvn-gray text-base mb-2"
          >Inventory Threshold</label>
          <TextInput
            id="threshold"
            v-model.number="data.editInventoryData.threshold"
            type="number"
            name="threshold"
            :rules="'numeric'"
            :disabled="!data.editInventoryData.trackThreshold"
          />
        </div>
      </div>
    </div>
    <div class=" border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-6">
      <p class="text-2xl text-vvn-green mb-3">
        Custom Fields
      </p>
      <div v-if="data.editInventoryData.extraDetails.length != 0">
        <div
          v-for="index in data.editInventoryData.extraDetails.length"
          :key="index"
          class="flex items-end mb-4"
        >
          <div class="mr-4 w-52">
            <label
              for="name"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Name</label>
            <TextInput
              id="name"
              v-model="data.editInventoryData.extraDetails[index-1].name"
              :name="`customField${index-1}-name`"
            />
          </div>
          <div class="mr-4 w-[500px]">
            <label
              for="name"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Value</label>
            <TextInput
              id="name"
              v-model="data.editInventoryData.extraDetails[index-1].value"
              :name="`customField${index-1}-value`"
            />
          </div>
          <button
            class="btn btn--secondary mb-1"
            type="button"
            @click="data.editInventoryData.extraDetails.splice(index-1, 1)"
          >
            Remove field
          </button>
        </div>
      </div>
      <button
        class="btn btn--secondary mt-5"
        type="button"
        @click="addNewField"
      >
        Add Field
      </button>
    </div>
  </form>
</template>
<script lang="ts" setup>
// Begin Imports
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { Inventory } from '~/types';
// End of Imports

const data = reactive<{ editInventoryData: Inventory }>({
    editInventoryData: {
        id: "",
        name: "",
        description: "",
        quantity: 0,
        trackThreshold: false,
        warehouseID: "",
        threshold: 0,
        extraDetails: []
    }
})
const store = useInventoryStore()
const route = useRoute()
const edit = ref(false)

onMounted(() => {
    if (route.query.edit == "true") {
        edit.value = true
    }
})

useAsyncData(async () => {
    store.getInventoryItemById(route.params.inventoryId as string)
        .catch(() => {
            useToast().error("Could not fetch inventory details")
        })
})

const inventory = computed(() => {
    data.editInventoryData.id = store.inventoryData?.id
    data.editInventoryData.name = store.inventoryData?.name || ""
    data.editInventoryData.description = store.inventoryData?.description || ""
    data.editInventoryData.extraDetails = [...store.inventoryData?.extraDetails as []]
    data.editInventoryData.trackThreshold = store.inventoryData?.trackThreshold || false
    data.editInventoryData.threshold = store.inventoryData?.threshold || 0
    data.editInventoryData.quantity = store.inventoryData?.quantity || 0
    return data.editInventoryData
})
const addNewField = () => {
    data.editInventoryData.extraDetails.push({name: '', value: ''})
}

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().nonempty('Name is required'),
    description: z.string().nonempty('Description is required'),
    quantity: z.number().min(0),
    threshold: z.number().min(0),
  })
);

const validationResult = useForm({
  validationSchema,
})

const onSubmit = validationResult.handleSubmit(values => {

 /*if(values.quantity > data.quantity){
    console.log("NEED TO ADD ITEMS")
  }

  if(values.quantity < data.quantity){
    console.log("NEED TO DELETE ITEMS")
  }

  if(values.quantity == data.quantity){
    console.log("HELP ME")
  }*/

  const inventory: Inventory = {
    id: route.params.inventoryId as string,
    name: values.name,
    description: values.description,
    quantity: values.quantity,
    trackThreshold: data.editInventoryData.trackThreshold,
    threshold: values.threshold,
    extraDetails: data.editInventoryData.extraDetails.map(i => ({name: i.name, value: i.value})), //fixes proxy cloning issue
    warehouseID: route.params.warehouseId as string
  }

  store.editInventoryItem(inventory)
  .then(() => {
    //console.log("Doing Something")
    window.location.href = `${route.params.inventoryId}`
  })
  .catch(() => {
    useToast().error("Update failed")
  })
  ;
})

</script>

<style lang="scss" scoped>
.canvas {
  position: relative;
  left: 0px;
  top: 0px;
  width: 1180px;
  height: 630px;
  background-color: white;
  opacity: 0.05;
}

.overlay {
  position: absolute;
  left: var(--x, 10px);
  top: var(--y, 10px);
}
</style>
