<template>
  <div id="page">
    <div>
      <!-- 상단 바 (뒤로가기, 실시간종목순위, 하트, 더보기) -->
    </div>
    <br>
    <div id="search-container">
      <!-- 검색창 -->
      <input id="search" type="text" placeholder="검색" v-model="searchTerm" @input="search">
    </div>
    <br>
    <div>
      <!-- 정렬 버튼  -->
      <!-- 내비게이션 바로 다시 수정하기 -->
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="sortByMarketCap">시가총액순</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" @click="sortByVolume">거래량순</a>
        </li>
      </ul>
      <!-- <button @click="sortByMarketCap">시가총액순</button>
      <button @click="sortByVolume">거래량순</button> -->
    </div>
    <br>
    <div>
      <!-- 주식 종목 목록 -->
      <div v-for="stock in stocks" :key="stock.id">
        <h3>{{ stock.name }} {{ stock.price }} {{ stock.fluctuationRate }}%</h3>
        <hr>
      </div>
    </div>
    <div>
      <img src="soundhelper-vue\public\bottomBar.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      stocks: [
        { id: 1, name: '삼성전자', price: 62000, fluctuationRate: -1.58, marketCap: 520000000000, volume: 1000000 },
        { id: 2, name: 'SK하이닉스', price: 91700, fluctuationRate: 0.38, marketCap: 80000000000, volume: 500000 },
        { id: 3, name: 'LG화학', price: 800000, fluctuationRate: -1.82, marketCap: 60000000000, volume: 200000 },
        { id: 4, name: 'NAVER', price: 450000, fluctuationRate: 7.26, marketCap: 450000000000, volume: 300000 },
      ],
      sortOption: 'marketCap',
      sortAscending: false,
    };
  },
  computed: {
    sortedStocks() {
      // 선택된 정렬 옵션을 기반으로 정렬된 주식 종목 목록 반환
      let sorted = this.stocks.sort((a, b) => {
        if (this.sortAscending) {
          return a[this.sortOption] - b[this.sortOption];
        } else {
          return b[this.sortOption] - a[this.sortOption];
        }
      });
      return sorted.filter(stock => stock.name.includes(this.searchTerm));
    },
  },
  methods: {
    search() {
      // 검색어를 변경할 때마다 필터링된 주식 종목 목록 업데이트
      this.sortedStocks;
    },
    sortByMarketCap() {
      // 시가총액순으로 정렬
      this.sortOption = 'marketCap';
      this.sortAscending = !this.sortAscending;
    },
    sortByVolume() {
      // 거래량순으로 정렬
      this.sortOption = 'volume';
      this.sortAscending = !this.sortAscending;
    },
  },
};
</script>

<style>
#page {
  width: 320px;
  height: 568px;
}

#search-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

#search {
  width: 280px;
  height: 80px;
  margin: 0 auto;
}

</style>