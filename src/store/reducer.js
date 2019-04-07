const defaultState = {
  list: [1,2,3],
  inputValue: "123"
}

export default (state = defaultState, action) =>{
  console.log(state,action)
  if(action.type=== 'input_change'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type=== 'input_add'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if(action.type=== 'delete_list_item'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
