<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div
      class="accordion-item border-bottom-white-dotted pt-8 pt-md-10"
      v-for="(data, idx) in dataList"
      :key="idx"
    >
      <h3 class="accordion-header" :id="`flush-heading${Number(idx) + 1}`">
        <a
          class="collapsed text-primary-800 fs-4 d-block"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#flush-collapse${Number(idx) + 1}`"
          aria-expanded="false"
          :aria-controls="`flush-collapse${Number(idx) + 1}`"
        >
          <div class="container gx-0">
            <div class="row d-flex justify-content-between align-items-center mb-4">
              <div class="col-9">
                <p class="mb-0">{{ data.question }}</p>
              </div>
              <div class="col-3 text-end text-md-start">
                <IconOpenBtn class="open" />
                <IconCloseBtn class="close" />
              </div>
            </div>
          </div>
        </a>
      </h3>

      <div
        :id="`flush-collapse${Number(idx) + 1}`"
        class="accordion-collapse collapse"
        :aria-labelledby="`flush-heading${Number(idx) + 1}`"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body pb-6 pb-md-10">
          {{ data.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FaqItemType } from '@/type/home';
import type { PropType } from 'vue';

defineProps({
  dataList: {
    type: Array as PropType<FaqItemType[]>
  }
});
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}

.border-bottom-white-dotted {
  border-bottom-style: dotted;
  border-bottom-color: #fff;
}
.collapsed {
  .open {
    display: block;
  }
  .close {
    display: none;
  }
}

.open {
  display: none;
}

.close {
  display: block;
}
</style>
