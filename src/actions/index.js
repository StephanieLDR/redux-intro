import types from "./types";

    export function tick(now){
    return {
        type: "update_time",
        currentTime: now
    }
}