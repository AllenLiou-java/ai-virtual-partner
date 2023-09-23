<template>
  <div class="bg-dark">
    <ul
      class="hover-navbar d-flex justify-content-center align-items-center column-gap-2 column-gap-md-4 py-5 py-md-4"
    >
      <li
        class="border rounded-pill w82-w234 text-center overflow-hidden"
        v-for="param in routerLinkParams"
        :key="param"
      >
        <router-link
          class="font-Shrikhand fs-md-6 text-decoration-none px-4 py-1 w-100"
          :to="{ name: 'product', params: { productName: param } }"
        >
          {{ param }}
        </router-link>
      </li>
    </ul>
    <div class="position-relative d-flex flex-column flex-lg-row">
      <div class="w-lg-50 m-0">
        <SwiperProduct :imageList="productImg" />
      </div>
      <div
        class="d-flex flex-column justify-content-start justify-content-md-center ps-3 ps-md-10 w-lg-50"
      >
        <h2 class="font-Shrikhand fs-10 fs-md-16 fw-normal mb-md-6">{{ productContent.name }}</h2>
        <p class="mb-0 fw-bold">{{ productContent.type }}</p>
        <p class="mb-2 mb-md-4">{{ productContent.typeGroup }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="306"
          height="14"
          viewBox="0 0 306 14"
          fill="none"
          class="w90-w306 mb-4"
          style="min-height: 24px"
        >
          <path
            d="M283.55 13.8938L290.486 8.24316H0.0500488V6.3596H290.486L283.55 0.708916L305.825 7.30138L283.55 13.8938Z"
            fill="white"
          />
        </svg>
        <div
          class="position-relative position-lg-absolute z-3 mb-6 mb-xxl-15 w109-w196 start-50 bottom-0 translate-middle-x"
        >
          <IconLogoCircle />
          <IconArrowDown class="position-absolute start-50 top-50 translate-middle" />
        </div>
      </div>
    </div>
    <div class="bg-white text-dark">
      <div class="container pt-15 pb-14 pt-md-20 pb-md-4">
        <div class="d-flex justify-content-between align-items-center">
          <h3 class="fs-5 fw-medium">
            <IconEmergency class="me-3" /><span class="align-middle"
              >學術領導/知識分享/智能問答</span
            >
          </h3>
          <p class="fs-5 fw-medium mb-0 align-middle">ALPHABOX+</p>
        </div>
        <div class="row">
          <p class="col-12 col-md-4 fw-medium mb-8 mb-md-30">
            歡迎來到ALPHABOX+的全新世界！在這裡，我們很榮幸地向您介紹我們的最新力作 -
            3D立體投影機器人
            {{ productContent.name }}！
          </p>
        </div>

        <ul class="row row-cols-1 row-cols-md-3">
          <li
            class="col mb-6 mb-md-26"
            v-for="(description, idx) in productContent.description"
            :key="idx"
          >
            <h3
              class="fs-4 fw-bold mb-4 mb-md-6 border-dark border-bottom border-bottom-md-0"
              v-if="idx === 0"
            >
              先進的3D投影技術
            </h3>
            <h3
              class="fs-4 fw-bold mb-4 mb-md-6 border-dark border-bottom border-bottom-md-0"
              v-if="idx === 1"
            >
              人性化的互動設計
            </h3>
            <h3
              class="fs-4 fw-bold mb-4 mb-md-6 border-dark border-bottom border-bottom-md-0"
              v-if="idx === 2"
            >
              豐富的應用場景
            </h3>
            <h3
              class="fs-4 fw-bold mb-4 mb-md-6 border-dark border-bottom border-bottom-md-0"
              v-if="idx === 3"
            >
              高度自主性
            </h3>
            <h3
              class="fs-4 fw-bold mb-4 mb-md-6 border-dark border-bottom border-bottom-md-0"
              v-if="idx === 4"
            >
              簡單易用的操作界面
            </h3>
            <p class="mb-0">{{ description }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div style="background: radial-gradient(105.81% 105.81% at 50% 50%, #28085c 0%, #000 100%)">
      <div class="container pt-15 pt-md-40 pb-20 pb-md-54">
        <h2 class="fs-10 fs-md-12 fw-bold ls-100 ls-md-120 mb-4 mb-md-3">使用分享</h2>
        <div class="row">
          <div class="col-12 col-md-4"></div>
          <p class="mb-6 mb-md-20">展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col" v-for="post in productContent.postList" :key="post.id">
            <div
              class="p-10 card-size mb-6 mb-md-0"
              :class="[post.bgColorClass, post.textColorClass]"
            >
              <div class="position-relative h-100">
                <p class="mb-8 mb-md-10 fw-bold">
                  <span>{{ post.name }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    class="d-inline-block mx-2"
                  >
                    <circle cx="4" cy="4" r="4" fill="white" :style="{ fill: post.textColor }" />
                  </svg>
                  <span>{{ post.address }}</span>
                </p>
                <p class="fw-bold">{{ post.comment }}</p>
                <p class="position-absolute bottom-0 mb-0 fw-bold d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    class="me-4"
                  >
                    <circle cx="8" cy="8" r="8" fill="white" :style="{ fill: post.textColor }" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    class="me-4"
                  >
                    <circle cx="8" cy="8" r="8" fill="white" :style="{ fill: post.textColor }" />
                  </svg>
                  <span>ALPHABOX+ {{ post.product }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { productContentType } from '@/type/home';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routerLinkParams = ref(['Diane', 'Felix', 'Karina', 'Vito']);

watch(
  () => route.params.productName,
  function (name) {
    filterProductList(name);
    filterProductImgList(name as string);
  }
);

onMounted(() => {
  const productName = route.params.productName;
  filterProductList(productName);
  filterProductImgList(productName as string);
});

// 產品介紹資料
const productList = ref<productContentType[]>([
  {
    name: 'Diane',
    type: '知識型',
    typeGroup: '學術領導/知識分享/智能問答',
    description: [
      'Diane 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！',
      'Diane 具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與 Diane 進行自然、流暢的對話。',
      '無論是家庭娛樂、教育培訓還是商業展示，Diane 都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。',
      'Diane 具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。',
      'Diane 擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。'
    ],
    postList: [
      {
        id: 1,
        name: 'Zichi',
        address: 'Kaohsiung',
        comment:
          '自從家裡有了Diane，孩子們的學習興趣提高了不少，他們都喜歡透過Diane的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      },
      {
        id: 2,
        name: 'Lee',
        address: 'Chiayi',
        comment:
          '自從公司引入 Diane，員工的工作效率提升了很多。Diane 不僅能快速回應我們的需求，還可以協助我們做各種商業展示，真的是企業的好幫手！',
        textColor: 'black',
        textColorClass: 'text-dark',
        bgColorClass: 'bg-white'
      },
      {
        id: 3,
        name: '瑞',
        address: 'Taipei',
        comment:
          'Diane 讓教學變得更生動有趣，學生們在課堂上的參與度和學習效果都有顯著提升。我非常推薦Diane給所有的教育工作者！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      }
    ]
  },
  {
    name: 'Felix',
    type: '娛樂型',
    typeGroup: '音樂播放/語音互動/遊戲陪伴',
    description: [
      'Felix 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！',
      'Felix 具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與 Felix 進行自然、流暢的對話。',
      '無論是家庭娛樂、教育培訓還是商業展示，Felix 都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。',
      'Felix 具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。',
      'Felix 擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。'
    ],
    postList: [
      {
        id: 1,
        name: 'Zichi',
        address: 'Kaohsiung',
        comment:
          '自從家裡有了Felix，孩子們的學習興趣提高了不少，他們都喜歡透過Felix的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      },
      {
        id: 2,
        name: 'Lee',
        address: 'Chiayi',
        comment:
          '自從公司引入 Felix，員工的工作效率提升了很多。Felix 不僅能快速回應我們的需求，還可以協助我們做各種商業展示，真的是企業的好幫手！',
        textColor: 'black',
        textColorClass: 'text-dark',
        bgColorClass: 'bg-white'
      },
      {
        id: 3,
        name: '瑞',
        address: 'Taipei',
        comment:
          'Felix 讓教學變得更生動有趣，學生們在課堂上的參與度和學習效果都有顯著提升。我非常推薦Felix給所有的教育工作者！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      }
    ]
  },
  {
    name: 'Karina',
    type: '生活型',
    typeGroup: '健康提醒/日程安排/智能家居',
    description: [
      'Karina 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！',
      'Karina 具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與 Karina 進行自然、流暢的對話。',
      '無論是家庭娛樂、教育培訓還是商業展示，Karina 都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。',
      'Karina 具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。',
      'Karina 擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。'
    ],
    postList: [
      {
        id: 1,
        name: 'Zichi',
        address: 'Kaohsiung',
        comment:
          '自從家裡有了Karina，孩子們的學習興趣提高了不少，他們都喜歡透過Karina的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      },
      {
        id: 2,
        name: 'Lee',
        address: 'Chiayi',
        comment:
          '自從公司引入 Karina，員工的工作效率提升了很多。Karina 不僅能快速回應我們的需求，還可以協助我們做各種商業展示，真的是企業的好幫手！',
        textColor: 'black',
        textColorClass: 'text-dark',
        bgColorClass: 'bg-white'
      },
      {
        id: 3,
        name: '瑞',
        address: 'Taipei',
        comment:
          'Karina 讓教學變得更生動有趣，學生們在課堂上的參與度和學習效果都有顯著提升。我非常推薦Karina給所有的教育工作者！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      }
    ]
  },
  {
    name: 'Vito',
    type: '情感型',
    typeGroup: '情感識別/心情分析/心靈支持',
    description: [
      'Vito 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！',
      'Vito 具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與 Vito 進行自然、流暢的對話。',
      '無論是家庭娛樂、教育培訓還是商業展示，Vito 都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。',
      'Vito 具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。',
      'Vito 擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。'
    ],
    postList: [
      {
        id: 1,
        name: 'Zichi',
        address: 'Kaohsiung',
        comment:
          '自從家裡有了Vito，孩子們的學習興趣提高了不少，他們都喜歡透過Vito的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      },
      {
        id: 2,
        name: 'Lee',
        address: 'Chiayi',
        comment:
          '自從公司引入 Vito，員工的工作效率提升了很多。Vito 不僅能快速回應我們的需求，還可以協助我們做各種商業展示，真的是企業的好幫手！',
        textColor: 'black',
        textColorClass: 'text-dark',
        bgColorClass: 'bg-white'
      },
      {
        id: 3,
        name: '瑞',
        address: 'Taipei',
        comment:
          'Vito 讓教學變得更生動有趣，學生們在課堂上的參與度和學習效果都有顯著提升。我非常推薦Vito給所有的教育工作者！',
        textColor: 'white',
        textColorClass: 'text-white',
        bgColorClass: 'bg-primary-600'
      }
    ]
  }
]);
const productContent = ref<productContentType>({
  name: '',
  type: '',
  typeGroup: '',
  description: [],
  postList: []
});
const filterProductList = (productName: string | string[]) => {
  const filterContent: productContentType = productList.value.filter(item => {
    return item.name === productName;
  })[0];
  productContent.value = filterContent;
};

// 產品(人物)圖片
const productImg = ref([]);
const productImgList = ref([
  {
    Diane: ['diane_square1.png', 'diane_square2.png']
  },
  {
    Felix: ['felix_square1.png', 'felix_square2.png']
  },
  {
    Karina: ['karina_square1.png', 'karina_square2.png']
  },
  {
    Vito: ['vito_square1.png', 'vito_square2.png']
  }
]);
const filterProductImgList = (productName: string) => {
  const filterProductImg: any = productImgList.value.filter(item => {
    if (Object.keys(item)[0] === productName) {
      return item;
    }
  })[0];
  productImg.value = filterProductImg[productName];
};

// const getImageUrl = (name: string) => {
//   console.log(import.meta.url);
//   return new URL(`../assets/img/week8-ai/${name}`, import.meta.url).href;
// };
</script>

<style lang="scss" scoped>
.w82-w234 {
  width: 82px;
  @media (min-width: 768px) {
    width: 234px;
  }
}
.w90-w306 {
  width: 90px;
  @media (min-width: 768px) {
    width: 306px;
  }
}
.w109-w196 {
  width: 109px;
  @media (min-width: 992px) {
    width: 110px;
    height: 110px;
  }
  @media (min-width: 1200px) {
    width: 160px;
    height: 160px;
  }
  @media (min-width: 1400px) {
    width: 196px;
    height: 196px;
  }
}
.router-link-active {
  background-color: #fff;
  color: #000;
}

.card-size {
  height: 351px;
  @media (min-width: 768px) {
    height: 416px;
  }
}
</style>
