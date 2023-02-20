<template>
    <div id="page">
        <div>
            <img src="../assets/top-bar.png" style="height:32px; width: 320px">
        </div>
      <div style="width: 320px; height: 33px; background-color: lightgray;">
        <!-- 상단 바 (뒤로가기, 실시간종목순위, 하트, 더보기) -->
        <button style="width:32px; height: 33px; float:left; border: none;">&lt</button>
        <span style="line-height: 33px; float: left; margin-left: 10px">실시간 종목순위</span>
        <span style="height=33px; width:33px;float:right; font-size: 10px; vertical-align: middle; margin-top:3px">.&nbsp;.&nbsp;.<br>더보기</span>
        <img src="../assets/heart.png" style="height=33px; width: 25px; align-items: center; margin-top: 4px; float:right">
      </div>
      <br>
      <div id="search-container">
        <!-- 검색창 -->
        <input id="search" type="text" placeholder="&nbsp&nbsp검색" v-model="searchTerm" @input="search" style="border-radius: 15px" aria-label="검색">
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
      <div style="height: 270px; overflow: scroll;">
        <!-- 주식 종목 목록 -->
        <div v-for="stock in stocks" :key="stock.id">
            <table>
                <tbody>
                    <tr>
                        <td style="width:150px; text-align:left; padding: 10px">{{ stock.name }}</td>
                        <td style="width: 100px; text-align: right;">{{ stock.price }}</td>
                        <td  v-if="stock.fluctuationRate < 0" style="width: 70px; text-align: right; padding: 10px; color: blue">{{ (-1) * Number(stock.fluctuationRate) }}%</td>
                        <td  v-if="stock.fluctuationRate > 0" style="width: 70px; text-align: right; padding: 10px; color: red">{{ stock.fluctuationRate }}%</td>
                    </tr>
                </tbody>
            </table>
          <!-- <h3>{{ stock.name }} {{ stock.price }} {{ stock.fluctuationRate }}%</h3> -->
          <hr>
        </div>
      </div>
      <div>
        <img src="../assets/bottom_bar.png" id="bottom_bar">
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
          { id: 2, name: 'LG에너지솔루션', price: 516000, fluctuationRate: -3.19, marketCap: 80000000000, volume: 500000 },
          { id: 3, name: 'SK하이닉스', price: 92500, fluctuationRate: 0.54, marketCap: 60000000000, volume: 200000 },
          { id: 4, name: '삼성바이오로직스', price: 805000, fluctuationRate: 0.75, marketCap: 450000000000, volume: 300000 },
          { id: 5, name: '삼성SDI', price: 692000, fluctuationRate: -1.56, marketCap: 450000000000, volume: 300000 },
          { id: 6, name: 'LG화학', price: 667000, fluctuationRate: -3.19, marketCap: 450000000000, volume: 300000 },
          { id: 7, name: '삼성전자우', price: 55900, fluctuationRate: 0.18, marketCap: 450000000000, volume: 300000 },
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
   
  }
  
  #search {
    width: 280px;
    height: 80px;
    margin: 0 auto;
  }
  #bottom_bar {
    width: 320px;
  }
  
  </style>