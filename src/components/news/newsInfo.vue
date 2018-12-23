<template>
    <div class="newsInfoBox">
        <div class="infoHead">
            <div class="title">{{message.title}}</div>
            <div class="subTitle">
                <span>发表时间：{{message.add_time | dataFormat}}</span>
                <span>点击：{{message.click}}</span>
            </div>
        </div>
        <div class="cont" v-html="message.content"></div>
        <comment-box :id="this.newId"></comment-box> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import comment from '../subcomponets/comment.vue'
export default {
    data(){
        return {
            newId:this.$route.params.id,
            message: ''
        }
    },
    created(){
        this.getNewsData();
    },
    methods: {
        getNewsData(){
            this.$http.get('api/getnew/'+ this.newId).then( res => {
                if (res.body.status === 0) {
                    this.message = res.body.message[0];
                } else {
                    Toast('加载失败')
                }
                
            })
        }
    },
    components: {
        'comment-box': comment
    }
}
</script>
<style lang="scss" scoped>
    .newsInfoBox {
        padding: 0 15px;
        .infoHead{
            border-bottom: 1px solid #ccc;
            padding: 6px 0;
            .title {
                font-size: 16px;
                font-weight: bold;
                color: #ff7561;
                text-align: center;
            }
            .subTitle {
                margin-top: 3px;
                display: flex;
                justify-content: space-between;
                font-size: 13px;
                color: #999;
            }
        }
        .cont {
            padding: 16px 0;
        }
    }
</style>
