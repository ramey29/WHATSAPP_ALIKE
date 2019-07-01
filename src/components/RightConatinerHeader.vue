<template>
<div class="lCHeader">
    <div class="clearfix">
        <div class="fLft userIConImg"><img :src="profileimg" /><span class="userFriendName">{{FriendName}}</span></div>
        <div class="clearfix otherIconDv fRght">
            <div class="fRght otherIcon"><img src="./../assets/img/menu.png" /></div>
            <div class="fRght otherIcon"><img src="./../assets/img/attach.png" /></div>
            <div class="fRght otherIcon"><img src="./../assets/img/search.png"  /></div>   
        </div>
    </div>
    
</div>
</template>
<script>
 import { subscribeEvent } from './../common/Observer';
export default {

    data() {
        return {
            FriendName: 'ram',
            profileimg:'http://www.fillmurray.com/400/200'
        };
    },
    created() {
        subscribeEvent('username',(data)=>{
            this.FriendName = data;
        });
        subscribeEvent('userimage',(data)=>{
            this.profileimg = data;
        });
    },

    methods: {
    
    }
}
</script>
<style lang="scss" scoped>
.lCHeader{
    background-color: #eee;
    padding: 10px 16px;
    .userIConImg{
        width:60%;
        cursor: pointer;
        border-radius: 50%;
        img{border-radius: 50%;height: 40px;background-color: #dfe5e7;width: 40px;}
        .userFriendName{vertical-align: 14px;margin-left:10px;font-size:22px;}
    }
    .otherIconDv{width:40%;
        .otherIcon{ width:24px;height:24px;border-radius: 50%;padding: 8px;margin-right:4%;
                img{width:24px;height:24px;}
            }
    }
    
}
  
</style>
