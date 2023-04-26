const FetchData = async ({ requestType, method, url, data, headers, token }) => {
    // if (token) {
    //     var token2 = await CheckTokenValidity(token);
    //     console.log(token, "\n", token2);
    // }
 
    // if (token2) {
    //  -------- below promise code here --------
    // } else {
    //     return { status: false, data: { detail: "Token Expired" } };
    // }
 
    return new Promise((resolve) => {
       switch (requestType) {
          case "withData":
             axios({ method, url: serverEndPoint + url, headers, data })
                .then((res) => resolve({ status: true, data: res.data }))
                .catch((err) => {
                   // console.log(err);
                   if (err?.response?.data) {
                      resolve({ status: false, data: err.response.data });
                   } else {
                      resolve({ status: false, data: { detail: "Unknown error" } });
                   }
                });
             break;
 
          case "noData":
             axios({ method, url: serverEndPoint + url, headers })
                .then((res) => resolve({ status: true, data: res.data }))
                .catch((err) => {
                   // console.log(err);
                   if (err?.response?.data) {
                      resolve({ status: false, data: err.response.data });
                   } else {
                      resolve({ status: false, data: { detail: "Unknown error" } });
                   }
                });
             break;
 
          default:
             // console.log("Fetch Data -- No fetch case made");
             break;
       }
    });
 };
 
 export default FetchData;