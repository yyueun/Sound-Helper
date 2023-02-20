<template>
    <div>
        <div>
            <!-- 상단 바 -->
            <!-- 음표버튼 -->
        </div>
        <div id="chart-container">
            <!-- 차트 -->
            <div id="chart"></div>
            <!-- 현재가 -->
            <h3 id="current-price">38,300</h3>
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
}

#chart {
    width: 300px;
    height: 227px;
    position: absolute;
    top: 30px;
    left: 10px;
}

#current-price {
    width: 40px;
    height: 20px;
    position: absolute;
}

</style>