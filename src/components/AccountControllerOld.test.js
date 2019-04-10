import React from "react";
import AccountInterface from "./AccountInterfaceOld";
import AccountController from "./AccountControllerOld";

const myData = [{
        "name": "Gio",
        "balance": "1000"
    },

    {
        "name": "Joe",
        "balance": "60"
    }
]

test('testing account Controller class & methods: ', () => {
    const obj = new AccountController(myData)
    //console.log ("the obj", obj)
    expect(obj.props.length).toBe(2)
    expect(obj.props[0].name).toBe('Gio')
    expect(obj.props[0].balance).toBe('1000')

    const a = obj.accountStatusBar()
    expect(a).toBe("Higher: 2000 Lower 60 Total  3516")

    expect(obj.props[1].name).toBe('Joe')
    expect(obj.props[1].balance).toBe('60')


})