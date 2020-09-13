function Menu(menuItemWording){
    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('class',"menu-container");

    //藍色標題
    let title = document.createElement('p')
    title.setAttribute('class',"menu-title")
    title.textContent="Andy Chang的Like";
    menuContainer.appendChild(title);

    //列表的container
    let menu = document.createElement('ul');
    menu.setAttribute('class',"menu")

    menuItemWording.forEach((item)=>{
        let menuItem = document.createElement('li');
        menuItem.setAttribute('class',"menu-item");
        menuItem.textContent = item;
        menu.appendChild(menuItem);
    });

    //控制「列表的container」開關的按鈕
    let menuBtn = document.createElement('button');
    let isOpen = false;
    menuBtn.setAttribute('class',"menu-btn");
    menuBtn.textContent="V";
    menuBtn.onclick = function() {
        // 「!」會把true變false，false變true
        isOpen = !isOpen;

        if(isOpen){
            menu.style.display = "block";
            menuBtn.textContent="^";
        }
        else{
            menu.style.display = "none";
            menuBtn.textContent="V";
        }  
    }

    menuContainer.appendChild(menuBtn);
    menuContainer.appendChild(menu);

    return menuContainer;
}