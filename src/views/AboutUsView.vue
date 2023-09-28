<template>
  <div class="position-relative bg-gradient-200 pt-15 pt-md-40 pb-20 pb-md-39">
    <div class="container">
      <h2 class="fs-10 fs-md-12 ls-100 ls-md-120 mb-6 mb-md-8">關於我們</h2>
      <div class="row justify-content-between">
        <div class="col-12 col-md-6">
          <p class="mb-8 mb-md-0">
            創立於2021年，我們的使命是將科技與人性化設計相結合，為您打造最佳的3D立體投影陪伴機器人。憑藉創新的技術、卓越的研發團隊以及對品質的追求，我們致力於為全球用戶提供最先進且易用的陪伴機器人。
          </p>
        </div>
        <div class="col-12 col-md-5 text-md-end">
          <p class="mb-6 mb-md-0" style="font-size: 14px; font-weight: 350">
            我們擁抱變革，追求技術創新，以提供更卓越的產品給全球用戶。
          </p>
          <p class="mb-6 mb-md-0" style="font-size: 14px; font-weight: 350">
            我們始終以用戶需求為核心，致力於提供最滿意的產品與服務。
          </p>
          <p class="mb-6 mb-md-0" style="font-size: 14px; font-weight: 350">
            我們堅持高品質標準，確保每一款產品都經過嚴格的測試與品質把控。
          </p>
          <p class="mb-6 mb-md-9" style="font-size: 14px; font-weight: 350">
            我們重視團隊協作，鼓勵創意交流，共同為實現願景而努力。
          </p>
        </div>
      </div>

      <div class="position-absolute start-0 xxxl-container bg-aboutUs"></div>

      <div
        class="row justify-content-center align-items-center pt-4 pt-md-11"
        style="margin-top: 280px"
      >
        <div class="col-12 col-md-1 text-center text-md-start">
          <IconEmergency class="rotate360-infinite" />
        </div>
        <div class="col-12 col-md-7">
          <p class="mb-0">
            我們相信科技的力量能夠改變人類生活。通過不斷創新與優化，我們期待為您打造一款具有高度智能、豐富功能且呈現真實感的3D立體投影陪伴機器人，讓科技成為您生活中真誠的夥伴。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div class="xxxl-container text-dark overflow-hidden">
      <div class="py-6 py-md-10">
        <swiper :slides-per-view="1" :space-between="10" :breakpoints="breakpoints">
          <swiper-slide v-for="(photo, idx) in introPhotos" :key="idx">
            <img :src="getImageUrl(photo)" alt="ads" />
          </swiper-slide>
        </swiper>
      </div>
      <h3
        class="fs-6 fs-md-12 fs-xl-16 fs-xxl-24 ls-60 ls-md-120 ls-xl-240 text-center me-md-ne24 mb-6 mb-md-14 mb-xl-20"
        style="font-weight: 900"
      >
        ALPHABOX+
      </h3>
      <div
        class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mb-6 mb-md-20"
      >
        <p class="me-md-12" style="max-width: 758px">
          我們提供多款3D立體投影陪伴機器人，涵蓋知識型、娛樂型、生活型和情感型等不同類別，以滿足您的各種需求。每款產品都經過精心設計，具備高度智能化、多功能和人性化操作等特點，讓您在日常生活中獲得更便利的陪伴體驗。
        </p>
        <p class="mb-0" style="max-width: 580px">
          此外，我們還提供完善的售後服務，包括 產品保固、技術支援 及
          線上客服協助，確保您在購買與使用過程中得到全面支持。
        </p>
      </div>
      <div class="bg-dark mb-3" style="height: 1px"></div>
      <div class="bg-dark" style="height: 12px"></div>
    </div>
    <div class="container text-dark py-15 py-md-40">
      <div class="row">
        <div class="col-12 col-md-7">
          <img src="@/assets/img/week8-ai/meeting.png" alt="meeting" />
        </div>
        <div class="col-12 col-md-5 align-self-center">
          <p>
            展望未來，我們將繼續投入研發，引領3D立體投影陪伴機器人技術的發展。通過結合虛擬現實、擴增現實和人工智能等領域的最新技術，我們將努力為用戶帶來更多前所未有的創新體驗。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark py-12 py-md-6">
    <div class="container">
      <div class="row justify-content-md-center align-items-md-center flex-wrap">
        <div class="col-12 col-md-7 col-lg-8">
          <p class="mb-6 mb-md-0">
            我們熱忱歡迎有志之士加入我們的團隊，共同創造更美好的未來。如果您對科技充滿熱情，並擁有相關領域的專業知識，請隨時查看我們的招聘信息或與我們聯繫，讓我們攜手共進。
          </p>
        </div>
        <div class="col-12 col-md-3 col-lg-2">
          <a href="#" class="btn btn-white py-2 d-block"
            ><IconLineCross class="me-1" /><span class="align-middle">查看職缺</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';

const introPhotos = ref(['hand.png', 'screen.png', 'box.png']);

const getImageUrl = (name: string) => {
  return new URL(`../assets/img/week8-ai/${name}`, import.meta.url).href;
};

const breakpoints = ref({
  992: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 10
  }
});
</script>

<style lang="scss" scoped>
:deep(.emergency) {
  width: 80px;
  height: 80px;
  g path {
    fill: white;
  }
}

.me-md-ne24 {
  @media (min-width: 768px) {
    margin-right: -96px;
  }
}
</style>
