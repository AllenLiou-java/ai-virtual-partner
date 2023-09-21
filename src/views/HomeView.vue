<template>
  <div class="z-3 position-relative bg-header bg-default">
    <div class="xxxl-container">
      <div
        class="d-flex flex-column-reverse flex-lg-row justify-content-lg-between align-items-center align-items-lg-stretch pt-7 pt-lg-14 mb-8 mb-lg-14"
      >
        <p
          class="align-self-end mb-0 pb-2 border-bottom fw-bold d-none d-lg-block flex-lg-shrink-1"
          style="max-width: 416px; width: 100%"
        >
          最新消息！新版本 v15.4 釋出，搶先體驗！
        </p>
        <div class="flex-lg-shrink-0 rotate360-infinite">
          <img src="@/assets/img/week8-ai/circle.png" alt="circle" style="width: 196px" />
        </div>

        <div
          class="d-flex flex-column justify-content-between fw-bold flex-lg-shrink-1"
          style="max-width: 416px; width: 100%"
        >
          <p class="pt-2 border-top ls-4 fw-bold mb-8">ALPHABOX+ STUDIO</p>
          <p class="fw-medium mb-0 d-none d-lg-block" style="color: #ad93cf">
            Copyright © 2023 Hexschool.
          </p>
        </div>
      </div>
      <div class="position-relative" style="margin-top: -104px; top: 104px">
        <div class="position-relative position-xl-absolute top-0 start-50 translate-middle-x">
          <h2
            class="fs-8 fs-lg-6 ls-12 ls-sm-40 ls-xl-110 ls-xxl-140 font-Shrikhand fw-normal text-center"
          >
            ALPHABOX+
          </h2>
          <p class="ls-12 ls-4 ls-xl-12 ls-xxl-40 fw-bold mb-6 text-center">
            擁抱未來科技，專屬您的3D立體投影陪伴機器人
          </p>
        </div>

        <ul class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
          <li class="position-relative col pb-4 pb-md-6 pb-xl-0">
            <div class="hover-banner-card">
              <p class="position-absolute start-50 translate-middle-x mt-4 font-Shrikhand fs-8">
                Diane
              </p>
              <img
                class="d-none d-xl-block w-416p"
                src="@/assets/img/week8-ai/diane.png"
                alt="diane"
                style="width: 416px"
              />
              <img
                class="d-block d-xl-none"
                src="@/assets/img/week8-ai/diane_square1.png"
                alt="diane"
              />
            </div>
          </li>
          <li class="position-relative col pb-4 pb-md-6 pb-xl-0 align-self-end">
            <div class="hover-banner-card">
              <p class="position-absolute start-50 translate-middle-x mt-4 font-Shrikhand fs-8">
                Felix
              </p>
              <img
                class="d-none d-xl-block w-416p"
                src="@/assets/img/week8-ai/felix.png"
                alt="felix"
                style="width: 416px"
              />
              <img
                class="d-block d-xl-none"
                src="@/assets/img/week8-ai/felix_square1.png"
                alt="felix"
              />
            </div>
          </li>
          <li class="position-relative col pb-4 pb-md-6 pb-xl-0 align-self-end">
            <div class="hover-banner-card">
              <p class="position-absolute start-50 translate-middle-x mt-4 font-Shrikhand fs-8">
                Karina
              </p>
              <img
                class="d-none d-xl-block w-416p"
                src="@/assets/img/week8-ai/karina.png"
                alt="karina"
                style="width: 416px"
              />
              <img
                class="d-block d-xl-none"
                src="@/assets/img/week8-ai/karina_square1.png"
                alt="karina"
              />
            </div>
          </li>

          <li class="position-relative col pb-4 pb-md-6 pb-xl-0">
            <div class="hover-banner-card">
              <p class="position-absolute start-50 translate-middle-x mt-4 font-Shrikhand fs-8">
                Vito
              </p>
              <img
                class="d-none d-xl-block w-416p"
                src="@/assets/img/week8-ai/vito.png"
                alt="vito"
                style="width: 416px"
              />
              <img
                class="d-block d-xl-none"
                src="@/assets/img/week8-ai/vito_square1.png"
                alt="vito"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="position-relative bg-introduction pt-34 pt-lg-36 pb-15 pb-lg-13">
    <div class="xxxl-container">
      <div class="bg-gradient-500 h-40p mb-4 mb-lg-2"></div>
      <div>
        <h2>
          <span class="d-inline-block fs-6 fs-lg-12 mb-2 mb-lg-3 ls-60 ls-lg-120">什麼是</span
          ><br />
          <span class="d-inline-block fs-6 fs-lg-12 mb-5 mb-lg-4 ls-60 ls-lg-120">ALPHABOX+</span>
        </h2>
      </div>
    </div>
    <div class="position-relative m-0 mb-4 mb-lg-8 bg-white" style="height: 1px"></div>
    <div class="xxxl-container">
      <SwiperIntro :introductData="introductData" class="mb-8" />
      <div class="bg-gradient-500 h-40p"></div>
    </div>
  </div>
  <div class="bg-gradient-700">
    <div class="container pt-15 pt-md-40 pb-20 pb-md-10">
      <div class="row gx-0">
        <div class="col-12 text-center text-md-start pb-8 pb-md-10 border-bottom overflow-hidden">
          <h2 class="fs-10 ls-100 fs-md-12 ls-md-120 me-n10">最新消息</h2>
        </div>
        <div class="col-12 position-relative hover-to-innerText-rotate">
          <div class="py-8 py-md-10 border-bottom px-4">
            <div class="mb-2">
              <img
                src="@/assets/img/emergency-white.svg"
                alt="emergency"
                class="me-4 text-rotate"
                style="width: 24px; vertical-align: bottom"
              />
              <span class="ls-40 fw-bold" style="vertical-align: bottom">2023.06.30</span>
            </div>
            <div class="mb-3 fs-5 ls-50 fw-bold">產品升級公告</div>
            <div class="row justify-content-between">
              <div class="col-md-9">
                <p class="mb-3 mb-md-0">
                  榮幸地宣布，ALPHABOX+
                  已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
                </p>
              </div>
              <div class="col-md-2">
                <img src="@/assets/img/line_end_arrow_notch.svg" alt="arrow" />
              </div>
            </div>
            <router-link
              :to="{ name: 'news_detail', params: { newsId: 'news-1' } }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="col-md-6 border-bottom position-relative hover-to-innerText-rotate">
          <div class="py-8 py-md-10 px-4">
            <div class="mb-2">
              <img
                src="@/assets/img/emergency-white.svg"
                alt="emergency"
                class="me-4 text-rotate"
                style="width: 24px; vertical-align: bottom"
              />
              <span class="ls-40 fw-bold" style="vertical-align: bottom">2023.06.30</span>
            </div>
            <div class="mb-3 fs-5 ls-50 fw-bold">限時優惠活動</div>
            <div class="row justify-content-between">
              <div class="col-md-12">
                <p class="mb-3">
                  為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+
                  的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！
                </p>
              </div>
              <div class="col-md-12">
                <img
                  class="d-block"
                  src="@/assets/img/line_end_arrow_notch.svg"
                  alt="arrow"
                  style="width: 90px; height: 24px"
                />
              </div>
            </div>
            <router-link
              :to="{ name: 'news_detail', params: { newsId: 'news-2' } }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div
          class="col-md-6 border-bottom border-start-md position-relative hover-to-innerText-rotate"
        >
          <div class="py-8 py-md-10 px-4">
            <div class="mb-2">
              <img
                src="@/assets/img/emergency-white.svg"
                alt="emergency"
                class="me-4 text-rotate"
                style="width: 24px; vertical-align: bottom"
              />
              <span class="ls-40 fw-bold" style="vertical-align: bottom">2023.04.18</span>
            </div>
            <div class="mb-3 fs-5 ls-50 fw-bold">新功能上線</div>
            <div class="row justify-content-between">
              <div class="col-md-12">
                <p class="mb-3">
                  為使您的 ALPHABOX+
                  更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。
                </p>
              </div>
              <div class="col-md-12">
                <img
                  class="d-block"
                  src="@/assets/img/line_end_arrow_notch.svg"
                  alt="arrow"
                  style="width: 90px; height: 24px"
                />
              </div>
            </div>
            <router-link
              :to="{ name: 'news_detail', params: { newsId: 'news-3' } }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
      </div>
      <div class="pt-10 pt-md-19 pb-0 pb-md-20 text-center position-relative">
        <router-link to="/news" class="position-relative d-inline-block hover-text-scale">
          <span class="position-absolute z-3 top-50 start-50 translate-middle">查看更多</span>
          <img
            src="@/assets/img/week8-ai/circle-sm.png"
            class="rotate360-infinite"
            alt="circle-sm"
          />
        </router-link>
      </div>
      <p class="fw-bold mb-0 d-none d-md-block text-end">
        為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料
      </p>
    </div>
  </div>
  <div class="position-relative bg-gradient-700-reverse overflow-hidden">
    <div class="container pt-15 pt-md-40 pb-20 pb-md-10">
      <div class="row mb-4 align-items-center">
        <div class="col-12 col-md-5">
          <h2 class="fs-10 fs-lg-12 ls-100 ls-lg-120" style="margin-right: -48px">使用分享</h2>
        </div>
        <div class="col-md-7 d-none d-md-block">
          <p class="mb-0">展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
        </div>
      </div>
      <p class="d-flex align-items-center mb-6 mb-md-10">
        <span>01</span>
        <img src="@/assets/img/horizontal_rule.svg" alt="horizontal_rule" />
        <span>04</span>
      </p>
      <img
        class="mb-4 mb-md-6 rotate360-infinite"
        style="width: 80px"
        src="@/assets/img/emergency-white.svg"
        alt="emergency-white"
      />
      <div class="mb-md-31">
        <SwiperShare :postList="postList" class="mb-8" />
      </div>
      <p class="d-none d-md-block fw-bold">
        若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。
      </p>
      <div class="position-absolute text-center start-50 translate-middle-x bg-text-position-y">
        <p class="font-Shrikhand fs-32 fs-md-100 mb-0" style="opacity: 0.04">ALPHABOX+</p>
      </div>
    </div>
  </div>
  <div class="bg-primary-800 overflow-hidden">
    <div class="container pt-15 pb-20 py-md-36">
      <div class="row">
        <div class="col-12 col-md-5">
          <h2 class="fs-10 fs-md-12 ls-100 ls-md-120 mb-3 mb-md-5" style="margin-right: -48px">
            聯絡我們
          </h2>
          <div class="d-flex mb-12 mb-md-13" style="height: 12px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              class="me-2"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <div class="bg-white rounded-pill h-100" style="width: 124px"></div>
          </div>
          <p class="mb-1">讓科技成為您的最佳夥伴</p>
          <p class="mb-6">立即體驗神奇功能並享限時優惠！</p>
        </div>
        <div class="col-12 col-md-7">
          <img
            src="@/assets/img/emergency-white.svg"
            class="mb-4 rotate360-infinite"
            style="width: 80px"
            alt="emergency"
          />
          <form @submit="submitHandler" class="d-flex flex-column">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control fs-4 fs-md-5"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label class="text-primary-800 fw-bold fs-4 fs-md-5" for="floatingInput">EMAIL</label>
            </div>
            <div class="form-floating mb-4">
              <textarea
                class="form-control fs-4 fs-md-5"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
              <label class="text-primary-800 fw-bold fs-4 fs-md-5" for="floatingTextarea2"
                >COMMENTS</label
              >
            </div>
            <button class="btn btn-primary-400 btn-size align-self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="me-1"
              >
                <mask
                  id="mask0_464_3402"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_464_3402)">
                  <path
                    d="M12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM11 8V3H13V8H11ZM11 21V16H13V21H11ZM16 13V11H21V13H16ZM3 13V11H8V13H3Z"
                    fill="white"
                  />
                </g>
              </svg>
              <span class="align-middle" style="font-weight: 500">送出</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-2 row-cols-lg-4 g-0">
    <div
      class="col border-bottom border-bottom-lg-0 border-end"
      v-for="personality in personalityList"
      :key="personality.index"
    >
      <PersonalityCard :personality="personality" />
    </div>
  </div>
</template>

<script setup lang="ts">
import imgSrc from '@/assets/img/week8-ai/carousel.png';
// import ImgDianeVertical from '@/assets/img/week8-ai/diane_vertical.png';
// import ImgFelixVertical from '@/assets/img/week8-ai/felix_vertical.png';
// import ImgKarinaVertical from '@/assets/img/week8-ai/karina_vertical.png';
// import ImgVitoVertical from '@/assets/img/week8-ai/vito_vertical.png';

import { ref } from 'vue';
import type { IntroductDataType, PostListType, personalityType } from '@/type/home';

const introductData = ref<IntroductDataType[]>([
  {
    idxNo: '01',
    title: '立體投影技術',
    description: '透過高科技立體投影技術，讓您感受真實的科技世界。',
    imgUrl: imgSrc
  },
  {
    idxNo: '02',
    title: '立體投影技術',
    description: '透過高科技立體投影技術，讓您感受真實的科技世界。',
    imgUrl: imgSrc
  },
  {
    idxNo: '03',
    title: '立體投影技術',
    description: '透過高科技立體投影技術，讓您感受真實的科技世界。',
    imgUrl: imgSrc
  }
]);

const postList = ref<PostListType[]>([
  {
    id: 1,
    name: 'Zona',
    address: 'Taipei',
    comment:
      'ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。',
    product: 'Dianne',
    textColor: 'white',
    textColorClass: 'text-white',
    bgColorClass: 'bg-primary-600'
  },
  {
    id: 2,
    name: 'Lin',
    address: 'Chiayi',
    comment:
      '非常推薦！它的畫面清晰度超高，真的讓我驚艷不已。而且它還可以和我互動，感覺就像是有個真實的朋友在身邊。',
    product: 'Felix',
    textColor: 'black',
    textColorClass: 'text-dark',
    bgColorClass: 'bg-white'
  },
  {
    id: 3,
    name: '云',
    address: 'Taipei',
    comment:
      '我之前一直在找能陪伴我度過空虛時光的好夥伴，直到遇見 ALPHABOX+。它不僅僅是一個機器人，更像是一個真正的朋友，陪著我分享喜怒哀樂。真的很讚！',
    product: 'Dianne',
    textColor: 'white',
    textColorClass: 'text-white',
    bgColorClass: 'bg-primary-600'
  },
  {
    id: 4,
    name: 'Zichi',
    address: 'Kaohsiung',
    comment:
      '讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！',
    product: 'Vito',
    textColor: 'black',
    textColorClass: 'text-dark',
    bgColorClass: 'bg-white'
  }
]);

const submitHandler = (e: Event) => {
  e.preventDefault();
  console.log('submit');
  return false;
};

const personalityList = ref<personalityType[]>([
  {
    index: 1,
    name: 'Diane',
    type: '知識型',
    typeDescription: '學術領導/知識分享/智能問答',
    bgClass: 'bg-DianeVertical'
  },
  {
    index: 2,
    name: 'Felix',
    type: '娛樂型',
    typeDescription: '音樂播放/語音互動/遊戲陪伴',
    bgClass: 'bg-FelixVertical'
  },
  {
    index: 3,
    name: 'Karina',
    type: '生活型',
    typeDescription: '健康提醒/日程安排/智能家居',
    bgClass: 'bg-KarinaVertical'
  },
  {
    index: 4,
    name: 'Vito',
    type: '情感型',
    typeDescription: '情感識別/心情分析/心靈支持',
    bgClass: 'bg-VitoVertical'
  }
]);
</script>

<style lang="scss" scoped>
.bg-text-position-y {
  bottom: -68px;
  @media (min-width: 768px) {
    bottom: -233px;
  }
}

.me-n10 {
  margin-right: -40px;
}

.btn-size {
  max-width: 351px;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 416px;
  }
}
</style>
