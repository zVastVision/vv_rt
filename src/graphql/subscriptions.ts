/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
  ) {
    onCreateWarehouse(filter: $filter) {
      id
      organizationID
      Organization {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      location
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
  ) {
    onUpdateWarehouse(filter: $filter) {
      id
      organizationID
      Organization {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      location
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
  ) {
    onDeleteWarehouse(filter: $filter) {
      id
      organizationID
      Organization {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      location
      Products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
      id
      Warehouses {
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
      id
      Warehouses {
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
      id
      Warehouses {
        nextToken
        startedAt
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateKitPart = /* GraphQL */ `
  subscription OnCreateKitPart($filter: ModelSubscriptionKitPartFilterInput) {
    onCreateKitPart(filter: $filter) {
      id
      quantity
      kitID
      Kit {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      part {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      partID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateKitPart = /* GraphQL */ `
  subscription OnUpdateKitPart($filter: ModelSubscriptionKitPartFilterInput) {
    onUpdateKitPart(filter: $filter) {
      id
      quantity
      kitID
      Kit {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      part {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      partID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteKitPart = /* GraphQL */ `
  subscription OnDeleteKitPart($filter: ModelSubscriptionKitPartFilterInput) {
    onDeleteKitPart(filter: $filter) {
      id
      quantity
      kitID
      Kit {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      part {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      partID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
      id
      productID
      isTagged
      isActive
      location
      product {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
      id
      productID
      isTagged
      isActive
      location
      product {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
      id
      productID
      isTagged
      isActive
      location
      product {
        id
        name
        isKit
        description
        trackThreshold
        threshold
        warehouseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lastActive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      isKit
      items {
        nextToken
        startedAt
      }
      kitParts {
        nextToken
        startedAt
      }
      description
      trackThreshold
      threshold
      Warehouse {
        id
        organizationID
        name
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      extraDetails {
        name
        value
      }
      warehouseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      isKit
      items {
        nextToken
        startedAt
      }
      kitParts {
        nextToken
        startedAt
      }
      description
      trackThreshold
      threshold
      Warehouse {
        id
        organizationID
        name
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      extraDetails {
        name
        value
      }
      warehouseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      isKit
      items {
        nextToken
        startedAt
      }
      kitParts {
        nextToken
        startedAt
      }
      description
      trackThreshold
      threshold
      Warehouse {
        id
        organizationID
        name
        location
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      extraDetails {
        name
        value
      }
      warehouseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
      id
      name
      items {
        id
        productID
        isTagged
        isActive
        location
        lastActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      title
      email
      phone
      extraDetails {
        name
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeItemsId
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
      id
      name
      items {
        id
        productID
        isTagged
        isActive
        location
        lastActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      title
      email
      phone
      extraDetails {
        name
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeItemsId
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
      id
      name
      items {
        id
        productID
        isTagged
        isActive
        location
        lastActive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      title
      email
      phone
      extraDetails {
        name
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeItemsId
    }
  }
`;
