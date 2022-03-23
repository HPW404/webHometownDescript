//定义发表评论的组件
Vue.component('discuss', {
    template: `
        <div>
            <div class="form-group">
                <label>评论人：</label>
                <input type="text"  class="form-control"  v-model="name"/>
            </div>
            <div class="form-group">
                <label>评论内容：</label>
                <textarea class="form-control" v-model="content"></textarea>
            </div>
            <input type="button" value="发表评论" class="btn btn-primary" @click="postContent"  />
        </div>
    `,
    data: function() {
        return {
            name: '',
            content: '', 
            section: 'food'
        }
    },
    methods: {
        //提交数据的函数
        postContent() {
            //分析
            //1、将数据保存到localStorage中
            //2、组织一个最新的评论数据对象
            //3、把第二步中得到的评论对象保存到localStorage中
            //3.1 localStorage只支持字符串数据，要先调用JSON.stringify
            //3.2在保存最新数据之前，要先从localStorage获取之前存储的数据，将其转换为一个数组，再将最新评论添加到数组中
            //3.3 将评论列表数组，转换为数组字符串，再添加到localStorage中

            var comment = { //评论对象
                id: Date.now(),
                name: this.name,
                content: this.content, 
                section: this.section
            }
            if(comment.name.length === 0 || comment.content.length === 0) {
                return alert('请输入评论人与评论内容! ');
            }
            //获取所有评论，如果为空返回个空数组
            var list = JSON.parse(localStorage.getItem("item") || '[]')
            list.unshift(comment) //添加最新评论，添加到数组最前面
            //保存最新数据
            localStorage.setItem("item", JSON.stringify(list))
            this.name = this.content = ''
            this.$emit('fun')
        }
    }
})

// Vue实例
new Vue({
    el: '#app', 
    data: {
        title: "美食, 在成都! ", 
        desc: "好山好水好地方, 美食美味美蓉城", 
        arr: [1, 2, 3, 4, 5],
        list: []
    }, 
    methods: {
        //从localStorage中加载数据
        loadComment() {
            var list = JSON.parse(localStorage.getItem("item") || '[]')
			// this.list = list
            for(var i = 0; i < list.length; i++) {
                if(list[i].section === 'food')
                    // console.log(list[i]);
                    this.list.push(list[i])
            }
        }
    },
    created() {
        this.loadComment()
    }
})