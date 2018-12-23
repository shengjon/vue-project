<template>
    <div class="newsListBox">
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,i) in newList" :key="item.id">
				<router-link :to="'/home/newsInfo/'+ item.id">
					<img class="mui-media-object mui-pull-left" :src="imgUrl[i]?imgUrl[i]:[i]%2?imgUrl[(i-1)/2-4]:imgUrl[i/2]">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dataFormat}}</span>
                            <span>点击：{{item.click}}</span>
                        </p>
					</div>
				</router-link>
			</li>
	    </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            newList: [],
            imgUrl: [
                'http://www.capablist.com/CellFile/148507_1085995911.png',
                'http://www.capablist.com/CellFile/148506_1085995866.png',
                'http://www.capablist.com/CellFile/148386_1085898756.png',
                'http://www.capablist.com/CellFile/148385_1085898746.png',
                'http://www.capablist.com/CellFile/148212_1085800034.png',
                'http://www.capablist.com/CellFile/171963_1086239056.png',
                'http://www.capablist.com/CellFile/171964_1086239062.png',
                'http://www.capablist.com/CellFile/172022_1086319123.png'
            ]
        }
    },
    created(){
        this.getNewsData();    
    },
    methods:{
        getNewsData(){
            this.$http.get('api/getnewslist').then( res => {
                console.log(res.body.status);
                if (res.body.status === 0) {
                    this.newList = res.body.message
                } else {
                    Toast('请求失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .newsListBox {
        .mui-media-body {
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            .mui-ellipsis {
                margin-top: 4px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
