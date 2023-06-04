import { DataStore } from "aws-amplify"
import { Warehouse as WarehouseModel } from "~/src/models"
import { Warehouse } from "~/types"

export const useWarehouseStore = defineStore('warehouse', {
    state: () => <{ warehouse: Warehouse| null }>({
        warehouse: null
    }),
    actions: {
        async findById(id: string) {
            const warehouse = (await DataStore.query(WarehouseModel, id)) as Warehouse
            this.warehouse = {name: warehouse.name, location: warehouse.location}
        }
    }
})

