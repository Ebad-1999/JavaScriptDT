export const showAlert =(msg) => {
    alert(msg);

}

export const showConfirm =(msg) => {
    return confirm (msg);
}

//we can expor as below as wel.

export{showAlert, showConfirm};

