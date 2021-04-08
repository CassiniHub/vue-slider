function init() {
    
    new Vue ({

        
        el: '#app',

        data: {
            images: [
                'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
                'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
                'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
                'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
            ],

            indexValue: 0
        },

        methods: {

            nextImg: function () {
                
                if (this.indexValue < (this.images.length - 1)) {
                    
                    this.indexValue++;
                } else {

                    this.indexValue = 0;
                }
            },

            prevImg: function () {
                
                if (this.indexValue > 0) {
                    
                    this.indexValue--;
                } else {

                    this.indexValue = this.images.length;
                }
            },

            autoNext: function () {
                
                setInterval(() => {

                    this.nextImg()
                }, 3000);
            }
        },

        created() {

            this.autoNext();
        }
    });
}

document.addEventListener("DOMContentLoaded", init);