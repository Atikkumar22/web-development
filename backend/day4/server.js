/*use of server.js file
-server ko start krna 
*/
const app = require("./src/app") //jo server app me create krke export kiya h usko yaha pe require kr rahe h use krne ke liye

app.listen(3000, () => {
    console.log("server is running on port 3000")
})