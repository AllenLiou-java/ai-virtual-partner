<template>
  <div class="bg-gradient-700 px-3 px-md-0">
    <div class="container pt-15 pt-md-40">
      <h2 class="fw-bold fs-10 fs-md-16 ls-100 ls-md-160 mb-10 mb-md-4">聯絡我們</h2>
      <div class="row pb-20 pb-md-40 justify-content-md-around">
        <div class="col-12 col-md-6">
          <p class="mb-8 mb-md-16">
            您的意見與需求對我們至關重要！如果您對 ALPHABOX+
            有任何疑問、建議或需求，請隨時填寫以下表單，我們將在 24
            小時內回覆您。您的寶貴意見將幫助我們不斷改進產品與服務，為您帶來更優質的體驗。
          </p>
          <p class="mb-8 mb-md-16">
            我們期待您的來信與來電，竭誠為您解答。讓我們攜手共創更美好的未來！
          </p>
          <form @submit="submitHandler" class="d-flex flex-column mb-15 mb-md-0">
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control fs-4 fs-md-5"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label class="text-primary-800 fw-bold fs-4 fs-md-5" for="floatingInput">姓名</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control fs-4 fs-md-5"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label class="text-primary-800 fw-bold fs-4 fs-md-5" for="floatingInput">EMAIL</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="tel"
                class="form-control fs-4 fs-md-5"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label class="text-primary-800 fw-bold fs-4 fs-md-5" for="floatingInput"
                >聯絡電話</label
              >
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
            <button class="btn btn-primary-400 btn-size">
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
        <div class="col-12 col-md-3">
          <ul>
            <li class="mb-10">
              <label style="opacity: 0.5">客服時間</label>
              <p>週一至週五 09:00-18:00</p>
            </li>
            <li class="mb-10">
              <label style="opacity: 0.5">聯絡地址</label>
              <p>高雄市新興區民生一路 56 號</p>
            </li>
            <li>
              <label style="opacity: 0.5">聯絡方式</label>
              <a class="d-block" href="tel: +886-2-12345678">+886-2-12345678</a>
              <a class="d-block" href="mailto:customer@alphabox.com"
                >mailto:customer@alphabox.com</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5"></div>
      </div>
    </div>
    <div class="border-top">
      <div class="container gx-0">
        <div class="row justify-content-end">
          <ul
            class="col-12 col-md-5 d-flex flex-column flex-md-row justify-content-between pt-8 pb-8 pb-md-10"
          >
            <li><a class="py-2" href="#">INSTAGRAM</a></li>
            <li><a class="py-2" href="#">FACEBOOK</a></li>
            <li><a class="py-2" href="#">TWITTER</a></li>
            <li><a class="py-2" href="#">LINKEDIN</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white pt-15 pt-md-40 pb-0 pb-md-30 text-dark">
    <div class="container">
      <h3 class="fw-blod fs-10 fs-md-16 ls-100 ls-md-160" style="font-weight: 900">
        選擇自己要的角色
      </h3>
      <p class="fs-6 fs-md-12 mb-6 mb-md-20" style="font-weight: 900">
        <span class="fw-blod text-primary-400 me-2 me-md-6">20K+</span>使用者喜歡我們的服務
      </p>
    </div>
    <ul>
      <li class="position-relative">
        <img
          class="position-absolute d-none d-md-block object-fit-cover"
          src="@/assets/img/week8-ai/horizontal/diane_horizontal.png"
          alt="diane"
          style="max-width: 1388px; width: 100%; height: 100%"
        />
        <img
          class="position-absolute d-md-none object-fit-cover"
          src="@/assets/img/week8-ai/mobile/diane_choose.png"
          alt="diane"
          style="max-width: 768px; width: 100%; height: 100%"
        />
        <p class="container position-relative text-white fs-10 fs-md-16 font-Shrikhand mb-0 py-17">
          Diane
        </p>
      </li>
      <li class="position-relative">
        <img
          src="@/assets/img/week8-ai/horizontal/felix_horizontal.png"
          class="position-absolute end-0"
          alt="felix"
          style="height: 100%"
        />
        <img
          class="position-absolute d-md-none object-fit-cover"
          src="@/assets/img/week8-ai/mobile/felix_choose.png"
          alt="felix"
          style="max-width: 768px; width: 100%; height: 100%"
        />
        <p
          class="container position-relative text-white fs-10 fs-md-16 font-Shrikhand mb-0 py-17 z-3 text-end"
        >
          Felix
        </p>
      </li>
      <li class="position-relative">
        <img
          class="position-absolute"
          src="@/assets/img/week8-ai/horizontal/karina_horizontal.png"
          alt="karina"
          style="max-width: 1388px; width: 100%; height: 100%"
        />
        <img
          class="position-absolute d-md-none object-fit-cover"
          src="@/assets/img/week8-ai/mobile/karina_choose.png"
          alt="karina"
          style="max-width: 768px; width: 100%; height: 100%"
        />
        <p class="container position-relative text-white fs-10 fs-md-16 font-Shrikhand mb-0 py-17">
          Karina
        </p>
      </li>
      <li class="position-relative">
        <img
          src="@/assets/img/week8-ai/horizontal/vito_horizontal.png"
          class="position-absolute end-0"
          alt="vito"
          style="height: 100%"
        />
        <img
          class="position-absolute d-md-none object-fit-cover"
          src="@/assets/img/week8-ai/mobile/vito_choose.png"
          alt="vito"
          style="max-width: 768px; width: 100%; height: 100%"
        />
        <p
          class="container position-relative text-white fs-10 fs-md-16 font-Shrikhand mb-0 py-17 z-3 text-end"
        >
          Vito
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const submitHandler = (e: Event) => {
  e.preventDefault();
  console.log(e);
  console.log('submitHandler');
};
</script>

<style lang="scss" scoped>
.object-fit-cover {
  object-fit: cover;
}
</style>
