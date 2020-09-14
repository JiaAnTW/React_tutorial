// 文字
let menuItemWording=[
    "Like的發問",
    "Like的回答",
    "Like的文章",
    "Like的留言"
];

let menuInstance = new Menu(menuItemWording);

const controlBtn = document.createElement('button');
controlBtn.onclick = function(){
    menuInstance.setIsOpen();
};
controlBtn.textContent = "開啟選單";

document.getElementById('root').appendChild(controlBtn);
document.getElementById('root').appendChild(menuInstance.getMenu());
