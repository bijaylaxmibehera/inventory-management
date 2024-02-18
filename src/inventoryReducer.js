export const initialState = {
  items: [],
  sales: [],
  itemToBeUpdated: {},
  sort: false
}

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_ITEMS':
      return {
        ...state,
        items: action.payload
      }
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'UPDATE_ITEM_TO_BE':
      return { ...state, itemToBeUpdated: action.payload }
    case 'UPDATE_ITEM':
      const updatedItem = action.payload
      const updatedIndex = state.items.findIndex(
        item => item._id === updatedItem._id
      )
      if (updatedIndex !== -1) {
        const updatedItems = [...state.items]
        updatedItems[updatedIndex] = updatedItem
        return {
          ...state,
          items: updatedItems
        }
      }
      return state;
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== action.payload)
      }
    case 'SORT_ITEMS':
      return {
        ...state,
        sort: true
      }
    case 'FETCH_ALL_SALES':
      return {
        ...state,
        sales: action.payload
      }
    case 'ADD_SALE':
      return { ...state, sales: [...state.sales, action.payload] }
    default:
      return state
  }
}
