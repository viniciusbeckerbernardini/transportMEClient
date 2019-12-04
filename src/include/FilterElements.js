const FilterElements = () => {
    let selector = document.querySelector("input.form-control.form-control-lg");
    let list = document.querySelector("div.list-group");
    let search = selector.value;
    list.childNodes.forEach((b,item)=>{
        if(search === ""){
            b.style.display = "block"
        }else{
            if(b.id == search){
                b.style.display = "block"
            }else{
                b.style.display = "none"
            }
        }
    });
}

export default FilterElements;
