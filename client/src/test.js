
import { create } from 'ipfs-http-client'

// connect to the default API address http://localhost:5001
const client = create()

// connect to a different API
const client = create({ url: "http://127.0.0.1:5002/api/v0" });

// connect using a URL
const client = create(new URL('http://127.0.0.1:5002'))

// call Core API methods
const { cid } = await client.add('Hello world!')


// // Importing the ipfs-http-client library
// const { create } = require('ipfs-http-client')

// // Defining hostUrl, port and protocol
// const hostUrl = "127.0.0.1";
// const port = 5001;
// const protocol = "http";

// // // Importing the fs file module
// // const fs = require("node:fs/promises")

// // Creating an instance of IPFS client with specified configuration
// function getIpfsClient() {
//     const ipfsClient = create({
//         host: hostUrl,
//         port,
//         protocol
//     });

//     // returning the IPFS client instance
//     return ipfsClient;
// }

// // // Defining an async function to save data to IPFS and return resulting CID
// // async function saveData(data) {
// //     const ipfsClient = getIpfsClient();
// //     const result = await ipfsClient.add(data);
// //     return result.path;
// // }

// // //Defining an async function to retrieve data from IPFS using CID
// // async function getData(hash) {
// //     const ipfs = getIpfsClient();
// //     let accumalatedBuffer = []

// //     // Using ipfs.cat to retrieve data from IPFS
// //     const content = ipfs.cat(hash);

// //     // Iterating over the content and accumulating the data buffers
// //     for await (const itr of content){
// //         accumalatedBuffer.push(Buffer.from(itr));
// //     }
// //     return Buffer.concat(accumalatedBuffer);
// // }

// // // Defining an async function to save file to IPFS an d returning its CID
// // async function saveFile(filePath) {
// //     const fileBuffer = await fs.readFile(filePath);
// //     const cid = await saveData(fileBuffer);
// //     return cid;
// // }

// // const client = getIpfsClient();
// // const DATA = getData("QmRXav45qwbnxrXVeAHKGF6YtUftzRYDLAkXjNqrrLGEY4");
// // console.log(DATA);
