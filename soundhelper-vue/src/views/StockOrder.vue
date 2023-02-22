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
            <!-- [{{ $route.params.name }}].name -->
            <span id="name" style="width: 150px;">{{ stocks[$route.params.name-1].name}}</span>
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
                <h2 class="current-price" v-if="stocks[$route.params.name-1].fluctuationRate < 0" style="color: blue">{{stocks[$route.params.name-1].price}}</h2>
                <h2 class="current-price" v-if="stocks[$route.params.name-1].fluctuationRate > 0" style="color: red">{{stocks[$route.params.name-1].price}}</h2>
                <!-- 일반모드 전환 -->
                <router-link to="/">
                    <button id="normal-mode" @click='goToMenu'>차트</button>
                </router-link> 
            </div>
            <div style="height: 40px;"></div>
            <div id="count">
                <!-- 플러스마이너스 버튼, 현재 수 -->
                <button id="minusone" :style="{ 'background-color': '#FB5A6B' }" @click="down">-</button>
                <input id="input-count" type="text" v-model="count" placeholder="0">
                <button id="plusone" :style="{ 'background-color': '#6F4BFD' }" @click="up">+</button>
            </div>
            <div class="trade">
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
            <div style="height: 155px"></div>
            <div class="btns">
                <!-- 예수금, 수익률 버튼 -->
                <button id="deposit">예수금</button>
                <button id="erate">수익률</button>
            </div>
            <div style="height: 135px"></div>
        </div>
        <div style="position: fixed">
            <img src="..\assets\bottom_bar.png" id="bottom-bar">
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

let currentTime = new Date().toTimeString().split(' ')[0];
const categories = [currentTime];

export default {
  props: ['stocks'],
  name: 'Query',
  components: {
    highcharts: Chart
  },
  data() {
    return {
        aaa: '아아',
        // stocks: [
        //   { id: 1, name: '삼성전자', price: 62000, fluctuationRate: -1.58, marketCap: 520000000000, volume: 1000000 },
        //   { id: 2, name: 'LG에너지솔루션', price: 516000, fluctuationRate: -3.19, marketCap: 80000000000, volume: 500000 },
        //   { id: 3, name: 'SK하이닉스', price: 92500, fluctuationRate: 0.54, marketCap: 60000000000, volume: 200000 },
        //   { id: 4, name: '삼성바이오로직스', price: 805000, fluctuationRate: 0.75, marketCap: 450000000000, volume: 300000 },
        //   { id: 5, name: '삼성SDI', price: 692000, fluctuationRate: -1.56, marketCap: 450000000000, volume: 300000 },
        //   { id: 6, name: 'LG화학', price: 667000, fluctuationRate: -3.19, marketCap: 450000000000, volume: 300000 },
        //   { id: 7, name: '삼성전자우', price: 55900, fluctuationRate: 0.18, marketCap: 450000000000, volume: 300000 },
        // ],
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
            xAxis: {
                title: {
                    text: 'Date/time',
                    align: 'high'
                },
                categories : categories,
                labels:{
                    style:{ fontSize: '5px' }
                },
            },
            yAxis: {
                title: {
                    text: 'price',
                    align: 'high',
                },
                labels: {
                    style:{
                        fontSize: '10px'
                    }
                }
            },
            series: [{
                data: [1, 4, 7, 2, 3]
            }]
            // series: [{
            //     showInLegend: false, // 범례에서 숨김
            //     data: data.map(function(item) {
            //         return item[1];
            //     }),
            //     point: {
            //         events: {
            //             click: function () {
            //                 // Sonify the point when clicked
            //                 this.sonify({
            //                     instruments: [{
            //                         instrument: 'triangleMajor',
            //                         instrumentMapping: {
            //                             volume: function (point) {
            //                                 return point.color === 'red' ? 0.2 : 0.8;
            //                             },
            //                             duration: 200,
            //                             pan: 'x',
            //                             frequency: 'y'
            //                         },
            //                         // Start at C5 note, end at C6
            //                         instrumentOptions: {
            //                             minFrequency: 520,
            //                             maxFrequency: 1050
            //                         }
            //                     }]
            //                 });
            //             }
            //         }
            //     }
            // }]
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
  },
  computed: {
    stocks() {
        return this.$store.state.stocks;
    }
  },
  created() {

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

.current-price {
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
    padding-left: 5px
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

.trade {
    display: flex;
    justify-content: center;
    border: none;
}

.btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
}

#deposit {
    border: none;
    margin-bottom: 10px;
    border-radius: 15px;
    width: 181px;
    height: 80px;
    font-size: 20px;
}

#erate {
    border: none;
    margin-top: 10px;
    border-radius: 15px;
    width: 181px;
    height: 80px;
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
    color: white;
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
    color: white;
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