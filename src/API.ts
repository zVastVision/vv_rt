/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWarehouseInput = {
  id?: string | null,
  organizationID: string,
  name?: string | null,
  location?: string | null,
  _version?: number | null,
};

export type ModelWarehouseConditionInput = {
  organizationID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelWarehouseConditionInput | null > | null,
  or?: Array< ModelWarehouseConditionInput | null > | null,
  not?: ModelWarehouseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Warehouse = {
  __typename: "Warehouse",
  id: string,
  organizationID: string,
  Organization?: Organization | null,
  name?: string | null,
  location?: string | null,
  Products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  Warehouses?: ModelWarehouseConnection | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelWarehouseConnection = {
  __typename: "ModelWarehouseConnection",
  items:  Array<Warehouse | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  isKit: boolean,
  items?: ModelItemConnection | null,
  kitParts?: ModelKitPartConnection | null,
  description?: string | null,
  trackThreshold: boolean,
  threshold?: number | null,
  Warehouse?: Warehouse | null,
  extraDetails?:  Array<ExtraDetail | null > | null,
  warehouseID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  productID: string,
  isTagged?: boolean | null,
  isActive?: boolean | null,
  location?: string | null,
  product?: Product | null,
  lastActive?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelKitPartConnection = {
  __typename: "ModelKitPartConnection",
  items:  Array<KitPart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type KitPart = {
  __typename: "KitPart",
  id: string,
  quantity?: number | null,
  kitID: string,
  Kit?: Product | null,
  part?: Product | null,
  partID?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ExtraDetail = {
  __typename: "ExtraDetail",
  name?: string | null,
  value?: string | null,
};

export type UpdateWarehouseInput = {
  id: string,
  organizationID?: string | null,
  name?: string | null,
  location?: string | null,
  _version?: number | null,
};

export type DeleteWarehouseInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationInput = {
  id: string,
  _version?: number | null,
};

export type CreateKitPartInput = {
  id?: string | null,
  quantity?: number | null,
  kitID: string,
  partID?: string | null,
  _version?: number | null,
};

export type ModelKitPartConditionInput = {
  quantity?: ModelIntInput | null,
  kitID?: ModelIDInput | null,
  partID?: ModelIDInput | null,
  and?: Array< ModelKitPartConditionInput | null > | null,
  or?: Array< ModelKitPartConditionInput | null > | null,
  not?: ModelKitPartConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateKitPartInput = {
  id: string,
  quantity?: number | null,
  kitID?: string | null,
  partID?: string | null,
  _version?: number | null,
};

export type DeleteKitPartInput = {
  id: string,
  _version?: number | null,
};

export type CreateItemInput = {
  id?: string | null,
  productID: string,
  isTagged?: boolean | null,
  isActive?: boolean | null,
  location?: string | null,
  lastActive?: number | null,
  _version?: number | null,
};

export type ModelItemConditionInput = {
  productID?: ModelIDInput | null,
  isTagged?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  lastActive?: ModelIntInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateItemInput = {
  id: string,
  productID?: string | null,
  isTagged?: boolean | null,
  isActive?: boolean | null,
  location?: string | null,
  lastActive?: number | null,
  _version?: number | null,
};

export type DeleteItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  isKit: boolean,
  description?: string | null,
  trackThreshold: boolean,
  threshold?: number | null,
  extraDetails?: Array< ExtraDetailInput | null > | null,
  warehouseID: string,
  _version?: number | null,
};

export type ExtraDetailInput = {
  name?: string | null,
  value?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  isKit?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  trackThreshold?: ModelBooleanInput | null,
  threshold?: ModelIntInput | null,
  warehouseID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  isKit?: boolean | null,
  description?: string | null,
  trackThreshold?: boolean | null,
  threshold?: number | null,
  extraDetails?: Array< ExtraDetailInput | null > | null,
  warehouseID?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  name: string,
  title?: string | null,
  email: boolean,
  phone?: number | null,
  extraDetails?: Array< ExtraDetailInput | null > | null,
  _version?: number | null,
  employeeItemsId?: string | null,
};

export type ModelEmployeeConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  email?: ModelBooleanInput | null,
  phone?: ModelIntInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
  employeeItemsId?: ModelIDInput | null,
};

export type Employee = {
  __typename: "Employee",
  id: string,
  name: string,
  items?: Item | null,
  title?: string | null,
  email: boolean,
  phone?: number | null,
  extraDetails?:  Array<ExtraDetail | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  employeeItemsId?: string | null,
};

export type UpdateEmployeeInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  email?: boolean | null,
  phone?: number | null,
  extraDetails?: Array< ExtraDetailInput | null > | null,
  _version?: number | null,
  employeeItemsId?: string | null,
};

export type DeleteEmployeeInput = {
  id: string,
  _version?: number | null,
};

export type ModelWarehouseFilterInput = {
  id?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelWarehouseFilterInput | null > | null,
  or?: Array< ModelWarehouseFilterInput | null > | null,
  not?: ModelWarehouseFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelKitPartFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  kitID?: ModelIDInput | null,
  partID?: ModelIDInput | null,
  and?: Array< ModelKitPartFilterInput | null > | null,
  or?: Array< ModelKitPartFilterInput | null > | null,
  not?: ModelKitPartFilterInput | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  isTagged?: ModelBooleanInput | null,
  isActive?: ModelBooleanInput | null,
  location?: ModelStringInput | null,
  lastActive?: ModelIntInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  isKit?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  trackThreshold?: ModelBooleanInput | null,
  threshold?: ModelIntInput | null,
  warehouseID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  email?: ModelBooleanInput | null,
  phone?: ModelIntInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
  employeeItemsId?: ModelIDInput | null,
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items:  Array<Employee | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionWarehouseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  organizationID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWarehouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionWarehouseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
};

export type ModelSubscriptionKitPartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  kitID?: ModelSubscriptionIDInput | null,
  partID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionKitPartFilterInput | null > | null,
  or?: Array< ModelSubscriptionKitPartFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productID?: ModelSubscriptionIDInput | null,
  isTagged?: ModelSubscriptionBooleanInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  location?: ModelSubscriptionStringInput | null,
  lastActive?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  isKit?: ModelSubscriptionBooleanInput | null,
  description?: ModelSubscriptionStringInput | null,
  trackThreshold?: ModelSubscriptionBooleanInput | null,
  threshold?: ModelSubscriptionIntInput | null,
  warehouseID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionBooleanInput | null,
  phone?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
};

export type CreateWarehouseMutationVariables = {
  input: CreateWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type CreateWarehouseMutation = {
  createWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWarehouseMutationVariables = {
  input: UpdateWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type UpdateWarehouseMutation = {
  updateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWarehouseMutationVariables = {
  input: DeleteWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type DeleteWarehouseMutation = {
  deleteWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateKitPartMutationVariables = {
  input: CreateKitPartInput,
  condition?: ModelKitPartConditionInput | null,
};

export type CreateKitPartMutation = {
  createKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateKitPartMutationVariables = {
  input: UpdateKitPartInput,
  condition?: ModelKitPartConditionInput | null,
};

export type UpdateKitPartMutation = {
  updateKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteKitPartMutationVariables = {
  input: DeleteKitPartInput,
  condition?: ModelKitPartConditionInput | null,
};

export type DeleteKitPartMutation = {
  deleteKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};

export type GetWarehouseQueryVariables = {
  id: string,
};

export type GetWarehouseQuery = {
  getWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWarehousesQueryVariables = {
  filter?: ModelWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWarehousesQuery = {
  listWarehouses?:  {
    __typename: "ModelWarehouseConnection",
    items:  Array< {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWarehousesQueryVariables = {
  filter?: ModelWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWarehousesQuery = {
  syncWarehouses?:  {
    __typename: "ModelWarehouseConnection",
    items:  Array< {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type WarehousesByOrganizationIDQueryVariables = {
  organizationID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WarehousesByOrganizationIDQuery = {
  warehousesByOrganizationID?:  {
    __typename: "ModelWarehouseConnection",
    items:  Array< {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationsQuery = {
  syncOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetKitPartQueryVariables = {
  id: string,
};

export type GetKitPartQuery = {
  getKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListKitPartsQueryVariables = {
  filter?: ModelKitPartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKitPartsQuery = {
  listKitParts?:  {
    __typename: "ModelKitPartConnection",
    items:  Array< {
      __typename: "KitPart",
      id: string,
      quantity?: number | null,
      kitID: string,
      partID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncKitPartsQueryVariables = {
  filter?: ModelKitPartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncKitPartsQuery = {
  syncKitParts?:  {
    __typename: "ModelKitPartConnection",
    items:  Array< {
      __typename: "KitPart",
      id: string,
      quantity?: number | null,
      kitID: string,
      partID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type KitPartsByKitIDQueryVariables = {
  kitID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelKitPartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type KitPartsByKitIDQuery = {
  kitPartsByKitID?:  {
    __typename: "ModelKitPartConnection",
    items:  Array< {
      __typename: "KitPart",
      id: string,
      quantity?: number | null,
      kitID: string,
      partID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncItemsQuery = {
  syncItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ItemsByProductIDQueryVariables = {
  productID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByProductIDQuery = {
  itemsByProductID?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsByWarehouseIDQueryVariables = {
  warehouseID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByWarehouseIDQuery = {
  productsByWarehouseID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      name: string,
      title?: string | null,
      email: boolean,
      phone?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      employeeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmployeesQuery = {
  syncEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      name: string,
      title?: string | null,
      email: boolean,
      phone?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      employeeItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
};

export type OnCreateWarehouseSubscription = {
  onCreateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
};

export type OnUpdateWarehouseSubscription = {
  onUpdateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
};

export type OnDeleteWarehouseSubscription = {
  onDeleteWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    organizationID: string,
    Organization?:  {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    name?: string | null,
    location?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    Warehouses?:  {
      __typename: "ModelWarehouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateKitPartSubscriptionVariables = {
  filter?: ModelSubscriptionKitPartFilterInput | null,
};

export type OnCreateKitPartSubscription = {
  onCreateKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateKitPartSubscriptionVariables = {
  filter?: ModelSubscriptionKitPartFilterInput | null,
};

export type OnUpdateKitPartSubscription = {
  onUpdateKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteKitPartSubscriptionVariables = {
  filter?: ModelSubscriptionKitPartFilterInput | null,
};

export type OnDeleteKitPartSubscription = {
  onDeleteKitPart?:  {
    __typename: "KitPart",
    id: string,
    quantity?: number | null,
    kitID: string,
    Kit?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    part?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    partID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    productID: string,
    isTagged?: boolean | null,
    isActive?: boolean | null,
    location?: string | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      isKit: boolean,
      description?: string | null,
      trackThreshold: boolean,
      threshold?: number | null,
      warehouseID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    lastActive?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    isKit: boolean,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    kitParts?:  {
      __typename: "ModelKitPartConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    description?: string | null,
    trackThreshold: boolean,
    threshold?: number | null,
    Warehouse?:  {
      __typename: "Warehouse",
      id: string,
      organizationID: string,
      name?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    warehouseID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    id: string,
    name: string,
    items?:  {
      __typename: "Item",
      id: string,
      productID: string,
      isTagged?: boolean | null,
      isActive?: boolean | null,
      location?: string | null,
      lastActive?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    title?: string | null,
    email: boolean,
    phone?: number | null,
    extraDetails?:  Array< {
      __typename: "ExtraDetail",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeItemsId?: string | null,
  } | null,
};
