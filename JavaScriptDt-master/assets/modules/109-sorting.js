
const sSortAsc = (arr)=>{
    const sorted = [...arr].sort((a, b)=>a.localeCompare(b));
    return sorted;
}

const sSortDesc = (arr)=>{
    const sorted = [...arr].sort((a, b)=>b.localeCompare(a));
    return sorted;
}

const nSortAsc = (arr)=>{
    const sorted = [...arr].sort((a, b)=>a-b);
    return sorted;
}
const nSortDesc = (arr)=>{
    const sorted = [...arr].sort((a, b)=>b-a);
    return sorted;
}



export {sSortAsc, sSortDesc, nSortAsc, nSortDesc}