// @ts-ignore
import React from "react";
import IncompleteNotice from "./incomplete";
const NOTICE_TYPES = {
    // Adding support for multiple aliases
    // @ts-ignore
    [["progress", "incomplete", "wip", "construction"]]: IncompleteNotice,
    _ : () => { throw new Error("AvdanOS Docs Notice: Unknown <Notice> type!"); }
};

export default function notice({type, ...rest}) {
    console.group("NOTICE DEBUG:")

    let [key] = Object.keys(NOTICE_TYPES)
        .map(k => k.split(","))
        .filter(aliases => {
            console.log({aliases, type})
            return aliases.indexOf(type) > -1
        });
    
    
    return NOTICE_TYPES[key?.join(",") ?? "_"]({...rest});
}