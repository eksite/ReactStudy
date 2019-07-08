import ReactDOM from 'react-dom'
import  React from 'react'
import UserForm from '../app/component/UserForm/UserForm.react'
const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra", 
        "iPhone 7", 
        "Google Pixel", 
        "Huawei P9", 
        "Meizu Pro 6", 
        "Asus Zenfone 3"
    ]
};
 
ReactDOM.render(
    <UserForm/>,
    document.getElementById("app")
)