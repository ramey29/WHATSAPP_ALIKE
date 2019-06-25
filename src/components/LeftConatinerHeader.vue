<template>
<div class="lCHeader">
    <div class="clearfix">
        <div class="fLft userIConImg"><img src="./../assets/img/id-card.png" /></div>
        <div class="clearfix otherIconDv fRght">
            <div class="fRght otherIcon"><img src="./../assets/img/menu.png" /></div>
            <div class="fRght otherIcon"><img src="./../assets/img/newChat.png" /></div>
            <div class="fRght otherIcon"><img src="./../assets/img/status.png"  /></div>   
        </div>
    </div>
    
</div>
</template>
<script>
 
export default {

     data() {
      return {
          name: 'ram',
      };
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
    }
    .otherIconDv{width:40%;
        .otherIcon{ width:24px;height:24px;border-radius: 50%;padding: 8px;margin-right:4%;
                img{width:24px;height:24px;}
            }
    }
    
}
  
</style>
