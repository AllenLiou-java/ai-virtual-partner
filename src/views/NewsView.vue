<template>
  <div class="bg-gradient-700">
    <div class="container pt-15 pt-md-40 pb-20 pb-md-30">
      <h2 class="text-center mb-15 fs-10 fs-md-12 ls-100 ls-md-120">最新消息</h2>
      <ul class="d-flex flex-column justify-content-center align-items-center">
        <li class="mb-6 mb-md-15" v-for="newsItem in newsList" :key="newsItem.idxNo">
          <NewsCard :newsItem="newsItem" />
        </li>
      </ul>
      <div class="pagnation mt-4 mt-md-5">
        <nav aria-label="Search news result ">
          <ul class="pagination justify-content-center">
            <li
              class="page-item active font-extraCondensed fw-medium fs-6 ls-150 hover-underLine"
              aria-current="page"
            >
              <span class="page-link px-4">1</span>
            </li>
            <li
              class="page-item hover-underLine font-extraCondensed fw-medium fs-6 ls-150 hover-underLine"
            >
              <a class="page-link px-4" href="#">2</a>
            </li>
            <li
              class="page-item hover-underLine font-extraCondensed fw-medium fs-6 ls-150 hover-underLine"
            >
              <a class="page-link px-4" href="#">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsItemType } from '@/type/home';
import { reactive } from 'vue';

const newsList: NewsItemType[] = reactive([
  {
    idxNo: '1',
    duration: '2023.06.30',
    title: '產品升級公告',
    overview:
      '榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！',
    imageName: 'news.png',
    imageNameMobile: 'news_mobile.png'
  },
  {
    idxNo: '2',
    duration: '2023.06.01',
    title: '限時優惠活動',
    overview:
      '為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。',
    imageName: 'thanks.png',
    imageNameMobile: 'thanks_mobile.png'
  },
  {
    idxNo: '3',
    duration: '2023.06.30',
    title: '參加科技展覽',
    overview:
      '本公司將參與今年的台灣國際科技展覽，屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！',
    imageName: 'exhibition.png',
    imageNameMobile: 'exhibition_mobile.png'
  },
  {
    idxNo: '4',
    duration: '2023.06.30',
    title: '新功能上線',
    overview:
      '為使您的3D立體陪伴機器人更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。近期，我們新推出智慧家居控制功能。',
    imageName: 'update.png',
    imageNameMobile: 'update_mobile.png'
  },
  {
    idxNo: '5',
    duration: '2023.06.30',
    title: '用戶見面會',
    overview:
      '為進一步滿足客戶需求，並優化產品性能，我們將舉行用戶見面會。屆時，我們將向您展示我們的研發成果，同時聆聽您的意見和建議，讓我們共同打造更完美的產品！同時聆聽您的意見和建議！',
    imageName: 'interview.png',
    imageNameMobile: 'interview_mobile.png'
  }
]);
</script>

<style lang="scss" scoped></style>
