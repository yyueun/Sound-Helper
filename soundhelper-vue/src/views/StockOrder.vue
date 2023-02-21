<template>
    <div id="page">
        <div>
            <img src="../assets/top_bar.png" style="height:32px; width: 320px">
        </div>
        
        <div>
            <!-- 상단 바, 음표버튼 -->
            <router-link to="/stocks">
                <button @click='goBack' style="width:32px; height: 33px; float:left; border: none;">&lt</button>
            </router-link>
            <router-view/>
            <span id="name" style="width: 150px;">신한지주</span>
            <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
            <i class="fa-solid fa-music" id="music-icon"></i>
        </div>
        <div id="chart-container">
            <!-- 차트 -->
            <div id="chart"></div>
            <!-- 현재가 -->
            <h2 id="current-price">38,300</h2>
            <!-- 일반모드 전환 -->
            <router-link to="/">
                <button id="normal-mode" @click='goToMenu'>차트</button>
            </router-link> 
        </div>
        <div id="count">
            <!-- 플러스마이너스 버튼, 현재 수 -->
            <button :style="{ 'background-color': '#FFF448' }" @click="decrement">-1</button>
            <input type="text" v-model="count">
            <button :style="{ 'background-color': '#41FFFF' }" @click="increment">+1</button>
        </div>
        <div id="btn-set">
            <!-- 구매 판매 버튼 -->
            <button id="button" @click="showBuyPopup" :style="{ 'background-color': '#FFF448'}">구매</button>
            <button id="button" @click="showSellPopup" :style="{ 'background-color': '#41FFFF'}">판매</button>
        </div>
        <div class="popup-overlay" v-if="isPopupOpen">
            <div class="popup">
                <div>
                    <button @click="onConfirm" class="popup-button" :style="{ 'background-color': '#FFF448'}">예</button>
                    <button @click="onCancel" class="popup-button" :style="{ 'background-color': '#41FFFF'}">아니오</button>
                </div>
            </div>
        </div>

        <div id="voice">
            <!-- 음성인식 -->
            <button id="button">음성인식</button>
        </div>
        <div id="btn-set">
            <!-- 예수금, 수익률 버튼 -->
            <button id="button">예수금</button>
            <button id="button">수익률</button>
        </div>
        <div id="bar">
            <img src="..\assets\bottom_bar.png">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false
    }
  },
  methods: {
    goBack() {
        history.back();
    },
    // goToMenu() {
    //   this.$router.push('/')
    // },
    // goToStockList() {
    //   this.$router.push('/stocks')
    // },
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
    }
  }
}
</script>

<style>
#page {
  width: 320px;
  height: 568px;
  border: 1px solid;       /* 지우기 */
}

#chart-container {
    position: relative;
    border: 1px solid;
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

#btn-set {
    display: flex;
    justify-content: center;
}

#voice {
  display: flex;
  justify-content: center;
  align-items: center;

}

#button {
  justify-content: space-between;
  width: 130px;
  height: 45px;
  border: 1px solid;
  border-radius: 25px;
  padding: 10px;
  margin: 5px 10px 5px 10px;
  background-color: rgb(241, 241, 241);
}

#bar {
  position: relative;
  top: 2px;
}

#bar img {
    position: absolute;
    width: 320px;
}

.product {
  width: 320px;
  height: 568px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid black;
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