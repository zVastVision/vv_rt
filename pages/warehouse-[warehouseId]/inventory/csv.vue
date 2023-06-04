<template>
  <div class="mt-6 mb-4">
    <div class="mt-6 mb-4">
      <h1 class="text-4xl font-bold text-white">
        Upload Inventory
      </h1>
<ul
  class="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
  id="pills-tab"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <button
      v-bind:class="{'default_csv': !i_clicked, 'green_csv': i_clicked}"
      @click="pressItem()"
    > Item Mode </button>
  </li>
  <li role="presentation">
    <button
      v-bind:class="{'default_csv': !p_clicked, 'green_csv': p_clicked}"
      @click="pressProd()"
    > Product Mode </button>
  </li>
</ul>
      <div
        v-if="data.inventoryList.length != 0"
        class="flex justify-end mt-6"
      >
        <button
          class="btn btn--primary"
          type="submit"
          @click="createInventoryItems"
        >
          Save
        </button>
      </div>
    </div>
  </div>
  <TheTable
    v-if="data.inventoryList.length != 0"
    :rows="['', 'Item Name', 'Customer', 'Total Inventory', '']"
    :template-columns="{ 'grid-template-columns': '5% 25% 25% 15% 20% 10%' }"
  >
    <TableRow
      v-for="(p, index) in data.inventoryList"
      :key="index"
      :data="p"
      class=" mb-3"
      :toggle-details="true && data.toggledItem == p.id"
      :template-columns="{ 'grid-template-columns': '5% 25% 25% 15% 20% 10%'}"
    >
      <template #row-data="rowData: Inventory">
        <td>
          <CheckBox
            v-model="data.selected"
            :value="(p.id as string)"
          />
        </td>
        <td>
          <p class="text-base">
            {{ rowData.name }}
          </p>
          <small class="text-xs text-vvn-gray text-ellipsis">{{ rowData.description }}</small>
        </td>
        <td class=" text-base">
          {{ rowData.product_id }}
        </td>
        <td class=" text-base">
          {{ rowData.quantity }}
        </td>
        <td class="flex justify-end">
          <button
            class="btn btn--secondary mr-3"
            @click="removeItem(index)"
          >
            Remove
          </button>
          <button
            class="btn btn--primary"
            @click="editItem(index)"
          >
            Edit
          </button>
        </td>
        <td class="flex justify-end">
          <button
            v-if="true && data.toggledItem != rowData.id"
            class=" mr-11" 
            @click="data.toggledItem = rowData.id"
          >
            <img
              src="/images/svg/caret-down.svg"
              alt="down"
            >
          </button>
          <button
            v-else
            class=" mr-11"
            @click="data.toggledItem = -1"
          > 
            <img
              src="/images/svg/caret-up.svg" 
              alt="down"
            >
          </button>
        </td>
      </template>
      <template #details>
        <InventoryDetailsInvCsv :data="p" />
      </template>
    </TableRow>
  </TheTable>
  <!-- ================================================ -->
  <!-- ===================File Uploader==================== -->
  <!-- ================================================ -->
  <DropFile
    v-else 
    @change="uploadFile"
  />
  <!-- ================================================ -->
  <!-- ===================Edit Form==================== -->
  <!-- ================================================ -->
  <LazyDefaultModal
    v-model="editItemsOpen"
    @close="editItemsOpen = false"
  >
    <form
      id="form"
      class="p-6"
      @submit.prevent="saveEdit"
    >
      <h1 class="text-4xl font-bold text-white">
        Mapping Function
      </h1>
      <div class=" border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4">
        <div class="flex items-start">
          <div class="w-48 mr-4">
            <label
              for="name"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Name/Number</label>
            <TextInput
              id="name"
              v-model="data.inventoryItem.name"
              name="name"
              :rules="'required|min:2'"
            />
          </div>
          <div class="w-48 mr-4">
            <label
              for="description"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Description</label>
            <TextInput
              id="description"
              v-model="data.inventoryItem.description"
              name="description"
              :rules="'required|min:2'"
            />
          </div>
          <div class="w-48 mr-4">
            <label
              for="portNumber"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Port Number</label>
            <TextInput
              id="portNumber"
              v-model="data.inventoryItem.portNumber"
              name="portNumber"
              :rules="'required|min:2'"
            />
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-48 mr-4">
            <label
              for="mfg"
              class=" text-vvn-gray text-base mb-2"
            >Manufacturer/Vendor</label>
            <TextInput
              id="mfg"
              v-model="data.inventoryItem.manufacturer"
              name="manufacturer"
              :rules="'required|min:2'"
            />
          </div>
          <div class="w-48 mr-4">
            <label
              for="quantity"
              class=" text-vvn-gray text-base mb-2"
            >Quantity</label>
            <TextInput
              id="quantity"
              v-model.number="data.inventoryItem.quantity"
              name="quantity"
              :rules="'required|numeric'"
            />
          </div>
          <div class="w-48">
            <label
              for="threshold"
              class=" text-vvn-gray text-base mb-2"
            >Inventory Threshold</label>
            <TextInput
              id="threshold"
              v-model.number="data.inventoryItem.threshold"
              name="threshold"
              :rules="'required|numeric'"
            />
          </div>
        </div>
      </div>
      <hr class=" w-full border border-vvn-white-10 my-6">
      <div class="flex justify-end items-center">
        <button class=" btn btn--primary" @click="close_mod = true">
          Save
        </button>
      </div>
    </form>
  </LazyDefaultModal>
  <!-- ================================================ -->
  <!-- ===================Map Form==================== -->
  <!-- ================================================ -->
  <LazyDefaultModal
    v-model="mapItemsOpen"
    @close="mapItemsOpen = false"
  >
    <form
      id="form"
      class="p-6"
      @submit.prevent="saveMap"
    >
      <h1 class="text-4xl font-bold text-white">
        Mapping Function
      </h1>
      <div class=" border border-vvn-white-15 p-5 rounded-[10px] bg-vvn-white-02 backdrop-blur-sm mt-4">
        <div class="flex items-start">
          <div class="w-48 mr-4">
            <label
              for="name"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Name/Number</label>
            <TextInput
              id="name"
              v-model="data.inventoryItem.name"
              name="name"
              :rules="'required|min:2'"
            />
          </div>
          <div class="w-48 mr-4">
            <label
              for="description"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Description</label>
            <TextInput
              id="description"
              v-model="data.inventoryItem.description"
              name="description"
              :rules="'required|min:2'"
            />
          </div>
          <div class="w-48 mr-4">
            <label
              for="portNumber"
              class=" text-vvn-gray text-base mb-2 inline-block"
            >Port Number</label>
            <TextInput
              id="portNumber"
              v-model="data.inventoryItem.portNumber"
              name="portNumber"
              :rules="'required|min:2'"
            />
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-48 mr-4">
            <label
              for="mfg"
              class=" text-vvn-gray text-base mb-2"
            >Manufacturer/Vendor</label>
            <TextInput
              id="mfg"
              v-model="data.inventoryItem.manufacturer"
              name="manufacturer"
              :rules="'required|min:2'"
            />
          </div>
          <div class="w-48 mr-4">
            <label
              for="quantity"
              class=" text-vvn-gray text-base mb-2"
            >Quantity</label>
            <TextInput
              id="quantity"
              v-model.number="data.inventoryItem.quantity"
              name="quantity"
              :rules="'required|numeric'"
            />
          </div>
          <div class="w-48">
            <label
              for="threshold"
              class=" text-vvn-gray text-base mb-2"
            >Inventory Threshold</label>
            <TextInput
              id="threshold"
              v-model.number="data.inventoryItem.threshold"
              name="threshold"
              :rules="'required|numeric'"
            />
          </div>
        </div>
      </div>
      <hr class=" w-full border border-vvn-white-10 my-6">
      <div class="flex justify-end items-center">
        <button class=" btn btn--primary" @click="close_mod = true">
          Save
        </button>
      </div>
    </form>
  </LazyDefaultModal>

  <!-- ================================================ -->
  <!-- ===================Success Modal================ -->
  <!-- ================================================ -->
  <LazyConfirmationModal v-model="successModalOpen">
    <h5 class=" text-2xl text-white text-center mt-4">
      Inventory created successfully
    </h5>
    <div class="flex justify-center mt-8">
      <button
        class="btn btn--primary mr-5"
        style="background-color: transparent; border-color:white"
        @click="successModalOpen = !successModalOpen"
      >
        <a :href="`../inventory`">Close</a>
      </button>
    </div>
  </LazyConfirmationModal>
</template>

<script lang="ts" setup>
import Papa from 'papaparse';
import { Inventory } from "~/types"
interface State {
  selected: [] | boolean
  inventoryList: Inventory[]
  prevInventoryList: Inventory[]
  selectedItem: number | null
  inventoryItem: Inventory
  toggledItem: string
  inventoryItemList: Inventory[]
}

const store = useInventoryStore()
const data  = reactive<State>({
  selected: [],
  inventoryList: [],
  prevInventoryList: [],
  inventoryItem: {
    name: "",
    description: "",
    totalInventory: 0,
    manufacturer: "",
    
  },
  selectedItem: null,
  toggledItem: "",
  inventoryItemList: []
})

const editItemsOpen = ref(false)
const mapItemsOpen = ref(false)
const successModalOpen = ref(false)
var i_clicked = true
var p_clicked = false
var close_mod = false
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

onBeforeMount(() => {
  //data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
})

const pressItem = () => {
  console.log("ITEM")
  i_clicked = true
  p_clicked = false
  data.prevInventoryList = data.inventoryList
  data.inventoryList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  data.inventoryList = data.prevInventoryList
}

const pressProd = () => {
  console.log("PROD")
  i_clicked = false
  p_clicked = true
  data.prevInventoryList = data.inventoryList
  data.inventoryList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  data.inventoryList = data.prevInventoryList
}

await useAsyncData('', () => store.getInventoryItems({
  page: 0,
  size: 20
}))

await useAsyncData('', () => store.getItems({
  page: 0,
  size: 100
}))

const uploadFile = async (file: File) => {
  Papa.parse<Inventory>(file, {
                header: true, 
                complete: (results) => {
                    let y = 1
                    results.data.forEach(i => {
                        console.log(i)
                        console.log(i_clicked)
                        // TODO: Have a better check here
                        if(i.Company != "" && i_clicked == true){
                          // Check if name is already in Item list
                          if(data.inventoryList.length == 0){
                            data.inventoryList.push({
                              ...i,
                              id: (Number(y)),
                              name: i['Standard Class'],
                              product_id: i['Customer No'],
                              description: i['Standard Description'],
                              threshold: (Number(i.threshold) || 0),
                              trackThreshold: false,
                              quantity: (Number(1)),
                              warehouseID: route.params.warehouseId as string
                              //totalInventory: (Number(i.quantity))
                            })
                            y = y + 1
                          }
                          else{
                            let item_ind = data.inventoryList.map(a => a.name).indexOf(i['Standard Description'])
                            console.log(item_ind)
                            //console.log(data.inventoryList.map(a => a.name))
                            if(item_ind < 0){
                              data.inventoryList.push({
                                ...i,
                                id: (Number(y)),
                                name: i['Standard Class'],
                                product_id: i['Customer No'],
                                description: i['Standard Description'],
                                threshold: (Number(i.threshold) || 0),
                                trackThreshold: false,
                                quantity: (Number(1)),
                                warehouseID: route.params.warehouseId as string
                                //totalInventory: (Number(i.quantity))
                              })
                              y = y + 1
                            }
                            else{
                              data.inventoryList[item_ind].quantity = data.inventoryList[item_ind].quantity + 1
                            }
                          }
                        }
                        if(i.Company != "" && p_clicked == true){
                          data.inventoryList.push({
                            ...i,
                            id: (Number(y)),
                            name: i['Standard Class'],
                            product_id: i['Customer No'],
                            description: i['Standard Description'],
                            threshold: (Number(i.threshold) || 0),
                            quantity: (Number(i.quantity) || 0),
                            trackThreshold: false,
                            warehouseID: route.params.warehouseId as string
                            //totalInventory: (Number(i.quantity))
                          })
                          y = y + 1
                        }
                    })
                }
            })
  mapItemsOpen.value = true
}

const removeItem = (index: number) => {
  data.inventoryList.splice(index, 1)
}

const editItem = (index: number) => {
  data.selectedItem = index
  const selectedItem = data.inventoryList[index]
  data.inventoryItem.name = selectedItem.name
  data.inventoryItem.description = selectedItem.description
  data.inventoryItem.manufacturer = selectedItem.manufacturer 
  data.inventoryItem.quantity = selectedItem.quantity
  data.inventoryItem.threshold = selectedItem.threshold
  data.inventoryItem.portNumber = selectedItem.portNumber
  editItemsOpen.value = true
}

const saveEdit = () => {
  //data.inventoryList[data.selectedItem as number] = data.inventoryItem
  //console.log(data.inventoryList)
  //console.log("Really?")
  //console.log(close_mod)
  if(close_mod == true){
    data.inventoryList[data.selectedItem as number] = data.inventoryItem
    editItemsOpen.value = false
  }
}

const saveMap = () => {
  if(close_mod == true){
    mapItemsOpen.value = false
  }
}

const createInventoryItems = () => {
  store.createBulkInventoryInstance(data.inventoryList)
  .then(() => {
    successModalOpen.value = true
    data.inventoryList = []
  })
}
</script>

<style>
   .green_csv {
       background-color: green;
       width: 135px;
       height: 30px;
   }
   .default_csv{
       background-color: gray;
       width: 135px;
       height: 30px;
   }
</style>
