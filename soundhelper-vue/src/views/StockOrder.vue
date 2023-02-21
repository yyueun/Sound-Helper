<template>
    <div class="page">
        <div>
            <img src="../assets/top_bar.png" style="height:32px; width: 320px">
        </div>
        <div id="top-bar">
            <!-- 상단 바, 음표버튼 -->
            <router-link to="/stocks">
                <button @click='goBack' style="width:32px; height: 33px; float:left; border: none;">&lt</button>
            </router-link>
            <router-view/>
            <span id="name" style="width: 150px;">신한지주</span>
            <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
            <i class="fa-solid fa-music" id="music-icon"></i>
        </div>
        <div style="overflow: scroll; height: 460px">
            <div id="chart-container" stlye="width: 200px">
                <!-- 차트 -->
                <div id="chart" >
                    <div style="height: 30px"></div>
                    <highcharts :options="chartOptions" stlye="width: 200px"/>
                </div>
                <!-- 현재가 -->
                <h2 id="current-price">38,300</h2>
                <!-- 일반모드 전환 -->
                <router-link to="/">
                    <button id="normal-mode" @click='goToMenu'>차트</button>
                </router-link> 
            </div>
            <div style="height: 40px;"></div>
            <div id="count">
                <!-- 플러스마이너스 버튼, 현재 수 -->
                <button id="minusone" :style="{ 'background-color': '#FB5A6B' }" @click="down">-1</button>
                <input id="input-count" type="text" v-model="count" placeholder="0">
                <button id="plusone" :style="{ 'background-color': '#6F4BFD' }" @click="up">+1</button>
            </div>
            <div class="btn-set">
                <!-- 구매 판매 버튼 -->
                <button id="buy_button" @click="showBuyPopup" :style="{ 'background-color': '#FB5A6B'}">구매</button>
                <button id="sell_button" @click="showSellPopup" :style="{ 'background-color': '#6F4BFD'}">판매</button>
            </div>
            <div class="popup-overlay" v-if="isPopupOpen">
                <div class="popup">
                    <div>
                        <button @click="onConfirm" class="popup-button" :style="{ 'background-color': '#FB5A6B'}">예</button>
                        <button @click="onCancel" class="popup-button" :style="{ 'background-color': '#6F4BFD'}">아니오</button>
                    </div>
                </div>
            </div>
            <div style="height: 225px"></div>
            <div>
                <!-- 음성인식 -->
                <button id="voice">음성인식</button>
            </div>
            <div class="btn-set">
                <!-- 예수금, 수익률 버튼 -->
                <button id="deposit">예수금</button>
                <button id="erate">수익률</button>
            </div>
            <div style="height: 215px"></div>
        </div>
        <div style="position: fixed">
            <img src="..\assets\bottom_bar.png" id="bottom-bar">
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'


export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      isPopupOpen: false,
      chartOptions: {
        chart: {
            height: 200 + 'px'
        },
        title : {
            text : "시각장애인을 위한 주식 차트 (실시간)",  
            style : '10px'    
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        series: [{
            data: [1, 2, 3]
        }]
      }
    }
  },
  methods: {
    goBack() {
        history.back();
    },
    up(){
      let count = Number(document.getElementById("input-count").value)
      let plusone = document.getElementById("plusone");
      let up = document.querySelector("#plusone")
      count = count + 1
      document.getElementById("input-count").value = count 
      plusone.setAttribute("aria-labelledby", "input-count")
      up.classList.remove("aria-labelledby");
    },
    down(){
      let count = Number(document.getElementById("input-count").value)
      let minusone = document.getElementById("minusone");
      let down = document.querySelector("#minusone")
      if(count > 0){
        count = count - 1
        document.getElementById("input-count").value = count
        minusone.setAttribute("aria-labelledby", "input-count")
        down.classList.remove("aria-labelledby");
      }
    },
    showBuyPopup() {
      this.isPopupOpen = true;
    },
    showSellPopup() {
        this.isPopupOpen = true;
    },
    onConfirm() {
      // 구매 확인 로직
      this.isPopupOpen = false;
    },
    onCancel() {
      this.isPopupOpen = false;
    },
  }
}
</script>

<style>
.page {
  width: 320px;
  height: 568px;
}

#chart-container {
    position: relative;
    border: 0.1px solid red;
}

#chart {
    width: 300px;
    height: 230px;
    top: 30px;
    left: 10px;
}

#current-price {
    width: 40px;
    height: 20px;
    position: absolute;
    top: 7px;
    left: 7px;
    font-weight: bold;
    color: blue;
}

/* #voice {
    justify-content: space-between;
  width: 130px;
  height: 45px;
  border: 1px solid;
  border-radius: 25px;
  padding: 10px;
  margin: 5px 10px 5px 10px;
  background-color: rgb(241, 241, 241);
} */

#normal-mode {
    width: 48px;
    height: 48px;
    top: 7px;
    right: 7px;
    position: absolute;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    border-radius: 12px;
}

#name {
    line-height: 33px;
    float: left;
    margin-left: 10px;
    border: 1px solid;
}

#search-icon {
    width: 25px;
    height: 33px;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
}

#music-icon {
    margin-left: 60px;
}

#count {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 5px;
}

.btn-set {
    display: flex;
    justify-content: center;
    border: none;
}

#deposit {
    border: none;
    margin-right: 5px;
    border-radius: 15px;
    width: 120px;
    height: 40px;
    font-size: 20px;
}

#erate {
    border: none;
    margin-left: 5px;
    border-radius: 15px;
    width: 120px;
    height: 40px;
    font-size: 20px;
}

/* #button {
  justify-content: space-between;
  width: 130px;
  height: 45px;
  border: 1px solid;
  border-radius: 25px;
  padding: 10px;
  margin: 5px 10px 5px 10px;
  background-color: rgb(241, 241, 241);
} */

#voice {
    border: none;
    border-radius: 15px;
    width: 120px;
    height: 40px;
    margin: 10px 100px 10px 100px;
    font-size: 20px;
}

#bottom-bar {
    height: 33px;
    width: 320px
}

#bar img {
    position: absolute;
    width: 320px;
}

#buy_button {
    border: none;
    width: 120px;
    height: 40px;
    margin-right: 5px;
    border-radius: 15px;
    font-size: 20px;
    color: white;
}

#sell_button {
    border: none;
    width: 120px;
    height: 40px;
    margin-left: 5px;
    border-radius: 15px;
    font-size: 20px;
    color: white;
}

#minusone {
    border-radius: 15px 0 0 15px;
    width: 60px;
    height: 50px;
    border: none;
    font-size: 20px;
}

.product {
  width: 320px;
  height: 568px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid black;
}

#plusone {
    border-radius: 0 15px 15px 0;
    width: 60px;
    height: 50px;
    border: none;
    font-size: 20px;
}

#input-count {
    width: 80px;
    height: 50px;
    border: 0.5px solid lightgray;
    font-size: 20px;
    text-align: center ;
    color: black;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 568px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  width: 300px;
  height: 450px;
  top: 40px;
  left: 10px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}

.popup-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 181px;
  height: 97px;
  margin: 20px 0px 20px 0px;
  border-radius: 25px;
  justify-content: center;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 1000;
  font-size: 25px;
}
</style>