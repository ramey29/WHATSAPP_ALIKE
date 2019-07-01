<template>
<div class="leftConatiner">
    <LeftConatinerHeader></LeftConatinerHeader>
    <div class="inputBoxDv">
        <input type="text" class="searchTextBox" placeholder="Search or start a new chat" v-model="searchPeople" v-on:keyup="search(searchPeople)" v-on:keyup.enter="search(searchPeople)"/>
        <span class="searchIcon"><img src="./../assets/img/search.png" /></span>
    </div>
    <div class="mainContactDv">
    <div class="clearfix contactDv" v-for="(friend, index) in friends" :key="index" :id="friend.contactid">
        <div class="fLft contactIMageDv"><img src="./../assets/img/id-card.png" class="chatImage" /></div>
        <div class="chatDetailDv fLft">
            <span class="contactName">{{friend.name}}</span><br>
            <span class="contactChatDesc">{{friend.lastchat}}</span>
        </div>
         <div class="chatTime fRght">{{friend.date}}</div>
    </div>
    </div>
</div>
</template>
<script>
import LeftConatinerHeader from './LeftConatinerHeader';
import * as Constant from '../common/Constants';
import { publishEvent } from '../common/Observer';
import appService from './../service/appConversionService';
import {timestampToDate, debounce} from './../common/Utils';
 
export default {

     data() {
      return {
          name: 'ram',
          lastConverstaionText:'NA',
          time:"07/03/1991",
          friends:[],
          searchPeople:''
      };
  },
   components: {
        LeftConatinerHeader,
    },
    created(){
        this.fetchTransactions();
    },

    methods: {
    fetchTransactions:function() {
            appService.getFriend().then(response => {
                publishEvent(Constant.SHOW_LOADER);
                
                for(let x = 0;x<response.data.length; x++){
                    response.data[x].date = timestampToDate(response.data[x].date);
                }
                this.friends = response.data;
                this.totalCount = response.length;
                localStorage.setItem('friends', JSON.stringify(this.friends));
                publishEvent(Constant.HIDE_LOADER);
            }).catch(error => {

            })
            
        },
        search:debounce(function(text) {
            let searchResults = []
            let searchPeople = text.toLowerCase();
            this.friends = JSON.parse(localStorage.getItem('friends'));
            if(text != ''){
                searchResults = this.friends.filter(a => a.name.toLowerCase().search(text) > -1)
                this.totalCount = searchResults.length;
                this.friends = [...searchResults];
            } else {
                this.Emptysearch();
                return;
            }
      },100),

      Emptysearch:function() {
           if (this.searchPeople != '' ) {} else {
            this.friends = JSON.parse(localStorage.getItem('friends'));
            this.totalCount = this.friends.length;
            }
        },
    }
}
</script>
<style lang="scss" scoped>
  .leftConatiner{height:100vh;}
  .inputBoxDv{width:100%;text-align:center;padding:10px 0;border-bottom: 1px solid rgba(0,0,0,.08);background:#f8f8f8;position:relative;
    .searchTextBox{ width:80%;margin:0 auto;height:40px;border-radius:14px;border:none;font-size:16px;background:#fff;padding:0 40px 0 20px;}
    .searchIcon{position:absolute;width:24px;height:24px;right:60px;top:18px;cursor: pointer;}
  }
  .mainContactDv{position: relative;
        top: 0; bottom: 0; left: 0; right: 0;
        overflow-y: scroll;height:calc(100vh - 134px);}
  .contactDv{background-color: #fff;cursor: pointer;padding: 10px 16px;border-bottom: 1px solid rgba(0,0,0,.04);
  &:hover{background-color: #e9ebeb;}
  &.active{background-color: #e9ebeb;}
      .contactIMageDv{height:49px;width:49px;border-radius:50%;background-color: #dfe5e7;margin-right:16px;vertical-align:top;
        img{border-radius:50%;}
      }
      .chatDetailDv{vertical-align:top;
          .contactName{font-size:18px;}
          .contactChatDesc{font-size:14px;color:rgba(0,0,0,.6);white-space: nowrap;width:250px;overflow: hidden;text-overflow: ellipsis;display:inline-block;}
      }
      .chatTime{font-size:12px;color:rgba(0,0,0,.4)}
  }

</style>
