const initialState = {
  user: "",
  loading: false,
  auth: false
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADDING":
      console.log(action.payload, "<-------------what is this payload?")
      return {
        ...state,
        user: action.payload
      }
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "GET_USER": 
      console.log(action.payload, "<-------------getting user")
      return {
        ...state,
        user: action.payload
      }
    case "AUTH":
      return {
        ...state,
        auth: action.payload
      }
  }
  return state
}