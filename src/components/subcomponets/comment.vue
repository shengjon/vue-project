<template>
    <div class="commentBox">
        <h4>发表评论</h4> 
        <textarea placeholder="请输入要评论的内容（最多评论120字）" maxlength="120" v-model="msg"></textarea>  
        <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>  
        <ul class="cmt-list">
            <li class="cmt-item" v-for=" (item,index) in cmtList" :key="item.add_time">
                <p class="cmt-title">
                    &nbsp;&nbsp;第{{index+1}}楼&nbsp;&nbsp;用户: {{item.user_name}}&nbsp;&nbsp;时间：{{item.add_time | dataFormat}}
                </p>
                <p class="cmt-body">
                    {{item.content == 'undefined'?'该用户很懒，什么都没写':item.content}}
                </p>
            </li>
        </ul>

        
        <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>    
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            pageIndex: 1,
            cmtList: [],
            msg: ''
        }
    },
    created(){
        this.getCmtData();
    },
    methods: {
      getCmtData(){          
          this.$http.get('api/getcomments/'+ 13 + '?pageindex='+ this.pageIndex).then( res => {              
              if (res.body.status === 0 ) {
                  this.cmtList = this.cmtList.concat(res.body.message)
              } else {
                  Toast('加载失败')
              }
          })
      }, 
      getMore(){
        this.pageIndex++;
        this.getCmtData();
      },
      postCmt(){
          console.log(this.$route.params.id);
          if (this.msg.trim().length ==0) return Toast("评论不能为空");
          this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.msg.trim()}).then( res => {
            if (res.body.status === 0) {
                let cmt = {
                    user_name: '刘邦',
                    add_time: Date.now(),
                    content: this.msg
                }
                this.cmtList.unshift(cmt);
                this.msg = '';
                Toast('发表成功')
            }
          })
      }
    },
    props: ["id"]
}
</script>
<style lang="scss" scoped>
.commentBox {
    textarea {
        height: 100px;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .cmt-list {
        list-style: none;
        padding: 0;
        margin: 15px 0;
        .cmt-item {
            margin-top: 8px;
            .cmt-title {
                background-color: #eee;
                padding: 5px 0;
                margin-bottom: 5px;
            }
            p {
                margin: 0;
            }
        }  
    }
}
</style>
