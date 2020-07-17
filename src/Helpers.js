import React, { Component } from "react"
const choice = (arr) => {

    let randomArray = Math.floor(Math.random() * arr.length)
    return arr[randomArray]
}
export { choice }