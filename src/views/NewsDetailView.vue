<template>
  <div class="bg-gradient-700">
    <div class="container pt-15 pt-lg-40 pb-20 pb-lg-30">
      <div class="row justify-content-lg-end">
        <div class="col-12 col-lg-7 col-xl-8">
          <h2 class="fs-10 fs-md-12 fw-bold ls-100 ls-md-120 mb-10">最新消息</h2>
        </div>
      </div>
      <div class="row justify-content-center align-items-start">
        <div class="col-12 col-lg-5 col-xl-4">
          <router-link to="/news" class="mb-2"> <IconArrowBack /><span>返回</span> </router-link>
          <img
            class="mb-10 mb-lg-0"
            :src="getImageUrl(filterNewsData.imageName)"
            :alt="filterNewsData.idxNo"
          />
        </div>
        <div class="col-12 col-lg-7 col-xl-8">
          <div class="px-4 pt-6 pt-md-10 pb-3 pb-md-7 border-top border-bottom mb-6">
            <div class="mb-2">
              <IconEmergency class="me-4" style="width: 24px; height: 24px" /><span
                class="align-middle ls-40 fw-medium"
                >{{ filterNewsData.duration }}</span
              >
            </div>
            <p class="mb-3">{{ filterNewsData.title }}</p>
            <p v-html="filterNewsData.detailContent"></p>
          </div>
          <div class="d-flex justify-content-between">
            <router-link
              :to="prevNewsIndex >= 0 ? `/newsDetail/${prevNewsIndex + 1}` : '/newsDetail/1'"
              :disabled="prevPageDisabled"
            >
              <div class="flex-shrink-1 me-4">
                <IconArrowLineStart style="max-width: 155px; width: 100%" />
                <p :style="{ display: prevPageDisabled ? 'none' : 'block' }">
                  {{ newsDetailList[prevNewsIndex].title }}
                </p>
              </div>
            </router-link>
            <router-link :to="`/newsDetail/${nextNewsIndex + 1}`">
              <div class="flex-shrink-1 ms-4">
                <IconArrowLineEnd style="max-width: 155px; width: 100%" />
                <p :style="{ display: nextPageDisabled ? 'none' : 'block' }">
                  {{ newsDetailList[nextNewsIndex].title }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsItemType } from '@/type/home';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const newsDetailList = reactive<NewsItemType[]>([
  {
    idxNo: '1',
    duration: '2023.06.30',
    title: '產品升級公告',
    overview:
      '榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！',
    imageName: 'news_in.png',
    detailContent:
      '<p>親愛的客戶們：</p><p>我們榮幸地向您宣布，經過不懈的努力與研發，ALPHABOX+ 已成功完成最新一代的升級！這次的升級將為您帶來更高的投影解析度、更精準的語音辨識技術，以及更豐富的情感識別功能。我們致力於為您打造最佳的陪伴機器人，讓科技更貼近您的生活。</p><p>在這次升級中，我們提升了投影解析度，讓影像更加清晰細緻，呈現出更真實的視覺效果。您將能夠更加享受在家中觀看高清影片或欣賞美景的樂趣。同時，我們優化了語音辨識技術，使機器人能更迅速且準確地識別您的聲音指令，提高互動體驗。</p><p>此外，我們增加了情感識別功能，使得機器人能更好地理解您的情緒，並根據您的需求提供適當的陪伴與支持。無論您需要傾聽、建議還是安慰，ALPHABOX+ 都將成為您身邊的貼心夥伴。</p><p>為感謝您一直以來對我們的支持，我們將在本月舉辦限時優惠活動，凡購買升級版3D立體投影陪伴機器人的客戶，均可享有九折優惠。機會難得，千萬不要錯過喔！</p><p>在未來的日子裡，我們將繼續投入研發，並積極採納用戶意見，以不斷完善產品功能並提高使用體驗。同時，我們承諾會為您提供優質的售後服務，確保您在購買與使用過程中得到全面支持。</p><p>再次感謝您對我們的信任與支持，讓我們攜手共創更美好的未來！若您對升級版3D立體投影陪伴機器人有任何疑問或建議，請隨時與我們的客服團隊聯繫，我們將竭誠為您解答。</p><p>敬祝 興旺發達！</p><p>ALPHABOX+ 團隊敬上'
  },
  {
    idxNo: '2',
    duration: '2023.06.01',
    title: '限時優惠活動',
    overview:
      '為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！本月將舉辦一場限時優惠活動。購買 ALPHABOX+ 的顧客，皆可享受九折優惠。',
    imageName: 'thanks.png',
    detailContent:
      '<p>親愛的客戶們：</p><br/><p>我們非常榮幸地宣布，為了感謝您們的支持，我們即將舉辦一個令人振奮的「限時優惠活動」！這是一個您絕對不想錯過的機會，因為您將有機會獲得一系列驚人的優惠和禮品。</p><p>不要錯過這個難得的機會，以無與倫比的價格購買您喜愛的產品。我們期待在這次「限時優惠活動」中見到您，與您共享購物的樂趣和驚喜！</p><p>如果您有任何疑問或需要更多資訊，請隨時聯絡我們的客戶服務團隊。感謝您一直以來的支持，我們期待著在活動中為您提供最佳的購物體驗。</p><p>祝您購物愉快！</p>'
  },
  {
    idxNo: '3',
    duration: '2023.06.30',
    title: '參加科技展覽',
    overview:
      '本公司將參與今年的台灣國際科技展覽，屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！',
    imageName: 'exhibition.png',
    detailContent:
      '<p>親愛的客戶們：</p><br/><p>我們非常興奮地宣布，我們將參加今年的國際科技展覽，這將是一個匯聚全球創新科技的盛會。這是一個您絕對不想錯過的機會，因為我們將展示最前沿的科技產品和解決方案，並與您分享未來科技的無限可能性。</p><p>在我們的展位上，您可以期待以下精彩內容：</p><p><span class="fw-bold">創新科技展示：</span>我們將展示最新的科技產品，包括智能家居設備、虛擬現實體驗、機器人技術和更多。您將有機會親身體驗這些令人驚嘆的技術。</p><p><span class="fw-bold">專題演講：</span>我們將舉辦一系列專題演講，邀請業內專家分享他們對未來科技趨勢的見解。這是一個學習和啟發的絕佳機會。</p><p><span class="fw-bold">網絡交流：</span>與業界同行和科技愛好者建立有價值的聯繫。您可以參加我們的社交活動，拓展您的專業網絡。</p><p><span class="fw-bold">精彩禮品：</span>參觀我們的展位，您將有機會贏得一些令人興奮的禮品和折扣券。</p><p>請記住，這是一個公開展覽，我們歡迎所有人前來參觀。無論您是科技專家還是對科技感興趣的新手，我們都期待著在展覽上見到您，與您分享我們的熱情和創新。</p><p>如果您有任何疑問或需要更多資訊，請隨時聯絡我們的團隊。感謝您一直以來的支持，我們期待著在展覽中與您見面，一同探索未來的科技世界。</p><p>期待與您相會！</p><p>最誠摯的問候</p>'
  },
  {
    idxNo: '4',
    duration: '2023.06.30',
    title: '新功能上線',
    overview:
      '為使您的3D立體陪伴機器人更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。近期，我們新推出智慧家居控制功能。',
    imageName: 'update.png',
    detailContent:
      '<p>親愛的客戶們：</p><p>我們激動地宣布，我們的平台已經迎來一項嶄新的功能！這個功能將為您的使用體驗帶來更多樂趣、效率和便利。我們一直在不懈努力，以確保我們的平台保持在技術創新的前沿，為您提供最佳的服務。</p><p>我們深信，這個新功能將為您帶來更多價值，並提升您的使用體驗。我們一直在聆聽您的反饋，並不斷改進我們的產品以滿足您的需求。</p><p>如果您有任何問題、建議或意見，請不要猶豫，隨時與我們聯繫。我們的團隊隨時為您提供支持。</p><p>謝謝您一直以來的支持，我們期待您能在新功能中找到更多樂趣和價值。</p><p>期待與您一同體驗未來！</p>'
  },
  {
    idxNo: '5',
    duration: '2023.06.30',
    title: '用戶見面會',
    overview:
      '為進一步滿足客戶需求，並優化產品性能，我們將舉行用戶見面會。屆時，我們將向您展示我們的研發成果，同時聆聽您的意見和建議，讓我們共同打造更完美的產品！同時聆聽您的意見和建議！',
    imageName: 'interview.png',
    detailContent:
      '<p>親愛的尊貴用戶們</p><p>我們非常高興地宣布，我們將舉辦一次令人期待的「用戶見面會」，這將是一個特殊的場合，我們期待著與您見面，聆聽您的聲音，分享我們的最新進展，以及一同探討未來的計畫。</p><p>這次見面會是我們感謝您長期以來的支持和信任的一種方式。我們期待在見面會上見到您，與您共享這個特殊時刻。</p><p>如果您計劃參加，請回復此郵件或聯繫我們的客戶支持團隊，以確認您的參加人數，以及是否有特殊要求。我們會竭盡所能確保您在見面會上度過一個愉快和有意義的時間。</p><p>再次感謝您的支持，期待與您相會！</p><p>最誠摯的問候</p>'
  }
]);

const prevNewsIndex = computed<number>(() => {
  const newsId = parseInt(route.params.newsId.toString());
  const currentIdx = newsId - 1;

  if (currentIdx >= 1) {
    return currentIdx - 1;
  } else {
    return 0;
  }
});

const nextNewsIndex = computed<number>(() => {
  const newsId = parseInt(route.params.newsId.toString());
  const currentIdx = newsId - 1;
  if (currentIdx < lastNewsIndex.value) {
    return currentIdx + 1;
  } else {
    return lastNewsIndex.value;
  }
});

const lastNewsIndex = computed<number>(() => {
  return newsDetailList.length - 1;
});

const prevPageDisabled = computed<boolean>(() => {
  const newsId = parseInt(route.params.newsId.toString());
  const currentIdx = newsId - 1;

  if (currentIdx > 0) {
    return false;
  } else {
    return true;
  }
});

const nextPageDisabled = computed<boolean>(() => {
  const newsId = parseInt(route.params.newsId.toString());
  const currentIdx = newsId - 1;
  if (currentIdx < lastNewsIndex.value) {
    return false;
  } else {
    return true;
  }
});

const filterNewsData = computed<NewsItemType>(() => {
  const currentId: string = route.params.newsId.toString();
  const data = newsDetailList.filter(item => {
    return item.idxNo === currentId;
  });
  if (data) return data[0];
  return {
    idxNo: '',
    duration: '',
    title: '',
    overview: '',
    imageName: '',
    detailContent: ''
  };
});

const getImageUrl = (name: string) => {
  return new URL(`../assets/img/week8-ai/news/${name}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
:deep(.emergency) g path {
  fill: white;
}
.imageSize {
  width: 100%;
}
.fit-contain {
  object-fit: contain;
}
</style>
