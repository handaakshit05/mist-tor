import axios  from 'axios';

// action to sign up a user
export async function signInUser(dispatch, signInPayload) {
  try {
    let resp = {}
    console.log(signInPayload)
    await axios({
        method: 'POST',
        url: '/api/auth',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*", 
        },
        data: JSON.stringify(signInPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response;
            localStorage.setItem('clearance', resp.data.clearance);
            localStorage.setItem('position', resp.data.position);
            localStorage.setItem('token', resp.data.token);
            dispatch({ 
              type: "LOGIN_SUCCESS", 
              token: resp.data.token, 
              clearnace: resp.data.clearance, 
              position: resp.data.position 
            });
        }
      })
      .catch((error) => {
        let errObj = {...error};
        resp = errObj.response;
      });
      return resp;
  } catch (error) {
    
  }
}

// action to get profile data
export async function getProfile() {
  try {
    let resp = {}
    await axios({
        method: 'GET',
        url: '/api/getcommondata/profile',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'x-auth-token': localStorage.getItem('token') 
        },
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response;
        }
      })
      .catch((error) => {
        let errObj = {...error};
        resp = errObj.response;
      });
      return resp;
  } catch (error) {
    
  }
}

// action to create proposal
export async function createProposal(proposalPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/commonprocess/proposals',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'x-auth-token': localStorage.getItem('token'),
        },
        data: JSON.stringify(proposalPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response;
        }
      })
      .catch((error) => {
        let errObj = {...error};
        resp = errObj.response;
      });
      return resp;
  } catch (error) {
    
  }
}

// action to make a complain
export async function makeComplain(complainPayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/commonprocess/bitch',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'x-auth-token': localStorage.getItem('token'),
        },
        data: JSON.stringify(complainPayload),
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response;
        }
      })
      .catch((error) => {
        let errObj = {...error};
        resp = errObj.response;
      });
      return resp;
  } catch (error) {
    
  }
}

// action to make a complain
export async function createAnnounce(announcePayload) {
  try {
    let resp = {}
    await axios({
        method: 'POST',
        url: '/api/commonprocess/bitch',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'x-auth-token': localStorage.getItem('token'),
        },
        data: JSON.stringify(announcePayload),
      })
      .then((response) => {
        if (response.status === 200) {
            resp = response;
        }
      })
      .catch((error) => {
        let errObj = {...error};
        resp = errObj.response;
      });
      return resp;
  } catch (error) {
    
  }
}