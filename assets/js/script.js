function init() {
    
    new Vue ({

        
        el: '#app',

        data: {
            log: 'Hello Vue!'
        }
    });
}

document.addEventListener("DOMContentLoaded", init);