<template>
  <div class="wrapper bg-primary-100 text-primary-800 pt-15 pt-md-16 pb-20 pb-md-30">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="fs-10 fs-md-12 ls-100 ls-md-120 fw-bold mb-10 mb-md-16">FAQ</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="border-top-white-dotted line-extension"></div>
          <ul class="pt-6 pt-md-10">
            <li class="mb-4" v-for="link in topicLinks" :key="link.topic">
              <router-link
                class="text-primary-800 fw-medium d-block d-md-inline-block"
                :to="link.linkTo"
                >{{ link.title }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-8">
          <div class="border-top-white-dotted"></div>
          <Accordion :dataList="filterList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FaqItemType } from '@/type/home';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const topicLinks = reactive([
  {
    topic: 'aboutUse',
    title: 'ALPHABOX+ 使用問題',
    linkTo: '/faq/aboutUse'
  },
  {
    topic: 'aboutOrderAndTransport',
    title: '訂購與運送',
    linkTo: '/faq/aboutOrderAndTransport'
  },
  {
    topic: 'aboutMaintenance',
    title: '產品保養與維修',
    linkTo: '/faq/aboutMaintenance'
  }
]);

const aboutUseList = reactive<FaqItemType[]>([
  {
    question: 'ALPHABOX+ 的使用方式是什麼？',
    answer:
      '首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。'
  },
  {
    question: 'ALPHABOX+ 需要什麼樣的環境來使用？',
    answer:
      '需要電力供應、網絡連接、適當的軟件和開發工具，以及相應的感知技術，以實現其社交互動和自定義功能。請注意，Pepper機器人通常被用於商業和研究用途，而且價格較高，所以在使用之前需要仔細考慮其應用場景和需求。'
  },
  {
    question: 'ALPHABOX+ 支援哪些語言？',
    answer: '共支援20種語言，語言支援可以通過軟件更新進行擴展，因此支援的語言可能隨著時間而變化。'
  },
  {
    question: 'ALPHABOX+ 的軟體更新方式為何？',
    answer:
      '軟體更新通常由Softbank Robotics提供，以改進功能、修復錯誤、新增特性和改進性能。軟體更新的方式如下：自動更新、手動更新。'
  },
  {
    question: '購買 ALPHABOX+ 後的售後服務如何？',
    answer:
      '售後服務通常由Softbank Robotics或其授權經銷商提供。這些售後服務旨在確保Pepper機器人在使用過程中能夠維持正常運作並提供支援，包括以下方面：技術支援、維修和保養、軟體更新、培訓和支援、保修。'
  },
  {
    question: 'ALPHABOX+ 與其他智能家居設備的相容性如何？',
    answer:
      '與其他智能家居設備的相容性取決於多個因素，包括Pepper機器人的配置、軟件和連接能力，以及其他智能家居設備的通信協議和兼容性。以下是一些可能影響Pepper機器人與其他智能家居設備相容性的因素：通信協議、API和SDK、中介平台、兼容性標準、軟體支援。總之，ALPHABOX+與其他智能家居設備的相容性取決於多個因素，並且可能需要特定的配置、集成和設定。'
  }
]);

const filterList = computed(() => {
  const param = route.params.topic;
  if (param === 'aboutUse') {
    return aboutUseList;
  }
  return [];
});
</script>

<style lang="scss" scoped>
.border-top-white-dotted {
  border-top-style: dotted;
  border-top-color: #fff;
}

.line-extension {
  @media (min-width: 768px) {
    width: calc(100% + 24px);
  }
}

.wrapper {
  min-height: calc(100vh - 176px);
}

.router-link-active {
  border-bottom: 1px solid #000;
}
</style>
