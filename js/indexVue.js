window.onload = function() {
    new Vue({
        el: "#app",
        data: {
            // 轮播代码
            slideList: [
                {
                    clickUrl: "travel.html", 
                    desc: "旅游, 在成都", 
                    image: "./img/travel.jpg"
                }, 
                {
                    clickUrl: "food.html", 
                    desc: "美食, 在成都", 
                    image: "./img/food.jpg"
                }, 
                {
                    clickUrl: "shopping.html", 
                    desc: "购物, 在成都", 
                    image: "./img/shopping.jpg"
                }
            ], 
            currentIndex: 0, 
            timer: '', 
    
            // 详细信息展示切换
            detailHead: ["旅游", "美食", "购物"], 
            detailList: [
                {
                    headList: [
                        {
                            detailName: "宽窄巷子", 
                            imgUrl: "./img/kuanzhai.jpg", 
                            addr: "中国四川省成都市青羊区金河路口宽窄巷子",
                            imgTitle: "宽窄巷子"
                        }, 
                        {
                            detailName: "武侯祠", 
                            imgUrl: "./img/wuhou.jpg", 
                            addr: "四川省成都市武侯区武侯祠大街231号", 
                            imgTitle: "武侯祠"
                        }, 
                        {
                            detailName: "杜甫草堂", 
                            imgUrl: "./img/caotang.jpg",
                            addr: "四川省成都市青羊区青华路37号", 
                            imgTitle: "杜甫草堂"
                        }
                    ]
                }, 
                {
                    headList: [
                        {
                            detailName: "小龙坎火锅", 
                            imgUrl: "./img/xiaolongkan.jpg", 
                            addr: "总店: 锦江区红星路银石广场写字楼15A-11",
                            imgTitle: "小龙坎火锅"
                        },
                        {
                            detailName: "小郡肝串串", 
                            imgUrl: "./img/xiaojungan.jpg", 
                            addr: "总店: 双林北支路335号新华公园对面",
                            imgTitle: "小郡肝串串"
                        }, 
                        {
                            detailName: "老妈兔头", 
                            imgUrl: "./img/tutou.jpg", 
                            addr: "总店: 清泰路85号(近老车站)",
                            imgTitle: "老妈兔头"
                        }
                    ]
                }, 
                {
                    headList: [
                        {
                            detailName: "太古里", 
                            imgUrl: "./img/taiguli.jpg", 
                            addr: "成都市锦江区中纱帽街8号",
                            imgTitle: "太古里"
                        },
                        {
                            detailName: "国金中心IFS", 
                            imgUrl: "./img/ifs.jpg", 
                            addr: "四川省成都市锦江区红星路大慈寺路交汇处",
                            imgTitle: "国金中心IFS"
                        },
                        {
                            detailName: "时代奥特莱斯", 
                            imgUrl: "./img/aotelaisi.jpg", 
                            addr: "成都市双流区双楠大道633号",
                            imgTitle: "时代奥特莱斯"
                        }
                    ]
                }
            ], 
            detailCurrIndex: 0, 
    
            // 返回顶部定时器
            toTopTimer: ''
        },
        mounted: function() {
            this.go();
        },
        methods: {
            // 轮播代码
            go: function() {
                this.timer = setInterval(() => {
                    this.autoPlay();
                }, 3000);
            },
            stop: function() {
                clearInterval(this.timer);
                this.timer = null;
            },
            change: function(index) {
                this.currentIndex = index;
            },
            detailChange: function(index) {
                this.detailCurrIndex = index;
            }, 
            autoPlay: function() {
                this.currentIndex++;
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0;
                }
            }
        }
    })
}