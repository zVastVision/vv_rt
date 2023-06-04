<template>
  <div
    class="bg-vvn-black-10 rounded-md"
    @submit.prevent="onSubmit"
  >
    <div class="mt-6 mb-4">
      <WarehouseHeaderWidget>Encoding</WarehouseHeaderWidget>
      <div class="justify-between my-5">
<ul
  class="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
  id="pills-tab"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <button
      v-bind:class="{'default': !i_clicked, 'green': i_clicked}"
      @click="pressInv()"
    > Inventory </button>
  </li>
  <li role="presentation">
    <button
      v-bind:class="{'default': !em_clicked, 'green': em_clicked}"
      @click="pressEmp()"
    > Employees </button>
  </li>
  <li role="presentation">
    <button
      v-bind:class="{'default': !eq_clicked, 'green': eq_clicked}"
      @click="pressEq()"
    > Equipment </button>
  </li>
</ul>
      </div>
      <div class="flex justify-between my-5">
        <button
          class="btn btn--primary"
          @click="editItemsOpen = true"
        >
          Add Items To Queue
        </button>
        <div>
          <button
            :disabled="data.encodingList.length == 0"
            class="btn btn--secondary mr-2 disabled:cursor-not-allowed"
            type="button"
            @click="clearQueue"
          >
            Clear queue
          </button>
          <button
            class="btn btn--primary"
            type="submit"
            :disabled="true && data.encodingList.length == 0"
            @click="sendToPrinter()"
          >
            Print and Encode
          </button>
        </div>
      </div>
    </div>
    <TheTable
      v-if="data.encodingList.length != 0"
      :rows="['Item Name', 'Type', 'Status', '', '']"
      :template-columns="{ 'grid-template-columns': '40% 20% 15% 15% 10%' }"
    >
      <TableRow
        v-for="(p, index) in data.encodingList"
        :key="index"
        :data="p"
        class="mb-3"
        :toggle-details="false"
        :template-columns="{ 'grid-template-columns': '40% 20% 15% 15% 10%' }"
      >
        <template #row-data="rowData: Inventory">
          <td>
            <p class="text-base">
              {{ rowData.name }}
            </p>
            <small class="text-xs text-vvn-gray line-clamp-1">{{ rowData.description }}</small>
          </td>
          <td>
            <div class="flex rounded-lg bg-vvn-gray-50 w-max items-center px-2 py-1 text-xs border-2 border-vvn-gray">
              <p><span v-if="rowData.isKit">Kit</span><span v-else>Inventory</span></p>
            </div>
          </td>
          <td>
            <div
              class="flex rounded-lg w-max items-center px-2 py-1 text-xs border-2 border-red-900 bg-red-800"
            >
              <div class="rounded-full bg-red-600 h-2 w-2 mr-2" />
              Not Printed
            </div>
          </td>
          <td>
            <DefaultCounter
              v-model.number="data.encodingList[index].quantity"
              @change="data.encodingList[index].quantity == 0 ? data.encodingList.splice(index, 1) : null"
            />
          </td>
        </template>
      </TableRow>
    </TheTable>
    <div
      v-else
      class="w-full h-[30rem] flex justify-center items-center"
    >
      <div>
        <img
          src="/images/svg/no-content.svg"
          alt=""
        >
        <p class="text-vvn-gray-90 text-center text-lg mt-6">
          Encoding queue empty
        </p>
      </div>
    </div>
  </div>
  <!-- ================================================ -->
  <!-- ===================Search Modal==================== -->
  <!-- ================================================ -->
  <LazyDefaultModal
    v-model="editItemsOpen"
    @close="editItemsOpen = false"
  >
    <h1 class="text-3xl font-bold text-white">
      Search Inventory
    </h1>
    <small class=" text-base text-vvn-gray">Albuquerque facility</small>
    <div class=" w-80 mt-5 mb-7">
      <SearchInput
        v-model.trim.lazy="searchInput"
        :show-secondary-icon="true"
        @input="tableDetails = []"
      />
    </div>
    <TheTable
      v-if="tableDetails.length != 0"
      :rows="['Item Name', 'Type', 'Available Stock', '', '']"
      :template-columns="{ 'grid-template-columns': '40% 20% 15% 15% 10%' }"
    >
      <TableRow
        v-for="(p, index) in tableDetails"
        :key="index"
        :data="p"
        class="mb-3"
        :toggle-details="false"
        :template-columns="{ 'grid-template-columns': '40% 20% 15% 15% 10%' }"
      >
        <template #row-data="rowData:Inventory">
          <td class="pr-3">
            <p class="text-base">
              {{ rowData.name }}
            </p>
            <small class="text-xs text-vvn-gray line-clamp-1">{{ rowData.description }}</small>
          </td>
          <td>
            <div class="flex rounded-lg bg-vvn-gray-50 w-max items-center px-2 py-1 text-xs border-2 border-vvn-gray">
              <p><span v-if="rowData.isKit">Kit</span><span v-else>Inventory</span></p>
            </div>
          </td>
          <td class="text-base">
            {{ rowData.quantity }}
          </td>
          <td>
            <DefaultCounter v-model.number="data.counterList[index]" />
          </td>
          <td class="flex justify-end">
            <button
              class="btn btn--primary"
              type="button"
              @click="addItemToEncodingQueue({ ...(rowData as Inventory), quantity: data.counterList[index] || 0 }, index)"
            >
              Add
            </button>
          </td>
        </template>
      </TableRow>
    </TheTable>
    <Loader v-else />
  </LazyDefaultModal>
  <!-- ================================================ -->
  <!-- ===================Success Modal==================== -->
  <!-- ================================================ -->
  <LazyConfirmationModal
    v-model="successModalOpen"
    @close="successModalOpen=false"
  >
    <h5 class=" text-2xl text-white text-center mt-4">
      Kit created successfully
    </h5>
    <div class="flex justify-center mt-8">
      <button
        class="btn btn--primary mr-5"
        style="background-color: transparent; border-color:white"
        @click="successModalOpen = !successModalOpen"
      >
        Close
      </button>
    </div>
  </LazyConfirmationModal>
</template>
  
<script setup lang="ts">
// Begin Imports
import { Inventory, Employee, Equipment } from '~/types';
// End of Imports

interface EncodingData {
  name: string
  description: string
  totalInventory: number
  quantity: number
  threshold: number
  encodingList: Inventory[],
  //encodingList: Employee[],
  counterList: { [key: string]: number }
}
const data = reactive<EncodingData>({
  name: "",
  description: "",
  totalInventory: 0,
  quantity: 0,
  threshold: 0,
  encodingList: [],
  counterList: {}
})

const editItemsOpen = ref(false)
var i_clicked = ref(true)
var em_clicked = ref(false)
var eq_clicked = ref(false)
const searchInput = useDebouncedRef("", 200)
const successModalOpen = ref(false)
const inventoryStore = useInventoryStore()
const runtimeConfig = useRuntimeConfig()

onBeforeMount(() => {
  data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  //data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingEmpQueue) as Employee[] || []
  var real_list = []
  for(var i=0 ; i < data.encodingList.length ; i++) {
    if(!(data.encodingList[i].isKit == null)){
      real_list.push(data.encodingList[i])
    }
  }
  data.encodingList = real_list as Inventory[]
  //console.log(data.encodingList)
})

const pressInv = () => {
  i_clicked = true
  em_clicked = false
  eq_clicked = false
  data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  var real_list = []
  for(var i=0 ; i < data.encodingList.length ; i++) {
    if(!(data.encodingList[i].isKit == null)){
      real_list.push(data.encodingList[i])
    }
  }
  data.encodingList = real_list as Inventory[]
  //console.log(data.encodingList)
  //console.log("INV pressed")
}

const pressEmp = () => {
  i_clicked = false
  em_clicked = true
  eq_clicked = false
  data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  var real_list = []
  for(var i=0 ; i < data.encodingList.length ; i++) {
    if(!(data.encodingList[i].title == null)){
      real_list.push(data.encodingList[i])
    }
  }
  data.encodingList = real_list as Employee[]
  //console.log(data.encodingList)
  //console.log("EMP pressed")
}

const pressEq = () => {
  i_clicked = false
  em_clicked = false
  eq_clicked = true
  data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  var real_list = []
  for(var i=0 ; i < data.encodingList.length ; i++) {
    if(!(data.encodingList[i].part_id == null)){
      real_list.push(data.encodingList[i])
    }
  }
  data.encodingList = real_list as Equipment[]
  //console.log(data.encodingList)
  //console.log("EQ pressed")
}

await useAsyncData('', () => inventoryStore.getInventoryItems({
  page: 0,
  size: 20
}))

const tableDetails = computed(() => {
  return searchInput.value == "" ? inventoryStore.inventoryList : inventoryStore.inventorySearch
})

await useAsyncData('', () => inventoryStore.getItems({
  page: 0,
  size: 100
}))

const itemDetails = computed(() => {
  return inventoryStore.itemsData
})

watch(searchInput, async (current) => {
  inventoryStore.searchInventoryItem(current, { page: 0, size: 20 })
})

const addItemToEncodingQueue = (rowData: Inventory, index: number) => {
  if (rowData.quantity <= 0) {
    useToast().error("Invalid item quantity")
  } else {
    data.encodingList.push(rowData)
    data.counterList[index] = 1
    useSetLocalStorage(runtimeConfig.encodingQueue, data.encodingList)
    useToast().success(`${rowData.name} added to queue`)
  }
}

const sendToPrinter = () => {
  //console.log(inventoryStore.editItem([data.encodingList]))
  const epcs = inventoryStore.encItem([data.encodingList])
  //var epcs = []

  /*if(i_clicked == true){
    epcs = inventoryStore.encItem([data.encodingList])
  }
  if(em_clicked == true){
    pressEmp()
  }
  if(eq_clicked == true){
    pressEq()
  }*/

  epcs.then((result) => {
    console.log("THE EPC!!!")
    console.log(result)

    //const zplString = '^XA^RS8^RFW,H^FD123456789ABC123456789ABC^FS^RFR,H,0,12,1^FN1^FS^XZ'
    
    let zplString = ''
    const keys = Object.keys(result)
    for (let l = 0; l < keys.length; l++) {
      //console.log("FOR LOOP")
      //console.log(result[keys[l]])
      
      const sub_epcs = result[keys[l]][1][0]
      for (let k = 0; k < sub_epcs.length; k++) {
        zplString = zplString + '^XA^FO50,50^A0N,50,50^FD' + keys[l] + '^FS^FO50,150^A0N,50,50^FD' + result[keys[l]][0] + '^FS^RS8^RFW,H^FD' + sub_epcs[k] + '^FS^RFR,H,0,12,1^FN1^FS^XZ'
      }
    }
    console.log(zplString)

    const printer_data = new FormData()

    printer_data.append("sn", "DBN231050752")
    const fileBlob = new Blob([zplString], {type: 'text/plain'})
    printer_data.append("zpl_file", fileBlob, "ZplFile.txt")
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "https://api.zebra.com/v2/devices/printers/send")
    xhr.setRequestHeader("apikey", "SW5fV2HzowqkaKdxTKmNhAw0MGYsSSPr")
    xhr.setRequestHeader("tenant", "83c99b121eda1c7f6a30e5b65a210b91")
    xhr.send(printer_data)
  }).catch((err) => {
    useToast().error("No more avaiable EPCs to utilize")
  });
}

const clearQueue = () => {
  //console.log(inventoryStore.editItem([data.encodingList]))
  //data.encodingList = []; 
  //useSetLocalStorage(runtimeConfig.encodingInvQueue, [])
  data.encodingList = useGetLocalStorageJSON(runtimeConfig.encodingInvQueue) as Inventory[] || []
  var real_list = []
  for(var i=0 ; i < data.encodingList.length ; i++) {
    if(i_clicked == true && (data.encodingList[i].isKit == null)){
      real_list.push(data.encodingList[i])
    }
    else if(em_clicked == true && (data.encodingList[i].title == null)){
      real_list.push(data.encodingList[i])
    }
    else if(eq_clicked == true && (data.encodingList[i].part_id == null)){
      console.log("IN HERE")
      real_list.push(data.encodingList[i])
    }
  }
  data.encodingList = real_list
  //useSetLocalStorage(runtimeConfig.encodingEmpQueue, [])
  useSetLocalStorage(runtimeConfig.encodingEmpQueue, real_list)
  if(i_clicked == true){
    pressInv()
  }
  if(em_clicked == true){
    pressEmp()
  }
  if(eq_clicked == true){
    pressEq()
  }
}
</script>

<style>
   .green {
       background-color: green;
       width: 100px;
       height: 30px;
   }
   .default{
       background-color: gray;
       width: 100px;
       height: 30px;
   }
</style> 
