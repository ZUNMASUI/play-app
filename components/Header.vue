<template>
  <div class="header">
    <div class="logo-text">
      Film Camera Review
      <span class="sub-title">〜フィルムカメラの比較サイト〜</span>
    </div>
    <div>
      <nuxt-link class="menu" to="/shop/"> カメラ </nuxt-link>
      <nuxt-link class="menu" to="/shop/entry"> 登録 </nuxt-link>
    </div>
  </div>
</template>
 
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}
.logo-text{
  font-family: 'Brush Script MT', cursive;
  font-size: 50px;
  padding: 12px 24px;
 }
.sub-title {
  font-size: 18px;
  margin-left: 8px;
}
 
@media screen and (max-width: 767px) {
  .logo-text {
    font-size: 30px;
  }
 
  .sub-title {
    display: none;
  }
}
 
.menu {
  padding: 12px 24px;
  display: inline-block;
}
</style>