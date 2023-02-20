<template>
    <div>
        <div>
            <!-- 상단 바 -->
            <!-- 음표버튼 -->
        </div>
        <br>
        <div id="chart-container">
            <!-- 차트 -->
            <div id="chart"></div>
            <!-- 현재가 -->
            <h2 id="current-price">38,300</h2>
            <!-- 일반모드 전환 -->  
            <button id="normal-mode">일반</button>
        </div>
        <div class="count">
            <!-- 플러스마이너스 버튼, 현재 수 -->
            <button :style="{ 'background-color': 'red' }" @click="decrement">-1</button>
            <input type="text" v-model="count">
            <button :style="{ 'background-color': 'blue' }" @click="increment">+1</button>
        </div>
        <div>
            <!-- 구매 판매 버튼 -->
        </div>
        <div>
            <!-- 음성인식 -->
        </div>
        <div>
            <!-- 예수금, 수익률 버튼 -->
        </div>
        <div>
            <img src="soundhelper-vue\public\bottomBar.png">
        </div>
    </div>
</template>

<script>
export default {
    el: '#count',
    data: {
        count: 0,
        incrementValue: 1,
        decrementValue: -1
    },
    methods: {
        increment: function() {
            this.count += this.incrementValue;
        },
        decrement: function() {
            this.count += this.decrementValue;
        }
    }
}
</script>

<style>
#chart-container {
    position: relative;
    border: 1px solid;
}

#chart {
    width: 300px;
    height: 150px;
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

#count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 50px;
  border: 1px solid red;
  border-radius: 25px;
  padding: 10px;
}

input {
  width: 50px;
  height: 30px;
  text-align: center;
}
</style>


---------------------------------------------------

<template>
    <div>
        <div>
            <!-- 상단 바 -->
            <!-- 음표버튼 -->
        </div>
        <br>
        <div id="chart-container">
            <!-- 차트 -->
            <div id="chart"></div>
            <!-- 현재가 -->
            <h2 id="current-price">38,300</h2>
            <!-- 일반모드 전환 -->  
            <button id="normal-mode">일반</button>
        </div>
        <div>
            <!-- 플러스마이너스 버튼, 현재 수 -->
            
        </div>
        <div>
            <!-- 구매 판매 버튼 -->
        </div>
        <div>
            <!-- 음성인식 -->
        </div>
        <div>
            <!-- 예수금, 수익률 버튼 -->
        </div>
        <div>
            <img src="soundhelper-vue\public\bottomBar.png">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#chart-container {
    position: relative;
    border: 1px solid;
}

#chart {
    width: 300px;
    height: 150px;
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

</style>