let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

let clearance = localStorage.getItem("clearance")
  ? localStorage.getItem("clearance")
  : "";

let position = localStorage.getItem("position")
  ? localStorage.getItem("position")
  : "";

export const initialState = {
  token: token,
  clearance: clearance,
  position: position

};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        token: action.token,
        position: action.position,
        clearance: action.clearance
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};