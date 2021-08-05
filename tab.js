class Tab {
    constructor(el, options = {}) {
        this.el = document.querySelector(el)
        this.init()
    }
}



// function Tab(el, options = {}) {
//     this.el = document.querySelector(el)
//     this.init()
// }
Tab.prototype.init = function() {
    this.titleOver()
    this.tabContent(0)
}
Tab.prototype.titleOver = function() {
    console.log(this);
    let titlelis = this.el.querySelectorAll('ul li')
    titlelis.forEach((element, index) => {
        element.onmouseover = () => {
            titlelis.forEach(item2 => {
                item2.className = ''
            })
            titlelis[index].className = 'active'
            this.tabContent(index)
        }
    });



    // for (i = 0; i < titlelis.length; i++) {
    //     titlelis[i].onmouseover = function() {
    //         for (i = 0; i < titlelis.length; i++) {
    //             titlelis[i].className = ''
    //         }
    //         this.className = 'active'
    //     }
    // }
}
Tab.prototype.tabContent = function(index) {
    let tabContentlis = this.el.querySelectorAll('ol li')
    tabContentlis.forEach(element => {
        element.className = ''
    })
    tabContentlis[index].className = 'active'
}