export function timeElapsed(ms: number) : string{
    if (ms < 60000){
        return "Just Now"
    }else if(ms < 3600000){
        return `${(ms / 60000).toFixed(0)} minutes ago`
    }else if (ms < (86400000)){
        return `${(ms / 3600000).toFixed(0)} hours ago`
    }
    else if (ms < (604800000)){
        return `${(ms / 86400000).toFixed(0)} days ago`
    }
    else if (ms < (2419200000)){
        return `${(ms / 604800000).toFixed(0)} weeks ago`
    }
    else if (ms < (29030400000)){
        return `${(ms / 2419200000).toFixed(0)} months ago`
    }
    else {
        return `${(ms / 29030400000).toFixed(0)} years ago`
    }
}